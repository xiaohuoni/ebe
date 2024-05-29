import _ from 'lodash';
import type { ITimelineCallBack } from 'rc-tween-one';
import { Ref, useImperativeHandle, useMemo, useRef, useState } from 'react';

export interface AnimationOpts {
  effect: string;
  animation: any[];
  repeat: number | 'custom';
  reverse: boolean;
  ease: string;
  autoPlay: boolean;
  repeatCustom: number;
  left?: string | 'custom';
  top?: string | 'custom';
  xCustom?: number;
  yCustom?: number;
  opacity?: number;
  scale?: number;
  rotate?: number;
  onChange: (v: ITimelineCallBack) => void;
  onStart: (v: any) => void;
  onEnd: (v: ITimelineCallBack) => void;
  duration: number;
  yoyo: boolean;
  repeatDelay: number;
}

const removeNullOrUndefined = (obj: Record<string, any>) => {
  if (!obj) {
    return obj;
  }
  Object.keys(obj).forEach((key) => {
    if (_.isNull(obj[key]) || _.isUndefined(obj[key])) {
      delete obj[key];
    }
  });
  return obj;
};

export const useAnimation = (
  opts: AnimationOpts,
  ref: Ref<unknown> | undefined,
) => {
  const {
    effect,
    repeatCustom,
    reverse,
    ease,
    autoPlay,
    opacity,
    scale,
    yoyo,
    rotate,
    duration,
    repeatDelay = 0,
    xCustom: leftCustom,
    yCustom: topCustom,
  } = opts;

  const [paused, setPaused] = useState(!autoPlay);
  const [moment, setMoment] = useState<number>(null as any);
  const needRestartRef = useRef(false); // 是否需要重新播放

  /**
   * 特殊处理onStart函数
   * @param v
   */
  const onStart = () => {
    if (opts.onStart) {
      opts.onStart({
        mode: 'onTimelineStart',
        moment,
        repeat,
      });
    }
  };

  /**
   * 播放动画
   */
  const playAnimation = () => {
    onStart();
    setMoment(needRestartRef.current ? 0 : (null as any));
    setPaused(false);
    needRestartRef.current = false;
  };

  /**
   * 暂停动画
   */
  const pasueAnimation = () => {
    setMoment(null as any);
    setPaused(true);
  };

  /**
   * 切换动画播放
   */
  const toggleAnimation = () => {
    if (paused) {
      playAnimation();
    } else {
      pasueAnimation();
    }
  };

  const onEnd = (v: ITimelineCallBack) => {
    if (opts.onEnd) {
      opts.onEnd(v);
    }
    needRestartRef.current = true;
    setMoment(null as any);
    setPaused(true);
  };

  const onChangeTimeline = (v: ITimelineCallBack) => {
    const { mode } = v;
    switch (mode) {
      case 'onTimelineStart':
        if (autoPlay) {
          onStart();
        }
        break;
      case 'onTimelineComplete':
        onEnd(v);
        break;
      case 'onTimelineUpdate':
        opts.onChange && opts.onChange(v);
        break;
      default:
        break;
    }
  };

  const toggelAudioStatus = (type: string) => {
    switch (type) {
      case 'play':
        playAnimation();
        break;
      case 'pasue':
        pasueAnimation();
        break;
      case 'toggle':
        toggleAnimation();
        break;
      default:
        break;
    }
  };

  useImperativeHandle(ref, () => ({
    onOperationAudio: (status: string) => {
      toggelAudioStatus(status);
    },
  }));

  const repeat = useMemo(() => {
    let rep = opts.repeat;
    if (opts.repeat === 'custom') {
      rep = repeatCustom * 2;
      // 理论上当重复次数大于0时 动画执行一个来回才算是一个执行周期。
      if (repeatCustom > 0) {
        rep = (repeatCustom - 1) * 2;
      }
      // 不允许倒放时，只需要配置重复次数即可
      if (!yoyo && repeatCustom > 0) {
        rep = repeatCustom - 1;
      }
    }
    return rep;
  }, [opts.repeat]);

  const IAnimation = useMemo(() => {
    const animation = opts.animation || [];
    return animation?.map((item) => ({
      ...item,
      ...item.style,
    }));
  }, [opts.animation]);

  if (effect === 'custom') {
    return {
      animation: IAnimation,
      paused,
      moment,
      onChangeTimeline,
    };
  }

  const { x, y } = useMemo(() => {
    const { left: optsX, top: optsY } = opts;
    let newX: number | string | undefined = optsX;
    let newY: number | string | undefined = optsY;
    if (optsX === 'custom') {
      newX = leftCustom;
    }

    if (optsY === 'custom') {
      newY = topCustom;
    }

    return {
      x: newX,
      y: newY,
    };
  }, [opts.left, opts.top, leftCustom, topCustom]);

  const getMoveAni = () => {
    const ani: any = {
      left: x,
      top: y,
    };
    // 这里选择位置时，保持组件的中心移动到指定位置
    if (opts.left !== 'custom') {
      if (['100%'].includes(`${x || ''}`)) {
        ani.x = '-100%';
      }
    }
    if (opts.top !== 'custom') {
      if (['100%'].includes(`${y || ''}`)) {
        ani.y = '-100%';
      }
    }

    return ani;
  };

  const animation = useMemo(() => {
    let ani = {};
    switch (effect) {
      case 'move':
        ani = getMoveAni();
        break;
      case 'opacity':
        ani = {
          opacity,
        };
        break;
      case 'scale':
        ani = {
          scale,
        };
        break;
      case 'rotate':
        ani = {
          rotate,
        };
        break;
      default:
        break;
    }

    return {
      ...ani,
      ease,
      reverse,
      duration,
    };
  }, [effect, x, y, opacity, scale, rotate, duration, ease, reverse]);

  return {
    yoyo,
    repeat,
    paused,
    moment,
    animation: removeNullOrUndefined(animation),
    repeatDelay,
    onChangeTimeline,
  };
};

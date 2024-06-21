import React, {
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
// @ts-ignore
import { LingXiFC } from '@lingxiteam/types';
import { PlayButton, Progress, Timer } from 'react-soundplayer/components';
// it's just an alias for `withSoundCloudAudio` but makes code clearer
// @ts-ignore
import { withCustomAudio } from 'react-soundplayer/addons';
import useStyle from '../View/useStyle';

import { $$componentItem } from '../interfaces/types';
import './index.less';

export interface ForwardRefProps {
  toggelAudioStatus: (type: string) => void;
  audio: any;
}

export interface MyAudioProps {
  audioTitle?: string;
  autoPlay?: string;
  preloadType?: string;
  streamUrl?: string;
  streamType?: string;
  fileCode?: string;
  style?: React.CSSProperties;
  backgroundType?: any;
  visible?: any;
  hideType?: string;
  $$componentItem?: $$componentItem;
  forwardRef: React.MutableRefObject<ForwardRefProps | undefined>;
  componentDidLoad(): void;
}

const prefixCls = 'lcdp-audio';

function getAbsoluteUrl(path?: string) {
  if (path) {
    if (path.startsWith('http:') || path.startsWith('https:')) {
      return path;
    }
    if (path.startsWith('/')) {
      return window.location.origin + path;
    }
  }
  return path;
}

// 预留扩展
// PlayButton, VolumeControl 等可支持换皮肤
const CustomAudio = withCustomAudio((props: any) => {
  const { audioTitle, soundCloudAudio, autoPlay } = props;

  // preloadType = "none" // auto | metadata | none

  const { audio } = soundCloudAudio || {};
  if (autoPlay && audio && !audio.autoPlay) {
    audio.autoplay = true;
  }
  if (audio && !audio.crossOrigin) {
    audio.crossOrigin = 'anonymous';
  }
  return (
    <div className={prefixCls}>
      <div className="audioTitle">{audioTitle}</div>
      <div className="audioContent">
        <PlayButton {...props} />
        <Progress className="progress" {...props} />
        <Timer className="audioTimer" {...props} />
      </div>
    </div>
  );
});

const Audio: LingXiFC<MyAudioProps> = (props) => {
  // eslint-disable-next-line max-len
  const {
    audioTitle,
    autoPlay,
    preloadType,
    streamUrl,
    streamType,
    fileCode,
    visible,
    hideType,
    style,
    backgroundType,
    getEngineApis,
    forwardRef,
    componentDidLoad,
  } = props;
  const { getAppFileUrlByFileCode } = getEngineApis();
  const [audioUrl, setAudioUrl] = useState<any>('');
  const [imgSrc, setImgSrc] = useState();
  const sRef = useRef<any>();
  useEffect(() => {
    if (streamType === 'fileCode') {
      // 选择的文件资源
      if (fileCode) {
        try {
          const url = getAppFileUrlByFileCode(fileCode);
          setAudioUrl(url);
        } catch (e) {
          console.error(`音频文件获取出错:${e}`);
        }
      } else {
        setAudioUrl('');
      }
    } else if (streamUrl) {
      setAudioUrl(getAbsoluteUrl(streamUrl)); // 外部资源
    }
  }, [streamType, fileCode, streamUrl]);

  useEffect(() => {
    const code = backgroundType?.image;
    if (code) {
      // @ts-ignore
      setImgSrc(getAppFileUrlByFileCode(code));
    }
  }, [backgroundType]);
  const viewRef = useRef<HTMLDivElement>();
  const restStyle = useStyle(
    {
      ...props,
      src: imgSrc,
      backgroundType,
    },
    viewRef,
  );
  const onMediaPlay = () => {
    if (!visible && hideType === 'remove') {
      console.info('音频节点被移除,无法播放');
    } else if (sRef && sRef?.current) {
      const targetAudio = (sRef?.current as any)?.soundCloudAudio?.audio;
      if (targetAudio?.play) {
        targetAudio?.play();
      }
    }
  };
  const onMediaPause = () => {
    if (!visible && hideType === 'remove') {
      console.info('音频节点被移除,无法暂停');
    } else if (sRef && sRef?.current) {
      const targetAudio = (sRef?.current as any)?.soundCloudAudio?.audio;
      if (targetAudio?.pause) {
        targetAudio?.pause();
      }
    }
  };
  const onMediaToggle = () => {
    if (!visible && hideType === 'remove') {
      console.info('音频节点被移除,无法切换');
    } else if (sRef && sRef?.current) {
      const targetAudio = (sRef?.current as any)?.soundCloudAudio?.audio;
      const paused = targetAudio?.paused;
      if (targetAudio) {
        if (!paused && targetAudio?.pause) {
          targetAudio?.pause();
        } else if (paused && targetAudio?.play) {
          targetAudio?.play();
        }
      }
    }
  };
  const toggelAudioStatus = (type: string) => {
    switch (type) {
      case 'play':
        onMediaPlay();
        break;
      case 'pasue':
        onMediaPause();
        break;
      case 'toggle':
        onMediaToggle();
        break;
      default:
        break;
    }
  };

  useImperativeHandle(forwardRef, () => {
    return {
      toggelAudioStatus,
      audio: sRef.current,
    };
  });

  useEffect(() => {
    componentDidLoad();
  }, []);

  if (!visible && hideType === 'remove') {
    return null;
  }
  const audioDisplay = useMemo(() => {
    if (visible) {
      return 'block';
    }
    return 'none';
  }, [visible, hideType]);
  return (
    <div style={{ ...style, ...restStyle, display: audioDisplay }}>
      <CustomAudio
        audioTitle={audioTitle}
        autoPlay={autoPlay}
        preloadType={preloadType}
        streamUrl={audioUrl}
        ref={sRef}
      />
    </div>
  );
};

export default Audio;

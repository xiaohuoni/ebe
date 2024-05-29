import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  PlayButton,
  Progress,
  Timer,
  VolumeControl,
} from 'react-soundplayer/components';
// it's just an alias for `withSoundCloudAudio` but makes code clearer
import { withCustomAudio } from 'react-soundplayer/addons';
import { useLocale } from '../utils/hooks/useLocale';
import useBackgroundStyle from '../View/useBackgroundStyle';

export interface MyAudioProps {
  audioTitle?: string;
  autoPlay?: string;
  preloadType?: string;
  streamUrl?: string;
  streamType?: string;
  fileCode?: string;
  hideType?: string;
  visible?: boolean;
  play?: any;
  pause?: any;
  style?: React.CSSProperties;
  backgroundType?: any;
  appId?: string;
  getEngineApis?: any;
}

// const prefixCls = 'audio';

const AudioClsWrapper = 'AWSSoundPlayer';

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
  const {
    audioTitle,
    soundCloudAudio,
    autoPlay,
    hideType,
    visible,
    style,
    backgroundType,
    appId,
    engineApis,
  } = props;

  // preloadType = "none" // auto | metadata | none
  const otherProps = useMemo(() => {
    return { ...props, style: null };
  }, [props]);
  const { audio } = soundCloudAudio || {};
  const { backgroundStyle } = useBackgroundStyle({
    engineApis,
    backgroundType,
    appId,
    mode: 'engine',
  });
  if (autoPlay && audio && !audio.autoPlay) {
    audio.autoplay = true;
  }
  if (audio && !audio.crossOrigin) {
    audio.crossOrigin = 'anonymous';
  }
  if (!visible) {
    if (hideType === 'hidden') {
      return (
        <div
          className={AudioClsWrapper}
          style={{ ...style, ...backgroundStyle, display: 'none' }}
        >
          <div className={`${AudioClsWrapper}-audioTitle`}>{audioTitle}</div>
          <div className={`${AudioClsWrapper}-audioContent`}>
            <PlayButton {...otherProps} />
            <Timer
              className={`${AudioClsWrapper}-audioTimer`}
              {...otherProps}
            />
            <Progress
              className={`${AudioClsWrapper}-progress`}
              {...otherProps}
            />
            <VolumeControl {...otherProps} />
          </div>
        </div>
      );
    }
    return null;
  }
  return (
    <div className={AudioClsWrapper} style={{ ...style, ...backgroundStyle }}>
      <div className={`${AudioClsWrapper}-audioTitle`}>{audioTitle}</div>
      <div className={`${AudioClsWrapper}-audioContent`}>
        <PlayButton {...otherProps} />
        <Timer className={`${AudioClsWrapper}-audioTimer`} {...otherProps} />
        <Progress className={`${AudioClsWrapper}-progress`} {...otherProps} />
        <VolumeControl {...otherProps} />
      </div>
    </div>
  );
});

const Audio: React.FC<MyAudioProps> = forwardRef((props, ref) => {
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
    appId,
    getEngineApis,
  } = props;

  const engineApis = getEngineApis?.() || {};
  const { getLocale } = useLocale(engineApis);

  const [audioUrl, setAudioUrl] = useState<any>('');
  const sRef = useRef();

  useEffect(() => {
    if (streamType === 'fileCode') {
      // 选择的文件资源
      if (fileCode) {
        try {
          (async () => {
            const url = await engineApis?.service?.getAppFileUrlByFileCode(
              fileCode,
            );
            setAudioUrl(url);
          })();
        } catch (e) {
          console.error(`${getLocale?.('Audio.warning')}:${e}`);
        }
      } else {
        setAudioUrl('');
      }
    } else if (streamUrl) {
      setAudioUrl(getAbsoluteUrl(streamUrl)); // 外部资源
    }
  }, [streamType, fileCode, streamUrl]);

  const onMediaPlay = () => {
    if (!visible && hideType === 'remove') {
      console.info(getLocale?.('Audio.cannotPlay'));
    } else if (sRef && sRef?.current) {
      const targetAudio = (sRef?.current as any)?.soundCloudAudio?.audio;
      if (targetAudio?.play) {
        targetAudio?.play();
      }
    }
  };
  const onMediaPause = () => {
    if (!visible && hideType === 'remove') {
      console.info(getLocale?.('Audio.cannotStop'));
    } else if (sRef && sRef?.current) {
      const targetAudio = (sRef?.current as any)?.soundCloudAudio?.audio;
      if (targetAudio?.pause) {
        targetAudio?.pause();
      }
    }
  };
  const onMediaToggle = () => {
    if (!visible && hideType === 'remove') {
      console.info(getLocale?.('Audio.cannotSwitch'));
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
  useImperativeHandle(ref, () => ({
    onOperationAudio: (status: string) => {
      toggelAudioStatus(status);
    },
  }));
  return (
    <CustomAudio
      audioTitle={audioTitle}
      autoPlay={autoPlay}
      preloadType={preloadType}
      streamUrl={audioUrl}
      visible={visible}
      hideType={hideType}
      ref={sRef}
      style={style}
      backgroundType={backgroundType}
      appId={appId}
      engineApis={engineApis}
    />
  );
});

export default Audio;

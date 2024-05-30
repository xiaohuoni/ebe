import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { ReactPlayerProps } from 'react-player';
import ReactPlayer from 'react-player';

const VideoPlayer: React.FC<ReactPlayerProps> = (props, ref) => {
  const {
    style,
    volume = 100,
    fileCode,
    playing,
    url,
    streamType,
    videoCode,
    playbackRate,
    speed,
    getEngineApis,
    onReady,
    onStart,
    onPlay,
    onPause,
    onProgress,
    onError,
    onDuration,
    ...restProps
  } = props;

  const engineApis = getEngineApis?.() || {};

  const { width, height, ...restStyle } = style || {};
  const [videoHeight, setVideoHeight] = useState<any>();
  const [light, setLight] = useState<any>(false);
  const videoRef = useRef<any>();
  const [curPlaying, setCurPlaying] = useState(playing);
  const [videoUrl, setVideoUrl] = useState<any>('');
  const totalTime = useRef<number>();
  const rate = useMemo(() => {
    if (
      speed &&
      typeof playbackRate === 'number' &&
      playbackRate &&
      playbackRate > 0
    ) {
      return playbackRate;
    }
    return 1;
  }, [playbackRate, speed]);

  useEffect(() => {
    setCurPlaying(playing);
  }, [playing]);

  /**
   * 音量的值为0-1
   */
  const myVolume = useMemo(() => {
    if (!isNaN(volume)) {
      return volume / 100;
    }
    return 1;
  }, [volume]);
  useEffect(() => {
    if (!height && videoRef?.current?.offsetWidth) {
      // UI要求默认按照16:9设置高度
      const targetHeigth = (videoRef?.current?.offsetWidth / 16) * 9;
      setVideoHeight(targetHeigth);
    } else {
      setVideoHeight(height);
    }
  }, [height]);

  /**
   * 封面图片
   */
  useEffect(() => {
    if (fileCode) {
      try {
        (async () => {
          setLight(
            await engineApis?.service?.getAppFileUrlByFileCode(fileCode),
          );
        })();
      } catch (e) {
        console.log(`获取视频封面出错:${e}`);
      }
    } else {
      setLight(false);
    }
  }, [fileCode]);

  useEffect(() => {
    if (streamType === 'fileCode') {
      if (videoCode) {
        try {
          (async () => {
            setVideoUrl(
              await engineApis?.service?.getAppFileUrlByFileCode(videoCode),
            );
          })();
        } catch (e) {
          console.log(`获取视频资源出错:${e}`);
        }
      } else {
        setVideoUrl('');
      }
    } else {
      setVideoUrl(url);
    }
  }, [streamType, videoCode, url]);
  return (
    <div
      ref={videoRef}
      style={{
        width: '100%',
        height: videoHeight,
        borderRadius: style?.borderRadius || '0px',
      }}
    >
      <ReactPlayer
        width={width || '100%'}
        height={videoHeight || '100%'}
        style={restStyle}
        volume={myVolume}
        light={light}
        playing={curPlaying}
        playbackRate={rate}
        onClickPreview={() => {
          setCurPlaying(true); // 点击封面的图标加载完成需要自动播放
        }}
        onEnded={() => {
          if (!playing) {
            // 当前没有设置自动播放则需要在播放完成时将自动播放的时改为用户设置的值
            setCurPlaying(false);
          }
          if (props?.onEnded) {
            // 播放结束，回掉总时长
            // @ts-ignore
            props?.onEnded(totalTime.current);
          }
        }}
        url={videoUrl}
        onReady={onReady}
        onStart={onStart}
        onPlay={onPlay}
        onPause={onPause}
        onProgress={onProgress}
        onError={onError}
        onDuration={(total: number) => {
          totalTime.current = total;
          onDuration && onDuration(total);
        }}
        {...restProps}
      />
    </div>
  );
};

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;

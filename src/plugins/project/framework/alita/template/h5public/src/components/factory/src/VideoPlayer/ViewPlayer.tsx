import { LingxiForwardRef } from '@lingxiteam/types';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { ReactPlayerProps } from 'react-player';
import ReactPlayer from 'react-player';

const VideoPlayer = LingxiForwardRef<any, ReactPlayerProps>((props, ref) => {
  const {
    style,
    visible = true,
    volume = 100,
    fileCode,
    url,
    streamType,
    videoCode,
    playing,
    playbackRate,
    speed,
    getEngineApis,
    controls,
    muted,
    loop,
    onReady,
    onStart,
    onPlay,
    onProgress,
    onPause,
    onError,
    onEnded,
    onDuration,
  } = props;
  const { getAppFileUrlByFileCode } = getEngineApis();
  const { width, height, ...restStyle } = style || {};
  const [light, setLight] = useState<any>(false);
  const [videoHeight, setVideoHeight] = useState<any>();
  const [videoUrl, setVideoUrl] = useState<any>('');
  const videoRef = useRef<any>();
  const [curPlaying, setCurPlaying] = useState(playing);
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
  useEffect(() => {
    if (streamType === 'fileCode') {
      if (videoCode) {
        try {
          setVideoUrl(getAppFileUrlByFileCode(videoCode));
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

  /**
   * 封面图片
   */
  useEffect(() => {
    if (fileCode) {
      setLight(getAppFileUrlByFileCode(fileCode));
    } else {
      setLight(false);
    }
  }, [fileCode]);

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

  if (!visible) {
    return <></>;
  }
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
        height={videoHeight || '360px'}
        style={restStyle}
        volume={myVolume}
        light={light}
        playing={curPlaying}
        // 播放准备回掉总时长
        // @ts-ignore
        onReady={onReady}
        onStart={onStart}
        onPlay={onPlay}
        onPause={onPause}
        onDuration={(total: number) => {
          totalTime.current = total;
          onDuration && onDuration(total);
        }}
        onProgress={onProgress}
        onError={onError}
        onClickPreview={() => {
          setCurPlaying(true); // 点击封面的图标加载完成需要自动播放
        }}
        onEnded={() => {
          if (!playing) {
            // 当前没有设置自动播放则需要在播放完成时将自动播放的时改为用户设置的值
            setCurPlaying(false);
          }
          if (onEnded) {
            // 播放结束，回掉总时长
            // @ts-ignore
            onEnded(totalTime.current);
          }
        }}
        url={videoUrl}
        playbackRate={rate}
        controls={controls}
        muted={muted}
        loop={loop}
      />
    </div>
  );
});

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;

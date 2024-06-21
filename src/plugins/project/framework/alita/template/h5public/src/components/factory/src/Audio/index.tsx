import { LingxiForwardRef } from '@lingxiteam/types';
import { useImperativeHandle, useRef } from 'react';
import type { ForwardRefProps, MyAudioProps } from './Audio';
import AudioLoader from './loader';

const Audio = LingxiForwardRef<unknown, Omit<MyAudioProps, 'forwardRef'>>(
  (props, ref) => {
    const sequenceRef = useRef<{ methodName: string; args: any[] }[]>([]);
    const audioRef = useRef<ForwardRefProps>();

    // 解决页面加载完成时，无法调用内部方法
    const runSeq = () => {
      sequenceRef.current.forEach((seq) => {
        const { methodName, args } = seq;
        try {
          // @ts-ignore
          audioRef.current?.[methodName](...args);
        } catch (error) {
          console.log(error);
        }
      });

      sequenceRef.current = [];
    };

    // 缓存节点
    useImperativeHandle(ref, () => ({
      onOperationAudio(s: 'toggle' | 'play' | 'pasue') {
        if (!audioRef.current?.audio) {
          sequenceRef.current.push({
            methodName: 'toggelAudioStatus',
            args: [s],
          });
        } else {
          audioRef.current.toggelAudioStatus(s);
        }
      },
    }));
    return (
      <AudioLoader {...props} forwardRef={audioRef} componentDidLoad={runSeq} />
    );
  },
);

export default Audio;

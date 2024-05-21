import { useState, useRef, useEffect, useMemo } from 'react';

export type MoveDirection = 'prev' | 'bottom'

interface MovableProps {
  targetRef?:any;
  splitterRef?:any;
  direction?:MoveDirection;
  movableLayoutRef?:any;
  nextRef?:any;
  type?:string,
  min?: number | string; // 最小宽度
  max?: number | string; // 最大宽度
  clickWidth?: number | string; // 点击展开宽度，默认为最大宽度
}

const useMovable = (props: MovableProps) => {
  const {
    targetRef,
    splitterRef,
    direction = 'prev',
    nextRef,
    type,
    min = 0,
    max = 0,
    clickWidth,
    movableLayoutRef,
  } = props;
  const [mouseData, setMouseData] = useState<any>({});
  const [mouseDownPosition, setMouseDownPosition] = useState<any>({});
  const [width, setWidth] = useState<any>(min);
  const prevLength = useRef<number>();
  const [moving, setMoving] = useState<boolean>(false);

  const getPrevSize = (size: any, baseSize?: any) => {
    let preSize = min;
    const temp: any = `${size}`.substring(0, size.length - 1);
    if (typeof size === 'string' && size.charAt(size.length - 1) === '%' && !!(temp * 1)) {
      // 百分比
      preSize = (baseSize * temp) / 100;
    } else if ((typeof size === 'string' && !!((size as any) * 1)) || typeof size === 'number') {
      // 数字字符串 或 纯数字
      preSize = (size as any) * 1;
    }

    return preSize;
  };
  const hideRef = () => {
    if (!targetRef?.current || !splitterRef?.current) return;
    if (type === 'horizontal') {
      // 水平布局
      prevLength.current = targetRef.current.style.width;
      targetRef.current.style.width = '0px';
      splitterRef.current.style[direction === 'prev' ? 'left' : 'right'] = '0px';
    } else if (type === 'vertical') {
      // 垂直布局
      prevLength.current = targetRef.current.style.height;
      targetRef.current.style.height = '0px';
      splitterRef.current.style[direction === 'prev' ? 'top' : 'bottom'] = '0px';
    }
  };

  const resetRef = (newPrevNum: string) => {
    if (!targetRef?.current || !splitterRef?.current) return;
    const prevNum = prevLength.current;
    if (type === 'horizontal') {
      // 水平布局
      targetRef.current.style.width = newPrevNum || prevNum;
      splitterRef.current.style[direction === 'prev' ? 'left' : 'right'] = newPrevNum || prevNum;
    } else if (type === 'vertical') {
      // 垂直布局
      targetRef.current.style.height = newPrevNum || prevNum;
      splitterRef.current.style[direction === 'prev' ? 'top' : 'bottom'] = newPrevNum || prevNum;
    }
  };

  const resetData = () => {
    setMouseData({});
  };

  const resetWidth = (kind: any) => {
    if (!targetRef?.current || !splitterRef?.current) return;
    const target = targetRef.current; // 获取调整对象
    const splitter = splitterRef.current; // 获取分割线
    if (kind === 'splitterClicked' && ((clickWidth && target.style.width >= `${clickWidth}px`) || target.style.width === `${max}px`)) {
      target.style.width = `${min}px`;
      splitter.style[direction === 'prev' ? 'left' : 'right'] = `${min}px`;
      setWidth(min);
      return;
    }
    target.style.width = `${clickWidth ?? max}px`;
    splitter.style[direction === 'prev' ? 'left' : 'right'] = `${clickWidth ?? max}px`;
    setWidth(clickWidth ?? max);
  };

  const onClickSplitter = (e: any) => {
    if (mouseDownPosition.clientX === e.clientX && mouseDownPosition.clientY === e.clientY) {
      resetWidth('splitterClicked');
    }
  };

  useEffect(() => {
    const onMouseUp = (e: any) => {
      setMoving(false);
      resetData();
    };
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      document.body.onmousemove = null;
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  const onMouseDown = (e: { clientX: any; clientY: any }) => {
    const { clientX, clientY } = e;
    setMoving(true);
    const target = type === 'vertical' ? nextRef.current : targetRef.current; // 获取初始数据需要参考的对象
    setMouseData({
      ...mouseData,
      coordinate: type === 'vertical' ? target.offsetHeight : target.offsetWidth, // 记录初始宽或初始高
      clientX, // 记录鼠标初始x坐标
      clientY, // 记录鼠标初始y坐标
    });
    setMouseDownPosition({
      clientX, // 记录鼠标初始x坐标
      clientY, // 记录鼠标初始y坐标
    });
  };

  // 当鼠标坐标改变时，需要实时刷新dom尺寸
  useEffect(() => {
    const onMouseMove = (e: { stopPropagation?: any; clientX?: any; clientY?: any }) => {
      e.stopPropagation();
      if (!targetRef?.current || !splitterRef?.current || !movableLayoutRef?.current) return;
      const { clientX, clientY } = e;
      const target = targetRef.current; // 获取调整对象
      const splitter = splitterRef.current; // 获取分割线
      const baseSize =
        movableLayoutRef.current[type === 'vertical' ? 'clientHeight' : 'clientWidth'];
      const pprevMin = getPrevSize(min, baseSize);
      const pprevMax = getPrevSize(max, baseSize);

      if (type === 'horizontal') {
        // 水平布局
        const x = direction === 'prev' ?
          mouseData.coordinate + clientX - mouseData.clientX :
          mouseData.coordinate + (mouseData.clientX - clientX);
        if (x < pprevMin || x > pprevMax) {
          return;
        }
        target.style.transition = 'node';
        splitter.style.transition = 'node';
        target.style.width = `${x}px`;
        splitter.style[direction === 'prev' ? 'left' : 'right'] = `${x}px`;
        setWidth(x);
      } else if (type === 'vertical') {
        // 垂直布局
        const y = direction === 'prev' ?
          mouseData.coordinate + clientY - mouseData.clientY :
          mouseData.coordinate + (mouseData.clientY - clientY);
        if (y < pprevMin || y > pprevMax) {
          return;
        }
        target.style.transition = 'node';
        splitter.style.transition = 'node';
        target.style.height = `${y}px`;
        splitter.style[direction === 'prev' ? 'top' : 'bottom'] = `${y}px`;
      }
    };
    if (mouseData.coordinate) {
      document.body.addEventListener('mousemove', onMouseMove);
    } else {
      document.body.removeEventListener('mousemove', onMouseMove);
    }
    return () => {
      document.body.removeEventListener('mousemove', onMouseMove);
    };
  }, [JSON.stringify(mouseData)]);

  const size = useMemo(() => getPrevSize(min), [min]);

  return {
    resetRef,
    hideRef,
    onMouseDown,
    onClickSplitter,
    moving,
    width,
    size,
  };
};

export default useMovable;

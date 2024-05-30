import React, { useState, useRef, useMemo } from 'react';
import { useCreation, useMemoizedFn, useUpdateEffect } from '../ahooks';

const CSS_SELECTOR_KEY = 'data-print-compid';

export const PrintContainer = (props: { children: any; containerProps: any }) => {
  const { children, containerProps } = props;

  return (
    <div className="ued-print-container">
      <div {...containerProps}>{children}</div>
    </div>
  );
};

export const usePrintMode = (id: string) => {
  const selector = useMemo(() => {
    return `[${CSS_SELECTOR_KEY}=${CSS.escape(id)}]`;
  }, [id]);
  const [showPrintContainer, setShowPrintContainer] = useState(false);

  const [update, setUpdate] = useState(Date.now());

  const printData = useCreation<{ dataSource: any[] }>(() => {
    return {
      dataSource: [],
    };
  }, []);

  const resolveFunc = useRef<{ resolve?: Function, reject?: Function }>();

  const afterPrint = useMemoizedFn(() => {
    setShowPrintContainer(false);
  });

  const loadPrint = (_data?: { dataSource?: any[] }) => {
    if (_data && Array.isArray(_data?.dataSource)) {
      printData.dataSource = _data.dataSource;
    }
    setShowPrintContainer(true);
    setUpdate(Date.now());
    return new Promise((resolve, reject) => {
      resolveFunc.current = {
        resolve,
        reject,
      };
    });
  };

  useUpdateEffect(() => {
    if (showPrintContainer && resolveFunc.current?.resolve && typeof resolveFunc.current.resolve === 'function') {
      const { resolve } = resolveFunc.current;
      // 返回当前打印控件对应选择器
      resolve({
        selector,
        callback: () => {
          afterPrint();
        },
      });
      resolveFunc.current = {};
    }
  }, [update]);

  return {
    showPrintContainer,
    setShowPrintContainer,
    loadPrint,
    printData,
    selectorKey: {
      [CSS_SELECTOR_KEY]: id,
    },
  };
};

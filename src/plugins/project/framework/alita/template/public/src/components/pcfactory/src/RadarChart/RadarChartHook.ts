/* eslint-disable consistent-return */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-for-in-array */
/* eslint-disable no-underscore-dangle */
import { useEffect, useMemo, useRef, useState } from 'react';
import type { ReactChartHookType } from './RadarChartType';
import {
  defaultDataSource,
  defaultHint,
  defaultIndicatorDataSource,
  defaultRadarLevelHint,
} from './radarDefaultConfig';
import { useLocale } from '../utils/hooks/useLocale';

export const useRadarChartHook = (props: ReactChartHookType) => {
  const chartNode = useRef();
  const {
    indicatorDataSource = [],
    // defaultIndicatorDataSource = [],

    radarDataSource = [],
    // defaultDataSource = [],

    radarLevelHint = [],
    // defaultRadarLevelHint = [],

    showHint,
    showTotal,

    // defaultHint,
    hint,

    isRunningState = false,
    getEngineApis,
  } = props;

  const { getLocale } = useLocale(getEngineApis?.());

  const isDynamicData =
    typeof indicatorDataSource === 'string' || typeof radarDataSource === 'string';
  const getCurString = (propsString: string, defaultString: string) => {
    if (isDynamicData) {
      return defaultString;
    }
    if (propsString) {
      return propsString;
    }
    return defaultString;
  };
  const indicatorName = getCurString(props.indicatorName, 'name');
  const indicatorKey = getCurString(props.indicatorKey, 'dataKey');
  const indicatorMax = getCurString(props.indicatorMax, 'max');
  const indicatorMin = getCurString(props.indicatorMin, 'min');
  const legendKey = getCurString(props.legendKey, 'name');
  const radarMax = getCurString(props.radarMax, 'max');
  const radarMin = getCurString(props.radarMin, 'min');
  const radarDescription = getCurString(props.radarDescription, 'description');
  const hintName = props.hintName ?? 'text';
  const hintWidth = props.hintWidth ?? 'width';

  const [total, updateTotal] = useState(0);
  const [ignoreHint, updateIgnoreHint] = useState(true);
  const [configMessage, updateConfigMessage] = useState();

  const radarValueAccFunc = (arr: number[]): number => {
    if (arr?.length > 0) {
      return arr.reduce((pre, cur) => pre + cur, 0);
    }
    return 0;
  };

  const getCurSource = (dfData: any[], sourceData: any[]) => {
    let source: any[] = [];
    if (dfData?.length > 0) {
      source = dfData;
      if (isRunningState) {
        // 运行态
        if (sourceData && Array.isArray(sourceData) && sourceData.length > 0) {
          source = sourceData;
        } else {
          // 未绑定数据，运行态状态下展示空 并提示
          source = [];
        }
      }
    }
    return source;
  };

  const _indicatorDataSource = useMemo(() => {
    return indicatorDataSource;
  }, [indicatorDataSource]);

  useEffect(() => {
    if (isRunningState) {
      if (_indicatorDataSource?.length === 0) {
        setTimeout(() => {
          updateConfigMessage(getLocale?.('RadarChart.warning'));
        }, 300);
      } else {
        setTimeout(() => {
          // @ts-ignore
          updateConfigMessage('');
        }, 300);
      }
    }
  }, [_indicatorDataSource, isRunningState]);

  const _dataSource = useMemo(() => {
    return radarDataSource;
  }, [radarDataSource]);
  const _radarLevelHint = useMemo(() => {
    return radarLevelHint;
  }, [radarLevelHint]);

  const _indicatorData = useMemo(() => {
    return getCurSource(defaultIndicatorDataSource, _indicatorDataSource);
  }, [_indicatorDataSource]);

  const data = useMemo(() => {
    return getCurSource(defaultDataSource, _dataSource);
  }, [_dataSource]);

  const _radarLevelData = useMemo(() => {
    return getCurSource(defaultRadarLevelHint, _radarLevelHint);
  }, [_radarLevelHint]);

  // 组装雷达图数据
  const radarData = useMemo(() => {
    return data.map((item: any) => {
      return {
        value: _indicatorData.map((ind) => {
          const value = ind[indicatorKey] && item[ind[indicatorKey]];
          return value ?? 0;
        }),
        name: item[legendKey],
        areaStyle: {
          opacity: 0.3,
        },
      };
    });
  }, [data, _indicatorData, legendKey, indicatorKey]);

  const { hintNameValue, hintWidthValue } = useMemo(() => {
    let _hintNameValue = '';
    let _hintWidthValue = 120;
    if (typeof hint === 'object') {
      _hintNameValue = hint[hintName];
      _hintWidthValue = hint[hintWidth];
    } else if (!isRunningState) {
      // 已绑定数据，编辑状态下展示示例数据
      _hintNameValue = defaultHint.text;
      _hintWidthValue = defaultHint.width;
    }
    return { hintNameValue: _hintNameValue, hintWidthValue: _hintWidthValue };
  }, [hint, hintName, hintWidth, isRunningState]);

  const chartOption = useMemo(() => {
    const radarGetLevelFunc = (val: number, hintArr: ReactChartHookType['radarLevelHint']) => {
      let _hintStr = '';
      hintArr.forEach((item) => {
        const max = item[radarMax];
        const min = item[radarMin];
        const description = item[radarDescription];
        if (min < val && val <= max) {
          _hintStr = description;
        }
      });
      return _hintStr;
    };

    const indicator = _indicatorData.map((item) => ({
      name: item[indicatorName],
      max: item[indicatorMax],
      min: item[indicatorMin],
    }));
    const level = radarGetLevelFunc(total, _radarLevelData);
    const hintText = `${hintNameValue}${level ?? ''}`;
    const levelArr = _radarLevelData.map(
      (item) => `${item[radarDescription]}：${item[radarMin]} < x < ${item[radarMax]}`,
    );
    if (indicator.length === 0) {
      return null;
    }
    return {
      legend: {
        data: radarData.map((item: any) => item[legendKey]),
      },
      tooltip: {
        show: true,
        trigger: 'item',
      },
      radar: {
        indicator,
        axisLabel: {
          showMaxLabel: true,
          show: true,
          hideOverlap: true,
        },
        axisName: {
          color: '#0d98ba',
          fontSize: 14,
          show: true,
        },
      },
      series: [
        {
          type: 'radar',
          data: radarData,
          emphasis: {
            lineStyle: {
              width: 4,
            },
          },
          tooltip: {
            show: true,
            trigger: 'item',
          },
        },
      ],
      graphic: [
        // 上方数字
        {
          type: 'group',
          left: 'center',
          top: '35%',
          bounding: 'all',
          ignore: !showTotal || total === 0,
          z: 100,
          children: [
            {
              type: 'text',
              left: 'center',
              bottom: '40px',
              z: 100,
              style: {
                fill: '#0d98ba',
                text: total,
                font: 'bold 72px sans-serif',
              },
            },
          ],
        },
        // 下方提示
        {
          type: 'group',
          left: 'center',
          ignore: !showHint || total === 0,
          top: '55%',
          bounding: 'all',
          children: [
            {
              type: 'rect',
              z: 100,
              left: 0,
              top: 'center',
              shape: {
                height: 34,
                width: hintWidthValue,
              },
              style: {
                fill: '#fff',
                lineWidth: 1,
                shadowBlur: 8,
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowColor: 'rgba(0,0,0,0.2)',
              },
            },
            {
              type: 'text',
              z: 100,
              left: 6,
              top: 'center',
              style: {
                fill: '#0d98ba',
                overflow: 'break',
                text: hintText,
                fontSize: '18px',
              },
            },
            {
              type: 'image',
              z: 100,
              top: 'center',
              left: hintWidthValue - 24,
              style: {
                image:
                  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTggMWE3IDcgMCAxMTAgMTRBNyA3IDAgMDE4IDF6bTAgMS4xMmE1Ljg4MSA1Ljg4MSAwIDAwMCAxMS43NkE1Ljg4MSA1Ljg4MSAwIDAwOCAyLjEyem0wIDguNjkyYS42MjUuNjI1IDAgMTEwIDEuMjUuNjI1LjYyNSAwIDAxMC0xLjI1em0wLTYuNWMuNjU2IDAgMS4yNzUuMjI1IDEuNzQ0LjYzNi40ODcuNDI3Ljc1NiAxIC43NTQgMS42MTQgMCAuOTA0LS41OTUgMS43MTYtMS41MTcgMi4wN2EuNzU1Ljc1NSAwIDAwLS40ODMuN3YuMzU1YS4xMjUuMTI1IDAgMDEtLjEyNS4xMjZoLS43NWEuMTI1LjEyNSAwIDAxLS4xMjUtLjEyNnYtLjMzNWExLjc0NiAxLjc0NiAwIDAxMS4xMjUtMS42NTNjLjUzMy0uMjA1Ljg3Ny0uNjUuODc3LTEuMTM2IDAtLjY5LS42NzMtMS4yNS0xLjUtMS4yNXMtMS41LjU2LTEuNSAxLjI1di4xMThhLjEyNS4xMjUgMCAwMS0uMTI1LjEyNWgtLjc1YS4xMjUuMTI1IDAgMDEtLjEyNS0uMTI1di0uMTE5YzAtLjYxNC4yNjktMS4xODcuNzU2LTEuNjE0QTIuNjQyIDIuNjQyIDAgMDE4IDQuMzEyeiIgZmlsbC1vcGFjaXR5PSIuMzUiIGZpbGw9IiMxQzI0MkUiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==',
                height: 20,
                width: 20,
                textAlign: 'right',
              },
            },
          ],
        },
        // 下方提示悬停时显示的级别提示气泡
        {
          type: 'group',
          left: 0,
          bottom: 0,
          bounding: 'all',
          ignore: !showHint || ignoreHint,
          enterAnimation: {
            duration: 100,
            easing: 'linear',
          },
          children: [
            {
              type: 'rect',
              z: 100,
              left: 0,
              top: 0,
              shape: {
                height: 100,
                width: 300,
              },
              style: {
                fill: 'rgba(255,255,255,0.1)',
                shadowBlur: 5,
                shadowOffsetX: 4,
                shadowOffsetY: 5,
                shadowColor: 'rgba(0,0,0,0.8)',
              },
            },
            {
              type: 'text',
              z: 110,
              left: 20,
              top: 20,
              style: {
                fill: '#000',
                overflow: 'break',
                text: levelArr.join('\n\n'),
                font: '14px sans-serif',
              },
            },
          ],
        },
      ],
    };
  }, [
    hintNameValue,
    hintWidthValue,
    indicatorName,
    indicatorMax,
    indicatorMin,
    _indicatorData,
    legendKey,
    _radarLevelData,
    ignoreHint,
    showHint,
    total,
    showTotal,
    radarData,
    radarMax,
    radarMin,
    radarDescription,
  ]);

  const _updateGraphic = (arr: number[]) => {
    if (arr?.length > 0) {
      const curTotal = radarValueAccFunc(arr);
      updateTotal(curTotal);
    } else {
      updateTotal(0);
    }
  };

  useEffect(() => {
    // 初始化时显示序列中第一个value
    _updateGraphic(radarData[0]?.value);
  }, [radarData]);

  useEffect(() => {
    // 雷达图悬停交互
    if (chartNode && chartNode.current) {
      // @ts-ignore
      const chartInst = chartNode.current.getEchartsInstance();
      chartInst.off('mouseover');
      chartInst.off('mouseout');

      chartInst.on('mouseover', (params: any) => {
        if (params.componentIndex === 0 && params.componentType === 'graphic') {
          updateIgnoreHint(false);
        }
        if (params.componentIndex === 0 && params.componentType === 'series') {
          _updateGraphic(params.value);
        }
      });
      chartInst.on('mouseout', (params: any) => {
        if (params.componentIndex === 0 && params.componentType === 'graphic') {
          updateIgnoreHint(true);
        }
      });

      return () => {
        chartInst.off('mouseover');
        chartInst.off('mouseout');
      };
    }
    return () => {};
  }, [chartNode]);

  useEffect(() => {
    // 雷达图悬停交互
    if (chartNode && chartNode.current) {
      // @ts-ignore
      const chartInst = chartNode.current.getEchartsInstance();

      chartInst.off('legendselectchanged');
      chartInst.on('legendselectchanged', (params: any) => {
        if (Object.values(params.selected).filter(Boolean).length > 0) {
          let curData: number[] = [];
          Object.entries(params.selected).forEach(([key, value]) => {
            if (value && curData.length === 0) {
              const _data = chartInst.getOption().series[0].data;
              curData = _data.filter((item: any) => item.name === key)[0]?.value || [];
            }
          });
          if (curData.length > 0) {
            _updateGraphic(curData);
          } else {
            _updateGraphic([]);
          }
          curData = [];
        } else {
          _updateGraphic([]);
        }
      });

      return () => {
        chartInst.off('legendselectchanged');
      };
    }
    return () => {};
  }, []);
  return {
    chartOption,
    chartNode,
    configMessage: isRunningState ? configMessage : undefined,
  };
};

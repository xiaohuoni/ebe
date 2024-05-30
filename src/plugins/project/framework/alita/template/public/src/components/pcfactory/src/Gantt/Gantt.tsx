/* eslint-disable camelcase */
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { WarningOutlined } from '@ant-design/icons';
import { Button, Divider, Empty, message, Popover } from 'antd';
import classnames from 'classnames';
import moment from 'moment';
import { PROCESS_STATUS_COLOR, LEGEND_MAP } from './const';
import { useListenProps } from '../utils';

const customGanttPrefix = 'ued-gantt';

const Legend = (props: { status: string; text: string; }) => {
  const { status, text } = props;
  return (
    <div className={`${customGanttPrefix}-legend`}>
      <span className={`${customGanttPrefix}-legend-point`} style={{ background: PROCESS_STATUS_COLOR[status] }} />
      {text}
    </div>
  );
};

export interface MyGanttProps {
  dataSource: any;
  title: string;
  ganttShowTitle?: boolean;
  ganttShowLegend?: boolean;
  ganttShowDeadline?: boolean;
  ganttShowEditBtn?: boolean;
  ganttShowDetailBtn?: boolean;
  ganttHideYears?: boolean;
  rotate?: number;
  ganttItemMargin?: number;
  visible?: any;
  value?: string;
  onGanttItemEditClick?: any;
  onGanttItemDetailClick?: any;
  onGanttItemTitleClick?: any;
  className?: any;
  refDataSource?: any[];// 懒加载入参
}

// const prefixCls = 'gantt';

const Gantt: React.FC<MyGanttProps> = React.forwardRef((props, ref) => {
  const {
    title = '实施进度',
    visible = true,
    value,
    onGanttItemEditClick,
    onGanttItemDetailClick,
    onGanttItemTitleClick,
    ganttShowTitle = true,
    ganttShowLegend = true,
    ganttShowDeadline = true,
    ganttShowEditBtn = true,
    ganttShowDetailBtn = true,
    ganttHideYears,
    className,
    rotate,
    ganttItemMargin,
    refDataSource,
  } = props;
  const [dataSource, setDataSource] = useListenProps(props.dataSource);

  const [data, setData] = useState<any>();
  const [, setPlanDate] = useState<any>({});

  const scaleRef = useRef<any>();

  // useImperativeHandle(ref, () => ({
  //   setDataSany) => {
  //     conso
  //     setDat
  //   }
  // }));
  useEffect(() => {
    if (typeof refDataSource === 'object') {
      setDataSource(refDataSource);
    }
  }, [refDataSource]);

  // eslint-disable-next-line consistent-return
  // const totalWidth = useMemo(() => {
  //   if (scaleRef?.current?.offsetWidth) {
  //     return scaleRef.current.offsetWidth;
  //   }
  // }, [scaleRef.current]);

  const isEmpty = useMemo(() => {
    return value === undefined && (dataSource === undefined || JSON.stringify(dataSource) === '{}');
  }, [value, dataSource]);

  const getDeadlineTime = (d: { delivery_date: moment.MomentInput; }) => moment(d.delivery_date);
  const getDaysCount = (start: any, deadline: any) => deadline.diff(start, 'days');
  const getOppositeTime = (d: any, type: string) => {
    const endTimeArr = d?.project_plan_list.map(
      (w: { plan_node_list: { plan_finish_date: moment.MomentInput; }[]; }) =>
        moment(
          moment.max(
            w.plan_node_list.map((n: { plan_finish_date: moment.MomentInput; }) =>
              moment(n.plan_finish_date),
            ),
          ),
        ),
    ); // 所有项目中最晚结束的
    const lastEndTimeArr = d?.project_plan_list.map((w: { plan_node_list: any[]; }) =>
      moment(moment.min(w.plan_node_list.map((n) => moment(n.plan_finish_date)))),
    ); // 所有项目中最早结束的
    const startTimeArr = d?.project_plan_list.map((w: { impl_start_date: moment.MomentInput; }) =>
      moment(w.impl_start_date),
    ); // 项目规定的开始时间
    if (type === 'max') {
      return moment.max(endTimeArr);
    }
    const lastEndTime = moment.min(lastEndTimeArr);
    const prodStartTime = moment.min(startTimeArr);
    if (lastEndTime.diff(prodStartTime, 'days') < 0) {
      message.error('项目开始时间比计划启动时间晚将导致进度渲染错误，请检查！');
    }
    return prodStartTime;
  };

  useEffect(() => {
    if (dataSource && JSON.stringify(dataSource) !== '{}') {
      const d = dataSource;
      d.project_plan_list = d.project_plan_list.map(
        (plan: {
          plan_node_list: { plan_finish_date: moment.MomentInput; }[];
          impl_start_date: moment.MomentInput;
        }) => ({
          ...plan,
          plan_node_list: plan.plan_node_list.map(
            (node: { plan_finish_date: moment.MomentInput; }) => ({
              ...node,
              width: moment(node.plan_finish_date).diff(moment(plan.impl_start_date), 'days'),
            }),
          ),
        }),
      );
      setData(d);
      const startDate = getOppositeTime(d, 'min');
      const endDate =
        ganttShowDeadline && d?.delivery_date ? getDeadlineTime(d) : getOppositeTime(d, 'max');
      const dayCount = getDaysCount(startDate, endDate);
      setPlanDate({
        startDate,
        endDate,
        dayCount,
      });
    }
  }, [dataSource]);

  const handleClick = (item: any, index: any, type: string) => {
    const { plan_node_list, pro_plan_id, prod_name, impl_start_date } = item;

    if (typeof onGanttItemEditClick === 'function' && type === 'edit') {
      onGanttItemEditClick(
        item,
        pro_plan_id,
        prod_name,
        index,
        moment(impl_start_date),
        plan_node_list,
      );
    }
    if (typeof onGanttItemDetailClick === 'function' && type === 'detail') {
      onGanttItemDetailClick(
        item,
        pro_plan_id,
        prod_name,
        index,
        moment(impl_start_date),
        plan_node_list,
      );
    }
    if (typeof onGanttItemTitleClick === 'function' && type === 'title') {
      onGanttItemTitleClick(
        item,
        pro_plan_id,
        prod_name,
        index,
        moment(impl_start_date),
        plan_node_list,
      );
    }
  };

  const marginRight = useMemo(() => {
    if (ganttShowEditBtn && ganttShowDetailBtn) {
      return '100px';
    }
    if (ganttShowEditBtn || ganttShowDetailBtn) {
      return '50px';
    }
    return '0';
  }, [ganttShowEditBtn, ganttShowDetailBtn]);

  // const { startDate, dayCount } = planDate;

  return (
    visible && (
      <div className={classnames(customGanttPrefix, className)}>
        {isEmpty ? (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        ) : (
          <>
            {ganttShowTitle && <h3 className={`${customGanttPrefix}-title`}>{title}</h3>}
            {ganttShowTitle && <Divider />}
            <div
              className={`${customGanttPrefix}-border`}
              style={{ borderWidth: ganttShowDeadline ? '1px' : '0px', marginRight }}
            >
              {(ganttShowLegend || ganttShowDeadline) && (
                <div className={`${customGanttPrefix}-legendBar`}>
                  <div className={ganttShowLegend ? '' : `${customGanttPrefix}-hideLegend`}>
                    {LEGEND_MAP.map((c) => (
                      <Legend status={c.status} text={c.text} key={c.status} />
                    ))}
                  </div>
                  {ganttShowDeadline && data?.delivery_date && (
                    <div className={`${customGanttPrefix}-deadline`}>{`约定交付时间：${data?.delivery_date}`}</div>
                  )}
                </div>
              )}

              {data &&
                data.project_plan_list.map((li: any, index: number) => {
                  // const beforeTime = moment(li.impl_start_date).diff(startDate, 'days');
                  const getMargin = () => {
                    if (index !== data.project_plan_list.length - 1) {
                      // 多行且是最后一行
                      return `${ganttItemMargin}px 0`;
                    }
                    if (data.project_plan_list.length === 1) {
                      // 只有一行
                      return `${ganttItemMargin}px 0 0 0`;
                    }
                    return 0;
                  };
                  return (
                    // <div className={`${customGanttPrefix}-wrap} style={{ margin: `${index !== data.project_plan_list.length - 1 || data.project_plan_list.length === 1 ? ganttItemMargin : 0}px 0` }} ref={scaleRef}>
                    <div
                      className={`${customGanttPrefix}-item-wrap`}
                      style={{ margin: getMargin() }}
                      ref={scaleRef}
                      key={li.prod_name}
                    >
                      <div
                        onClick={() => handleClick(li, index, 'title')}
                        className={`${customGanttPrefix}-itemTitle`}
                      >
                        {li.prod_name}
                      </div>
                      <div className={`${customGanttPrefix}-scale`}>
                        {/* <div className={`${customGanttPrefix}-before} style={{ width: `${(beforeTime * 100) / dayCount}%` }} /> */}
                        {li.plan_node_list.map((n: any, i: number) => {
                          const { plan_finish_date, plan_update_date, progress_rate, node_name } =
                            n;
                          // const tempDate =
                          //   i === 0
                          //     ? li.impl_start_date
                          //     : li.plan_node_list[i - 1].plan_finish_date;
                          // const widthRate =
                          //   moment(plan_finish_date).diff(moment(tempDate), 'days') / dayCount;
                          // const width = `${widthRate * 100}%`;
                          // const restWidth = totalWidth - 80 - 120 * li.plan_node_list.length;
                          // const width = n.width === 0 ? `${120 + restWidth/li.plan_node_list.length}px` :`${120 + n.width/96 * restWidth}px`;
                          const width = `${99 / (li.plan_node_list.length - 1)}%`;
                          // eslint-disable-next-line radix
                          const progressRate = parseInt(progress_rate, 0);
                          const overTime = moment(plan_update_date).diff(
                            moment(plan_finish_date),
                            'hours',
                          );
                          const status = (percent: number, flag?: boolean) => {
                            const { processing, unstarted, finished, overtime } =
                              PROCESS_STATUS_COLOR;
                            const diff = moment(plan_finish_date).diff(
                              moment(plan_update_date) || Date(),
                              'days',
                            );
                            if (percent === 0) {
                              if (diff >= 0) {
                                return unstarted;
                              }
                              return overtime;
                            }
                            if (percent > 0 && percent < 100) {
                              if (diff >= 0) {
                                return processing;
                              }
                              return overtime;
                            }
                            if (percent === 100 && overTime <= 0 && !flag) {
                              return finished;
                            }
                            if (percent === 100 && flag) {
                              return finished;
                            }
                            if (!plan_update_date) {
                              return unstarted;
                            }
                            return overtime;
                          };

                          const DetailPop = () => {
                            const overTimeFormat = () => {
                              if (overTime > 24) {
                                return `${Math.floor(overTime / 24)}天${overTime % 24}小时`;
                              }
                              return `${overTime % 24}小时`;
                            };
                            return (
                              <>
                                <div>
                                  <b>{node_name}</b>
                                </div>
                                <div>{`计划时间: ${plan_finish_date}`}</div>
                                {plan_update_date && <div>{`完成时间: ${plan_update_date}`}</div>}
                                {plan_update_date && (
                                  <div>{`处理超时: ${overTime < 0 ? '0小时' : overTimeFormat()
                                  }`}
                                  </div>
                                )}
                                <div>{`当前进度: ${n.progress_rate}%`}</div>
                              </>
                            );
                          };
                          return (
                            <Popover content={DetailPop()} trigger="hover">
                              <div
                                className={classnames(`${customGanttPrefix}-process`, `${customGanttPrefix}-start`)}
                                style={{
                                  background: status(progressRate, true),
                                  width: i === 0 ? '0px' : width,
                                }}
                              >
                                {progressRate > 0 && progressRate < 100 && (
                                  <div
                                    className={`${customGanttPrefix}-unfinished`}
                                    style={{ width: `${100 - progressRate}%` }}
                                  />
                                )}
                                <span
                                  className={classnames(`${customGanttPrefix}-workname`, `${customGanttPrefix}-rotate`)}
                                  style={{
                                    transform: `rotate(${rotate}deg)`,
                                    color:
                                      status(progressRate) === PROCESS_STATUS_COLOR.overtime
                                        ? PROCESS_STATUS_COLOR.overtime
                                        : undefined,
                                    right: i === 0 ? '-30px' : 0,
                                  }}
                                >
                                  {ganttHideYears
                                    ? moment(n.plan_finish_date).format('MM-DD')
                                    : moment(n.plan_finish_date).format('YYYY-MM-DD')}
                                  {n.node_name}
                                  {status(progressRate) === PROCESS_STATUS_COLOR.overtime && (
                                    <WarningOutlined rev="" />
                                  )}
                                </span>
                              </div>
                            </Popover>
                          );
                        })}
                      </div>
                      {ganttShowEditBtn && (
                        <div className={`${customGanttPrefix}-edit`}>
                          <Button
                            type="primary"
                            size="small"
                            onClick={() => handleClick(li, index, 'edit')}
                          >
                            编辑
                          </Button>
                        </div>
                      )}
                      {ganttShowDetailBtn && (
                        <div
                          className={`${customGanttPrefix}-detail`}
                          style={{ right: ganttShowEditBtn ? '-112px' : '-60px' }}
                        >
                          <Button
                            type="primary"
                            size="small"
                            onClick={() => handleClick(li, index, 'detail')}
                          >
                            详情
                          </Button>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </>
        )}
      </div>
    )
  );
});

export default Gantt;

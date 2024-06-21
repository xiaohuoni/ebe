/* eslint-disable no-eval */
import type { ComponentItemType, EngineApisType } from '@lingxiteam/types';
import { Col, Popover, Row } from 'antd';
import classnames from 'classnames';
import React, { useImperativeHandle, useMemo } from 'react';
import { useListenProps } from '../utils';
import CustomModule from '../utils/CustomModule';
import { useFuncExpExecute } from '../utils/hooks/useFuncExpExecute';
import { useLocale } from '../utils/hooks/useLocale';
import getLabelSizeMode from './utils/getLabelSizeMode';

export interface MyDescriptionProps {
  visible?: boolean;
  dataSource?: any;
  labelWidth?: any;
  style?: React.CSSProperties;
  className?: any;
  columns: any[];
  bordered?: boolean;
  colon?: boolean;
  colSpan?: number;
  labelAlign?: any;
  colServiceData?: any;
  lineBreak?: string;
  appId?: string;
  $$componentItem: ComponentItemType;
  getEngineApis: () => EngineApisType;
  layout?: 'horizontal' | 'vertical';
  labelSize?: any;
}

// const prefixCls = 'description';
const descriptionPrefixWrapper = 'ued-description';

const Description = React.forwardRef<any, MyDescriptionProps>((props, ref) => {
  // const api = getApis();
  const {
    visible = true,
    labelWidth,
    style,
    className,
    columns,
    bordered,
    colon,
    colSpan,
    labelAlign,
    lineBreak,
    getEngineApis,
    layout = 'horizontal',
    labelSize,
  } = props;

  const [dataSource, setDataSource] = useListenProps(props.dataSource || {});
  const [colServiceData, setColServiceData] = useListenProps(
    props.colServiceData,
  );

  useImperativeHandle(ref, () => ({
    clearData() {
      setDataSource({});
    },
    setDataSource(data: any) {
      setDataSource(data);
    },
    addColServiceData(serviceData: any = {}) {
      setColServiceData({
        ...(colServiceData || {}),
        ...serviceData,
      });
    },
  }));

  const engineApis = getEngineApis?.() || {};
  const { getLocale } = useLocale(engineApis);
  const { sandBoxSafeRun, renderPopover, sandBoxLoadModule } = engineApis;

  const funcExpExecute = useFuncExpExecute(sandBoxSafeRun, getLocale);

  // eslint-disable-next-line no-underscore-dangle
  const _dataSource = useMemo(() => {
    if (dataSource instanceof Object) {
      if (Array.isArray(dataSource)) {
        // 如果传进来的是数组，默认取数组第一个对象作为数据源
        return dataSource.length ? dataSource[0] : {};
      }
      return dataSource;
    }
    return {};
  }, [dataSource]);

  const finalColumnsRows = useMemo(() => {
    // 解析动态列
    const resolvedDymColumns = columns
      .map((col: any) => {
        // 解析动态列配置，根据动态列数据源，得到真正的列配置数组数据
        if (col.type === 'dynamicCol') {
          if (col?.dataSource?.length) {
            return col.dataSource.map((c: any, index: number) => {
              const realCol = {
                ...col, // 动态列所有配置行为（排序、固定等）相同
                dataIndex: c[col.dataIndex],
                label: c[col.title],
              };

              // key增强，拼接index，防止重复
              realCol.key = `${realCol.key}_${index}`;

              // 移除动态列标识字段，和动态列数据源字段
              delete realCol.type;
              delete realCol.dataSource;
              return realCol;
            });
          }
          return [];
        }
        return col;
      })
      .reduce((prev, curr) => {
        // 将动态列的列配置数组数据打平
        if (Array.isArray(curr)) {
          return [...prev, ...curr];
        }
        return [...prev, curr];
      }, []);

    const newColumns = [...resolvedDymColumns];
    let hiddenCount = 0;
    resolvedDymColumns.forEach((c: any, i: number) => {
      try {
        let isHidden;
        const colHiddenRule = c?.hiddenRule;
        if (typeof colHiddenRule === 'string') {
          isHidden = sandBoxSafeRun(colHiddenRule, {});
        } else if (typeof colHiddenRule === 'boolean') {
          isHidden = colHiddenRule;
        }
        if (isHidden) {
          newColumns.splice(i - hiddenCount, 1);
          hiddenCount += 1;
        }
      } catch (e) {
        console.log(e);
      }
    });
    // 记录前一个layout是什么，后一个不一样时需要换行
    let preLayout: string;
    const columnRows: any[] = [[]];
    let currentRows = columnRows[0];
    newColumns.forEach((c, i) => {
      const {
        staticDataSource,
        staticService,
        editContent,
        tagLayout = layout,
      } = c;
      // 布局方式前后列不同时，换行展示
      if (preLayout !== tagLayout && preLayout) {
        const newRows: any[] = [];
        columnRows.push(newRows);
        currentRows = newRows;
      }
      currentRows.push(newColumns[i]);
      // 按照条件，初始化生成实际的列定义
      newColumns[i].render = (text: any, row: any) => {
        let content = text;

        if (content !== undefined && content !== null) {
          // 静态数据部分
          if (Array.isArray(staticDataSource)) {
            // 支持数组类型值或字符串逗号隔开值翻译
            content = (Array.isArray(text) ? text : String(text).split(','))
              .map((n) => {
                // 弱等保证 Number 与 String 可比较
                // eslint-disable-next-line eqeqeq
                const obj = staticDataSource.find((o) => o.value == n);
                return obj ? obj.label : n;
              })
              .join(',');
          }
          // 服务数据翻译
          if (staticService && colServiceData) {
            const { labelKey, valueKey } = staticService;
            const needtranskey = Object.keys(colServiceData).find((k) => {
              if (k === c.dataIndex && Array.isArray(colServiceData[k])) {
                return true;
              }
              return false;
            });
            if (needtranskey) {
              // 支持数组类型值或字符串逗号隔开值翻译
              content = (Array.isArray(text) ? text : String(text).split(','))
                .map((n) => {
                  // 弱等保证 Number 与 String 可比较
                  // eslint-disable-next-line eqeqeq
                  const obj = colServiceData[needtranskey].find(
                    (o: any) => o[valueKey] == n,
                  );
                  return obj ? obj[labelKey] : n;
                })
                .join(',');
            }
          }
        }

        // 如果配置了换行符则根据换行符进行切割
        if (lineBreak && typeof text === 'string') {
          return content
            .split(lineBreak)
            .map((_c: any, _i: any) => <div key={_i}>{_c}</div>);
        }
        // 自定义渲染函数
        if (c.jsx) {
          content = (
            <div>
              <CustomModule
                code={c.customRendering}
                sandBoxLoadModule={sandBoxLoadModule}
                compProps={{ text: content, item: row, index: i }}
                errorInfo={{
                  id: props.$$componentItem.id,
                }}
              />
            </div>
          );
        } else if (c.customRendering) {
          // 自定义渲染函数
          content = (
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: funcExpExecute(c.customRendering, [
                  {
                    key: 'text',
                    value: content,
                  },
                  {
                    key: 'item',
                    value: row,
                  },
                ]),
              }}
            />
          );
        }

        // 内容设置
        if (editContent) {
          if (editContent.edittype === 'Popover' && editContent?.selectoption) {
            const { page, options } = editContent.selectoption;
            const list = _dataSource;

            Object.keys(list).forEach((key) => {
              // @ts-ignore
              window[key] = list[key];
            });

            // 页面
            if (page && page.pageId && renderPopover) {
              try {
                const pageRule = page.rule;
                if (pageRule) {
                  if (typeof pageRule === 'string') {
                    page.rule = (list: any) =>
                      sandBoxSafeRun(pageRule, { list });
                  }

                  if (typeof page?.rule === 'function') {
                    return page.rule(list);
                  }
                }
              } catch (e) {
                console.error(e);
              }
              const params: any = {};
              if (page.options) {
                page.options.forEach((_c: any) => {
                  try {
                    const stateParamRule = _c?.stateParam;
                    if (stateParamRule) {
                      if (typeof stateParamRule === 'string') {
                        _c.stateParam = (list: any) =>
                          sandBoxSafeRun(stateParamRule, { list });
                      }

                      if (typeof _c.stateParam === 'function') {
                        params[_c.code] = _c.stateParam(list);
                      }
                    }
                  } catch (e) {
                    console.error(e);
                  }
                });
              }
              content = renderPopover({
                childElement: content,
                props,
                popoverSetting: {
                  page,
                  options: page.options,
                  state: params,
                },
                uid: props?.$$componentItem?.uid,
              });
            } else if (options.content) {
              // 自定义
              const {
                maxWidth,
                content: popContent,
                rule: popRule,
                ...resOptions
              } = options;

              // 隐藏规则
              try {
                if (popRule) {
                  if (typeof popRule === 'string') {
                    options.rule = (list: any) =>
                      sandBoxSafeRun(popRule, { list });
                  }

                  if (
                    typeof options?.rule === 'function' &&
                    options.rule(list)
                  ) {
                    return content;
                  }
                }
              } catch (e) {
                console.log(e);
              }

              let newPopContent = popContent;
              try {
                if (popContent) {
                  if (typeof popContent === 'string') {
                    options.content = (list: any) =>
                      sandBoxSafeRun(popContent, { list });
                  }

                  if (typeof options.content === 'function') {
                    newPopContent = options.content(list);
                  }
                }
              } catch (e) {
                console.error(e);
              }

              content = (
                <Popover
                  overlayStyle={{
                    maxWidth: maxWidth || 'none',
                    wordBreak: 'break-word',
                  }}
                  content={newPopContent}
                  {...resOptions}
                  arrowPointAtCenter
                >
                  {content}
                </Popover>
              );
            }
          }
        }
        return content;
      };
      preLayout = tagLayout;
    });
    return columnRows;
  }, [
    columns,
    colServiceData,
    lineBreak,
    _dataSource,
    layout,
    labelWidth,
    labelSize,
  ]);

  return visible ? (
    <div
      style={style}
      className={classnames(className, `${descriptionPrefixWrapper}-wrap`)}
    >
      {finalColumnsRows.map((cols: any) => (
        <Row
          // type="flex"
          className={classnames(
            descriptionPrefixWrapper,
            bordered ? 'border' : '',
          )}
        >
          {cols.map((c: any) => {
            // tagSize表示多单位的标签宽度，目前包括px，栅格和以当前列数为基准的占比，修改时旧的tagWidth会被清空
            const {
              key,
              dataIndex,
              render,
              span,
              label,
              tagWidth,
              tagLayout = layout,
            } = c;
            const value = _dataSource[dataIndex];
            const { width = 'auto', contentWidth } =
              getLabelSizeMode({ ...c, labelSize, labelWidth, colSpan }) || {};
            return (
              <Col
                className={classnames(
                  `${descriptionPrefixWrapper}-cell`,
                  bordered ? 'border' : '',
                  `${descriptionPrefixWrapper}-${tagLayout}-cell`,
                )}
                span={span || colSpan}
                key={key}
              >
                <div
                  title={label}
                  className={classnames(
                    `${descriptionPrefixWrapper}-label`,
                    bordered ? 'bg' : '',
                    tagWidth ? 'minWidth' : '',
                  )}
                  style={{
                    width: tagLayout === 'vertical' ? 'auto' : width,
                    textAlign: labelAlign,
                  }}
                >
                  {!bordered && colon ? `${label}:` : label}
                </div>
                <div
                  style={{
                    width: tagLayout === 'vertical' ? undefined : contentWidth,
                  }}
                  className={`${descriptionPrefixWrapper}-cont`}
                >
                  {render ? render(value, _dataSource, c) : value}
                </div>
              </Col>
            );
          })}
        </Row>
      ))}
    </div>
  ) : null;
});

export default Description;

import { LingxiForwardRef } from '@lingxiteam/types';
import { useThrottleFn } from 'ahooks';
import { Table, Transfer, Tree } from 'antd';
import type { FormItemProps } from 'antd/lib/form';
import { TableRowSelection } from 'antd/lib/table/interface';
import { TransferDirection, TransferItem } from 'antd/lib/transfer';
import { difference } from 'lodash';
import React, { CSSProperties, useMemo, useRef, useState } from 'react';
import {
  FormFields,
  getFieldsProps,
  useCommonImperativeHandle,
  useListenProps,
} from '../utils';
import CustomModule from '../utils/CustomModule';
import EmptyComp from '../utils/Empty';
import { useFuncExpExecute } from '../utils/hooks/useFuncExpExecute';
import { useLocale } from '../utils/hooks/useLocale';

export interface WrapperTransferProps {
  children: JSX.Element;
  className: string;
}
const WrapperTransfer = ({ children, className }: WrapperTransferProps) =>
  React.cloneElement(children, {
    className: `ued-transfer-wrap ${className} ${
      children.props.className || ''
    }`,
  });

const prefixCls = 'ued-transfer-wrap';
export interface MyTransferProps extends FormItemProps {
  value?: any;
  visible?: boolean;
  onTransferChange?: (
    targetKeys: string[],
    direction: TransferDirection,
    moveKeys: string[],
  ) => void;
  onValueRelease?: (e: any) => void;
  getCompPropMapState?: (id: string, type: string) => any;
  compId?: string;
  name?: string;
  fieldName: string;
  hidden?: boolean;
  regexp?: any;
  message?: string;
  selfSpan?: number;
  colSpan?: number;
  showWrapperContainer: boolean;
  wrapperContainer: any;
  titleTip?: any;
  tipIcon?: any;
  tipLocation?: any;
  tipContent?: any;
  tipPlacement?: any;
  colon?: boolean;
  displayStyle: 'base' | 'tree' | 'table';
  labelCode: string;
  uid: string;
  dataSource: any[];
  columns?: any[];
  childrenColumnName?: string;
  onSearch?: (direction: 'left' | 'right', value: string) => void;
  showSearch: boolean;
  transferLeftTitle: string;
  transferRightTitle: string;
  transferWidth: number;
  transferHeight: number;
  size: 'small' | 'large';
  page: boolean;
  showQuickJumper?: boolean;
  showSizeChanger?: boolean;
  showTotal?: boolean;
  total: number;
  pageSize: number;
  current: number;
  pageSizeOptions: string;
  onPageChange: (pageNo: number, pageSize: number) => void;
  min: number;
  max: number;
  isFormChild?: boolean | undefined;
  $$componentItem: any;
  tipSize?: string; // 文字提示
  tipWidth?: string; // 提示自定义的宽度
  tipHeight?: string; // 提示自定义的高度
}

const MyTransfer = LingxiForwardRef<any, MyTransferProps>((props, ref) => {
  const {
    value,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    visible = true,
    onTransferChange,
    onValueRelease,
    getCompPropMapState,
    compId,
    name,
    fieldName: rawFieldName,
    hidden,
    regexp,
    message,
    label,
    labelCol,
    wrapperCol,
    selfSpan,
    colSpan,
    showWrapperContainer,
    wrapperContainer: WrapperContainer,
    titleTip,
    tipIcon,
    tipLocation,
    tipContent,
    tipPlacement,
    displayStyle,
    labelCode,
    uid,
    columns,
    childrenColumnName,
    transferHeight,
    transferWidth,
    size,
    pageSizeOptions,
    min,
    max,
    isFormChild,
    tipSize,
    tipWidth,
    tipHeight,
    getEngineApis,
    ...restProps
  } = props;

  const { sandBoxSafeRun, sandBoxLoadModule, dataState } =
    getEngineApis() || {};

  const { getLocale, lang } = useLocale(getEngineApis());

  const funcExpExecute = useFuncExpExecute(sandBoxSafeRun, getLocale);

  const [_dataSource, setDataSource] = useListenProps(props.dataSource);
  const [transferLeftTitle, setTransferLeftTitle] = useListenProps(
    props.transferLeftTitle,
  );
  const [transferRightTitle, setTransferRightTitle] = useListenProps(
    props.transferRightTitle,
  );

  const dataSource = useMemo(() => {
    return _dataSource ?? [];
  }, [_dataSource]);

  const compValue = useMemo(() => {
    return value ?? [];
  }, [value]);

  const { formFieldsRef, readOnly, required, disabled } =
    useCommonImperativeHandle(ref, props, {
      value: compValue,
      clearValue: [],
      setDataSource(_list: any[]) {
        if (Array.isArray(_list)) {
          setDataSource(_list);
        }
      },
      // 设置右侧标题
      setTransferRightTitle(_title: string) {
        setTransferRightTitle(_title);
      },
      // 设置左侧
      setTransferLeftTitle(_title: string) {
        setTransferLeftTitle(_title);
      },
    });

  const [currentPage, setCurrentPage] = useState(props.current || 1); // 当前页码
  const [currentPageSize, setCurrentPageSize] = useState(props.pageSize); // 当前每页数量
  // const [rightData, setRigthData] = useState<any>([]);

  const currentSearchDirection = useRef<'left' | 'right'>('left');
  const searchVal = useRef<string>('');

  const titles = useMemo(() => {
    return [transferLeftTitle, transferRightTitle];
  }, [transferLeftTitle, transferRightTitle]);

  const listStyle = useMemo(() => {
    const tmpStyle: CSSProperties = {
      height: transferHeight,
    };
    if (transferWidth) {
      tmpStyle.maxWidth = transferWidth;
    } else {
      tmpStyle.flex = 1;
    }
    return tmpStyle;
  }, [transferWidth, transferHeight]);

  // 解析分页选择器配置
  const parsedPageSizeOptions = useMemo(() => {
    if (pageSizeOptions) {
      try {
        const arr = JSON.parse(pageSizeOptions);
        if (Array.isArray(arr)) {
          return arr.map((s) => String(s));
        }
        return [];
      } catch (e) {
        console.error('条数可选值 pageSizeOptions 必须配置为数字数组字符串'); // eslint-disable-line no-console
      }
    }
    return [];
  }, [pageSizeOptions]);

  // 分页
  const pagination = useMemo((): any => {
    if (props.page) {
      const res: any = {
        showQuickJumper: props.showQuickJumper,
        pageSize: currentPageSize,
        current: currentPage,
        onChange: (pageNo: number, pageSize: number) => {
          setCurrentPage(pageNo);
          setCurrentPageSize(pageSize);
        },
      };
      if (props.showSizeChanger) {
        res.showSizeChanger = props.showSizeChanger;
        res.pageSizeOptions = parsedPageSizeOptions;
      }
      if (props?.showTotal) {
        res.showTotal = (total: any) =>
          getLocale?.('Pagination.showTotal', { tol: total });
      }
      // if(props.onPageChange) {
      //   res.onChange = (pageNo: number, pageSize: number) => {
      //     setCurrentPage(pageNo);
      //     setCurrentPageSize(pageSize);
      //     props.onPageChange(pageNo, pageSize);
      //   };
      // }
      return res;
    }
    return false;
  }, [props, currentPage, currentPageSize]);

  /**
   * 向右添加数据
   * @param targetKeys
   */
  // const getRigthData = (targetKeys: any) => { // 每次选中的右侧数据进行保存，左侧搜索框配置请求数据，数据重新渲染会导致右侧数据一起被过滤
  //   const selectedData = [...rightData];
  //   const newData: any = [];
  //   if (targetKeys && targetKeys.length) { // 当前有选中的情况
  //     targetKeys.forEach((item: any) => {
  //       const selectedObj = selectedData.find(child => child[uid] === item);
  //       const targetObj = tmpDataSource.find(i => i[uid] === item);
  //       if (!selectedObj && targetObj) {
  //         newData.push({ ...targetObj, key: item });
  //       }
  //     });
  //     setRigthData([...newData, ...rightData]);
  //   } else {
  //     setRigthData([]);
  //   }
  // }
  /**
   * 向左移除
   * @param moveKeys
   */
  // const removeRigthDataSource = (moveKeys: any) => {
  //   if (moveKeys && Array.isArray(moveKeys) && moveKeys.length) {
  //     // const uids = moveKeys.map(it => it[uid]); // 要移除的所有id
  //     const targetData: any = [];
  //     if (rightData && rightData.length > 0) {
  //       rightData.forEach((item: { [x: string]: any; }) => {
  //         if (!moveKeys.includes(item[uid])) {
  //           targetData.push({ ...item });
  //         }
  //       })
  //     }
  //     setRigthData([...targetData]);
  //   }
  // }
  const { run } = useThrottleFn((d, v) => {
    if (props?.onSearch) {
      props.onSearch(d, v);
    }
  });
  const commonProps: any = {
    ...restProps,
    titles,
    listStyle,
    style: props.style,
    onSearch: (direction: 'left' | 'right', value: string) => {
      searchVal.current = value;
      currentSearchDirection.current = direction;
      // 增加节流，防止在搜索框输入的过程中，一直请求
      run && run(direction, value);
      // if (props?.onSearch) {
      //   props.onSearch(direction, value);
      // }
    },
    targetKeys: compValue || [],
    render: (item: any) => item[labelCode],
    filterOption: (val: any, item: any) => {
      // 开启了搜索并且配置了搜索事件，左侧不触发本地过滤
      if (
        props.showSearch &&
        currentSearchDirection.current === 'left' &&
        props.onSearch
      ) {
        return true;
      }
      const isTable = displayStyle === 'table';
      if (isTable) {
        let flag = false;
        try {
          columns?.forEach((col) => {
            // 原先写法indexof item[col.dataIndex]? 如果字段为null或者undefined，则返回void 0 === undefined，导致还是会进入该判断
            if (item[col.dataIndex] && item[col.dataIndex]?.indexOf(val) > -1) {
              flag = true;
              throw Error(); // 异常跳出循环
            }
          });
        } catch (error) {
          //
        }
        return flag;
      }
      return item?.[labelCode] && `${item?.[labelCode]}`.indexOf(val) > -1; // 同上的原因
    },
    rowKey: (record: any) => record[uid],
    onChange: (
      targetKeys: string[],
      direction: TransferDirection,
      moveKeys: string[],
    ) => {
      // if (direction === 'left') {
      //   removeRigthDataSource(moveKeys);
      // } else {
      //   getRigthData(targetKeys);
      // }
      console.log('值变化了');
      if (onTransferChange) {
        onTransferChange(targetKeys, direction, moveKeys);
      }
    },
    selectAllLabels: [
      null,
      () => {
        // 自定义右侧
        return getLocale?.('Transfer.unit', { num: compValue.length });
      },
    ],
  };
  const finalColumns = useMemo(() => {
    if (displayStyle === 'table') {
      return columns?.map((col) => {
        // 自定义渲染函数-
        if (col.jsx) {
          col.render = (text: any, row: any, index: any) => {
            return (
              <span>
                <CustomModule
                  sandBoxLoadModule={sandBoxLoadModule}
                  errorInfo={{ id: props.$$componentItem.id }}
                  code={col.customRendering}
                  compProps={{
                    text,
                    item: row,
                    index,
                  }}
                />
              </span>
            );
          };
        } else if (col.customRendering) {
          col.render = (text: any, row: any, index: any) => {
            return {
              children: (
                <span
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: `${funcExpExecute(col.customRendering, [
                      {
                        key: 'text',
                        value: text,
                      },
                      {
                        key: 'row',
                        value: row,
                      },
                      {
                        key: 'index',
                        value: index,
                      },
                    ])}`,
                  }}
                />
              ),
              props: {},
            };
          };
        } else if (
          col.lineNum &&
          typeof col.lineNum === 'number' &&
          col.lineNum > 0
        ) {
          // 自定义可以单行或者多行溢出
          const controllLineStyle = {
            WebkitLineClamp: col.lineNum,
          };
          return {
            ...col,
            render: (text: any) => (
              <span
                className="ued-control-line-number"
                style={controllLineStyle}
              >
                {text}
              </span>
            ),
          };
        }
        return col;
      });
    }
    return [{ title: getLocale?.('title'), dataIndex: labelCode }];
  }, [displayStyle]);

  const renderTransferTable = (isTable: boolean = false) => {
    // 格式化数据
    const generateData = (list: any[]): any[] => {
      return list?.map((item: any) => {
        return {
          ...item,
          key: item[uid],
          children: generateData(
            childrenColumnName ? item[childrenColumnName] : item.children,
          ),
        };
      });
    };

    // 穿梭框数据
    const transferDataSource: any[] = [];
    function flatten(list: any[] = []) {
      list.forEach((item) => {
        transferDataSource.push(item);
        flatten(item.children);
      });
    }
    flatten(dataSource);
    return (
      <Transfer {...commonProps} dataSource={transferDataSource}>
        {({
          direction,
          filteredItems,
          disabled: listDisabled,
          selectedKeys: listSelectedKeys,
          onItemSelectAll,
          onItemSelect,
        }) => {
          const rowSelection: TableRowSelection<TransferItem> = {
            getCheckboxProps: (item: any) => {
              return {
                disabled:
                  listDisabled ||
                  item.disabled ||
                  (direction === 'left' && compValue.includes?.(item.key)),
              };
            },
            onSelectAll(selected, selectedRows) {
              const treeSelectedKeys = selectedRows
                .filter((item) => !item?.disabled)
                .map(({ key }) => key);
              const diffKeys = selected
                ? difference(treeSelectedKeys, listSelectedKeys)
                : difference(listSelectedKeys, treeSelectedKeys);
              onItemSelectAll(diffKeys as string[], selected);
            },
            onSelect({ key }, selected) {
              onItemSelect(key as string, selected);
            },
            selectedRowKeys:
              direction === 'left'
                ? [...listSelectedKeys, ...compValue]
                : listSelectedKeys,
          };
          const tSize = size === 'large' ? 40 : 32;
          const scrollY =
            transferHeight -
            40 -
            44 -
            (isTable ? tSize : 0) -
            (props.showSearch ? 50 : 0);
          const scroll: any = { y: scrollY };
          if (!props.page) {
            scroll.y += 40;
          }
          let currentDataSource: any[] = [];
          if (direction === 'left') {
            const filterKeys: string[] = [];
            // 过滤表格数据
            const filterTableData = (obj: any) => {
              if (obj) {
                if (Array.isArray(obj)) {
                  obj.forEach((item) => {
                    filterKeys.push(item.key);
                    filterTableData(item.children);
                  });
                } else {
                  filterKeys.push(obj?.key);
                  filterTableData(obj?.children);
                }
              }
            };
            if (searchVal.current) {
              const targetFilterData = generateData(filteredItems);
              if (
                targetFilterData &&
                Array.isArray(targetFilterData) &&
                targetFilterData.length
              ) {
                // 如果搜索父级里面和子级含有相同的文字，会导致数据有问题，所以条件搜索的情况直接将数据按照一级展示
                targetFilterData.forEach((item) => {
                  if (!filterKeys.includes(item.key)) {
                    // 过滤会将子级也过滤进来 eg [{key:1,label:1,children:[{key:2,label:2},{key:3,label:3}]},{key:2,label:2}],需要将子级{key:2,label:2}过滤
                    currentDataSource.push(item);
                  }
                  filterTableData(item);
                });
              }
            } else {
              currentDataSource = generateData([...dataSource]);
            }
          }
          // 有选中数据的时候，左侧数据发生改变，则会导致右侧是数据被重新渲染。
          // 这里如果是渲染右侧数据，则取之前保存的数据进行渲染
          if (direction === 'right') {
            currentDataSource = [...filteredItems];
            // 删除children字段, 由于原先字段默认值配置的是false，这里就保持一致
            currentDataSource.forEach((row) => {
              if (row[childrenColumnName || 'false']) {
                delete row[childrenColumnName || 'false'];
              }
            });
          }
          return (
            <Table
              locale={{
                emptyText: (
                  <EmptyComp dataState={dataState} getLocale={getLocale} />
                ),
              }}
              columns={finalColumns}
              dataSource={currentDataSource}
              rowKey={`${uid}`}
              showHeader={isTable}
              rowSelection={rowSelection}
              className={!isTable ? `${prefixCls}-table-hideBorder` : ''}
              childrenColumnName={childrenColumnName || 'false'}
              scroll={scroll}
              onRow={({ key, disabled: itemDisabled }: any) => ({
                onClick: () => {
                  if (
                    itemDisabled ||
                    listDisabled ||
                    (direction === 'left' && compValue.includes(key))
                  )
                    return;
                  onItemSelect(
                    key as string,
                    !listSelectedKeys.includes(key as string),
                  );
                },
              })}
              size={size === 'large' ? 'middle' : 'small'}
              pagination={direction === 'left' ? pagination : !!props.page}
            />
          );
        }}
      </Transfer>
    );
  };
  // 展开 dataSource
  const renderTransferTree = () => {
    // 是否选中
    const isChecked = (
      selectedKeys: (string | number)[],
      eventKey: string | number,
    ) => selectedKeys.includes(eventKey);
    // 格式化数据
    const generateData = (list: any[]): any[] => {
      return list?.map((item: any) => {
        return {
          ...item,
          key: item[uid],
          title: item[labelCode],
          disabled: compValue?.includes(item[uid]),
          children: generateData(
            childrenColumnName ? item[childrenColumnName] : item.children,
          ),
        };
      });
    };
    const transferDataSource: any[] = [];
    function flatten(list: any[] = []) {
      list.forEach((item) => {
        transferDataSource.push(item);
        flatten(item.children);
      });
    }
    flatten(dataSource);
    return (
      <Transfer {...commonProps} dataSource={transferDataSource}>
        {({ direction, onItemSelect, selectedKeys, filteredItems }) => {
          if (direction === 'left') {
            const targetKeysData: any = [];
            // eslint-disable-next-line no-inner-declarations
            function flattenTreeData(obj: any) {
              // 将过滤的所有数据id存储，用于后面对比
              if (obj) {
                if (Array.isArray(obj)) {
                  obj.forEach((item) => {
                    targetKeysData.push(item.key);
                    flattenTreeData(item.children);
                  });
                } else {
                  targetKeysData.push(obj?.key);
                  flattenTreeData(obj?.children);
                }
              }
            }
            const checkedKeys = [...selectedKeys, ...(compValue || [])];
            let curTreeData: any[] = [];
            if (searchVal.current) {
              const targetFilterData = generateData(filteredItems);
              if (
                targetFilterData &&
                Array.isArray(targetFilterData) &&
                targetFilterData.length
              ) {
                // 如果搜索父级里面和子级含有相同的文字，会导致数据有问题，所以条件搜索的情况直接将数据按照一级展示
                targetFilterData.forEach((item) => {
                  if (!targetKeysData.includes(item.key)) {
                    // 过滤会将子级也过滤进来 eg [{key:1,label:1,children:[{key:2,label:2},{key:3,label:3}]},{key:2,label:2}],需要将子级{key:2,label:2}过滤
                    curTreeData.push(item);
                  }
                  flattenTreeData(item);
                });
              }
            } else {
              curTreeData = generateData(dataSource);
            }
            return (
              <Tree
                treeData={[...curTreeData]}
                checkable
                checkStrictly
                blockNode
                defaultExpandAll
                fieldNames={{
                  title: labelCode,
                  key: uid,
                  children: childrenColumnName,
                }}
                checkedKeys={checkedKeys}
                onCheck={(_, { node: { key } }) => {
                  onItemSelect(key as string, !isChecked(checkedKeys, key));
                }}
                onSelect={(_, { node: { key } }) => {
                  onItemSelect(key as string, !isChecked(checkedKeys, key));
                }}
              />
            );
          }
          return null;
        }}
      </Transfer>
    );
  };

  const renderTransferContent = useMemo(() => {
    let resComp: any = null;
    switch (displayStyle) {
      case 'tree':
        resComp = renderTransferTree();
        break;
      case 'table':
        resComp = renderTransferTable(true);
        break;
      default:
        resComp = renderTransferTable(false);
        break;
    }
    return resComp;
  }, [
    props,
    compValue,
    pagination,
    dataSource,
    transferLeftTitle,
    transferRightTitle,
  ]);

  const finalRules = useMemo(() => {
    const rules: any[] = [
      {
        required,
        message: getLocale?.('notEmpty', { name }),
      },
    ];

    if (min && +min >= 0) {
      const rule: any = {
        min: +min,
        message: getLocale?.('Transfer.min', { name, min }),
        type: 'array',
      };
      rules.push(rule);
    }

    if (max && +max >= +min && +max > 0) {
      rules.push({
        max: +max,
        message: getLocale?.('Transfer.min', { name, max }),
        type: 'array',
      });
    }
    return rules;
  }, [required, min, name, max, lang]);

  console.log(compValue, 'compValue===');

  return (
    <FormFields
      {...getFieldsProps(props)}
      wrapperClassName={`${prefixCls} ${prefixCls}-${
        size === 'large' ? 'large' : 'small'
      }`}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      ref={formFieldsRef}
      rules={finalRules}
      ignoreReadOnlyFlag
      value={compValue}
      defaultValue={[]}
    >
      {renderTransferContent}
    </FormFields>
  );
});

export default MyTransfer;
export { WrapperTransfer };

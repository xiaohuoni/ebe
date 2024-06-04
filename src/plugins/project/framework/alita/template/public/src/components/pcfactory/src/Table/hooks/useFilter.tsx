/* eslint-disable react/no-danger-with-children */
import { Button, Checkbox } from 'antd';
import { FilterDropdownProps } from 'antd/lib/table/interface';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const useFilter = (props: any) => {
  const {
    compId,
    innerDataSource,
    currentRowKey,
    getLocale,
    outerDataSourceRef,
  } = props;

  const [filters, setFilters] = useState<any>({}); // 筛选条件
  // 筛选时不影响页码，不使用antd默认的确定方法，因为会导致触发onChange方法
  const [filterDropdownOpen, setFilterDropdownOpen] = useState({}); // 筛选浮层的关闭与否
  const [selectedFilterKeys, setSelectedFilterKeys] = useState<any>({}); // 记录临时筛选条件，关闭筛选浮层后需要应用到筛选条件上
  const tempFilterDomList = useRef<any>({}); // 记录筛选列对应的元素

  const rowFilterSetList = useMemo(() => {
    const trRowFilterSetList: any[] = [];
    const domList = tempFilterDomList?.current || {};
    if (Object.keys(filters)?.length) {
      Object.keys(filters).forEach((dataIndex: string) => {
        const valList = filters[dataIndex];
        if (!valList) return;
        const { valMap = {} } = domList[dataIndex] || {};
        let keysList: string[] = [];
        valList?.forEach((val: string) => {
          const { rowKeyList } = valMap[val];
          keysList = keysList.concat(rowKeyList);
        });
        if (keysList?.length) {
          trRowFilterSetList.push(new Set(keysList));
        }
      });
    }
    if (Object.keys(filters)?.length === 0) {
      // 过滤条件全部重置时，清除筛选项缓存
      tempFilterDomList.current = {};
    }
    return trRowFilterSetList;
  }, [filters]);

  // 判断行是否经过筛选后需要隐藏
  const checkIfHiddenRow = useCallback(
    (rowId: string) => {
      let flag: boolean = false;
      if (rowFilterSetList?.length) {
        flag = !rowFilterSetList.every((rowSet: Set<string>) =>
          rowSet.has(rowId),
        );
      }
      return flag;
    },
    [rowFilterSetList],
  );

  // 筛选下拉列表显隐
  const onFilterDropdownVisibleChange = (dataIndex: string, open: boolean) => {
    setFilterDropdownOpen((pre) => ({
      ...pre,
      [dataIndex]: open,
    }));
    if (!open) {
      setFilters(selectedFilterKeys);
    } else {
      setSelectedFilterKeys(filters);
    }
  };

  // 筛选条件下拉列表
  const collectFilterDropDownDom = (colParams: { dataIndex: string }) => {
    const { dataIndex } = colParams;
    const rowKey = currentRowKey;
    const tableDom = document.querySelector(`[data-compid='${compId}']`);
    const valMap: any = {};
    const originDataMap: any = {};
    let prevTdInfo: any = null;
    innerDataSource.forEach((d: any) => {
      originDataMap[d[rowKey]] = d[dataIndex];
      // 由于表格存在单元格渲染和自定义渲染的情况，所以筛选列表从td元素获取innerText作为最终展示
      let td: any = tableDom?.querySelector(
        `tr[data-row-key='${d[rowKey]}'] > td[td-dataIndex='${dataIndex}']`,
      );
      if (!td && prevTdInfo?.rowSpan > 1) {
        // td没有找到，但是存在tr元素，表明可能开启了行合并，采用前一个
        prevTdInfo.rowSpan -= 1;
        td = prevTdInfo?.td;
      } else {
        prevTdInfo = {
          td,
          rowSpan: td?.rowSpan,
        };
      }
      if (td) {
        const val = td.innerText;
        const rowKeyList = valMap[val]?.rowKeyList || [];
        // 记录筛选
        rowKeyList.push(d[rowKey]);
        originDataMap[d[rowKey]] = val;
        valMap[val] = {
          dom: td.innerHTML,
          rowKeyList,
        };
      }
    });
    tempFilterDomList.current = {
      ...(tempFilterDomList.current || {}),
      [`${compId}Dom`]: tableDom,
      [dataIndex]: {
        valMap,
        originDataMap,
      },
    };
  };

  useEffect(() => {
    // 源数据变化时，重置筛选条件以及重新收集筛选条件
    setFilters({});
    tempFilterDomList.current = {};
  }, [outerDataSourceRef, currentRowKey]);

  // 收集所有筛选条件
  const collectAllFilters = (columns: any[], dataIndex: any) => {
    if (
      !Object.keys(tempFilterDomList.current)?.length ||
      !tempFilterDomList.current?.[dataIndex]
    ) {
      columns.forEach((col) => {
        if (col.filter) {
          collectFilterDropDownDom({
            ...col,
          });
        }
      });
    }
  };

  // 获取当前展示的筛选列表
  const getCurrentFilterList = (dataIndex: string) => {
    // 当前选项所有筛选列表
    const currentFilter = { ...tempFilterDomList.current[dataIndex]?.valMap };
    const valKeys = Object.keys(currentFilter || {});
    if (valKeys?.length) {
      valKeys.forEach((k: string) => {
        const rowKeys = currentFilter[k]?.rowKeyList.filter(
          (rowKey: string) => {
            return Object.keys(filters || {}).every((dataKey: string) => {
              if (dataKey !== dataIndex) {
                const v = filters[dataKey];
                if (v?.length) {
                  const rowVal =
                    tempFilterDomList.current[dataKey]?.originDataMap?.[rowKey];
                  return v.includes(rowVal);
                }
              }
              return true;
            });
          },
        );
        // 在其他条件过滤后，当前筛选项没有数据列时，则不展示
        if (rowKeys.length === 0) {
          delete currentFilter[k];
        }
      });
    }
    return currentFilter;
  };

  // 筛选自定义下拉菜单
  const renderFilterDropDown = (
    filterParams: FilterDropdownProps,
    dataIndex: string,
    columns: any[],
  ) => {
    const { visible } = filterParams;
    if (!visible) return false;
    const selectedKeys = selectedFilterKeys[dataIndex] || [];
    const setSelectedKeys = (keys: string[] | null) =>
      setSelectedFilterKeys((pre: any) => ({ ...pre, [dataIndex]: keys }));
    collectAllFilters(columns, dataIndex);
    const valMap = getCurrentFilterList(dataIndex);
    return (
      visible && (
        <div className="ued-table-filters">
          <div className="ued-table-filters-content">
            {Object.keys(valMap || {}).map((val: any) => {
              const { dom } = valMap[val];
              return (
                <div className="ued-table-filters-item">
                  <Checkbox
                    checked={selectedKeys.includes(val)}
                    onChange={(e) => {
                      let newSelected: any[] = [];
                      if (e.target.checked) {
                        newSelected = [...selectedKeys, val];
                      } else {
                        newSelected = selectedKeys.filter(
                          (k: string) => k !== val,
                        );
                      }
                      setSelectedKeys(newSelected?.length ? newSelected : null);
                    }}
                  >
                    <div
                      className="ued-table-filters-dom"
                      // eslint-disable-next-line react/no-danger
                      dangerouslySetInnerHTML={
                        dom && val ? { __html: dom } : undefined
                      }
                    >
                      {val ? null : `(${getLocale('Table.filter.empty')})`}
                    </div>
                  </Checkbox>
                </div>
              );
            })}
          </div>
          <div className="ued-table-filters-bottom">
            <Button
              type="link"
              disabled={selectedKeys?.length === 0}
              size="small"
              onClick={() => {
                setSelectedKeys(null);
              }}
            >
              {getLocale('reset')}
            </Button>
            <Button
              type="primary"
              size="small"
              onClick={() => {
                setFilters((pre: any) => ({
                  ...pre,
                  [dataIndex]: selectedKeys?.length ? selectedKeys : null,
                }));
                setFilterDropdownOpen((pre) => ({
                  ...pre,
                  [dataIndex]: false,
                }));
              }}
            >
              {getLocale('confirm')}
            </Button>
          </div>
        </div>
      )
    );
  };

  const filterDataSource = useMemo(() => {
    if (Object.keys(filters)?.length) {
      return innerDataSource.filter(
        (record: any) => !checkIfHiddenRow(record[currentRowKey]),
      );
    }
    return innerDataSource;
  }, [filters, innerDataSource]);

  return {
    filters,
    filterDropdownOpen,
    setFilters,
    checkIfHiddenRow,
    onFilterDropdownVisibleChange,
    renderFilterDropDown,
    filterDataSource,
  };
};

export default useFilter;

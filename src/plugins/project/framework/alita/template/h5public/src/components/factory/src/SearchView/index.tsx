import {
  Calendar,
  SearchView,
  SearchViewType,
} from '@lingxiteam/antd-mobile-plus';
import { LingxiForwardRef } from '@lingxiteam/types';
import classNames from 'classnames';
import moment from 'moment';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import { $$componentItem, reloadSelectDataType } from '../interfaces/types';
import { getCalendarLocale } from '../utils/i18n';
import './index.less';

interface SearchStyle extends React.CSSProperties {
  inputStyle?: React.CSSProperties;
}
export interface MySearchViewProps extends SearchViewType {
  style: SearchStyle;
  searchViewType?: string;
  _component?: any;
  showDateRange?: boolean;
  onChange?: any;
  minStartDate?: string;
  visible?: boolean;
  $$componentItem: $$componentItem;
  className: string;
}

const prefixWrap = 'alita-search-view-wrap';

const MySearchView = LingxiForwardRef<unknown, MySearchViewProps>(
  (props, ref) => {
    const {
      children,
      _component,
      filterData,
      filterValue,
      style = {},
      searchViewType = 'text',
      onFilterChange = () => {},
      onChange,
      showDateRange,
      minStartDate,
      value,
      visible = true,
      labelAlias: IlabelAlias = 'label',
      valueAlias: VvalueAlias = 'value',
      $$componentItem,
      className,
      getEngineApis,
      ...restProps
    } = props;
    const { getLocale } = getEngineApis?.() || {};
    const { inputStyle = {}, ...restStyle } = style;
    const [showCalendar, setShowCalendar] = useState(false);
    const [startDate, setStartDate] = useState('开始时间');
    const [endDate, setEndDate] = useState('结束时间');
    const [myFilterValue, setMyFilterValue] = useState(filterValue);
    const [minDate, setMinDate] = useState(new Date('2016/01/01'));
    const [filterObject, setFilterObject] = useState<any>({});
    const [myFilterData, setFilterData] = useState(filterData);
    const [labelAlias, setLabelAlias] = useState(IlabelAlias);
    const [valueAlias, setValueAlias] = useState(VvalueAlias);

    useEffect(() => {
      setFilterData(filterData);
    }, [JSON.stringify(filterData)]);

    const myOnChange = (e: any) => {
      if (onChange) {
        onChange({ inputValue: e, filterValue: filterObject });
      }
    };
    useImperativeHandle(ref, () => ({
      setDataWithLabelAndValue: (params: reloadSelectDataType) => {
        const {
          labelKey = 'label',
          valueKey = 'value',
          childrenKey,
          dataSource = [],
        } = params || {};
        if (dataSource.length === 0 || !valueKey || !labelKey) return;
        let isFindItem;
        const data = dataSource?.map((item) => {
          if (item[valueKey] === childrenKey) {
            isFindItem = item;
          }
          return {
            ...item,
            [labelKey]: item[labelKey],
            [valueKey]: item[valueKey],
          };
        });
        setLabelAlias(labelKey);
        setValueAlias(valueKey);
        if (isFindItem) {
          setFilterObject(isFindItem);
          // @ts-ignore
          setMyFilterValue(isFindItem.value);
        } else if (data.length > 0) {
          setFilterObject(data[0]);
          // @ts-ignore
          setMyFilterValue(data[0]?.value);
        }
        setFilterData(data);
        if (onChange) {
          // @ts-ignore
          onChange({
            inputValue: typeof value === 'object' ? value?.inputValue : value,
            filterObject,
          });
        }
        // setData(initData(params.dataSource, params.labelKey, params.valueKey, params.childrenKey));
      },
      clearValue: () => {
        if (onChange) {
          onChange({ inputValue: '', filterValue });
        }
      },
      setValue(value: Object | string) {
        if (typeof value === 'object') {
          if (onChange) {
            onChange(value);
          }
        } else {
          myOnChange(value);
        }
      },
      get value() {
        // @ts-ignore
        return {
          inputValue: typeof value === 'object' ? value?.inputValue : value,
          filterObject,
        };
      },
    }));

    // 获取默认
    const filterItemWithValue = (
      data: any[] = [],
      value = '',
      labelAlias: string,
      valueAlias: string,
    ) => {
      if (data.length === 0) {
        return {
          [labelAlias]: '',
          [valueAlias]: '',
        };
      }
      const resultList = data.filter((item: any) => item[valueAlias] === value);
      if (resultList.length > 0) {
        return resultList[0];
      }
      return data[0];
    };

    // 重写onFilterChange,修复搜索栏左侧数据选择新值后展示数据未修改的问题。
    const myOnFilterChange = (e: any) => {
      const object: any = { ...filterObject };
      if (e[valueAlias]) {
        object[valueAlias] = e[valueAlias];
        object[labelAlias] = e[labelAlias];
        setMyFilterValue(e[valueAlias]);
      }
      if (e.startDate) {
        object.startDate = e.startDate;
        object.endDate = e.endDate;
      }
      setFilterObject({ ...object });
      if (onFilterChange) {
        onFilterChange(object);
      }
    };

    useEffect(() => {
      if (minStartDate) {
        if (minStartDate.includes('new Date')) {
          setMinDate(new Date());
        } else {
          setMinDate(new Date(minStartDate));
        }
      }
    }, [minStartDate]);
    useEffect(() => {
      const object = filterItemWithValue(
        filterData,
        filterObject,
        labelAlias,
        valueAlias,
      );
      setFilterObject({ ...object });
      setMyFilterValue(filterValue);
    }, [filterValue]);

    if (!visible) {
      return <></>;
    }
    return (
      <div
        id={$$componentItem.id}
        className={classNames(prefixWrap, className)}
      >
        <SearchView
          {...restProps}
          // @ts-ignore
          value={typeof value === 'object' ? value?.inputValue : value}
          filterData={myFilterData}
          type={searchViewType}
          filterValue={myFilterValue}
          PopViewPanel={children}
          onFilterChange={myOnFilterChange}
          onChange={myOnChange}
          style={{ ...restStyle }}
          inputStyle={inputStyle}
          labelAlias={labelAlias}
          valueAlias={valueAlias}
          cancelText={getLocale('cancelText')}
          // @ts-ignore
          autoComplete="off"
        />
        {showDateRange && (
          <div
            className={`${prefixWrap}-date-range`}
            onClick={() => setShowCalendar(true)}
          >
            <div className="range-content">
              <span className="date">
                {startDate === '开始时间'
                  ? getLocale('DformRangePicker.selectStart', '开始时间')
                  : startDate}
              </span>
              <span className="date-space">——</span>
              <span className="date">
                {endDate === '结束时间'
                  ? getLocale('DformRangePicker.selectEnd', '结束时间')
                  : endDate}
              </span>
            </div>
          </div>
        )}
        <Calendar
          show={showCalendar}
          type="range"
          allowSameDay
          minDate={minDate}
          maxDate={new Date()}
          onClose={() => {
            setShowCalendar(false);
          }}
          onConfirm={(e: any) => {
            setShowCalendar(false);
            if (Array.isArray(e) && e.length > 1) {
              const start = moment(e[0]).format('yyyy/MM/DD');
              const end = moment(e[1]).format('yyyy/MM/DD');
              setStartDate(start);
              setEndDate(end);
              myOnFilterChange({ startDate: start, endDate: end });
            }
          }}
          title={getLocale('SearchView.title')}
          confirmText={getLocale('confirm')}
          confirmDisabledText={getLocale('confirm')}
          getLocale={(t, tempValue) => {
            return getCalendarLocale(getLocale, t, tempValue);
          }}
        />
      </div>
    );
  },
);

export default MySearchView;

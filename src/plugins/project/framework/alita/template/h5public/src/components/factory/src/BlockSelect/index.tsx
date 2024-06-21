import { LingxiForwardRef } from '@lingxiteam/types';
import { isUndefined } from 'lodash';
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import MySwipe, { SwipeActionProps } from '../DynamicList/MySwipe';
import { useDeepCompareEffect } from '../utils/ahooks';
import useStyle from '../View/useStyle';
import ActionView from './components/ActionView';
import CheckBox from './components/CheckBox';
import NoCheckBox from './components/NoCheckBox';
import './index.less';

// README: myBSState 3: 禁用 1: 启用

export interface MyBlockSelectProps {
  blockData?: any[];
  valueKey?: string;
  defaultValue?: string[];
  selectStyle?: React.CSSProperties;
  normalStyle?: React.CSSProperties;
  isChecked?: boolean;
  isMultiple?: boolean;
  columnNum?: number;
  space?: number;
  style?: React.CSSProperties;
  selectImg?: string;
  normalImg?: string;
  onChange?: (
    allKeys: any,
    allData: any,
    currentSelected: any,
    currentData: any,
    i: number,
  ) => void;
  iconPosition?: string;
  checkModel?: any;
  status?: string;
  showAllCheck?: boolean;
  showChecked?: boolean;
  actionView?: any;
  actionViewPosition?: string;
  defaultIcon?: string;
  selectedAllAction?: any;
  selectIconColor?: any;
  normalIconColor?: any;
  visible?: boolean;
  src?: string;
  fileCode?: string;
  backgroundType: any;
  className: string;
  columnSpace: number;
  swipe?: boolean; // 是否开启滑动
  closeOnAction?: boolean;
  closeOnTouchOutside?: boolean;
  swipeAction?: [SwipeActionProps]; // 滑动展开按键
  [key: string]: any;
}

const prefixCls = 'lcdp-blockselect';
const BlockSelect = LingxiForwardRef<any, MyBlockSelectProps>((props, ref) => {
  const {
    blockData = [],
    valueKey = 'value',
    defaultValue = [],
    selectStyle,
    normalStyle,
    isChecked,
    isMultiple = true,
    columnNum = 1,
    columnSpace = 8,
    space = 16,
    style: uStyle,
    selectImg,
    normalImg,
    onChange: uOnChange = () => {},
    iconPosition = 'left',
    status: myStatus,
    checkModel,
    actionViewPosition,
    defaultIcon,
    selectedAllAction,
    selectIconColor,
    normalIconColor,
    src,
    fileCode,
    backgroundType = {},
    className,
    getEngineApis,
    swipe = false,
    swipeAction,
    closeOnAction = false,
    closeOnTouchOutside = false,
    $$componentItem,
  } = props;
  const {
    MemoRenderer: { renderer, MemoLoopItem },
    getAppFileUrlByFileCode,
  } = getEngineApis();
  const col = columnNum || 1;
  const [status, setStatus] = useState<any>(myStatus);
  const [value, setValues] = useState<any[]>();
  const [myIsMultiple, setMyIsMultiple] = useState<any>(false);
  const [myIsChecked, setMyIsChecked] = useState<any>(false);
  const [myBlockData, setMyBlockData] = useState<any>([]);
  // 全选状态
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState<string>();

  const values = value || [];

  // 循环列表配置key
  const [itemKey, indexKey] = useMemo(() => {
    return [props?.itemKey || 'item', props?.indexKey || 'i'];
  }, []);

  useEffect(() => {
    setStatus(status);
  }, [status]);

  // 默认值支持对象数组及字符串数组
  useEffect(() => {
    if (Array.isArray(defaultValue) && isUndefined(value)) {
      setValues(defaultValue);
    }
  }, [defaultValue, value]);

  const wrapperStyle = useMemo(() => {
    const style = {
      ...uStyle,
      display: 'flex',
      flexDirection: 'column',
    };
    if (status === '2') {
      // 状态隐藏
      style.display = 'none';
    }
    return style;
  }, [uStyle, status]) as React.CSSProperties;

  const getItemStyle = useCallback(
    (checked, top) => {
      const flexBasis = `calc(${100 / col}% - ${
        col > 1 ? ((col - 1) / col) * columnSpace : 0
      }px)`;
      const style: {} = { flexBasis, marginTop: top };
      if (checked) {
        Object.assign(style, selectStyle);
      } else {
        Object.assign(style, normalStyle);
      }
      return style;
    },
    [col, space, selectStyle, normalStyle],
  );

  const onChange = ({ index, restItem }: { index: number; restItem: any }) => {
    if (status === '3' || restItem?.myBSState === '3') {
      // 禁用状态设置无法选中
      return;
    }

    const val =
      typeof restItem === 'object' ? restItem[valueKey || 'value'] : index;
    if (!myIsMultiple) {
      setValues([val]);
      uOnChange(val, restItem, val, restItem, index);
      return;
    }
    // 多选
    let tempValues = [...values];
    if (!values.includes(val)) {
      tempValues = tempValues.concat(val);
    } else {
      tempValues = values.filter((v: any) => v !== val);
    }
    if (tempValues.length === myBlockData.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
    const seletValues = [...getValues(tempValues)];
    setValues(seletValues);
    const allSelectData = myBlockData.filter((v: any) =>
      tempValues.includes(v?.[valueKey]),
    );
    uOnChange(seletValues, allSelectData, val, restItem, index);
  };

  // 获取禁用状态的value值
  const getDisabledValues = () =>
    myBlockData
      ?.filter((item: { myBSState: string }) => item.myBSState === '3')
      ?.map((item: { [x: string]: any }) => item[valueKey]) || [];

  const allSelectAction = (isAllSelect: boolean) => {
    const disabledValues = getDisabledValues();
    if (isAllSelect) {
      const tempValues: any = [...values];
      myBlockData.forEach((item: any) => {
        // 全选时，不应该对禁用的选择项进行修改
        if (!disabledValues.includes(item[valueKey])) {
          if (!tempValues.includes(item?.[valueKey])) {
            tempValues.push(item?.[valueKey]);
          }
        }
      });
      setValues(tempValues);
    } else {
      const tempValues: string[] = [...values];
      myBlockData.forEach((item: any) => {
        // 全选时，不应该对禁用的选择项进行修改
        if (!disabledValues.includes(item[valueKey])) {
          const valueIndex = tempValues.findIndex(
            (id) => item[valueKey] === id,
          );
          if (valueIndex >= 0) {
            tempValues.splice(valueIndex, 1);
          }
        }
      });
      setValues(tempValues);
    }
    if (selectedAllAction) {
      selectedAllAction(isAllSelect);
    }
    setSelectAll(isAllSelect);
  };

  const getValues = (v = values) =>
    myBlockData
      ?.filter((d: any, i: number) =>
        typeof d === 'object' ? v?.includes(d[valueKey]) : v.includes(i),
      )
      .map((d: any, i: number) => (typeof d === 'object' ? d[valueKey] : i));

  useImperativeHandle(ref, () => ({
    getValues: () => {
      const realValues = myBlockData?.filter((d: any, i: number) =>
        typeof d === 'object'
          ? values?.includes(d[valueKey])
          : values.includes(i),
      );
      return [
        realValues.map((it: { [x: string]: any }) =>
          typeof it === 'object' ? it[valueKey] : it,
        ),
        realValues,
      ];
    },
    get visible() {
      if (status === '2') {
        return false;
      }
      return true;
    },
    setVisible: (v: boolean) => {
      const newStatus = myStatus === '2' ? '1' : myStatus;
      setStatus(v ? newStatus : '2');
    },
    setBlockSelectStateData: changeBlockItemState,
    setBlockSelectSelectedData: changeBlockItemSelectedState,
    setBlockSelectHiddenData: changeBlockItemHidden,
    setBlockSelectData: resetData,
  }));

  const getChildProps = useCallback(
    (item) => {
      const { index, restItem } = item;
      const val =
        typeof restItem === 'object' ? restItem[valueKey || 'value'] : index;
      const checked = values.includes(val);
      const top = index < col ? 0 : space;
      return {
        restItem,
        index,
        checked,
        top,
        style: getItemStyle(checked, top),
        normalImg,
        selectImg,
      };
    },
    [valueKey, values, col, space, getItemStyle, normalImg, selectImg],
  );

  const resetData = (data: any[]) => {
    if (Array.isArray(data)) {
      setMyBlockData([...data]);
    }
  };

  const changeBlockItemSelectedState = (selectedData: any) => {
    // 设置选中数据
    if (selectedData && typeof selectedData === 'object') {
      const data = selectedData?.data;
      const type = selectedData?.type;
      const selectedKeys: any = [];

      myBlockData.forEach((item: any, index: number) => {
        let arrayData = false;
        let stringData = false;
        if (type === 'id') {
          // 使用唯一字段
          arrayData = Array.isArray(data) && data.includes(item?.[valueKey]);
          stringData = item?.[valueKey] === data;
        } else {
          // 使用索引
          arrayData =
            Array.isArray(data) &&
            (data.includes(index) || data.includes(`${index})`));
          stringData = `${data}` === `${index}`;
        }
        if (arrayData || stringData) {
          selectedKeys.push(item[valueKey]);
        }
      });
      setValues(selectedKeys);
    }
  };

  const changeBlockItemHidden = (itemHiddenData: any) => {
    // 设置显隐数据
    if (itemHiddenData && typeof itemHiddenData === 'object') {
      const data = itemHiddenData?.data;
      const visible = itemHiddenData?.visible;
      const type = itemHiddenData?.type;
      // { title: '显示', value: 'true' },
      // { title: '隐藏', value: '' },
      // { title: '切换', value: 'toggle' },
      const setItemsHidden = (item: any) => {
        // eslint-disable-next-line default-case
        switch (visible) {
          case '':
            item.myBSHidden = 'hidden';
            break;
          case 'true':
            item.myBSHidden = 'show';
            break;
          case 'toggle':
            // eslint-disable-next-line no-lone-blocks
            {
              if (item.myBSHidden) {
                if (item.myBSHidden === 'show') {
                  item.myBSHidden = 'hidden';
                } else {
                  item.myBSHidden = 'show';
                }
              } else {
                item.myBSHidden = 'hidden';
              }
            }
            break;
        }
      };
      const hiddenData = [...myBlockData];
      const selectedKeys = [...values];
      hiddenData.forEach((item: any, index: number) => {
        let arrayData = false;
        let stringData = false;
        if (type === 'id') {
          // 使用唯一字段
          arrayData = Array.isArray(data) && data.includes(item?.[valueKey]);
          stringData = item?.[valueKey] === data;
        } else {
          // 使用索引
          arrayData =
            Array.isArray(data) &&
            (data.includes(index) || data.includes(`${index})`));
          stringData = `${data}` === `${index}`;
        }
        if (arrayData || stringData) {
          setItemsHidden(item);
          if (
            item.myBSHidden === 'hidden' &&
            selectedKeys.includes(item[valueKey])
          ) {
            // 已选中的数据如果被隐藏了，就去掉选中状态
            selectedKeys.splice(selectedKeys.indexOf(item[valueKey]), 1);
          }
        }
      });
      setValues([...selectedKeys]);
      setMyBlockData(hiddenData);
    }
  };

  const changeBlockItemState = (stateData: any) => {
    // 设置状态数据
    if (stateData && typeof stateData === 'object') {
      const data = stateData?.data;
      const disabled = stateData?.disabled;
      const type = stateData?.type;
      // { title: '启动', value: '' },
      // { title: '禁用', value: 'true' },
      // { title: '切换', value: 'toggle' },
      const setItemsDisabled = (item: any) => {
        // eslint-disable-next-line default-case
        switch (disabled) {
          case '':
            item.myBSState = '1';
            break;
          case 'true':
            item.myBSState = '3';
            break;
          case 'toggle':
            // eslint-disable-next-line no-lone-blocks
            {
              if (item.myBSState) {
                if (item.myBSState === '3') {
                  item.myBSState = '1';
                } else {
                  item.myBSState = '3';
                }
              } else {
                item.myBSState = '3';
              }
            }
            break;
        }
      };
      const disabledData = [...myBlockData];
      disabledData.forEach((item: any, index: number) => {
        let arrayData = false;
        let stringData = false;
        if (type === 'id') {
          // 使用唯一字段
          arrayData = Array.isArray(data) && data.includes(item?.[valueKey]);
          stringData = item?.[valueKey] === data;
        } else {
          // 使用索引
          arrayData =
            Array.isArray(data) &&
            (data.includes(index) || data.includes(`${index})`));
          stringData = `${data}` === `${index}`;
        }
        if (arrayData || stringData) {
          setItemsDisabled(item);
        }
      });
      setMyBlockData(disabledData);
    }
  };

  useEffect(() => {
    if (checkModel === 'radio') {
      setMyIsChecked(true);
      setMyIsMultiple(false);
    } else if (checkModel === 'checkbox') {
      setMyIsChecked(true);
      setMyIsMultiple(true);
    } else if (checkModel === 'none') {
      setMyIsChecked(false);
      setMyIsMultiple(false);
    } else {
      // 兼容下旧数据
      setMyIsChecked(isChecked);
      setMyIsMultiple(isMultiple);
    }
  }, [checkModel, isChecked, isMultiple]);

  useDeepCompareEffect(() => {
    resetData(blockData);
  }, [JSON.stringify(blockData)]);

  useEffect(() => {
    if (backgroundType.image || fileCode) {
      setImgSrc(getAppFileUrlByFileCode(backgroundType.image || fileCode));
    }
  }, [backgroundType, src, fileCode]);
  const viewRef = useRef<HTMLDivElement>();
  const restStyle = useStyle(
    {
      ...props,
      src: imgSrc,
    },
    viewRef,
  );

  const placeholders = col === 1 ? 0 : col - ((myBlockData?.length ?? 0) % col);
  const list = [...(myBlockData || []), ...new Array(placeholders).fill(null)];
  // 选中数量
  const selectedNumber = values.length || 0;

  const swipActionClick = useMemo(() => {
    const myClickObject: any = {};
    swipeAction?.forEach((item: any) => {
      if (item.value) {
        myClickObject[item.value] = props?.[item.value];
      }
    });
    return myClickObject;
  }, [swipeAction]);

  const renderColumn = (item: any, i: any) => {
    const renderProps = {
      itemKey,
      indexKey,
      item,
      i,
      __render__: props.__render__,
      renderer,
      key: item[valueKey] ?? i,
      itemId: item[valueKey] ?? i,
      compId: props.$$componentItem.uid,
    };

    if (swipe && swipeAction?.length && status !== '3') {
      return (
        <MySwipe
          closeOnAction={closeOnAction}
          closeOnTouchOutside={closeOnTouchOutside}
          isEdit={false}
          swipeAction={swipeAction}
          getEngineApis={getEngineApis}
          $$componentItem={$$componentItem}
          rowData={item}
          index={i}
          swipActionClick={swipActionClick}
        >
          <MemoLoopItem {...renderProps} />
        </MySwipe>
      );
    }
    return <MemoLoopItem {...renderProps} />;
  };

  return (
    <div
      style={{ ...restStyle, ...wrapperStyle }}
      className={`${prefixCls}-blockSelectView ${className}`}
    >
      {checkModel === 'checkbox' && actionViewPosition === 'top' && (
        <ActionView
          {...props}
          allSelectAction={allSelectAction}
          selectAll={selectAll}
          selectedNumber={selectedNumber}
        />
      )}
      <div
        className={`${prefixCls}-blockSelectWrapper`}
        style={col > 1 ? { justifyContent: 'space-between' } : {}}
      >
        {list?.map((item: any, index: any) => {
          if (item === null) {
            const top = index < col ? 0 : space;
            // 占位图
            return (
              <div
                key={item?.[valueKey] || index}
                style={{
                  ...getItemStyle(false, top),
                  backgroundColor: 'transparent',
                }}
                className={`${prefixCls}-blockSelect`}
              />
            );
          }

          const checkBoxProps = getChildProps({
            index,
            restItem: myBlockData[index],
          });

          return myIsChecked ? (
            <CheckBox
              key={item[valueKey]}
              $$componentItem={props.$$componentItem}
              getEngineApis={getEngineApis}
              className="cust-icon-theme"
              iconPosition={iconPosition}
              defaultIcon={defaultIcon}
              onChange={onChange}
              selectIconColor={selectIconColor}
              normalIconColor={normalIconColor}
              {...checkBoxProps}
            >
              {renderColumn(item, index)}
            </CheckBox>
          ) : (
            <NoCheckBox
              key={item[valueKey]}
              $$componentItem={props.$$componentItem}
              getEngineApis={getEngineApis}
              {...checkBoxProps}
              onChange={onChange}
            >
              {renderColumn(item, index)}
            </NoCheckBox>
          );
        })}
      </div>
      {checkModel === 'checkbox' && actionViewPosition === 'bottom' && (
        <ActionView
          {...props}
          allSelectAction={allSelectAction}
          selectAll={selectAll}
          selectedNumber={selectedNumber}
        />
      )}
    </div>
  );
});

BlockSelect.displayName = 'BlockSelect';

export default BlockSelect;

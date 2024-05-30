/* eslint-disable no-nested-ternary */
import { Button, Checkbox, Popover, Tree, Divider, Tooltip } from 'antd';
import { Icon } from '@lingxiteam/icons';
import type { ButtonType } from 'antd/lib/button';
import classnames from 'classnames';
import React, { useMemo } from 'react';
import type { FunctionHandleType } from '../../Card';
import CommIconEg from '../../Icon';
import CommIconEd from '../../Icon/IconED';
import IconFont from '../../IconFont';
import { useLocale } from '../../utils/hooks/useLocale';

const prefix = 'table-head';
const { TreeNode } = Tree;

enum BtnSize {
  'default' = 'large',
  'middle' = 'default',
  'small' = 'small',
}
export interface MyTableHeadProps {
  showHead?: boolean;
  tableTitle?: string;
  showCustom?: any;
  customStyle?: ButtonType;
  customTitle?: string;
  type?: string;
  iconPosition?: string;
  isIconFont?: boolean;
  headExtends?: any[];
  theme?: 'filled' | 'outlined' | 'twoTone';
  fontAddress?: string;
  columns?: any[];
  onHeadClickBtn1?: FunctionHandleType;
  onHeadClickBtn2?: FunctionHandleType;
  onHeadClickBtn3?: FunctionHandleType;
  onHeadClickBtn4?: FunctionHandleType;
  onHeadClickBtn5?: FunctionHandleType;
  selectedCols?: any[];
  setSelectedCols?: any;
  setColOrder?: (value: React.SetStateAction<any[]>) => any | undefined;
  source: 'editor' | 'engine';
  size?: any;
  colOrder?: any[];
  iconFile?: any;
  headBtnNum?: number;
  sandBoxSafeRun?: any;
  engineApis?: any;
  getEdEngineApi?: any;
}
const TableHead: React.FC<MyTableHeadProps> = (props: any) => {
  const {
    showHead,
    tableTitle,
    source = 'editor',
    showCustom,
    headExtends,
    columns,
    setSelectedCols,
    selectedCols,
    setColOrder,
    onHeadClickBtn1,
    onHeadClickBtn2,
    onHeadClickBtn3,
    onHeadClickBtn4,
    onHeadClickBtn5,
    iconFile,
    colOrder,
    headBtnNum = 3,
    sandBoxSafeRun,
    engineApis,
  } = props;
  const CommIcon = source === 'editor' ? CommIconEd : CommIconEg;

  const { getLocale } = useLocale(engineApis);


  const {
    hasCustom = false,
    iconPosition,
    type,
    theme,
    fontAddress,
    isIconFont,
    customTitle,
    customStyle,
    iconFile: newIconFile,
  } = (!showCustom || typeof showCustom === 'boolean') ? {} as any : showCustom; // 兼容旧数据,旧数据是true、false、undefined

  const [checkedKeys, checkedMap] = useMemo(() => {
    const map: any = {};
    if (selectedCols === undefined) {
      return [
        columns?.map((c: any) => {
          map[c.dataIndex] = c;
          return c.dataIndex;
        }),
        map,
      ];
    }
    return [
      selectedCols.map((c: any) => {
        map[c] = c;
        return c;
      }),
      map,
    ];
  }, [selectedCols, columns]);

  const orderMap = useMemo(() => {
    const map: any = {};
    if (colOrder) {
      colOrder.forEach((c: any) => {
        map[c] = c;
      });
    }
    return map;
  }, [colOrder]);

  const renderExtendBtn = (_headExtends: any, isPopover = false, onClicks: FunctionHandleType[] = []) => {
    if (Array.isArray(_headExtends)) {
      // const onClicks = visibleClick.length ? visibleClick : [
      //   onHeadClickBtn1,
      //   onHeadClickBtn2,
      //   onHeadClickBtn3,
      //   onHeadClickBtn4,
      //   onHeadClickBtn5,
      // ] as FunctionHandleType[];
      return _headExtends.map((c, i) => {
        const {
          icon,
          iconPos,
          id,
          btnType,
          btnSize,
          isIcon,
          rule,
          visible: buttonVisible = true,
          disabled,
        } = c;
        const handleOnClick = (e: any) => {
          if (typeof onClicks[i] === 'function') {
            onClicks[i](e);
          }
        };
        const BtnIcon = icon ? (
          <Tooltip title={c.title}>
            <Button
              className={classnames('iconBtn', `table-head-btn-${btnSize || 'default'}`)}
              type="link"
              disabled={disabled}
              key={isIcon && id}
              size={btnSize}
              onClick={isIcon && handleOnClick}
            >
              <CommIcon
                icon={icon}
                className=""
                $$componentItem={props.$$componentItem}
                getEngineApis={props.getEngineApis}
                engineApis={engineApis}
                getEdEngineApi={props.getEdEngineApi}
              />
            </Button>
          </Tooltip>
        ) : undefined;
        if (source === 'engine') {
          try {
            if (sandBoxSafeRun(rule)) {
              return null;
            }
          } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e);
          }
        }

        return (
          <> {isPopover ? (
            <div>
              {
              buttonVisible ? (
                isIcon ? (
                  BtnIcon
                ) : (
                  <Button
                    type="link"
                    disabled={disabled}
                    key={id}
                    className={classnames('btn', `table-head-btn-${btnSize || 'default'}`)}
                    size={btnSize}
                    onClick={handleOnClick}
                  >
                    {iconPos && iconPos === 'left' && icon && <CommIcon
                      icon={icon}
                      className=""
                      $$componentItem={props.$$componentItem}
                      getEngineApis={props.getEngineApis}
                      engineApis={engineApis}
                      getEdEngineApi={props.getEdEngineApi}
                    />}
                    {c.title}
                    {iconPos && iconPos === 'right' && icon && <CommIcon
                      icon={icon}
                      className=""
                      $$componentItem={props.$$componentItem}
                      getEngineApis={props.getEngineApis}
                      engineApis={engineApis}
                      getEdEngineApi={props.getEdEngineApi}
                    />}
                  </Button>
                )
              ) : null
            }
            </div>) : (
            buttonVisible ? (
              isIcon ? (
                BtnIcon
              ) : (
                <Button
                  disabled={disabled}
                  key={id}
                  className={classnames('btn', `table-head-btn-${btnSize || 'default'}`)}
                  type={btnType}
                  size={btnSize}
                  onClick={handleOnClick}
                >
                  {iconPos && iconPos === 'left' && icon && <CommIcon
                    icon={icon}
                    className=""
                    $$componentItem={props.$$componentItem}
                    getEngineApis={props.getEngineApis}
                    engineApis={engineApis}
                    getEdEngineApi={props.getEdEngineApi}
                  />}
                  {c.title}
                  {iconPos && iconPos === 'right' && icon && <CommIcon
                    icon={icon}
                    className=""
                    $$componentItem={props.$$componentItem}
                    getEngineApis={props.getEngineApis}
                    engineApis={engineApis}
                    getEdEngineApi={props.getEdEngineApi}
                  />}
                </Button>
              )
            ) : null
          )}
          </>);
      });
    }
    return undefined;
  };
  const renderHeaderBtn = () => {
    if (Array.isArray(headExtends) && headExtends.length) {
      const onClicks = [
        onHeadClickBtn1,
        onHeadClickBtn2,
        onHeadClickBtn3,
        onHeadClickBtn4,
        onHeadClickBtn5,
      ] as FunctionHandleType[];
      const visibleClick: any = [];
      const visibleBtn: any = [];
      headExtends.forEach((item, index) => {
        if (item.visible !== false && item?.checked !== false) {
          visibleBtn.push(item);
          if (item?.value) {
            visibleClick.push(props[item?.value]); // 对应的value 直接获取扩展按钮当中对应的value
          } else {
            visibleClick.push(onClicks[index]); // 兼容旧数据
          }
        }
      });
      // if (headExtends.length <= headBtnNum) {
      //   return renderExtendBtn(headExtends, false, visibleClick);
      // } else {
      if (visibleBtn.length <= headBtnNum) {
        return renderExtendBtn(visibleBtn, false, visibleClick);
      }
      const tempList = [...visibleBtn];
      const preList = tempList.splice(0, headBtnNum);
      const preClick = visibleClick.splice(0, headBtnNum);
      const content = <div style={{ maxHeight: '300px', overflow: 'auto' }}>{renderExtendBtn(tempList, true, visibleClick)}</div>;
      return (
        <>
          {renderExtendBtn(preList, false, preClick)}
          <Divider type="vertical" />
          <Popover content={content} trigger="click">
            <Button
              type="link"
              key="more"
            >
              <div className="ued-table-actions-extendBtn">
                {getLocale?.('more')}
                <Icon className="actIcon-left" type="down" />
              </div>
            </Button>
          </Popover>
        </>);
        
      // }
    }
    return null;
  };
  const renderCustomContent = () => {
    return (
      <Tree
        selectable={false}
        onCheck={(keys) => {
          setSelectedCols(keys);
        }}
        draggable={{ icon: false }}
        onDrop={({ dragNodesKeys, dropPosition, node }) => {
          const { dragOverGapTop = false } = (node as any)?.props || {};
          if (typeof setColOrder === 'function') {
            setColOrder((pre: any) => {
              let orders: string[] = [...pre];
              // 旧顺序列表为空时，表示是采用原始顺序
              if (pre.length === 0) {
                orders = columns?.map((c: any) => c.dataIndex) || [];
              }
              if (pre.length !== columns?.length) {
                // 前后顺序列表不一致时，表格列发生变化
                const extendCols: any[] = [];
                columns?.forEach((col: any) => {
                  if (!orderMap[col.dataIndex]) {
                    extendCols.push(col.dataIndex);
                  }
                });
                orders = orders.filter((o) => orderMap[o]).concat(extendCols);
              }
              const index = orders.findIndex((o) => o === dragNodesKeys[0]);
              const dropPos = dropPosition + (dragOverGapTop ? 1 : 0);
              if (index === dropPos) {
                return orders;
              }
              if (index > dropPos) {
                orders.splice(index, 1);
                orders.splice(dropPos, 0, dragNodesKeys[0] as string);
              } else {
                orders.splice(dropPos, 0, dragNodesKeys[0] as string);
                orders.splice(index, 1);
              }
              return orders;
            });
          }
        }}
      >
        {columns?.map((col: any) => (
          <TreeNode
            selectable={false}
            title={
              <div className="title">
                <div className="icon">
                  <IconFont width={16} height={16} iconClass="lcdp-icon-tuozhuai" />
                </div>
                <Checkbox
                  checked={checkedMap[col.dataIndex] !== undefined}
                  className="checkbox"
                  onChange={(e) => {
                    if (typeof setSelectedCols === 'function') {
                      setSelectedCols(() => {
                        if (e.target.checked) {
                          return [...(checkedKeys || []), col.dataIndex];
                        }
                        return (checkedKeys || []).filter((co: any) => co !== col.dataIndex);
                      });
                    }
                  }}
                />
                {checkedMap[col.dataIndex] ? <a>{col.originTitle}</a> : col.originTitle}
              </div>
            }
            key={col.dataIndex}
          />
        ))}
      </Tree>
    );
  };

  const renderCustomBtn = () => {
    const Btn = (
      <Button
        type={customStyle}
        size={(BtnSize as any)[props?.size || 'middle']}
        className={classnames('btn', `table-head-btn-${props.size}`)}
      >
        {iconPosition && iconPosition === 'left' && (
          <CommIcon
            icon={{
              type,
              theme,
              isIconFont,
              fontAddress,
              iconFile: iconFile || newIconFile,
            }}
            getEngineApis={props.getEngineApis}
            $$componentItem={props.$$componentItem}
            className=""
            getEdEngineApi={props.getEdEngineApi}
          />
        )}
        {customTitle}
        {iconPosition && iconPosition === 'right' && (
          <CommIcon
            icon={{
              type,
              theme,
              isIconFont,
              fontAddress,
              iconFile: iconFile || newIconFile,
            }}
            getEngineApis={props.getEngineApis}
            $$componentItem={props.$$componentItem}
            className=""
            getEdEngineApi={props.getEdEngineApi}
          />
        )}
      </Button>
    );
    if (source === 'engine') {
      return (
        <Popover
          overlayClassName={`${prefix}-popContent`}
          trigger="click"
          content={renderCustomContent()}
          placement="bottomRight"
          title={
            <>
              <div className="popHead">
                <span>
                  {getLocale?.('Table.headCol')}
                  <a>({checkedKeys?.length})</a>
                </span>
                <a
                  className="extend"
                  onClick={() => {
                    setSelectedCols(columns?.map((c: any) => c.dataIndex));
                    setColOrder([]);
                  }}
                >
                  {getLocale?.('reset') || '重置'}
                </a>
              </div>
              <span className="tips">{getLocale?.('Table.headTips')}</span>
            </>
          }
        >
          {Btn}
        </Popover>
      );
    }
    return Btn;
  };

  return showHead ? (
    <div className={classnames(prefix, `${prefix}-${props.size}`)}>
      <div className={classnames('title', `${prefix}-title`)}>{tableTitle}</div>
      <div className="extend">
        {renderHeaderBtn()}
        {(typeof showCustom === 'boolean' ? showCustom : hasCustom) && renderCustomBtn()}
      </div>
    </div>
  ) : null;
};

export default TableHead;

/**
 * 组件渲染前预处理逻辑(运行态生效)
 */
import { ProcessFunctionType } from '@lingxiteam/types';
import { isObject } from 'lodash';
import comPc from './index.enCommonPreprocess';

/**
 * 移除 表达式两头包裹的 $$
 * 请注意，这里的目的是：一些特殊属性配置需要保留“表达式的内容“，防止携带 $$ 会在 DSL解析时，在 processProps 被解析掉
 */
const removeExpressWrapper = (exp: string) =>
  /^\$.*\$$/g.test(exp) ? exp.replace(/\$/g, '') : exp;

/**
 * 处理选项设置属性的垃圾dsl
 * @param originProp
 */
const handleStaticData = (originProps: any) => {
  if (originProps?.attr?.attrNbr) {
    originProps.staticData = {};
    originProps.attr.selectedKeyTags = undefined;
    originProps.staticData.data = originProps.attr;
    originProps.staticData.type = 'static';
    delete originProps.attr;
  } else if (originProps?.options) {
    originProps.staticData = {};
    originProps.staticData.data = originProps.options;
    originProps.staticData.type = 'custom';
    delete originProps.options;
  } else if (originProps?.valName) {
    originProps.staticData = {};
    originProps.staticData.data = originProps?.valName;
    originProps.staticData.type = 'val';
    delete originProps.valName;
  } else if (originProps?.staticDataSourceService?.dataSource) {
    originProps.staticData = {};
    originProps.staticData.data = originProps?.staticDataSourceService;
    originProps.staticData.type = 'dataSource';
    delete originProps.staticDataSourceService;
  } else if (originProps?.staticService) {
    originProps.staticData = {};
    originProps.staticData.data = originProps?.staticService;
    originProps.staticData.type = 'service';
    delete originProps.staticService;
  }
};

/**
 * 组件渲染前预处理逻辑(运行态生效)
 * 请注意，这个会和index.enCommonPreprocess 合并导出，如果存在相同的key，会被覆盖。
 */
const pc: { [key: string]: ProcessFunctionType } = {
  '*': (compDSL) => {
    const { props: originProps = {} } = compDSL;

    // @note: 所有组件各自处理自己的展开逻辑
    // 扩展属性平铺
    const _extendProps = originProps.extendProps;
    if (_extendProps) {
      const extendProps = {};
      _extendProps.forEach((p: Record<string, any>) => {
        originProps[p.key] = p.value;
      });
      originProps.extendProps = extendProps;
    }

    return compDSL;
  },
  Text: (compDSL, extraData) => {
    const { props: originProps = {} } = compDSL;
    //
    if (originProps.textReg?.attr?.attrNbr) {
      const staticVar = extraData?.collectRelationKey(
        compDSL.id,
        originProps.textReg?.attr?.attrNbr,
      );

      /**
       * 如果有静态数据，增加attrNbrInfo给组件
       */
      originProps.textReg.attrNbrInfo = staticVar;
    }
    return compDSL;
  },
  // CheckboxGroup 还需要重写改造，丢弃无用的属性，统一datasoure
  'Select|MultipleSelect|Radio|CheckboxGroup|Cascader': (
    compDSL,
    extraData,
  ) => {
    const { props: originProps = {}, compName } = compDSL;
    handleStaticData(originProps);
    if (originProps.staticData?.type === 'static') {
      // 上报静态数据关联关系
      const staticVar = extraData?.collectRelationKey(
        compDSL.id,
        originProps?.staticData?.data?.attrNbr,
        originProps?.staticData?.data?.childKeys,
      );
      originProps.dataSource = staticVar;
      if (compName === 'Cascader') {
        originProps.onClickStaticOption = async (zattrNbrValueMap: any) => {
          const zattrNbrs = Object.keys(zattrNbrValueMap);
          if (zattrNbrs.length) {
            const res = await extraData?.getStaticAttrByKeys(
              zattrNbrs,
              zattrNbrValueMap,
            );
            return res;
          }
          return [];
        };
      }
    } else if (originProps.staticData?.type === 'custom') {
      originProps.dataSource = originProps.staticData.data;
    } else if (originProps.staticData?.type === 'val') {
      originProps.dataSource = originProps.staticData.data;
    } else if (originProps.staticData?.type === 'dataSource') {
      const ds = originProps.staticData?.data?.dataSource.replace(/\$/g, '');
      originProps.dataSource = `$getStaticDataSourceService(${ds}, "${originProps.staticData?.data?.labelKey}", "${originProps.staticData?.data?.valueKey}")$`;
    } else if (originProps.staticData?.type === 'service') {
      // 目前应该已经没有service了
      originProps.dataSource = originProps.staticData.data;
    }
    delete originProps.staticData;
    return compDSL;
  },
  'Table|TreeTable|Description': (compDSL, extraData: any) => {
    const { props: originProps = {} } = compDSL;

    const originColumns = originProps?.columns;

    if (originColumns && Array.isArray(originColumns)) {
      originColumns.forEach((col) => {
        // 字段翻译配置
        if (col?.attr?.attrNbr) {
          // 静态编码
          // 上报静态编码，返回静态数据字段，拼接表达式
          const staticVar = extraData?.collectRelationKey(
            compDSL.id,
            col.attr.attrNbr,
            col.attr.childKeys,
          );
          col.staticDataSource = staticVar;
          delete col.attr;
        } else if (col?.options?.length) {
          // 自定义
          col.staticDataSource = col.options;
          delete col.options;
        } else if (col?.staticService) {
          col.staticService = {
            // 选择服务
            labelKey: col.staticService.labelKey,
            valueKey: col.staticService.valueKey,
          };
        } else if (col?.valName) {
          // 输入变量
          col.staticDataSource = col.valName;
          delete col.valName;
        }

        // 单元格提示 -> 气泡卡片
        const editContentSelectOption = col?.editContent?.selectoption;
        if (
          editContentSelectOption &&
          col?.editContent?.edittype === 'Popover'
        ) {
          const editContentSelectOptionRule =
            editContentSelectOption?.options?.rule;
          const editContentSelectOptionContent =
            editContentSelectOption?.options?.content;
          const editContentSelectOptionPageRule =
            editContentSelectOption?.page?.rule;

          // 自定义，隐藏规则
          if (editContentSelectOptionRule) {
            col.editContent.selectoption.options.rule = removeExpressWrapper(
              editContentSelectOptionRule,
            );
          }

          // 自定义，输入内容
          if (editContentSelectOptionContent) {
            col.editContent.selectoption.options.content = removeExpressWrapper(
              editContentSelectOptionContent,
            );
          }

          // 页面，隐藏规则
          if (editContentSelectOptionPageRule) {
            col.editContent.selectoption.page.rule = removeExpressWrapper(
              editContentSelectOptionPageRule,
            );
          }

          // 页面，组件状态配置
          if (editContentSelectOption?.page?.options?.length) {
            col.editContent.selectoption.page.options =
              editContentSelectOption?.page?.options.map((option: any) => {
                // 旧逻辑中，会存在表达式被 JSON.stringify 转义的情况，所以需要判断
                const stateParam = /^('|")\$.*\$('|")$/.test(option.stateParam)
                  ? JSON.parse(option.stateParam)
                  : option.stateParam;

                if (stateParam) {
                  option.stateParam = removeExpressWrapper(stateParam);
                }
                return option;
              });
          }
        }

        if (col.jsx) {
          try {
            // jsx时 删除多余的节点，减少运行时解析数据过渡递归
            delete col.originCustomRendering;
          } catch (error) {
            console.log(error);
          }
        }
        // 单元格内容 -> 自定义函数
        col.customRendering = removeExpressWrapper(col.customRendering);
      });
    }
    return compDSL;
  },
  ModalSelect: (compDSL) => {
    const { props: originProps = {} } = compDSL;

    // 处理得到真正的dataSource
    if (originProps?.options) {
      // 自定义的
      originProps.dataSource = originProps.options;
    }

    return compDSL;
  },
  Card: (compDSL) => {
    const { props: originProps = {} } = compDSL;

    originProps.style = compDSL.style;

    return compDSL;
  },
  Form: (compDSL, extraData) => {
    const { props: originProps = {} } = compDSL;

    if (originProps.formCode) {
      originProps['data-formcode'] = originProps.formCode;
    }

    // 存在业务对象规则
    if (
      compDSL?.busiObjectId &&
      extraData.initialRuleMap?.[compDSL.busiObjectId]
    ) {
      const attrs = extraData.initialRuleMap?.[compDSL.busiObjectId];
      const attrMap: any = {};
      attrs.forEach((el: any) => {
        attrMap[el.attrCode] = el;
      });
      compDSL.components?.forEach((childComp: any = {}) => {
        const { props, compName } = childComp;
        const { fieldName } = props || {};
        if (fieldName && attrMap[fieldName]) {
          const { isRequired, checkCode, checkMessage, isReadonly, isHidden } =
            attrMap[fieldName];
          // 事件控制显隐时，不修改hidden的值，直接修改visible的值，为了在渲染时事件控制显隐与hidden的不可控，直接修改!hidden为visible
          [props.disabled, props.readOnly, props.visible, props.required] = [
            isReadonly,
            isReadonly,
            isHidden ? !isHidden : props?.visible,
            isRequired && !isHidden,
          ];
          // [props.disabled, props.readOnly, props.hidden, props.required] = [isReadonly, isReadonly, isHidden, isRequired && !isHidden];
          if (compName === 'Input' && checkCode) {
            if (Array.isArray(props.regexp)) {
              !props.regexp.find((i: any) => i.pattern === checkCode) &&
                props.regexp.unshift({
                  pattern: checkCode.substring(1, checkCode.length - 1),
                  message: checkMessage || '格式不正确',
                });
            } else {
              [props.regexp, props.message] = [
                checkCode.substring(1, checkCode.length - 1),
                checkMessage || '格式不正确',
              ];
            }
          }
        }
      });
    }
    // TODO 根据对象业务规则配置特殊处理子表单
    return compDSL;
  },
  BOFramer: (compDSL) => {
    const { props: originProps = {} } = compDSL;

    if (originProps?.busiCompStates) {
      const newData: any = {};
      Object.keys(originProps.busiCompStates).forEach((key) => {
        if (originProps.busiCompStates[key]) {
          newData[key] = originProps.busiCompStates[key];
        }
      });
      originProps.busiCompStates = newData;
    }
    return compDSL;
  },
  Radio: (compDSL) => {
    const { props: originProps = {} } = compDSL;

    if (originProps?.defaultOptions?.length > 0) {
      originProps.defaultOptions = originProps.defaultOptions.map(
        (item: any) => ({ label: item.name, value: item.code }),
      );
    }

    return compDSL;
  },
  'Select|MultipleSelect': (compDSL) => {
    const { props: originProps = {}, functors = {} } = compDSL;

    // JSX渲染
    if (originProps?.customRenderLabel?.jsx) {
      const { jsx, targetVal } = originProps?.customRenderLabel;
      originProps.customRenderLabel = {
        jsx,
        targetVal: removeExpressWrapper(targetVal),
      };
    } else if (originProps?.customRenderLabel?.code) {
      originProps.customRenderLabel.code = removeExpressWrapper(
        originProps.customRenderLabel.code,
      );
    } else if (originProps?.customRenderLabel) {
      originProps.customRenderLabel = removeExpressWrapper(
        functors?.customRenderOption?.value || originProps.customRenderLabel,
      );
      if (functors?.customRenderOption) {
        delete functors.customRenderLabel;
      }
    }

    // JSX渲染
    if (originProps?.customRenderOption?.jsx) {
      const { jsx, targetVal } = originProps?.customRenderOption;
      // 只保留jsx、targetVal用来渲染，配置态的保存数据不需要使用
      originProps.customRenderOption = {
        jsx,
        targetVal: removeExpressWrapper(targetVal),
      };
    } else if (originProps?.customRenderOption?.code) {
      originProps.customRenderOption.code = removeExpressWrapper(
        originProps.customRenderOption.code,
      );
    } else if (originProps?.customRenderOption) {
      originProps.customRenderOption = removeExpressWrapper(
        functors?.customRenderOption?.value || originProps.customRenderOption,
      );
      if (functors?.customRenderOption) {
        delete functors.customRenderOption;
      }
    }

    return compDSL;
  },
  TabPane: (compDSL) => {
    const { props: originProps = {}, functors = {} } = compDSL;
    if (
      isObject(originProps?.badgeRendering) &&
      originProps?.badgeRendering?.jsx
    ) {
      const { jsx, targetVal } = originProps?.badgeRendering;
      originProps.badgeRendering = {
        jsx,
        targetVal: removeExpressWrapper(targetVal),
      };
    } else if (originProps?.badgeRendering) {
      originProps.badgeRendering = removeExpressWrapper(
        functors?.badgeRendering?.value || originProps.badgeRendering,
      );
      if (functors?.badgeRendering) {
        delete functors.badgeRendering;
      }
    }

    return compDSL;
  },
  Tree: (compDSL) => {
    const { props: originProps = {}, functors = {} } = compDSL;

    if (
      typeof originProps?.customRenderCode === 'object' &&
      originProps?.customRenderCode?.jsx
    ) {
      originProps.customRenderCode.targetVal = removeExpressWrapper(
        originProps.customRenderCode.targetVal,
      );
      try {
        delete originProps.customRenderCode.funVal;
      } catch (error) {
        console.log(error);
      }
    } else if (originProps?.customRenderCode?.code) {
      originProps.customRenderCode.code = removeExpressWrapper(
        originProps.customRenderCode.code,
      );
    } else if (originProps?.customRenderCode) {
      originProps.customRenderCode = removeExpressWrapper(
        functors?.customRenderCode?.value || originProps.customRenderCode,
      );
      if (functors?.customRenderCode) {
        delete functors.customRenderCode;
      }
    }

    return compDSL;
  },
  'Table|TreeTable': (compDSL, extraData) => {
    const { props: originProps = {}, style, functors = {} } = compDSL;

    // 覆盖rowActions/extend内的rule表达式配置
    if (originProps.extend) {
      originProps.extend.forEach((_action: any) => {
        if (typeof _action.rule === 'string') {
          const stringrule = _action.rule;
          _action.rule = removeExpressWrapper(stringrule);
        }
        if (typeof _action.disabled === 'string') {
          const stringdisabled = _action.disabled;
          _action.disabled = removeExpressWrapper(stringdisabled);
        }
      });
    }

    if (originProps.rowActions) {
      originProps.rowActions.forEach((_action: any) => {
        if (typeof _action.rule === 'string') {
          const stringrule = _action.rule;
          _action.rule = removeExpressWrapper(stringrule);
        }
        if (typeof _action.disabled === 'string') {
          const stringdisabled = _action.disabled;
          _action.disabled = removeExpressWrapper(stringdisabled);
        }
      });
    }

    if (typeof originProps.showCustom === 'boolean') {
      // 旧数据
      const {
        iconPosition,
        type,
        theme,
        fontAddress,
        isIconFont,
        customTitle,
        customStyle,
        iconFile,
        showCustom,
      } = originProps;
      originProps.showCustom = {
        iconPosition,
        type,
        theme,
        fontAddress,
        isIconFont,
        customTitle,
        customStyle,
        iconFile,
        hasCustom: showCustom,
      };
      delete originProps.iconPosition;
      delete originProps.type;
      delete originProps.theme;
      delete originProps.fontAddress;
      delete originProps.isIconFont;
      delete originProps.customTitle;
      delete originProps.customStyle;
      delete originProps.iconFile;
    }

    const originColumns = originProps?.columns;

    originProps.rowKey = originProps?.rowKey?.split('.')?.pop();

    if (originColumns && Array.isArray(originColumns)) {
      originColumns.forEach((col) => {
        /**
         * 1、兼容存量没有 editContent 情况：默认改为 -> 提示方式为默认提示 -> 提示内容为初始数据
         * 2、false 假值表示：提示方式为无
         */
        // if (
        //   !col?.editContent &&
        //   typeof col?.editContent !== 'boolean'
        // ) {
        //   col.editContent = {
        //     edittype: 'title',
        //     title: {
        //       code: '$function main(text, row, index) { return text;}$',
        //       originCode: [
        //         '/**',
        //         ' * 计算绑定的内容',
        //         ' * @param {String} text 行数据中数据字段翻译后的内容',
        //         ' * @param {Object} row 行数据对象',
        //         ' * @param {Number} index 行索引',
        //         ' * @returns {Boolean} 实际值',
        //         ' * 例：return row.id，表示当行主键为id时，返回内容为row.id实际的值',
        //         ' */',
        //         'function main(text, row, index) {',
        //         '    return text;',
        //         '}',
        //       ],
        //     },
        //   };
        // }
        if (col.customRendering === undefined) {
          delete col.customRendering;
        }
        // 编辑格式（下拉选项）配置
        if (col?.editoption?.selectoption?.attr?.attrNbr) {
          // 静态编码
          // 上报静态编码，返回静态数据字段，拼接表达式
          const staticVar = extraData?.collectRelationKey(
            compDSL.id,
            col.editoption.selectoption.attr.attrNbr,
            col.editoption.selectoption.attr.childKeys,
          );
          col.editoption.selectoption.options = staticVar;
          col.staticDataSource = staticVar;

          // delete col.editoption.selectoption.attr;
        } else if (col?.editoption?.selectoption?.valName) {
          // 输入变量
          const _valName = col.editoption.selectoption.valName;
          col.editoption.selectoption.valName = removeExpressWrapper(_valName);
        }

        // 编辑格式，列可编辑规则
        const editable = col?.editoption?.editable;
        if (editable) {
          col.editoption.editable = removeExpressWrapper(editable);
        }

        // 弹窗选择，props时过滤不处理
        const responseObj = col?.editoption?.modalInfo?.responseObj;
        if (responseObj) {
          col.editoption.modalInfo.responseObj = responseObj.map(
            (obj: any) => ({
              ...obj,
              value: removeExpressWrapper(obj.value),
            }),
          );
        }

        // 处理内容列-单元格提示 -> 默认提示
        if (
          col?.editContent?.edittype === 'title' &&
          col?.editContent?.title?.code
        ) {
          col.editContent.title.code = removeExpressWrapper(
            col.editContent.title.code,
          );
        }

        // 处理内容列-单元格内容-自定义配置-点击设置
        if (col?.colorFormatInfo?.length) {
          col.colorFormatInfo = col.colorFormatInfo.map((styleCfg: any) => {
            if (typeof styleCfg?.content?.code === 'string') {
              styleCfg.content.code = removeExpressWrapper(
                styleCfg.content.code,
              );
            }

            if (typeof styleCfg?.filename?.code === 'string') {
              styleCfg.filename.code = removeExpressWrapper(
                styleCfg.filename.code,
              );
            }

            if (typeof styleCfg?.fileIds?.code === 'string') {
              styleCfg.fileIds.code = removeExpressWrapper(
                styleCfg.fileIds.code,
              );
            }

            if (typeof styleCfg?.downloadUrl?.code === 'string') {
              styleCfg.downloadUrl.code = removeExpressWrapper(
                styleCfg.downloadUrl.code,
              );
            }

            // 页面跳转-URL参数
            const originSearchParams = styleCfg?.page?.searchParams;
            if (originSearchParams) {
              const newSearchParams: any = {};
              Object.keys(originSearchParams).forEach((key) => {
                if (typeof originSearchParams[key] === 'string') {
                  newSearchParams[key] = removeExpressWrapper(
                    originSearchParams[key],
                  );
                }
              });

              styleCfg.page.searchParams = newSearchParams;
              return styleCfg;
            }

            // 打开弹窗-组件状态
            const originCompStates = styleCfg?.modal?.compStates;
            if (originCompStates) {
              const newCompStates: any = {};
              Object.keys(originCompStates).forEach((key) => {
                if (typeof originCompStates[key] === 'string') {
                  newCompStates[key] = removeExpressWrapper(
                    originCompStates[key],
                  );
                }
              });

              styleCfg.modal.compStates = newCompStates;
              return styleCfg;
            }

            return styleCfg;
          });
        }

        // 处理内容列-标题提示-提示内容
        if (col?.titleTip?.content?.code) {
          col.titleTip.content.code = removeExpressWrapper(
            col.titleTip.content.code,
          );
        }
      });
    }

    // 标识表格是否绑定了数据源
    if (originProps?.dataSource?.startsWith('$data.')) {
      originProps.dataSourceFromDataSourceConfig = originProps.dataSource.slice(
        1,
        originProps.dataSource.length - 1,
      );
    }

    // 处理行禁用规则
    if (typeof originProps.rowSelectionDisabled === 'string') {
      originProps.rowSelectionDisabled = removeExpressWrapper(
        functors?.rowSelectionDisabled?.value ||
          originProps.rowSelectionDisabled,
      );
      if (functors.rowSelectionDisabled) {
        delete functors.rowSelectionDisabled;
      }
    }

    // 处理行编辑规则
    if (typeof originProps.rowEditableRule === 'string') {
      originProps.rowEditableRule = removeExpressWrapper(
        functors?.rowEditableRule?.value || originProps.rowEditableRule,
      );
      if (functors.rowEditableRule) {
        delete functors.rowEditableRule;
      }
    }

    // 处理行展开扩展内容生效规则
    if (typeof originProps.rowExpandable === 'string') {
      originProps.rowExpandable = removeExpressWrapper(
        functors?.rowExpandable?.value || originProps.rowExpandable,
      );
      if (functors.rowExpandable) {
        delete functors.rowExpandable;
      }
    }

    // 处理行展开扩展内容业务组件的状态
    if (Array.isArray(originProps?.expandComponents)) {
      originProps.expandComponents.forEach((c: any) => {
        const busiCompStates = c?.props?.busiCompStates;
        if (
          typeof busiCompStates === 'object' &&
          !Array.isArray(busiCompStates)
        ) {
          const busiCompStatesKeys = Object.keys(busiCompStates);
          const newBusiCompStates: any = {};
          busiCompStatesKeys.forEach((k) => {
            newBusiCompStates[k] = removeExpressWrapper(busiCompStates[k]);
          });

          c.props.busiCompStates = newBusiCompStates;
        }
      });
    }

    originProps.style = style;

    if (
      !originProps.scroll ||
      (originProps.scroll &&
        !originProps.scroll.x &&
        !originProps.scroll.y &&
        !String(originProps.scroll).match(/^\$[^$]+\$$/))
    ) {
      delete originProps.scroll;
    }

    return compDSL;
  },
  'ChartLine|ChartBar': (compDSL) => {
    const { props: originProps = {}, functors = {} } = compDSL;

    if (typeof originProps?.lineBarMap === 'string') {
      originProps.lineBarMap = removeExpressWrapper(
        functors?.lineBarMap?.value || originProps.lineBarMap,
      );
      if (functors?.lineBarMap) {
        delete functors.lineBarMap;
      }
    }
    return compDSL;
  },
  ChartBar: (compDSL) => {
    const { props: originProps = {}, functors = {} } = compDSL;

    if (typeof originProps?.stacked === 'string') {
      originProps.stacked = removeExpressWrapper(
        functors?.stacked?.value || originProps.stacked,
      );
      if (functors?.stacked) {
        delete functors.stacked;
      }
    }
    return compDSL;
  },
  Transfer: (compDSL) => {
    const { props: originProps = {} } = compDSL;

    // table下自定义渲染
    if (
      originProps.displayStyle === 'table' &&
      Array.isArray(originProps.columns)
    ) {
      originProps.columns = originProps.columns.map((col: any) => {
        // jsx自定义渲染 需要把数据去掉
        if (col.jsx) {
          return {
            ...col,
            originCustomRendering: null,
            customRendering: removeExpressWrapper(col.customRendering),
          };
        }
        return col;
      });
    }
    return compDSL;
  },
  DynamicTabs: (compDSL) => {
    const { props: originProps = {} } = compDSL;
    // 将标签页的自定义渲染的 badgeRendering中的$$去掉，防止被提前转换
    if (Array.isArray(originProps.tabItems)) {
      originProps.tabItems = originProps.tabItems.map(
        (tab: {
          badgeRendering: string;
          jsx: { key: string };
          originCustomRendering: string;
        }) => {
          tab.badgeRendering = removeExpressWrapper(tab.badgeRendering);
          if (tab?.jsx) {
            // 运行态渲染jsx不需要原代码，清除后可加速属性转化速度
            tab.originCustomRendering = '';
          }
          return tab;
        },
      );
    }
    return compDSL;
  },
  ...comPc,
};

export default pc;

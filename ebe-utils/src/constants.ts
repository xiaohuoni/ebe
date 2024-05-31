import { removeObjectByRules } from './index';
import { IRulesType } from './types';
const isTrue = {
  rule: () => true,
};
const componentsRule: IRulesType = {
  View: {
    rule: ({ value, diffraction }) => {
      if (value?.components) {
        return removeObjectByRules(value, lingxiDslRules);
      }
    },
  },
  TabPane: {
    rule: ({ value, diffraction }) => {
      if (value?.components) {
        return removeObjectByRules(value, lingxiDslRules);
      }
    },
  },
  Tabs: {
    rule: ({ value, diffraction }) => {
      if (value?.components) {
        return removeObjectByRules(value, lingxiDslRules);
      }
    },
  },
  Card: {
    rule: ({ value, diffraction }) => {
      if (value?.components) {
        return removeObjectByRules(value, lingxiDslRules);
      }
    },
  },
  Condition: {
    rule: ({ value, diffraction }) => {
      if (value?.components) {
        return removeObjectByRules(value, lingxiDslRules);
      }
    },
  },
  Collapse: {
    rule: ({ value, diffraction }) => {
      if (value?.components) {
        return removeObjectByRules(value, lingxiDslRules);
      }
    },
  },
  Layout: {
    rule: ({ value, diffraction }) => {
      if (value?.components) {
        return removeObjectByRules(value, lingxiDslRules);
      }
    },
  },
  Icon: {
    rule: ({ diffraction }) => {
      return diffraction?.({ props: { name: '图标' } });
    },
  },
  Button: {
    rule: ({ diffraction }) => {
      return diffraction?.({
        props: {
          classification: 'default',
          flowProcessResult: 'common',
          size: 'default',
          type: 'default',
          shape: 'default',
          btnIcon: 'none',
          loading: (data: any) => data.loading === false,
          ghost: false,
          block: false,
          hasIcon: false,
        },
      });
    },
  },
  Text: {
    rule: ({ diffraction }) => {
      return diffraction?.({
        props: {
          showHtml: false,
        },
      });
    },
  },
  Table: {
    // rule: ({ value }) => {
    //   return {
    //     ...value,
    //     props: removeObjectByRules(value.props, {
    //       columns: {
    //         loopRule: (item) => 'item',
    //         loop: {
    //           item: {
    //             customRendering: {
    //               rule: ({ value }: any) => {
    //                 return value === 'undefined';
    //               },
    //             },
    //             editContent:{
    //               rule: ({ value }: any) => {
    //                 return value.edittype === 'remove';
    //               },
    //             },
    //           } as IRulesType,
    //         },
    //       },
    //     }),
    //   };
    // },
    rule: ({ diffraction }) => {
      const value = diffraction?.({
        props: {
          tableTitle: (value: { showHead: boolean }) => {
            return value.showHead !== false;
          },
          showHead: false,
          showSizeChanger: false,
          showQuickJumper: false,
          dataSourceLoading: false,
          showTotal: false,
          page: false,
          isFlexColumn: false,
          checkLoosed: false,
          fixedAction: false,
          headExtends: (value: any) => {
            return (
              Array.isArray(value.headExtends) && value.headExtends.length === 0
            );
          },
          extend: (value: any) => {
            return Array.isArray(value.extend) && value.extend.length === 0;
          },
          headBtnNum: 3,
        },
      });
      return value;
    },
  },
};

export const lingxiDslRules: IRulesType = {
  editorVersion: isTrue,
  createdEditorVersion: isTrue,
  terminalType: isTrue,
  platformType: isTrue,
  imgInfoList: isTrue,
  defaultVersionId: isTrue,
  currentPageVersionId: isTrue,
  previewValidVersionId: isTrue,
  components: {
    loopRule: (item) => item.compName,
    loop: componentsRule,
  },
};

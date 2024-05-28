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
  Icon: {
    rule: ({ diffraction }) => {
      return diffraction?.({ props: { name: '图标' } });
    },
  },
  Button: {
    rule: ({ diffraction }) => {
      return diffraction?.({ props: { size: 'default', type: 'default' } });
    },
  },
  Table: {
    rule: ({ value }) => {
      return {
        ...value,
        props: removeObjectByRules(value.props, {
          columns: {
            loopRule: (item) => 'item',
            loop: {
              item: {
                customRendering: isTrue,
                editContent: isTrue,
              } as IRulesType,
            },
          },
        }),
      };
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

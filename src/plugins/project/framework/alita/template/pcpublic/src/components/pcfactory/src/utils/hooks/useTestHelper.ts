interface TestHelperOptions {
  fieldName?: string;
  disabled?: boolean;
  // value: any;
}

export const toString = (val: any) => {
  if (!val) {
    return val;
  }

  if (typeof val === 'object') {
    return JSON.stringify(val);
  }

  return val;
};

export const getTestHelperProps = (props: TestHelperOptions) => {
  const { fieldName, disabled } = props;
  return {
    'aria-label': fieldName,
    // 'aria-valuetext': value,
    'aria-disabled': disabled,
  };
};

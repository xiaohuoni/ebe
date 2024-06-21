export const isJSX = (customCode: any) => {
  return (
    customCode &&
    typeof customCode === 'object' &&
    customCode.jsx &&
    typeof customCode.jsx === 'object'
  );
};

export const getSvgImageBase64 = (text: string) => {
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(text)}`;
  };
  
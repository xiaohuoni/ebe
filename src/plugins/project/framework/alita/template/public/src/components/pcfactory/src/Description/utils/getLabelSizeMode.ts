const getLabelSizeMode = (config: any) => {
  const { tagSize, tagWidth, labelWidth, labelSize, colSpan, span } = config || {};
  let width = tagSize;
  if (!width && (tagWidth || labelWidth)) {
    width = `${(tagWidth || labelWidth)}px`;
  }
  if (!width) {
    width = labelSize;
  }
  if (/^\d+(\.\d+)?px$/.test(width)) {
    return {
      mode: 'px',
      width,
      contentWidth: 'auto',
    };
  } if (/^(1\d|24|[1-9])$/.test(width)) {
    return {
      mode: 'grid',
      width: `${(width / 24) * 100}%`,
      contentWidth: `${((24 - width) / 24) * 100}%`,
    };
  } if (/^(?!0\/0)\d+\/(?!0)\d+$/.test(width)) {
    const currentSpan = span || colSpan;
    // 占比值为分数形式
    // eslint-disable-next-line no-eval
    width = eval(`${width}*24`);
    const contentWidth = currentSpan - width;
    return {
      mode: 'fraction',
      width: `${(width / currentSpan) * 100}%`,
      contentWidth: `${(contentWidth / currentSpan) * 100}%`,
    };
  }
  return undefined;
};

export default getLabelSizeMode;

import { useEffect, useRef, useState } from 'react';

const TabImage = (props: any) => {
  const {
    defaultIcon,
    selectedIcon,
    isSelected,
    titleColor,
    selectedTitleColor,
    getAppFileUrlByFileCode,
    ...restProps
  } = props;
  const [src, setSrc] = useState<any>();
  const myImage = useRef<any>({});

  const downloadImage = (fileCode: string, activityIcon: boolean) => {
    if (fileCode.length > 0) {
      (async () => {
        try {
          const url = getAppFileUrlByFileCode(fileCode);
          const xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.responseType = 'blob'; // 设置接受类型
          xhr.timeout = 10000;
          xhr.onload = () => {
            // @ts-ignore
            let data = xhr?.response; // 获取响应体数据
            const type = xhr?.response?.type || '';
            // 只有图片格式才进行处理
            if (type.includes('image/')) {
              // svg格式
              if (type.includes('svg')) {
                const reader = new FileReader();
                reader.readAsText(data);
                reader.onload = () => {
                  // 转换成svg domstring
                  data = reader.result;
                  if (activityIcon) {
                    myImage.current.selected = { type: 'svg', data };
                  } else {
                    // 只设置了默认图标，且图片格式为svg, 此时选中图标也改为该图标，填充颜色跟随系统
                    if (!selectedIcon || selectedIcon.length === 0) {
                      myImage.current.selected = { type: 'svg', data };
                    }
                    myImage.current.normal = { type: 'svg', data };
                  }
                  reloadIcon();
                };
              } else {
                // 其他图片格式
                data = URL.createObjectURL(data);
                if (activityIcon) {
                  myImage.current.selected = { type: 'img', data };
                } else {
                  myImage.current.normal = { type: 'img', data };
                }
                reloadIcon();
              }
            }
          };
          xhr.ontimeout = () => {
            xhr.abort(); // 取消请求
          };
          xhr.send();
        } catch (e) {
          console.log(e);
        }
      })();
    } else if (activityIcon) {
      myImage.current.selected = null;
    } else {
      myImage.current.normal = null;
    }
  };

  const reloadIcon = () => {
    if (isSelected) {
      setSrc(myImage.current?.selected);
    } else {
      setSrc(myImage.current?.normal);
    }
  };

  useEffect(() => {
    downloadImage(defaultIcon, false);
    downloadImage(selectedIcon, true);
  }, [defaultIcon, selectedIcon]);

  useEffect(() => {
    reloadIcon();
  }, [isSelected]);

  return (
    <>
      {src?.type === 'img' && <img {...restProps} src={src.data} alt="" />}
      {/* eslint-disable-next-line react/no-danger */}
      {src?.type === 'svg' && (
        <div
          {...restProps}
          dangerouslySetInnerHTML={{ __html: src.data }}
          style={{ fill: `${isSelected ? selectedTitleColor : titleColor}` }}
        />
      )}
    </>
  );
};

export default TabImage;

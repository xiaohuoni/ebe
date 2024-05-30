import { message } from 'antd';
import { useRef, useState } from 'react';
import { useLocale } from './useLocale';

const useInitReactQuill = (props: any) => {
  const { engineApis } = props;

  const quillRef: any = useRef(null);

  const { getLocale } = useLocale(engineApis);

  const imageHandler = () => {
    const quillEditor = quillRef.current.getEditor();
    const input: HTMLInputElement = document.createElement('input');
    input.style.display = 'none';
    input.setAttribute('type', 'file');
    input.setAttribute('accept', '.jpg,.gif,.png');
    input.click();
    input.onchange = async () => {
      const file: any = input.files && input.files[0];

      // 文件名转成小写，防止.JPG 无法通过校验
      if (!/\.(jpg|gif|png)$/.test(file.name.toLowerCase())) {
        message.warn(getLocale('Quill.uploadImages'));
        return;
      }
      if (file.size > 1000 * 3000) {
        message.warn(getLocale('Quill.imageSizeLimit'));
        return;
      }
      const formData = new FormData();
      formData.append('attach', file, file.name);
      if (engineApis?.service?.uploadFileByFetch) {
        const res = await engineApis.service.uploadFileByFetch(formData);
        if (res?.fileId) {
          const range = quillEditor.getSelection();
          const link = engineApis?.getAppFileUrlById(res?.fileId);
          quillEditor.insertEmbed(range.index, 'image', link);
        }
      }
    };
  };

  /**
   * 用户给文字添加链接时，需选中文字，之前无提醒，操作比较隐蔽，故增加选中文字提醒
   */
  const linkHandler = (value: boolean) => {
    const quillEditor = quillRef?.current?.getEditor();
    if (value) {
      const range = quillEditor?.getSelection();
      let preview = quillEditor?.getText(range);
      if (range == null || range.length === 0 || !preview) {
        message.info(getLocale('Quill.selectZh'));
      } else if (preview) {
        if (
          /^\S+@\S+\.\S+$/.test(preview) &&
          preview.indexOf('mailto:') !== 0
        ) {
          preview = `mailto:${preview}`; // 电子邮件
        }
        const { tooltip } = quillEditor.theme;
        tooltip.edit('link', preview);
      }
    } else {
      quillEditor?.format('link', false);
    }
  };
  // 当react-quill同时设置了modules-toolbar-handlers(而且是使用const定义modules的情况下)和onChange， 并且onChange中包含修改状态的行为， 就会触发输入时会自动失去焦点的bug
  // react-quill issue：https://github.com/zenoamaro/react-quill/issues/556
  // 目前解决办法： 把modules用state来存储， 在组件加载完成后再修改状态能够避免
  const [modules] = useState({
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        [{ color: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'],
      ],
      handlers: {
        image: imageHandler,
        link: linkHandler,
      },
    },
  });

  return [quillRef, modules];
};

export default useInitReactQuill;

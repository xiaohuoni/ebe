import React from 'react';
import LcdpUeditorMain from './LcdpUeditorMain';
import RichTextEditorMain from './RichTextEditorMain';
import { LingxiForwardRef } from '@lingxiteam/types';


class RichTextEditor extends React.Component<any, {}> {
  state = {
    isError: false,
  };

  constructor(props: any) {
    super(props);
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({
      isError: true,
    });
  }

  render(): React.ReactNode {
    if (this.state.isError) {
      // @ts-ignore
      return <RichTextEditorMain {...this.props} />;
    }
    // @ts-ignore
    return <LcdpUeditorMain {...this.props} />;
  }
}


export default LingxiForwardRef<any, any>((props, ref) => {
  return <RichTextEditor {...props} rootRef={ref} />;
});

import React from 'react';
import { findDOMNode } from 'react-dom';

export class Wrapper extends React.Component<
  {
    children?: React.ReactNode;
    setVisible: (v: boolean) => void;
    visible: boolean;
    element: (ele: any) => void;
  },
  {}
> {
  element: Element | null = null;

  onClick!: (e: any) => void;

  timer?: NodeJS.Timeout;

  componentDidMount() {
    this.componentDidUpdate();
    this.onClick = (e) => {
      e.preventDefault();
      this.props.setVisible(true);
    };
  }

  componentWillUnmount(): void {
    if (this.element) {
      this.element.removeEventListener('click', this.onClick);
    }
  }

  addEventListener = (element: Element) => {
    if (this.element) {
      this.element.removeEventListener('click', this.onClick);
    }
    element.addEventListener('click', this.onClick);
    this.props.element(element);
  };

  componentDidUpdate() {
    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      try {
        // eslint-disable-next-line react/no-find-dom-node
        const node = findDOMNode(this);
        if (node instanceof Element) {
          this.addEventListener(node);
          this.element = node;
        } else {
          this.element = null;
        }
      } catch {}
    }, 100);
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

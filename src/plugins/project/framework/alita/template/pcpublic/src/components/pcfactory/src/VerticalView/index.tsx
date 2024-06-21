import React from 'react';

export interface VerticalViewProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  visible?: boolean;
}

const VerticalView: React.FC<VerticalViewProps> = (props) => {
  const { children, style, className, visible = true } = props;

  return visible ? (
    <div
      style={style}
      className={className}
      data-compid={(props as any)?.['data-compid']}
    >
      {children}
    </div>
  ) : null;
};

export default VerticalView;

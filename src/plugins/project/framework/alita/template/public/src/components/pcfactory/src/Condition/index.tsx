import React from 'react';

export interface ConditionProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  visible?: boolean;
}

const Condition: React.FC<ConditionProps> = (props) => {
  const { children, visible = true, className } = props;

  return visible ? (
    // @ts-ignore
    <div data-compid={props?.['data-compid']} className={className}>
      {children}
    </div>
  ) : null;
};

export default Condition;

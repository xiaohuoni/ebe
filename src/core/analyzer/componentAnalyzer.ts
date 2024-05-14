import type { IProjectSchema, TComponentAnalyzer } from '../types';
import { handleSubNodes } from '../utils/schema';

export const componentAnalyzer: TComponentAnalyzer = (container) => {
  let hasRefAttr = false;
  const nodeValidator = (n: IProjectSchema) => {
    if (n.props) {
      const props = n.props;
      if (props.ref) {
        hasRefAttr = true;
      }
    }
  };

  nodeValidator(container);

  if (!hasRefAttr && container.components) {
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    handleSubNodes<void>(
      container.components,
      {
        node: nodeValidator as any,
      },
      {
        rerun: true,
      },
    );
  }

  return {
    isUsingRef: hasRefAttr,
  };
};



import { ResultFile, LXProjectOptions } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const file = createResultFile(
    'useTool',
    'ts',
    `export interface IUseTool {
        /**
         * 组件的refs
         */
        refs: Record<string, any>;
    }
    export const useTool = (props: IUseTool) => {

        const {
            refs,
        } = props;
    
        const getValue = (id: string, stateName?: string) => {
            if (stateName) {
                return refs?.[id]?.[stateName];
            }
            return refs?.[id]?.value;
        }
        return {
            getValue,
        }
    
    };`,
  );

  return [['src', 'utils'], file]
}











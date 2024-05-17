import { ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
    'index',
    'less',
    `
    @import '../../styles/index.less';
@expSQLServiceModal: ExpSQLServiceModal;

.@{prefix}-@{expSQLServiceModal}-myCheckboxGroup {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  .@{ant-prefix}-checkbox-group-item {
    margin-bottom: 8px;
    flex: none;
    width: 25%;
    box-sizing: border-box;
    padding-right: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 0;
    display: block;
  }
}

.@{prefix}-@{expSQLServiceModal}-myDivider {
  margin: 8px 0;
}

`,
  );

  return [['src', 'components', 'ExpSQLServiceModal'], file];
}

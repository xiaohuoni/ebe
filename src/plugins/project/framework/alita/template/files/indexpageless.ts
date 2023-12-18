import { ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
    'index',
    'less',
    `.indexPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 90px);
  color: rgba(28, 36, 46, 45%);
  font-size: 44px;

  .indexText {
     margin-bottom: 25px;
     color: rgba(28, 36, 46, 85%);
     font-weight: 500;
     font-size: 34px;
  }

  .indexImg {
     height: 392px;
     margin-top: 280px;
  }
}
`,
  );

  return [['src', 'pages', 'index'], file];
}

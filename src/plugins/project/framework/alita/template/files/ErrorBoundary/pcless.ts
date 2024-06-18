import { LXProjectOptions, ResultFile } from '../../../../../../../core';
import { createResultFile } from '../../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const file = createResultFile(
    'index',
    'less',
    `
.errorBoundary {
  .engineErrorBoundary {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 44px;
    padding-left: 16px;
    .warnIcon {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 11px;
      height: 11px;
      color: #fff;
      background-color: #faad14;
      border-radius: 50%;
    }

    .text {
      padding-left: 4px;
      font-size: 12px;
      color: rgba(28, 36, 46, 0.75);
      line-height: 22px;
      span {
        color: #4477ee;
      }
    }
  }
}

.errorDetail {
  .title {
    font-size: 16px;
    font-weight: 600;
    color: #000;
  }

  .row {
    line-height: 25px;
    .rowTitle {
      font-weight: 500;
      color: #000;
    }
  }
}

`,
  );

  return [['src', 'components', 'common', 'ErrorBoundary'], file];
}

import { Notification, NotificationType } from '@lingxiteam/antd-mobile-plus';
import { LingxiForwardRef } from '@lingxiteam/types';
import useHiddenStyle from '../utils/hooks/useHiddenStyle';

export interface MyNotificationProp extends NotificationType {
  visible: boolean;
}
const MyNotification = LingxiForwardRef<any, MyNotificationProp>(
  (props, ref) => {
    const { visible, style, title, dataSource, className } = props;
    const displayStyle = useHiddenStyle(visible, style);

    return (
      <Notification
        title={title}
        dataSource={dataSource}
        style={displayStyle}
        className={className}
      />
    );
  },
);

MyNotification.displayName = 'Notification';

export default MyNotification;

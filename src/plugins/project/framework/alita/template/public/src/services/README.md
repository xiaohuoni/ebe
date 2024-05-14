# 如何使用

```tsx
import { findAppConfig } from '@/services/api/appConfig';
import { useRequest } from 'alita';

export default () => {
  const { data, error, loading } = useRequest(() =>
    findAppConfig({}, { appId: '868681578956083200' }),
  );
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return <div>{data.name}</div>;
};
```

或者

```tsx
import { findAppConfig } from '@/services/api/appConfig';
import { useRequest } from 'alita';

export default () => {
  const xx = () => {
    findAppConfig({}, { appId: '868681578956083200' }).then();
  };
};
```

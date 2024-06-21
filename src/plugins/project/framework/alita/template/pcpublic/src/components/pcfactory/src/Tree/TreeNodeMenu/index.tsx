import { RightOutlined } from '@ant-design/icons';
import { useDebounceFn } from 'ahooks';
import { Popover } from 'antd';
import classNames from 'classnames';
import { useEffect, useMemo, useState } from 'react';

const List = (props: any) => {
  const { data, keyList, handleOnClick } = props;
  const [child, setChild] = useState<any>({});

  useEffect(() => {
    setChild({});
  }, [data]);

  const handleAppendChild = (key: string, childrenList: any[]) => {
    setChild({
      key,
      childrenList,
    });
  };

  const { run } = useDebounceFn(handleAppendChild, {
    wait: 100,
  });

  const comp = useMemo(
    () => (
      <>
        <ul className="tree-menu-list">
          {data?.map((d: any, i: any) => (
            <li
              className={classNames(
                'tree-menu-item',
                child?.key === d.key && 'hover',
              )}
              onClick={(e) => {
                e.stopPropagation();
                if (typeof handleOnClick === 'function') {
                  const keys = keyList.split(',');
                  handleOnClick(d, [...keys, d.key]);
                }
              }}
              onMouseEnter={() => {
                run(d.key || i, d.children);
              }}
              key={d.key || i}
            >
              {d.title}
              {d?.children?.length > 0 && <RightOutlined rev="" />}
            </li>
          ))}
        </ul>
        {child?.childrenList?.length > 0 && (
          <List
            data={child?.childrenList}
            keyList={`${keyList},${child?.key}`}
            handleOnClick={handleOnClick}
          />
        )}
      </>
    ),
    [data, child, keyList],
  );
  return comp;
};

const TreeNodeMenu = (props: any) => {
  const { children, menuData, visible, onVisibleChange, onClickMenuItem } =
    props;

  const renderMenu = (arr: any) => (
    <div className="tree-menu-box">
      <List
        data={arr}
        handleOnClick={(data: any, keys: any[]) => {
          if (typeof onClickMenuItem === 'function') {
            onClickMenuItem(
              data?.key,
              { ...data, ...(data?.data || {}) },
              keys,
            );
          }
        }}
        keyList="first"
      />
    </div>
  );
  return (
    <Popover
      trigger={['contextMenu']}
      content={renderMenu(menuData)}
      placement="rightTop"
      overlayClassName="ued-tree-menu"
      visible={visible}
      onVisibleChange={onVisibleChange}
    >
      {children}
    </Popover>
  );
};

export default TreeNodeMenu;

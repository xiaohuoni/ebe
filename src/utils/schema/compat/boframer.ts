/**
 * 事件映射
 */
const eventMapping = {
  /**
   * 事件状态变化
   */
  useEffect: 'stateChange',

  /**
   * 页面加载完成
   */
  onLoaded: 'useEffect',
};

/**
 * 兼容setEvents 保持业务组件和页面的事件相同
 * @param setEvents
 */
const compatEngineEvents = (setEvents: any[] = []) => {
  return setEvents.map((event) => ({
    ...event,
    // @ts-ignore
    value: eventMapping[event.value] ?? event.value,
  }));
};

export default {
  compatEngineEvents,
};

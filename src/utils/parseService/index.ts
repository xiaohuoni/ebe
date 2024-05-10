/**
 * 把对象转化成服务请求的字符串
 */
export const object2Tpl = () => { 

}

const service = {
  SQL: () => { 
    return ``
  }

}

/**
 * 把服务解析成字符串
 */
export const service2Tpl = ({ type }: { type: 'SQL' }) => { 
  return service[type]()
}

/**
 * 解析服务
 */
export const parseService = () => { 

}
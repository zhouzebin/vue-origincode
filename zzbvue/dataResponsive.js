
/**
 * 对一个对象进行响应数据代码，将原始对象的所有属性，提取到代理对象中
 * @param {*} originObj 原始obj
 * @param {*} targetObj 代理obj
 * @param {*} callback 更改数值的回调函数
 */
export default function createResponsive(originObj, targetObj, callback) {
  for(var prop in originObj ) {
    proxyProp(originObj, targetObj, prop, callback) 
  }
}

function proxyProp(originObj, targetObj, prop, callback) {
  if (typeof originObj[prop] === 'object') {
    var newTarget = {}
    createResponsive(originObj[prop], newTarget, callback)
    Object.defineProperty(targetObj, prop, {
      get() {
        return newTarget
      },
      set(value) {
        originalObj[prop] = value
        newTarget = value
        callback && callback(prop)
      }
    })
  }else {
    Object.defineProperty(targetObj, prop, {
      get() {
        return originObj[prop]
      },
      set(value) {
        originObj[prop] = value
        callback && callback()
      }
    })
  }
}
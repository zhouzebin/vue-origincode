/**
 * 创建一个vnode
 * @param {*} realDom 真实dom
 */
export default function createVNode(realDom) {
  var vNode = new VNode(realDom, '')
  // 如果dom类型是文本类型
  if (realDom.nodeType === Node.TEXT_NODE) {
    vNode.template = realDom.nodeValue
  } 
  // 如果dom类型是其他
  else {
    var nodes = realDom.childNodes
    nodes.forEach(item => {
      vNode.children.push(createVNode(item))
    })
  }
  return vNode
}
/**
 * vnode构造函数
 * @param {*} realDom 
 * @param {*} template 
 */
function VNode(realDom, template) {
  this.realDom = realDom
  this.template = template
  this.children = []
}
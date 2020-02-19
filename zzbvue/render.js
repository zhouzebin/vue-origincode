import compile from './compile.js'
/**
 * 根据虚拟节点渲染dom
 * @param {*} vNode 
 * @param {*} envObj 
 */
export default function render(vNode, envObj) {
  if(vNode.realDom.nodeType === Node.TEXT_NODE) {
    var res = compile(vNode.template, envObj)
    if (vNode.realDom.nodeValue != res) {
      vNode.realDom.nodeValue = res
    }
  } else {
    vNode.children.forEach(item => {
      render(item, envObj)
    })
  }
}
import createVNode from './vnode.js'
import render from './render.js'
import createResponsive from './dataResponsive.js'

export default function Vue(options) {
  //     保存el和data配置
  this.$el = options && options.el;
  this.$data = options && options.data;
  this.$vnode = createVNode(document.querySelector(this.$el))
  createResponsive(this.$data, this, () => {
    this.render()
  })
  this.render()
}

Vue.prototype.render = function() {
  render(this.$vnode, this)
}
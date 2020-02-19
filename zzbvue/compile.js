/**
 * 根据模板字符串和环境对象得到编译后的字符串
 * @param {*} template 模板字符串
 * @param {*} envObj 实例对象环境对象
 */
export default function compile (template, envObj) {
  // console.log(getMatchArrs(template))
  var matchs = getMatchArrs(template)

  var newStr = template
  matchs.forEach(item => {
    newStr = newStr.replace(item, getValue(item, envObj))
  })
  return newStr
}

/**
 * 获取匹配的所有包含{{...}}的字符串
 * @param {*} template 
 */
function getMatchArrs (template) {
  var matchs = template.match(/{{[^}]+}}/g)
  return matchs || []
}

/**
 * 将{{}}转化为真正的值
 * @param {*} template 
 */
function getValue(template, envObj) {
  var props = template.replace('{{', '').replace('}}', '').split('.')
  var value = envObj
  for (let index = 0; index < props.length; index++) {
    value = value[props[index]]
  }
  return value
}
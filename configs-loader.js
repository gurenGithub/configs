// var utils = require('loader-utils')
const loaderUtils = require("loader-utils");
module.exports = function loader (source) {
  //this._module.type = 'javascript/auto' // <=
  if (this.cacheable) this.cacheable();
  
  let loaderOptions = loaderUtils.getOptions(this) || {};//拿到配置信息的方法
  //console.log(loaderOptions);
  if(loaderOptions.none===true){

    return `module.exports = {}`;
  }
  var value = typeof source === "string" ? JSON.parse(source) : source;

  value = JSON.stringify(value)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

  return `module.exports = ${value}`;
}

var moda = require('./module_a'); //基础引用
// require('./module_b'); //基础引用

console.log(moda.name);

var data = moda.getPrivate();  //模块暴露了API 引用模块即可使用方法
console.log(data);
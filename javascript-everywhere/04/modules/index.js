var Person = require('./index_person');

//接受过来的不是对象 而是函数了
var join = new Person('join');

join.show()
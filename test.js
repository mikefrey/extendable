var extendable = require('./index')
var _ = require('underscore')

function BaseClass(options) {
  console.log('BaseClass constructor')
  console.log('BaseClass options', options.prop)
  this.initialize.apply(this, arguments)
}

BaseClass.inheritedClassMethod = function() {
  console.log('BaseClass inheritedClassMethod')
}

_.extend(BaseClass.prototype, {

  initialize: function() {},

  doSomething: function() {
    console.log('did something')
  },

  overrideMe: function() {
    throw 'you forgot to override a method'
  }

})

BaseClass.extend = extendable


var MyClass = BaseClass.extend({

  initialize: function(options) {
    console.log('MyClass::initialize')
    console.log('MyClass options', options.prop)
  },

  overrideMe: function() {
    console.log('overridden')
  }

}, {
  classMethod: function() {
    console.log('MyClass class method')
  }
})

var mc = new MyClass({prop:'property!'})
mc.doSomething()
mc.overrideMe()

MyClass.classMethod()
MyClass.inheritedClassMethod()


// Expected output:
//   BaseClass constructor
//   BaseClass options property!
//   MyClass::initialize
//   MyClass options property!
//   did something
//   overridden
//   MyClass class method
//   BaseClass inheritedClassMethod

extendable
==========

Inheritance the Backbone way.

## Installation

    npm install extendable

## Usage

Define your base class:

    var extendable = require('extendable')
    var _ = require('underscore')

    function BaseClass(options) {
      ...
      this.initialize.apply(this, arguments)
      ...
    }

    BaseClass.inheritedClassMethod = function() {
      ...
    }

    _.extend(BaseClass.prototype, {

      initialize: function() {},

      doSomething: function() {
        ...
      },

      overrideMe: function() {}

    })

    BaseClass.extend = extendable


Then define your sub class:

    var MyClass = BaseClass.extend({

      initialize: function(options) {
        ...
      },

      otherStuff: function() {
        ...
      },

      overrideMe: function() {
        ...
      }

    }, {
      classMethod: function() {
        ...
      }
    })

Use the sub class:

    // create an instance
    var mc = new MyClass({ prop: 'value' })

    // execute inherited methods
    mc.doSomething()

    // execute overridden methods
    mc.overrideMe()

    // new methods
    mc.otherStuff()

    // class methods
    MyClass.classMethod()

    // inherited class methods
    MyClass.inheritedClassMethod()

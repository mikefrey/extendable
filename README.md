extendable
==========

Inheritance the Backbone way.

## Installation

    npm install extendable

## Usage

    var extendable = require('extendable')

    function MyClass() {
      ...
    }

    _.extend(MyClass.prototype, {

      doSomething: function() {
        ...
      }

    })

    MyClass.extend = extendable

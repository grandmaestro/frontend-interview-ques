/**
 * Determine the output of following code snippets
 */

function hello() {
  setTimeout(() => {
    console.log(this.name);
  }, 100);
}
hello.call({name: 'tom'});

// => 'tom'
// `this` is referencing hello fn which was called with object

/***************************************/


var xyz =10; 
var a = function () {
  console.log('a' , this.xyz);
  const b = function() {
   console.log('b' , this.xyz);
     const c =  {
       xyz: 5,
        hi: function() {
         console.log( 'c' , this.xyz);
        }
       }
      c.hi();
     }
   b();
  }
a();



/**
 * a.this => window obj
 * b.this => window obj
 * c.this => variable c obj
 */

/*******************************************/
var name='here';
const obj = {
  name: 'Billy',
  sing() {
    console.log('a' , this.name);
    var anotherFunction = function() {
       console.log('b', this.name);
      }
    anotherFunction();
    }
}
obj.sing();

/**
 * a , Billy
 * b , here
 */


/******************************************/
function a() {
  console.log('I am in');
}

a();

function a() {
  Console.log('I am out');
}

/**
 * I am out
 * function declaration hoisting
 */
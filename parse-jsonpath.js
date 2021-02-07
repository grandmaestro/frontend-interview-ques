/**
 * Problem: Parse the array of strings as JSON Paths and output a relevant json object
 * Input: ['root', 'root.user', 'user.test', 'this.is.test']
 * Output: {
 *  root:{
 *    user: {}
 *    },
 *  user:{
 *    test: {}
 *   },
 *  this:{
 *    is: {
 *      test:{}
 *      }
 *    }
 *  }
 */

const outTree = {};

function parseString(str) {
  console.log(str);
  const accessor = str.split('.');
  const node = accessor.reduce(function (acc, next) {
    if (!acc[next]) {
      acc[next] = {}
    }
    return acc[next];
  }, outTree)
}

function printTree(tree, level = 0) {
  for (let key in tree) {
    console.log(Array(level + 1).fill('-').join(''), key);
    if (typeof tree[key] == "object") {
      printTree(tree[key], level + 1);
    }
  }
}

function driver() {
  const inpArray = ['root', 'root.user', 'user.test', 'this.is.test'];
  inpArray.forEach((input) => {
    parseString(input);
  });
  console.log(JSON.stringify(outTree, null, 1));
  printTree(outTree);
}

driver();
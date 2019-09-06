function foo(x, y) {
    let res = 0;
    if (x > 0 && y > 0) {
      res = x;
    }
    return res;
  }
 foo();
 
module.exports = foo;
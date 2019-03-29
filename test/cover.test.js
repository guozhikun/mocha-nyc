var cover= require('../js/cover.js');

var chai = require('chai');

var expect = chai.expect;
describe('覆盖函数的测试...', function() {
  it('传入-1和1', function() {
    expect(cover(-1, 1)).to.be.equal(0);
  });
  /*it('传入2和1', function() {
    expect(cover(2, 1)).to.be.equal(2);
  });*/
})
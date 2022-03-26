const stuff = require('../../stuff/index');

describe('stuff tests', () => {
  it('should say hello', () => {
    expect(stuff.sayHello()).toBe('hello!');
  });
});

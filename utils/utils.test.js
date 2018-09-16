const utils = require('./utils');
const expect = require ('expect');

describe('Utils', () => {
  it('Should add two numbers', () => {
    var res = utils.add(33, 11);
  
    expect(res).toBeA('number').toBe(44);
  
  });
  
  it ('Should multiply one number by itself async', (done) => {
    utils.asyncSquare(3, (res) => {
      expect(res).toBeA('number').toBe(9);
      done();
    });
  });
  
  it ('Should set firstName and lastName', () => {
    var user = {
      location: 'Osasco',
      age: '38'
    };
  
    var res = utils.setName(user, 'Daniel Coelho');
  
    expect(res).toInclude({
      firstName: 'Daniel',
      lastName: 'Coelho'
    });
  });
  
  it ('Should add two numbers async', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBeA('number').toBe(7);
      done();
    });
  });
});


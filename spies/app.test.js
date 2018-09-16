const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };

  app.__set__('db', db);

  it('Should call the spy correctly', () => {
    var spy = expect.createSpy();
    
    spy('Daniel', 38);
    
    expect(spy).toHaveBeenCalledWith('Daniel', 38);
  });

  it('Should call saveUSer with User object', () => {
    var email = 'email@email.com';
    var password = 'emailPassword';

    app.handleSignUp(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
});
/* eslint-disable max-len */
import { expect } from 'chai';
import User from '../src/User.js';
import travelers from '../data/travelers-test-data.js'

describe('User', () => {
  let user;

  beforeEach(() => {
    user = new User(travelers[6]);
  });

  it('Should be a function', () => {
    expect(User).to.be.a('function');
  })

  it('Should be an instance of a User', () => {
    expect(user).to.be.an.instanceOf(User);
  })

  it('Should have an id and a name for the user', () => {
    expect(user.id).to.eql(7);
    expect(user.name).to.eql('Emmet Sandham');
  })

  it('Should hold a password', () => {
    expect(user.password).to.eql('travel2020');
  })

  it('Should be able to log into Travel Tracker as a user', () => {
    expect(user.logIn('traveler7', 'travel2020')).to.equal('Hello Emmet Sandham!');
  })

  it('Should be able to log into Travel Tracker as a travel agent', () => {
    expect(user.logIn('agency', 'travel2020')).to.equal('Welcome Travel Agent!');
  })

  it('Should tell the user if they have the wrong login info', () => {
    expect(user.logIn('nancy134', 'travel2020')).to.equal('The username or password is inncorrect')
  })
});
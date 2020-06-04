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

  it('should be an instance of a User', () => {
    expect(user).to.be.an.instanceOf(User);
  })
});
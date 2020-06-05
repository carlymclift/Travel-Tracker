import { expect } from 'chai';
import User from '../src/User.js';
import Traveler from '../src/Traveler.js'
import travelers from '../data/travelers-test-data.js'
import trips from '../data/trips-test-data.js'

describe('Traveler', () => {
  let traveler;

  beforeEach(() => {
    traveler = new Traveler(travelers)
  })

  it('Should be a function', () => {
    expect(Traveler).to.be.a('function');
  })

  it('Should be an instance of Travler', () => {
    expect(traveler).to.be.an.instanceOf(Traveler)
  })

  it('Should be a sub-class of the User class', () => {
    expect(traveler).to.be.an.instanceOf(User);
  })

  it('Should have a place to store the all trips', () => {
    expect(traveler.trips).to.eql([]);
  })

  it('Should have the ability to see the money spent on trips', () => {
    expect(traveler.moneySpent).to.eql(0);
  })
});
import { expect } from 'chai';
import User from '../src/User.js';
import Traveler from '../src/Traveler.js'
import travelers from '../data/travelers-test-data.js'
import trips from '../data/trips-test-data.js'
import destinations from '../data/destinations-test-data.js'

describe('Traveler', () => {
  let trip, destination, traveler;

  beforeEach(() => {
    trip = trips;
    destination = destinations;
    traveler = new Traveler(travelers[6]);
    // user = new User(travelers[6]);
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

  it('Should be able to tell what type of traveler they are', () => {
    expect(traveler.type).to.eql('relaxer');
  })

  it('Should have a place to store the all trips', () => {
    expect(traveler.userTrips).to.deep.eql([trip[75], trip[76], trip[83], trip[96], trip[97], trip[122], trip[144]]);
  })

  it('Should have the ability to see the money spent on trips', () => {
    expect(traveler.moneySpent).to.eql(0);
  })

  it('Should inherit the traits of it\'s parent class', () => {
    expect(traveler.id).to.eql(7);
    expect(traveler.name).to.eql('Emmet Sandham');
  })

  it('Should be able to login as a traveler', () => {
    expect(traveler.logIn('traveler7', 'travel2020')).to.equal('Hello Emmet Sandham!')
  })

  it('Should be able to calculate that amount they have spent for the current year', () => {
    expect(traveler.calculateAmountSpentThisYear('2020')).to.eql(591731)
  })

});
import User from './User.js';
import trips from '../data/trips-test-data.js';
import destinations from '../data/destinations-test-data.js';

class Traveler extends User {
  constructor(userData) {
    super(userData);
    this.type = userData.travelerType;
    this.userTrips = trips.filter(trip => trip.userID === this.id);
    this.moneySpent = 0;
  }

  calculateAmountSpentThisYear(year) {
    let thisYearTrips = this.userTrips.filter(trip => trip.date.includes(year) && trip.status === 'approved')
    return destinations.reduce((acc, destination) => {
      thisYearTrips.forEach(yearTrip => {
        if (yearTrip.destinationID === destination.id) {
          acc += (destination.estimatedLodgingCostPerDay * yearTrip.duration) + (destination.estimatedFlightCostPerPerson * yearTrip.travelers)
        }
      })
      return Math.round(acc + (acc * .10));
    }, 0);
  }
}

export default Traveler;
import User from './User.js';

class Traveler extends User {
  constructor(userData) {
    super(userData);
    this.trips = [];
    this.moneySpent = 0;
  }

  addVactionSpot() {
    this.trips = this.userData.trips.filter(location => location.id)
    console.log(location.id)
  }


}

export default Traveler;
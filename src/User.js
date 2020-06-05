class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.userName = 'traveler' + this.id || 'agency';
    this.password = 'travel2020';
  }

  logIn(userName, password) {
    if ((userName === this.userName) && (password === this.password)) {
      return `Hello ${this.name}!`
    } else if ((userName === 'agency') && (password === this.password)) {
      return 'Welcome Travel Agent!'
    } else {
      return 'The username or password is inncorrect'
    }
  }
}

export default User;
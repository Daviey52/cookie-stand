'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];
const seattleList = document.getElementById('Seattle-sales');
let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0,
  cookiesPerHourArray: [],
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let custThisHour = this.getRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(custThisHour * this.avg);
      this.cookiesPerHourArray.push(cookiesSoldThisHour);
      this.dailyTotal += this.cookiesPerHourArray[i];

    }
    this.renderCity();
  },
  renderCity: function () {
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]} : ${this.cookiesPerHourArray[i]} cookies`;
      seattleList.appendChild(li);
    }
  }
};
seattle.calcCookiesPerHour();
seattle.getRandomCustomers();
const TokyoList = document.getElementById('Tokyo-sales');
//tokyo
let Tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  dailyTotal: 0,
  cookiesPerHourArray: [],
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let custThisHour = this.getRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(custThisHour * this.avg);
      this.cookiesPerHourArray.push(cookiesSoldThisHour);
      this.dailyTotal += this.cookiesPerHourArray[i];

    }
    this.renderCity();
  },
  renderCity: function () {
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]} : ${this.cookiesPerHourArray[i]} cookies`;
      TokyoList.appendChild(li);
    }
  }
};
Tokyo.calcCookiesPerHour();
Tokyo.getRandomCustomers();

const DubaiList = document.getElementById('Dubai-sales');
//Dubai sales
let Dubai = {
  name: 'Dubai',
  min: 3,
  max: 24,
  avg: 1.2,
  dailyTotal: 0,
  cookiesPerHourArray: [],
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let custThisHour = this.getRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(custThisHour * this.avg);
      this.cookiesPerHourArray.push(cookiesSoldThisHour);
      this.dailyTotal += this.cookiesPerHourArray[i];

    }
    this.renderCity();
  },
  renderCity: function () {
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]} : ${this.cookiesPerHourArray[i]} cookies`;
      DubaiList.appendChild(li);
    }
  }
};
Dubai.calcCookiesPerHour();
Dubai.getRandomCustomers();
//Paris
const ParisList = document.getElementById('paris-sales');
let Paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  dailyTotal: 0,
  cookiesPerHourArray: [],
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let custThisHour = this.getRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(custThisHour * this.avg);
      this.cookiesPerHourArray.push(cookiesSoldThisHour);
      this.dailyTotal += this.cookiesPerHourArray[i];

    }
    this.renderCity();
  },
  renderCity: function () {
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]} : ${this.cookiesPerHourArray[i]} cookies`;
      ParisList.appendChild(li);
    }
  }
};
Paris.calcCookiesPerHour();
Paris.getRandomCustomers();

//Lima
const LimaList = document.getElementById('Lima-Sales');
let Lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  dailyTotal: 0,
  cookiesPerHourArray: [],
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let custThisHour = this.getRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(custThisHour * this.avg);
      this.cookiesPerHourArray.push(cookiesSoldThisHour);
      this.dailyTotal += this.cookiesPerHourArray[i];

    }
    this.renderCity();
  },
  renderCity: function () {
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]} : ${this.cookiesPerHourArray[i]} cookies`;
      LimaList.appendChild(li);
    }
  }
};
Lima.calcCookiesPerHour();
Lima.getRandomCustomers();


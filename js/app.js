'use strict';
console.log('Hello World');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0,
  avgCookiesSoldEachHourArray: [],

  getRandomCustomers: function () {
    for (let i = 0; i < 13; i++) { this.avgCookiesSoldEachHourArray.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min)); }
    seattle.getRandomCustomers();
    console.log(this.avgCookiesSoldEachHourArray);

  }

};
//console.log(seattle.getRandomCustomers());
//console.log(this.avgCookiesSoldEachHourArray);

const seattleList = document.getElementById('Seattle-sales');
console.log(seattleList);
for (let i = 0; i < hours.length; i++) {
  let li = document.createElement('li');
  li.textContent = `${this.avgCookiesSoldEachHourArray} came`;
  seattleList.appendChild(li);
}





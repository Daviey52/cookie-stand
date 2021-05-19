'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

let storesArray = [];
function CreateCities(name, min, max, avg) {

  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.dailyTotal = 0;
  this.cookiesPerHourArray = [];

  storesArray.push(this);
  console.log(storesArray);
}
let seattle = new CreateCities('Seattle', 23, 65, 6.3);
let tokyo = new CreateCities('Tokyo', 3, 24, 1.2);
let dubai = new CreateCities('Dubai', 11, 38, 3.7);
let paris = new CreateCities('Paris', 20, 38, 2.3);
let lima = new CreateCities('Lima', 2, 16, 4.6);

CreateCities.prototype.getRandomCustomers = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

CreateCities.prototype.calcCookiesPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let custThisHour = this.getRandomCustomers();
    let cookiesSoldThisHour = Math.ceil(custThisHour * this.avg);
    this.cookiesPerHourArray.push(cookiesSoldThisHour);
    this.dailyTotal += cookiesSoldThisHour;
    console.log(cookiesSoldThisHour);
  }
};

CreateCities.prototype.renderCity = function () {
  this.calcCookiesPerHour();
  let e = document.getElementById('table-body');
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = this.name;
  tr.appendChild(td);
  console.log(this.cookiesPerHourArray);
  for (let i = 0; i < this.cookiesPerHourArray.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesPerHourArray[i];
    tr.appendChild(td);
  }
  td = document.createElement('td');
  td.textContent = this.dailyTotal;
  tr.appendChild(td);
  e.appendChild(tr);
};
function thead() {
  let e = document.getElementById('table-head');
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = 'City';
  tr.appendChild(td);
  for (let i = 0; i < hours.length; i++) {
    td = document.createElement('td');
    td.textContent = hours[i];
    tr.appendChild(td);
  }
  td = document.createElement('td');
  td.textContent = 'Total';
  tr.appendChild(td);
  e.appendChild(tr);

}
console.log(thead);
this.thead();

seattle.renderCity();
tokyo.renderCity();
dubai.renderCity();
paris.renderCity();
lima.renderCity();




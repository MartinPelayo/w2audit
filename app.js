'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function CreateTable() {    //Constructor function generates table rows, columns, etc.
  var tableHead = document.getElementById('thead');
  var tableRow = document.createElement('tr');
  tableHead.appendChild(tableRow);
  var elTh = document.createElement('th');
  tableRow.appendChild(elTh);

  for(var i = 0; i < storeHours.length; i ++) {
    elTh = document.createElement('th');
    elTh.textContent = storeHours[i];
    tableRow.appendChild(elTh);
  }
  tableHead = document.createElement('Th');
  tableHead.textContent = 'Daily Location Total';
  tableRow.appendChild(tableHead);
}
function StoreCategories(name, minCustomer, maxCustomer, avgCookieSale) { //Constuctor Provides store categories
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.storeHours = storeHours;
  this.cookiesPurchased = [];
  this.cookiesPurchasedTotal = 0;
}
StoreCategories.prototype.getRandomInt = function(){ //Still dont entirley understand this thing
  var min = Math.ceil(this.minCustomer);
  var max = Math.floor(this.maxCustomer);
  return Math.floor(Math.random() * (max - min) ) + min;
};
StoreCategories.prototype.calculateCookiesPurchased = function(){
  var cookiesCount = 0;

  for(var i = 0; i < this.storeHours.length; i ++){
    cookiesCount = Math.round(this.avgCookieSale * this.getRandomInt() );
    this.cookiesPurchased.push(cookiesCount);
    this.cookiesPurchasedTotal += cookiesCount;
  }
};
StoreCategories.prototype.toHtml = function(){
  this.calculateCookiesPurchased();
  var tableBody = document.getElementById('tbody');
  var tableRow = document.createElement('tr');
  tableBody.appendChild(tableRow);
  var tableData = document.createElement('td');
  tableData.textContent = this.name;
  tableRow.appendChild(tableData);

  for(var i = 0; i < this.storeHours.length; i ++) {
    tableData = document.createElement('td');
    tableData.textContent = this.cookiesPurchased[i];
    tableRow.appendChild(tableData);
  }
  tableData = document.createElement('td');
  tableData.textContent = this.cookiesPurchasedTotal;
  tableRow.appendChild(tableData);
};

CreateTable();      //Calling the table creating conatructor

var storeInfo = [
  new StoreCategories('1st and Pike', 23, 65, 6.3),
  new StoreCategories('Sea Tac Airport', 3, 34, 1.2),
  new StoreCategories('Seattle Center', 11, 38, 3.7),
  new StoreCategories('Capitol Hill', 20, 38, 2.3),
  new StoreCategories('Alki', 2, 16, 4.6),
];

for (var i = 0; i < storeInfo.length; i ++){
  storeInfo[i].toHtml();
}
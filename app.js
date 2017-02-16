'use strict';
              ////Broke my code, not sure what I did...\\\\
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']; 
                                                           
var storeInfo = [                                          
  new StoreCategories('1st and Pike', 23, 65, 6.3),
  new StoreCategories('Sea Tac Airport', 3, 34, 1.2),
  new StoreCategories('Seattle Center', 11, 38, 3.7),
  new StoreCategories('Capitol Hill', 20, 38, 2.3),
  new StoreCategories('Alki', 2, 16, 4.6),
];

function MakeTfootRow() {                                  
  var tableFoot = document.getElementById('tfoot');        
  var tableRow = document.createElement('tr');            
  tableFoot.appendChild(tableRow);                      
  var tableData = document.createElement('td');           
  tableData.textContent = 'Totals'                        
  tableRow.appendChild(tableData);                        

  var hourTotal;                                           
  var dailyTotal = 0;

  for (var i = 0; i < storeHours.length; i++){              
    hourTotal = 0;                                        
    tableData = document.createElement('td');            

    for (var j = 0; j < storeInfo.length; j++){           
      hourTotal += storeInfo[j].cookiesPurchased[i];
    }
    dailyTotal += hourTotal;

    tableData.textContent = hourTotal;
    tableRow.appendChild(tableData);
  }
  tableData = document.createElement('td');
  tableData.textContent = dailyTotal;
  tableRow.appendChild(tableData);
}

function MakeTheadRow(){
  var tableHead = document.getElementById('thead');
  var tableRow = document.createElement('tr');
  tableHead.appendChild(tableRow);

  var tableHead = document.createElement('th');
  tableRow.appendChild(tableHead);

  for(var i = 0; i < storeHours.length; i++){
    tableHead = document.createElement('th');
    tableHead.textContent = storeHours[i];
    tableRow.appendChild(tableHead);
  }
  tableHead = document.createElement('th');
  tableHead.textContent = 'Daily Location Total'; //Some as the above textContent purpose
  tableRow.appendChild(tableHead);
}
function StoreCategories(name, minCustomer, maxCustomer, avgCookieSale) { //Constuctor Provides store categories
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale  = avgCookieSale;
  this.storeHours = storeHours;
  this.cookiesPurchased = [];
  this.cookiesPurchasedTotal = 0;
}
StoreCategories.prototype.getRandomInt = function(){
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

function SubmitHandler(event){
  event.preventDefault();
  var storeName = event.target.storeName.value;
  var minCustomer = event.target.maxCustomer.value;
  var maxCustomer = event.target.maxCustomer.value;
  var avgCookieSale = event.target.avgCookieSale.value;
  
  var newStore = new StoreCategories(storeName,minCustomer, maxCustomer, avgCookieSale);
  storeInfo.push(newStore);
  newStore.toHtml();
  event.target.reset();
}

var form = document.getElementById('form');
form.addEventListener('submit', SubmitHandler);

MakeTheadRow();

for(var i = 0; i < storeInfo.length; i++) {
  storeInfo[i].toHtml();
}

MakeTfootRow();
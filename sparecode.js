
//Forget why this ones here...

// this.calculateCookiesPurchased();
//     var ulList = document.getElementById('PikeId');
//     var storeName = document.createElement('li');
//     storeName.testContent = this.storeName;
//     ulList.appendChild(storeName);
//     var hoursli;
//   hoursli = document.createElement('li');
//       hoursli.textContent = this.calculator();
//       ulList.appendChild(hoursli);

/////////////////////////////////////////////////////////


//May see If I can work with this later...
//This started based off the class notes, I ended up going with my old class notes...

// var StoreObjects = {
//   storeName: '1st And Pike',
//   storeHours:['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   avgCookieSale: 6.3,
//   calculator: function() {
//     var minCustomer = 23;
//     var maxCustomer = 65;
//     return Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
//   },
//   fluxCapacitor: function() {
//     var ulList = document.getElementById('PikeId');
//     var storeName = document.createElement('li');
//     storeName.testContent = this.storeName;
//     ulList.appendChild(storeName);
//     var hoursli;

//     for(var i = 0; i < this.storeHours.length ; i++) {
//       hoursli = document.createElement('li');
//       hoursli.textContent = this.calculator();
//       ulList.appendChild(hoursli);
//     }
//   }
// };

// StoreObjects.fluxCapacitor();

/////////////////////////////////////////////////////////

//Class example...

// var randomStore = {
//   storeName: 'Random Store',
//   storeHours: [2, 3, 4],
//   randomNumber: function() {
//     var min = 2;
//     var max = 8;
//     return Math.floor(Math.random( ) * (max - min) + min);
//   },
//   generateStoreList: function( ) {
//     var storeList = document.getElementById('ul');
//     var storeNameLi = document.createElement('li');
//     storeNameLi.textContent = this.storeName;
//     storeList.appendChild(storeNameLi);
//     var hourLi;

//     for(var i = 0; i < this.storeHours.length ; i ++) {
//       hourLi = document.createElement('li');
//       hourLi.textContent = this.randomNumber();
//       storeList.appendChild(hourLi);
//     }
//   }
// };

// randomStore.generateStoreList();
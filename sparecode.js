
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





                    //OLD CODE//        //THIS WAS FOR MONDAYS LAB, SHOULD LOOK IT OVER AGAIN SOON//






                               // PIKE //
// var pikePlace = {
//   storeName: '1st And Pike',
//   storeHours:['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   avgCookieSale: 6.3,
//   calculator: function() {
//     var minCustomer = 23;
//     var maxCustomer = 65;
//     return Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
//   },
//   cookiesPurchased:[],
//   cookiesPurchasedTotal: 0,
//   calculateCookiesPurchased: function() {
//     var cookiesCount = 0;
//     for(var i = 0; i < this.storeHours.length; i ++) {
//       cookiesCount = Math.round(this.avgCookieSale + this.calculator() );
//       this.cookiesPurchased.push(cookiesCount);
//       this.cookiesPurchasedTotal += cookiesCount;
//     }
//   },

//   fluxCapacitor1: function() {

//     this.calculateCookiesPurchased();
//     var parentElement = document.getElementById('PikeId');

//     var section = document.createElement('section');
//     parentElement.appendChild(section);

//     var otherH2 = document.createElement('h2');
//     otherH2.textContent = this.storeName;
//     section.appendChild(otherH2);

//     var aUl = document.createElement('ul');
//     section.appendChild(aUl);

//     var theList;

//     for(var i = 0; i < this.storeHours.length ; i++) {
//       theList = document.createElement('li');
//       theList.textContent = this.storeHours[i] + ': ' + this.cookiesPurchased[i] + ' cookies';
//       aUl.appendChild(theList);
//     }
//     theList = document.createElement('li');
//     theList.textContent = 'Total: ' + this.cookiesPurchasedTotal + ' cookies';
//     aUl.appendChild(theList);
//   }
// };
//             //SEA TAC//
// var seaTac = {
//   storeName: 'Sea Tac AirPort',
//   storeHours:['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   avgCookieSale: 1.2,
//   calculator: function() {
//     var minCustomer = 3;
//     var maxCustomer = 24;
//     return Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
//   },
//   cookiesPurchased:[],
//   cookiesPurchasedTotal: 0,
//   calculateCookiesPurchased: function() {
//     var cookiesCount = 0;
//     for(var i = 0; i < this.storeHours.length; i ++) {
//       cookiesCount = Math.round(this.avgCookieSale + this.calculator() );
//       this.cookiesPurchased.push(cookiesCount);
//       this.cookiesPurchasedTotal += cookiesCount;
//     }
//   },

//   fluxCapacitor2: function() {

//     this.calculateCookiesPurchased();
//     var parentElement = document.getElementById('cTac');

//     var section = document.createElement('section');
//     parentElement.appendChild(section);

//     var otherH2 = document.createElement('h2');
//     otherH2.textContent = this.storeName;
//     section.appendChild(otherH2);

//     var aUl = document.createElement('ul');
//     section.appendChild(aUl);

//     var theList;

//     for(var i = 0; i < this.storeHours.length ; i++) {
//       theList = document.createElement('li');
//       theList.textContent = this.storeHours[i] + ': ' + this.cookiesPurchased[i] + ' cookies';
//       aUl.appendChild(theList);
//     }
//     theList = document.createElement('li');
//     theList.textContent = 'Total: ' + this.cookiesPurchasedTotal + ' cookies';
//     aUl.appendChild(theList);
//   }
// };
//             //SEA CENTER//
// var seaCenter = {
//   storeName: 'Seattle Center',
//   storeHours:['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   avgCookieSale: 3.7,
//   calculator: function() {
//     var minCustomer = 11;
//     var maxCustomer = 38;
//     return Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
//   },
//   cookiesPurchased:[],
//   cookiesPurchasedTotal: 0,
//   calculateCookiesPurchased: function() {
//     var cookiesCount = 0;
//     for(var i = 0; i < this.storeHours.length; i ++) {
//       cookiesCount = Math.round(this.avgCookieSale + this.calculator() );
//       this.cookiesPurchased.push(cookiesCount);
//       this.cookiesPurchasedTotal += cookiesCount;
//     }
//   },

//   fluxCapacitor3: function() {

//     this.calculateCookiesPurchased();
//     var parentElement = document.getElementById('sCenter');

//     var section = document.createElement('section');
//     parentElement.appendChild(section);

//     var otherH2 = document.createElement('h2');
//     otherH2.textContent = this.storeName;
//     section.appendChild(otherH2);

//     var aUl = document.createElement('ul');
//     section.appendChild(aUl);

//     var theList;

//     for(var i = 0; i < this.storeHours.length ; i++) {
//       theList = document.createElement('li');
//       theList.textContent = this.storeHours[i] + ': ' + this.cookiesPurchased[i] + ' cookies';
//       aUl.appendChild(theList);
//     }
//     theList = document.createElement('li');
//     theList.textContent = 'Total: ' + this.cookiesPurchasedTotal + ' cookies';
//     aUl.appendChild(theList);
//   }
// };
//             //CAP HILL//
// var theCap = {
//   storeName: 'Capitol Hill',
//   storeHours:['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   avgCookieSale: 2.3,
//   calculator: function() {
//     var minCustomer = 20;
//     var maxCustomer = 38;
//     return Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
//   },
//   cookiesPurchased:[],
//   cookiesPurchasedTotal: 0,
//   calculateCookiesPurchased: function() {
//     var cookiesCount = 0;
//     for(var i = 0; i < this.storeHours.length; i ++) {
//       cookiesCount = Math.round(this.avgCookieSale + this.calculator() );
//       this.cookiesPurchased.push(cookiesCount);
//       this.cookiesPurchasedTotal += cookiesCount;
//     }
//   },

//   fluxCapacitor4: function() {

//     this.calculateCookiesPurchased();
//     var parentElement = document.getElementById('capHill');

//     var section = document.createElement('section');
//     parentElement.appendChild(section);

//     var otherH2 = document.createElement('h2');
//     otherH2.textContent = this.storeName;
//     section.appendChild(otherH2);

//     var aUl = document.createElement('ul');
//     section.appendChild(aUl);

//     var theList;

//     for(var i = 0; i < this.storeHours.length ; i++) {
//       theList = document.createElement('li');
//       theList.textContent = this.storeHours[i] + ': ' + this.cookiesPurchased[i] + ' cookies';
//       aUl.appendChild(theList);
//     }
//     theList = document.createElement('li');
//     theList.textContent = 'Total: ' + this.cookiesPurchasedTotal + ' cookies';
//     aUl.appendChild(theList);
//   }
// };
//             //ALKI//
// var alki = {
//   storeName: 'Alki',
//   storeHours:['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   avgCookieSale: 4.6,
//   calculator: function() {
//     var minCustomer = 2;
//     var maxCustomer = 16;
//     return Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
//   },
//   cookiesPurchased:[],
//   cookiesPurchasedTotal: 0,
//   calculateCookiesPurchased: function() {
//     var cookiesCount = 0;
//     for(var i = 0; i < this.storeHours.length; i ++) {
//       cookiesCount = Math.round(this.avgCookieSale + this.calculator() );
//       this.cookiesPurchased.push(cookiesCount);
//       this.cookiesPurchasedTotal += cookiesCount;
//     }
//   },

//   fluxCapacitor5: function() {

//     this.calculateCookiesPurchased();
//     var parentElement = document.getElementById('alki');

//     var section = document.createElement('section');
//     parentElement.appendChild(section);

//     var otherH2 = document.createElement('h2');
//     otherH2.textContent = this.storeName;
//     section.appendChild(otherH2);

//     var aUl = document.createElement('ul');
//     section.appendChild(aUl);

//     var theList;

//     for(var i = 0; i < this.storeHours.length ; i++) {
//       theList = document.createElement('li');
//       theList.textContent = this.storeHours[i] + ': ' + this.cookiesPurchased[i] + ' cookies';
//       aUl.appendChild(theList);
//     }
//     theList = document.createElement('li');
//     theList.textContent = 'Total: ' + this.cookiesPurchasedTotal + ' cookies';
//     aUl.appendChild(theList);
//   }
// };
// //Theres got to be some more short hand to utilize here. Figure it out becuase that took WAY too long.

// //Calling them on the bottom, organize this a bit I guess.
// pikePlace.fluxCapacitor1();
// seaTac.fluxCapacitor2();
// seaCenter.fluxCapacitor3();
// theCap.fluxCapacitor4();
// alki.fluxCapacitor5();
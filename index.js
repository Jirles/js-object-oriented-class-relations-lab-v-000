let store = {drivers:[], passengers: [], trips: []};
let driverID = 0;
let passengerID = 0;
let tripID = 0;

class Driver {
  constructor(name){
    this.id = ++driverID;
    this.name = name;

    store.drivers.push(this)
  };

};

class Passenger {
  constructor(name){
    this.id = ++passengerID;
    this.name = name;

    store.passengers.push(this);
  };
};

class Trip {
  constructor(driver, passenger){
    this.id = ++tripID;
    if(driver){
      this.driverID = driver.id;
    };
    if(passenger){
      this.passengerID = passenger.id;
    }
    store.trips.push(this);
  };
};

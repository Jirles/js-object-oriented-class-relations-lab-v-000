let store = {drivers:[]};
let driverID = 0;
let passengerID = 0;

class Driver {
  constructor(name){
    this.id = ++driverID;
    this.name = name;

    store.drivers.push(this)
  };

};

class Passenger {
  constructor(name){
    this.name = name;
  };
};

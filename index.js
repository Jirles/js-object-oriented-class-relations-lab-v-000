let store = {drivers:[], passengers: [], trips: []};
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name){
    this.id = ++driverId;
    this.name = name;

    store.drivers.push(this)
  };
  trips(){
    return store.trips.filter(trip => trip.driverId === this.id)
  };
  passengers(){
    // need to filter passengers based on their id in trips()
    const passengers = [];
    for(const trip of this.trips()) {
      passengers.push(store.passengers.find(passenger => passenger.id === trip.passengerId))
    };
    return passengers;
  };
};

class Passenger {
  constructor(name){
    this.id = ++passengerId;
    this.name = name;

    store.passengers.push(this);
  };
  trips(){
    return store.trips.filter(trip => trip.passengerId === this.id);
  };
  drivers(){
    // need to filter passengers based on their id in trips()
    const drivers = [];
    for(const trip of this.trips()) {
      drivers.push(store.drivers.find(driver => driver.id === trip.driverId))
    };
    return drivers;
  };

};

class Trip {
  constructor(driver, passenger){
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;

    store.trips.push(this);
  };
  passenger(){
    return store.passengers.find(passenger => passenger.id === this.passengerId)
  };
  driver(){
    return store.drivers.find(driver => driver.id === this.driverId)
  }
};

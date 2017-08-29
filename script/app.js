class Vehicle {
	constructor(name, type ='wagon', model) {
		if(typeof(name) || typeof(type) || typeof(model) !== 'string'){
			this.err = 'invalid input'
		}
	    this.name = name;
	    this.type = type;
	    this.model = model;
	    this.speed = '0 km/h';
	    this.numberofDoors = 0;
	}
	getName(){
	  return this.name;
	}
	makeSound(){
	    return 'vrhnmmmm';
	}
    getNumberofDoors(){
	    if(this.type === 'saloon'){
	      this.numberofDoors  = 4;
	    }else{
	      this.numberofDoors  = 2;
	    }
	    return this.numberofDoors;
    }
  	drive(pedal){
	    if (pedal === 5 && this.type === 'saloon'){
	      this.speed = '250 km/h'
	    }
	    if(pedal === 7 && this.type === 'Truck'){
	      this.speed = '77 km/h';
	    }
	    return this.speed
  	}
}

class Car extends Vehicle {
  	makeSound(){
    	return 'vruuuhnmmmm';
  	}
}
module.exports = {
	Vehicle:Vehicle,
	Car:Car
}

// // const toyota = new Vehicle("Camry","saloon","pR");
// // toyota.getNumberofDoors()




// const toyota = new Vehicle("name","rav4","pR")
// toyota.getName()



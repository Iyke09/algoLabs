const assert = require('chai').assert;
const app = require('../script/app.js');

describe('OOP models', () => {
    it('should return object for the instance of the class', () => {
      const gm = new app.Vehicle();
      assert.equal(typeof(gm),'object');
    });
    it('should be an instance of the vehicle class', () => {
      const gm = new app.Vehicle();
      assert.equal(gm instanceof app.Vehicle, true);
    });
    it('should return 4 for the number of doors if type is saloon', () => {
      const gm = new app.Vehicle('Toyota','saloon','Camry');
      assert.equal(gm.getNumberofDoors(), 4);
    });
    it('should return 250km/h when the input is value is 5', () => {
      const gm = new app.Vehicle('Toyota','saloon','Camry');
      assert.equal(gm.drive(5), '250 km/h');
    });
    it('should wagon if no values are entered', () => {
      const gm = new app.Vehicle();
      assert.equal(gm.type,'wagon');
    });
    it('should return vrhnmmmm as the sound of the car', () => {
      const gm = new app.Vehicle('Toyota','saloon','Camry');
      assert.equal(gm.makeSound(), 'vrhnmmmm');
    });
    it('should return vruuuhnmmmm for the sound of the child class', () => {
      const gm = new app.Car('Toyota','saloon','Camry');
      assert.equal(gm.makeSound(), 'vruuuhnmmmm');
    });
    it('should return the name of the car', () => {
      const gm = new app.Vehicle('Toyota','saloon','Camry');
      assert.equal(gm.getName(), 'Toyota');
    });
    it('should return invalid input if values are not strings', () => {
      const gm = new app.Vehicle('Toyota','saloon',2);
      assert.equal(gm.err, 'invalid input');
    });
});

// describe('Arithmetic Calculations', () => {
//   describe('handle invalid input', function() {
//     it('should return 0 when the input is an empty array', function() {
//       assert.equal(myApp.arithGeo([]),0);
//     });
//     it('should return invalid input when the input is of type string', function() {
//       assert.equal(myApp.arithGeo(""),"Invalid input");
//     });
//     it('should return invalid input when the input is of type {}', function() {
//       assert.equal(myApp.arithGeo({}),"Invalid input");
//     });
//     it('should return only numbers are allowed if one of the elements is a string', function() {
//       assert.equal(myApp.arithGeo([4,16,64,"hello"]),'only numbers are allowed');
//     });
//   });
// });


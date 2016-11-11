"use strict";


/*
  Create a function named Car with one property named `manufactured_date`
  whose value will be Date.now()
 */
function Car() {
  // Create the manufactured date property (see above)
  this.manufactured_date = Date.now();
}

/*
  1. Create a new constructor function for the make of your favorite car.
  2. It must inherit from the more general Car object.
  3. Give it one property, named manufacturer, that holds a string value. 
         For, example, this.manufacturer = "Ford".
 */
function Ferrari() {
  this.manufacturer = "Ferrari";
}

// Set the prototype to a new Car instance
Ferrari.prototype = new Car();

/*
  1. Create a constructor function named after your favorite car model.
  2. It must inherit from the specific make type you created in previous step.
  3. Create some instance properties that are specific to the specific
        car model (e.g. horsepower, cargo capacity, etc.)
*/
function Enzo() {
  this.model = "Enzo";
  this.class = "Sports Car";
  this.engine = "6.0 L Tipo F140 B V12";
  this.transmission = "6 speed semi-automatic";
  this.zeroToSixty = 3.14;
  this.production = 400;
}

// Set the prototype to appropriate model you created above and set the model name argument
Enzo.prototype = new Ferrari();

/*
    Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    1. Create three new instances of your favorite car.
    2. Create a new property on each object to hold the license plate
       number for each car.
*/
var favoriteCarOne = new Enzo();
var favoriteCarTwo = new Enzo();
var favoriteCarThree = new Enzo();

favoriteCarOne.plate_number = "SPR BAD";
favoriteCarTwo.plate_number = "AWE SOM";
favoriteCarThree.plate_number = "FRK COO";


/*
  Now let's see some power of prototypal inheritance. Create a function for
  another model that's made by the manufacturer as your previous car. So if
  your first model was Fusion, make another one here for F150, for example.
 */
function Spider() {
  this.model = "Spider";
  this.class = "Sports Car";
  this.engine = "570-hp V8";
  this.transmission = "7 speed auto-shift manual";
  this.zeroToSixty = 3.34;
  this.production = 9000;
}
/*
  Assign the prototype to the make you define above. Now both models will
  inherit the `manufacturer` property from the make function.
 */
Spider.prototype = new Ferrari();


/*
  Now create an instance of this new car model to put in your garage. Remember
  to give it a plate number.
 */
var spiderGarage = new Spider();
spiderGarage.plate_number = "MY SPIDR";
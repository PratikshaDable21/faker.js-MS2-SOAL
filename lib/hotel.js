
/**
 *
 * @namespace faker.hotel
 */
var hotel = function (faker) {
    var self = this;
    var fake = faker.fake;
  
    /**
     * hotel
     *
     * @method faker.hotel
     */
    self.hotel = function () {
      return fake('{{hotel.name}}');
    };
  
    self.hotel.schema = {
      "description": "Generates a random hotel.",
      "sampleResults": ["Marriott", "Hampton", "Hilton"]
    };
  
    /**
     * address
     *
     * @method faker.hotel.address
     */
    self.address = function () {
      return faker.random.arrayElement(faker.definitions.hotel.address);
    };
  
    self.address.schema = {
      "description": "Generates a address of hotel.",
      "sampleResults": ["Mumbai_India", "Beijing_China", "Kolkata_India"]
    };
  /**
   * typeofstay
   *
   * @method faker.hotel.typeofstay
   */
  self.typeofstay = function () {
    return faker.random.arrayElement(faker.definitions.hotel.typeofstay);
  };

  self.typeofstay.schema = {
    "description": "Generates a hoteltypeofstay.",
    "sampleResults": ["Business", "Pleasure", "Business&Pleasure", "SUV"]
  };
};

module["exports"] = hotel;
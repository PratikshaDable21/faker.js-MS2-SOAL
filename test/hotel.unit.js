if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
  }
  
  describe("hotel.js", function () {
    describe("hotel()", function () {
        it("returns a random hotel", function () {
            sinon.stub(faker.hotel, 'hotel').returns('Marriott');
            var hotel = faker.hotel.();
  
            assert.equal(vehicle, 'Marriott');
            faker.hotel.restore();
        });
    });
  
    describe("address()", function () {
        it("returns random address", function () {
            sinon.stub(faker.hotel, 'address').returns('Mumbai_India');
            var address = faker.hotel.address();
  
            assert.equal(address, 'Mumbai_India');
            faker.hotel.address.restore();
        });
    });
  
    describe("typeofstay()", function () {
      it("returns random hotel typeofstay", function () {
        sinon.stub(faker.hotel, 'typeofstay').returns('Business');
            var typeofstay = faker.hotel.typeofstay();
  
            assert.equal(typeofstay, 'Business');
            faker.hotel.typeofstay.restore();
        });
    });
});
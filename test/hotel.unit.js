if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("hotel.js", function () {
    describe("type()", function () {
        it("returns a type", function () {
            sinon.stub(faker.hotel, 'type').returns('Star hotel');
            var type = faker.hotel.type();

            assert.strictEqual(type, 'Star Hotel');
            faker.hotel.type.restore();
        });
    });
});

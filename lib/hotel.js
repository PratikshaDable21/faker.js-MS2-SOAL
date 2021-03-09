/**
 *
 * @namespace faker.hotel
 */
var Hotel = function (faker) {
    var self = this;
    /**
     * type
     *
     * @method faker.hotel.type
     */
    self.hotel = function () {
        return faker.random.arrayElement(faker.definitions.hotel.type);
    };

    self.type.schema = {
        "description": "Generates a type.",
        "sampleResults": ["Star Hotel", "Motel", "Rotel"]
    };
};

module["exports"] = Hotel;


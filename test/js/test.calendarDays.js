var assert = chai.assert,
    expect = chai.expect;

suite("Testing calcDate", function() {
    test("Test pasado", function() {
        expect(calcDate(new Date(2019, 10, 13),14)).to.equal("27/11/2019");
    });
    test("Test pasado", function() {
        expect(calcDate(new Date(2019, 10, 14),14)).to.equal("28/11/2019");
    });
    test("Test pasado", function() {
        expect(calcDate(new Date(2019, 10, 27),-14)).to.equal("13/11/2019");
    });
    test("Test pasado", function() {
        expect(calcDate(new Date(2019, 10, 10),10929)).to.equal("12/10/2049");
    });
});

suite("Testing getDays", function() {
    test("Test pasado", function() {
        expect(getDays(new Date(2019, 10, 14),new Date(2019, 10, 28))).to.equal(15);
    });
    test("Test pasado", function() {
        expect(getDays(new Date(2019, 10, 28),new Date(2019, 10, 14))).to.equal(-15);
    });
    test("Test pasado", function() {
        expect(getDays(new Date(2019, 10, 10),new Date(2049, 10, 23))).to.equal(10972);
    });
});


var assert = chai.assert,
    expect = chai.expect;

suite("Testing calcWorkingDate", function() {
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date(2019, 10, 13),14)).to.equal("3/12/2019");
    });
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date(2019, 10, 16),10)).to.equal("29/11/2019");
    });
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date(2019, 10, 29),-13)).to.equal("12/11/2019");
    });
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date(2019, 11, 5),1)).to.equal("9/12/2019");
    });
});

suite("Testing getWorkingDays", function() {
    test("Test pasado", function() {
        expect(getWorkingDays(new Date(2019, 10, 13),new Date(2019, 10, 30))).to.equal(13);
    });
    test("Test pasado", function() {
        expect(getWorkingDays(new Date(2019, 11, 5),new Date(2019, 11, 9))).to.equal(3);
    });
    test("Test pasado", function() {
        expect(getWorkingDays(new Date(2019, 10, 30),new Date(2019, 10, 13))).to.equal(-13);
    });
});
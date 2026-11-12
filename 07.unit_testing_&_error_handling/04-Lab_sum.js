// Task: Sum of Numbers.
// Description: Write unit tests to verify that the sum() function
// returns the correct sum for arrays with different values.

describe('sum()', function() {
    it('should return the correct sum for an array of numbers', function() {
        expect(sum([1, 2, 3])).to.equal(6);
    });

    it('should return 0 for an empty array', function() {
        expect(sum([])).to.equal(0);
    });

    it('should work with negative numbers', function() {
        expect(sum([-1, -2, -3])).to.equal(-6);
    });

    it('should work with a single element array', function() {
        expect(sum([5])).to.equal(5);
    });

    it('should work with string numbers inside the array', function() {
        expect(sum(['1', '2', '3'])).to.equal(6);
    });
});
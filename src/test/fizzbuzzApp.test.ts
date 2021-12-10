import numberOrFizzOrBuzzOrFizzBuzz from "../main/fizzbuzzApp";

describe.each([
    [1, "1"],
    [2, "2"],
    [3, "Fizz"],
    [4, "4"],
    [5, "Buzz"],
    [6, "Fizz"],
    [10, "Buzz"],
    [15, "FizzBuzz"]
])("avec l'argument %i", (n, expected) => {
    test(`doit retourner ${expected}`, () => {
        expect(numberOrFizzOrBuzzOrFizzBuzz(n)).toBe(expected);
    })
});
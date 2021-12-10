var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractFizzBuzz = /** @class */ (function () {
    function AbstractFizzBuzz(n) {
        this.n = n;
    }
    return AbstractFizzBuzz;
}());
var NoFizzBuzz = /** @class */ (function (_super) {
    __extends(NoFizzBuzz, _super);
    function NoFizzBuzz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoFizzBuzz.prototype.toFizzBuzz = function () {
        return this.n.toString();
    };
    return NoFizzBuzz;
}(AbstractFizzBuzz));
var Fizz = /** @class */ (function (_super) {
    __extends(Fizz, _super);
    function Fizz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fizz.prototype.toFizzBuzz = function () {
        return "Fizz";
    };
    return Fizz;
}(AbstractFizzBuzz));
var Buzz = /** @class */ (function (_super) {
    __extends(Buzz, _super);
    function Buzz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Buzz.prototype.toFizzBuzz = function () {
        return "Buzz";
    };
    return Buzz;
}(AbstractFizzBuzz));
var FizzBuzz = /** @class */ (function (_super) {
    __extends(FizzBuzz, _super);
    function FizzBuzz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FizzBuzz.prototype.toFizzBuzz = function () {
        return "FizzBuzz";
    };
    return FizzBuzz;
}(AbstractFizzBuzz));
function isMultipleOfDiv(n, div) {
    return n % div == 0;
}
function fizzbuzzFactory(n) {
    if (isMultipleOfDiv(n, 15))
        return new FizzBuzz(n);
    else if (isMultipleOfDiv(n, 3))
        return new Fizz(n);
    else if (isMultipleOfDiv(n, 5))
        return new Buzz(n);
    else
        return new NoFizzBuzz(n);
}
function numberOrFizzOrBuzzOrFizzBuzz(n) {
    var nFizzbuzz = fizzbuzzFactory(n);
    return nFizzbuzz.toFizzBuzz();
}
function main() {
    for (var i = 1; i <= 100; i++) {
        console.log(numberOrFizzOrBuzzOrFizzBuzz(i));
    }
}
main();
module.exports = numberOrFizzOrBuzzOrFizzBuzz;

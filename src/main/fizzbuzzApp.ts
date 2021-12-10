import * as fbs from "./fizzbuzzSolver";

function main() : void {

    const solver =  new fbs.FizzBuzzSolver(
                        new fbs.FizzSolver(
                            new fbs.BuzzSolver(null)
                        )
                    );
    
    for(var i = 1; i <= 100; i++) {
        var tmp = solver.toFizzBuzz(i);
        console.log(tmp);
    }
}

main();

// ############# Version 1 : Décommentée pour faire passer les tests ################

abstract class AbstractFizzBuzz {

    protected n : number;

    constructor(n: number) {
        this.n = n;
    } 

    abstract toFizzBuzz() : string;
}

class NoFizzBuzz extends AbstractFizzBuzz {

    toFizzBuzz(): string {
        return this.n.toString();
    }
}

class Fizz extends AbstractFizzBuzz {

    toFizzBuzz(): string {
        return "Fizz";
    }
}

class Buzz extends AbstractFizzBuzz {

    toFizzBuzz(): string {
        return "Buzz";
    }
}

class FizzBuzz extends AbstractFizzBuzz {

    toFizzBuzz(): string {
        return "FizzBuzz";
    }
}

function isMultipleOfDiv(n: number, div: number) {
    return n % div == 0;
}

function fizzbuzzFactory (n : number) : AbstractFizzBuzz {

    if (isMultipleOfDiv(n,15))
        return new FizzBuzz(n);
    else if (isMultipleOfDiv(n,3))
        return new Fizz(n);
    else if (isMultipleOfDiv(n,5))
        return new Buzz(n);
    else
        return new NoFizzBuzz(n);
}

function numberOrFizzOrBuzzOrFizzBuzz(n: number) : string {

    var nFizzbuzz = fizzbuzzFactory(n);
    return nFizzbuzz.toFizzBuzz();

}

module.exports = numberOrFizzOrBuzzOrFizzBuzz;
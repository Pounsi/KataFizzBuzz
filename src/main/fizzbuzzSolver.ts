abstract class AbstractFizzBuzzSolver {
    protected successor : AbstractFizzBuzzSolver;

    constructor(successor : AbstractFizzBuzzSolver) {
        this.successor = successor;
    }

    abstract toFizzBuzz(n : number) : number | string;
}

class FizzSolver extends AbstractFizzBuzzSolver {

    toFizzBuzz(n : number) : number | string {
        if (isMultipleOf3(n))
            return "Fizz";
        else if(this.successor != null)
            return this.successor.toFizzBuzz(n);
        return n;
    }
}

class BuzzSolver extends AbstractFizzBuzzSolver {

    toFizzBuzz(n : number) : number | string {
        if (isMultipleOf5(n))
            return "Buzz";
        else if(this.successor != null)
            return this.successor.toFizzBuzz(n);
        return n;
    }
}


class FizzBuzzSolver extends AbstractFizzBuzzSolver {

    toFizzBuzz(n : number) : number | string {
        if (isMultipleOf3And5(n))
            return "FizzBuzz";
        else if(this.successor != null)
            return this.successor.toFizzBuzz(n);
        return n;
    }
}

module.exports = {AbstractFizzBuzzSolver, FizzSolver, BuzzSolver, FizzBuzzSolver};

function isMultipleOf3(n: number) {
    return n % 3 == 0;
}

function isMultipleOf5(n: number) {
    return n % 5 == 0;
}

function isMultipleOf3And5(n: number) {
    return n % 3 == 0 && n % 5 == 0;
}

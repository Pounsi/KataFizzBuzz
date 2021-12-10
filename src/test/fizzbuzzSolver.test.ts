import {AbstractFizzBuzzSolver, FizzSolver, BuzzSolver, FizzBuzzSolver} from "../main/fizzbuzzSolver";

describe("Tests des Solver quand aucun successeur en attribut", () => {

    const solverFizz = new FizzSolver(null);
    const solverBuzz = new BuzzSolver(null);
    const solverFizzBuzz = new FizzBuzzSolver(null);

    it.each`
         classe             | critere                   | solver             | n      | expected
        ${"FizzSolver"}     | ${"multiple de 3"}        | ${solverFizz}      | ${3}   | ${"Fizz"}
        ${"FizzSolver"}     | ${"multiple de 3"}        | ${solverFizz}      | ${6}   | ${"Fizz"}
        ${"BuzzSolver"}     | ${"multiple de 5"}        | ${solverBuzz}      | ${5}   | ${"Buzz"}
        ${"BuzzSolver"}     | ${"multiple de 5"}        | ${solverBuzz}      | ${10}  | ${"Buzz"}
        ${"FizzBuzzSolver"} | ${"multiple de 3 et de 5"}| ${solverFizzBuzz}  | ${15}  | ${"FizzBuzz"}
        ${"FizzBuzzSolver"} | ${"multiple de 3 et de 5"}| ${solverFizzBuzz}  | ${30}  | ${"FizzBuzz"}
    `("$classe doit retourner $expected si $critere", ({classe, critere, solver, n, expected}) => {
        expect(solver.toFizzBuzz(n)).toBe(expected);
    });

});

describe("Tests des Solver si successeur existe, Chaine de responsabilités", () => {

    const successor = new BuzzSolver(null);
    const solver = new FizzBuzzSolver(successor);

    it("doit appeler la fonction sur le successeur", () => {
        expect(solver.toFizzBuzz(5)).toBe("Buzz");
    });

    it("doit retourner FizzBuzz sans passer par le successeur", () => {
        expect(solver.toFizzBuzz(15)).toBe("FizzBuzz");
    });

});


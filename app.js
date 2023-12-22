"use strict";
// class User {
//   name: string;
//   // private age: number;
//   age: number;
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // this.name = name;
        // this.age = age;
    }
    print() {
        console.log(this.name);
    }
}
class Admin extends User {
    constructor(name, age, permissions) {
        super(name, age);
        this.permissions = permissions;
    }
}
const user = new User("Max", 30);
console.log(user.name, user.age);
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
// const buttonElement = document.querySelector("button") as HTMLButtonElement;
const buttonElement = document.getElementById("button");
function addNum(a, b) {
    return a + b;
}
var OutputMode;
(function (OutputMode) {
    OutputMode[OutputMode["CONSOLE"] = 0] = "CONSOLE";
    OutputMode[OutputMode["ALERT"] = 1] = "ALERT";
})(OutputMode || (OutputMode = {}));
// function printResult(result: any, printMode: string) {
function printResult(result, printMode) {
    if (printMode === "console") {
        console.log(result);
    }
    else if (printMode === "alert") {
        alert(result);
    }
    // console.log(result);
}
function printResult2(result, printMode) {
    if (printMode === OutputMode.CONSOLE) {
        console.log(result);
    }
    else if (printMode === OutputMode.ALERT) {
        alert(result);
    }
}
const resultNum = addNum(5, 3);
let isDone = false;
console.log(resultNum);
// let resultsArray: number[] = [];
// const resultsArray: { res: number; print: () => void }[] = []
// const resultsArray: Array<CalculationContainer> = [];
const resultsArray = [];
buttonElement.addEventListener("click", () => {
    const num1 = +num1Input.value;
    const num2 = +num2Input.value;
    const result = addNum(num1, num2);
    // const resultContianer: { res: number; print: () => void } = {
    const resultContianer = {
        res: result,
        print() {
            console.log(this.res);
        },
    };
    resultsArray.push(resultContianer);
    printResult(resultsArray, "console");
    printResult(resultsArray, "alert");
    printResult2(resultsArray, OutputMode.CONSOLE);
    printResult2(resultsArray, OutputMode.ALERT);
    // resultsArray[0].print();
});
function logAndEcho(val) {
    console.log(val);
    return val;
}
logAndEcho("Hi there!").split(" ");

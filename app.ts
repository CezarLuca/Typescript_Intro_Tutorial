// class User {
//   name: string;
//   // private age: number;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

interface Greetable {
  name: string;
}

interface Printable {
  print(): void;
}

class User implements Greetable, Printable {
  constructor(public name: string, public age: number) {
    // this.name = name;
    // this.age = age;
  }
  print() {
    console.log(this.name);
  }
}

class Admin extends User {
  constructor(name: string, age: number, private permissions: string[]) {
    super(name, age);
  }
}

const user = new User("Max", 30);
console.log(user.name, user.age);

const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = document.getElementById("num2") as HTMLInputElement;
// const buttonElement = document.querySelector("button") as HTMLButtonElement;
const buttonElement = document.getElementById("button")!;

function addNum(a: number, b: number): number {
  return a + b;
}

enum OutputMode {
  CONSOLE,
  ALERT,
}

// function printResult(result: any, printMode: string) {
function printResult(
  result: CalculationResults,
  printMode: "console" | "alert"
) {
  if (printMode === "console") {
    console.log(result);
  } else if (printMode === "alert") {
    alert(result);
  }
  // console.log(result);
}

function printResult2(result: CalculationResults, printMode: OutputMode) {
  if (printMode === OutputMode.CONSOLE) {
    console.log(result);
  } else if (printMode === OutputMode.ALERT) {
    alert(result);
  }
}

const resultNum = addNum(5, 3);
let isDone: boolean = false;

console.log(resultNum);

// printResult(resultNum);

interface CalculationContainer {
  res: number;
  print(): void;
}

// type CalculationResults = { res: number; print: () => void };
type CalculationResults = CalculationContainer[];

// let resultsArray: number[] = [];
// const resultsArray: { res: number; print: () => void }[] = []
// const resultsArray: Array<CalculationContainer> = [];
const resultsArray: CalculationResults = [];

buttonElement.addEventListener("click", () => {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = addNum(num1, num2);
  // const resultContianer: { res: number; print: () => void } = {
  const resultContianer: CalculationContainer = {
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

function logAndEcho<T>(val: T) {
  console.log(val);
  return val;
}

logAndEcho<string>("Hi there!").split(" ");

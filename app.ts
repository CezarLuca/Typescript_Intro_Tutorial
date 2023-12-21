const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button") as HTMLButtonElement;

function addNum(a: number, b: number): number {
  return a + b;
}

function printResult(result: any): void {
  console.log(result);
}

const resultNum = addNum(5, 3);
let isDone: boolean = false;

console.log(resultNum);

printResult(resultNum);

buttonElement.addEventListener("click", () => {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = addNum(num1, num2);
  printResult(result);
});

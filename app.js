var num1Input = document.getElementById("num1");
var num2Input = document.getElementById("num2");
var buttonElement = document.querySelector("button");
function addNum(a, b) {
    return a + b;
}
function printResult(result) {
    console.log(result);
}
var resultNum = addNum(5, 3);
var isDone = false;
console.log(resultNum);
printResult(resultNum);
// let resultsArray: number[] = [];
// const resultsArray: { res: number; print: () => void }[] = []
var resultsArray = [];
buttonElement.addEventListener("click", function () {
    var num1 = +num1Input.value;
    var num2 = +num2Input.value;
    var result = addNum(num1, num2);
    // const resultContianer: { res: number; print: () => void } = {
    var resultContianer = {
        res: result,
        print: function () {
            console.log(this.res);
        },
    };
    resultsArray.push(resultContianer);
    // printResult(resultsArray);
    resultsArray[0].print();
});

var num1Input = document.getElementById("num1");
var num2Input = document.getElementById("num2");
var buttonElement = document.querySelector("button");
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
var resultNum = addNum(5, 3);
var isDone = false;
console.log(resultNum);
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
    printResult(resultsArray, "console");
    printResult(resultsArray, "alert");
    printResult2(resultsArray, OutputMode.CONSOLE);
    printResult2(resultsArray, OutputMode.ALERT);
    // resultsArray[0].print();
});

// #1 eval error https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError

function evalError() {
    try {
        throw new EvalError('Hello', 'index.js', 10, 0,);
    } catch (e) {
        console.log(e instanceof EvalError); // true
        console.log(e.message);              // "Hello"
        console.log(e.name);                 // "EvalError"
        console.log(e.fileName);             // "someFile.js"
        console.log(e.lineNumber);           // 10
        console.log(e.columnNumber);         // 0

    }
}

module.exports = {
    EvalError,
}

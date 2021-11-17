

// undefined variable 

function undefinedVar() {
    try {
        let a = undefinedVariable
    } catch (e) {
        console.log(e instanceof ReferenceError)  // true
        console.log(e.message)                    // "undefinedVariable is not defined"
        console.log(e.name)                       // "ReferenceError"
        console.log(e.fileName)                   // "Scratchpad/1"
        console.log(e.lineNumber)                 // 2
        console.log(e.columnNumber)               // 6
        console.log(e.stack)                      // "@Scratchpad/2:2:7\n"
    }
}

module.exports = {
    EvalError,
    check()

}

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

// The TypeError object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.


// A TypeError may be thrown when:
// an operand or argument passed to a function is incompatible with the type expected by that operator or function; or
// when attempting to modify a value that cannot be changed; or
// when attempting to use a value in an inappropriate way.

function typeError() {
    try {
        throw new TypeError('Hello', "someFile.js", 10)
    } catch (e) {
        console.log(e instanceof TypeError)  // true
        console.log(e.message)               // "Hello"
        console.log(e.name)                  // "TypeError"
        console.log(e.fileName)              // "someFile.js"
        console.log(e.lineNumber)            // 10
        console.log(e.columnNumber)          // 0
        console.log(e.stack)                 // "@Scratchpad/2:2:9\n"
    }
}

module.exports = {

    typeError,

}
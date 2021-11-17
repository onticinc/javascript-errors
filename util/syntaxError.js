
// SyntaxErrors = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError/SyntaxError

// new SyntaxError()
// new SyntaxError(message)
// new SyntaxError(message, fileName)
// new SyntaxError(message, fileName, lineNumber)

function syntaxError() {
    try {
        eval('hoo bar');
    } catch (e) {
        console.error(e instanceof SyntaxError);
        console.error(e.message);
        console.error(e.name);
        console.error(e.fileName);
        console.error(e.lineNumber);
        console.error(e.columnNumber);
        console.error(e.stack);
    }
}

module.exports = {
    syntaxError,
}
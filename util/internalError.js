// Internal Error = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError

//Example cases are mostly when something is too large, e.g.:
// "too many switch cases",
// "too many parentheses in regular expression",
// "array initializer too large",
// "too much recursion".


// too much recursion
function internalError() {
    function loop(x) {
        if (x >= 10) // "x >= 10" is the exit condition
            return;
        // do stuff
        loop(x + 1); // the recursive call
    }
    loop(0);
}

// throw error 
function throwInternalError() {
    function loop(x) {
        if (x >= 1000000000000)
            return;
        // do stuff
        loop(x + 1);
    }
    loop(0);

    // InternalError: too much recursion
}

module.exports = {
    throwInternalError,
    internalError

}
// Aggregate Error = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError

function catchAggregateError() {
    Promise.any([
        Promise.reject(new Error("some error")),
    ]).catch(e => {
        console.log(e instanceof AggregateError); // true
        console.log(e.message);                   // "All Promises rejected"
        console.log(e.name);                      // "AggregateError"
        console.log(e.errors);                    // [ Error: "some error" ]
    });
}

function throwAggregateError() {
    try {
        throw new AggregateError([
            new Error("some error"),
        ], 'Hello');
    } catch (e) {
        console.log(e instanceof AggregateError); // true
        console.log(e.message);                   // "Hello"
        console.log(e.name);                      // "AggregateError"
        console.log(e.errors);                    // [ Error: "some error" ]
    }
}

module.exports = {

    catchAggregateError,
    throwAggregateError

}
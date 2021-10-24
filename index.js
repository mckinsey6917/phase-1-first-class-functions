function Monday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}

function runFiveMiles() {
    console.log("Go for a five-mile fun");
}
function liftWeights() {
    console.log("Pump iron");
}
function swimFortyLaps() {
    console.log("Swim 40 laps");
}

function Monday() {
    runFiveMiles();
    liftWeights();
}

function exerciseRoutine(postRunActivity) {
    runFiveMiles() ;
    postRunActivity();
}

function Monday() {
    exerciseRoutine(liftWeights);
}
function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

exerciseRoutine(function () {
    console.log("Stretch! Work that core!");
});

exerciseRoutine(() => {
    console.log("Stretch!")
})

exerciseRoutine(() => console.log("Stretch"));

function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    return function namedFunction() {
        console.log("this is a named function!")
    }
    
}
function returnsAnAnonymousFunction() {
    return () => console.log("Anonymous functino")
}
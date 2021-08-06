// ANTES DO ECMA6
function sum(a, b){
    var value = 0;

    for(var i = 0; i < arguments.length; i++){
        value += arguments[i];
    }
    return a + b;
}

console.log(sum(5, 5, 5, 2, 3))

// rest operator ...
function soma(...args){
    return args((acc, value2) => acc + value, 0)
}

console.log(soma(5, 5, 5, 2, 3));

// exe 2:
const soma4 = (a, b, ...rest) => {
    console.log(a, b, rest);
}

console.log(soma4(5, 5, 5, 2, 3));

// objeect padrão

var obj = {
    prop: 'Dio'
};

// outra opção
var test = 'teste'

var testes = {
    prop1: test
}

console.log(obj, testes)

// ECMA6

function method1(){
    console.log('method called');
}

var obje2 = {
    method1
};

obje2.method1()

// outra forma:
var obj3 = {
    sum: function sum(a, b){
        return a + b;
    }
};

console.log(obj3.sum(1, 5));

// com função anônima (ECMA6)
var obj4 = { // objetos literais
    sum2(c, d){
        return c + d;
    }
};

console.log(obj4.sum2(1, 5));
console.log(obj4);

// other exemple
var propName = 'test';

var obj5 = {
    [propName + ' concat']: 'prop value'
};

console.log(obj5)
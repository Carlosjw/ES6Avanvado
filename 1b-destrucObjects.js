// Destructuring Objects

var obj = {
    name: 'Carlos',
    props: { // objeto dentro de objeto
        age: 26,
        favoritColors: ['black', 'blue'] // array dentro do objeto
    }
};

// forma padrão
var name = obj.name;

var age = obj.props.age;

var color1 = obj.props.favoritColors[0];

// Com destructor
var {name: name2} = obj // destruindo nome da variável e atribuindo outro nome

var {
    props: { age, favoritColors: [color1, color2]}
} = obj;

name2 = 'José';
console.log(obj);

console.log(age);

console.log(color1);

// Others exemples:
var arr2 = [{name: 'Apple', type: 'fruit'}]

// forma padrão
var fruit = arr2[0].name
console.log(fruit)

// com destruct
var [{name: fruitName}] = arr2;

console.log(fruitName)
console.log(arr2)

//functions

// forma padrão
function sum(array){
    return array[0] + array[1];
}

console.log(sum([5,5]))

// com destruction

function sum2([a, b] = [5, 6]){
    return a + b;
}

console.log(sum2([5,5]))

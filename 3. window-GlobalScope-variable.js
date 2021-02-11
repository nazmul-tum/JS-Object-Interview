var name = 'safin';

function add(num1, num2){
    var result = num1 + num2;
    result = num1 + num2; // implicietly global variable
    console.log('result inside', result);// accesible due to local variable (result)
    console.log('name inside', name);// accesible due to Global variable (name)
    
    return result;
}

console.log('result inside', result);// NOT accesible due to local variable (out of scope)

var sum = add(12,13);
console.log(sum);
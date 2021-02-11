function doSomething(){
    console.log(3333);
}

console.log(1111);
setTimeout(doSomething,10000);
console.log(2222);
setInterval(() => {
    console.log('doing something');
}, 1000);


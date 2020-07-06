function add(...args) {
    let sum=0;
    for(let i=0;i<args.length;i++){
        sum= sum+args[i];
    }

    return sum;
}
console.log(add(1,2,3,4,5,6));

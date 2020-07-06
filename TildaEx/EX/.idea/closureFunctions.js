function multiply(times){
    return number => number * times;
}
let double2=multiply(2);
console.log(double2(5));

function sarmal(n){
    let x=n;
    return (topla,k)=>topla+x*k;
}
let y=sarmal(1);
console.log(y(4,5));


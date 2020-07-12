//function -input, code , output

let greetUser= function(){
    console.log("Welcome User")
}
greetUser();

let Square =function(num1){
    return num1*num1;
}
console.log(Square(3));
let result=Square(10);
console.log(result);

//convertFahrenhietToCelsius 
let convertFahrenhietToCelsius=function(fahrenhiet){
    let celsius = (fahrenhiet-32)*(5/9);
    return celsius;
}

//call a couple of times (32 <=> 0, 68 =>20)
let result1 =convertFahrenhietToCelsius(32);
let result2 =convertFahrenhietToCelsius(68);

//print the converted values
console.log(result1);
console.log(result2);
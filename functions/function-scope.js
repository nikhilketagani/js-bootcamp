//Global scope convertFahrenhietToCelsius(),result1,result2
  //Local scope (fahrenhiet,celsius)
    //Local scope(isFreezing)
let convertFahrenhietToCelsius=function(fahrenhiet){
    let celsius = (fahrenhiet-32)*(5/9);
    if(celsius <=0){
        let isFreezing =true;
    }
    return celsius;
}

//call a couple of times (32 <=> 0, 68 =>20)
let result1 =convertFahrenhietToCelsius(32);
let result2 =convertFahrenhietToCelsius(68);

//print the converted values
console.log(result1);
console.log(result2);
//Multiple Arguments
let add = function(a,b){

return a+b;
}

let result= add(10,3);
console.log(result);

//Default Arguments
let getScoreText = function(name= 'Anonymous', score = 0){
    // console.log(name);
    // console.log(score);
    return 'Name: '+name+' Score:'+score;
}

let scoreText=getScoreText('nik',100);
let scoreText1=getScoreText();
let scoreText2=getScoreText(undefined,99);
console.log(scoreText);
console.log(scoreText1);
console.log(scoreText2);

// challange area

//total, tipPercentage .2

let getTip= function(total,tipPercentage=0.20){
console.log(`A ${tipPercentage*100}%  tip on $${total} would be ${total *tipPercentage}`);
return total *tipPercentage;
}
let totalTip =getTip(100);
console.log(totalTip);

let totalTip1 =getTip(100,.25);
console.log(totalTip1);
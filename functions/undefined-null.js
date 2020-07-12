let name ='gen'
//undefined for variable
let name1;
//let name1  ='gen'
//console.log(name);
console.log(name1);
if(name1 === undefined){
console.log('please provide a name');
}else{
    console.log(name);
}


//undefined for function argument
//undefined as function return default value
let square = function(num){

    console.log('inside Square function')
    console.log(num)
}

let result= square();
console.log(result);

let age =27;
age= undefined;
console.log(age);
//undefined is something undefined
//null developer want to clear the value 
//so he assigned a null value.
age=null;
console.log(age);
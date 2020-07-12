//Global scope(name)
 //local(name)
  //local
//local

let name = 'Sunil'
if(true){
    //Variable shadowing.
    //its when variable in local scope uses its variable value ,instead value in parent scope
    //local variable value is shadowing parent scope variable
    let name ='Mike';
    if(true){
        name ='Jan';
        console.log(name);
    }
}
if(true){
    console.log(name);
}

//leaked variable in javascript
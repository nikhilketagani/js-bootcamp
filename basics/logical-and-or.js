let temp = 120
if(temp >=60){
    if(temp <=90){

    }
}
// Logical And operator - True if both sides are true. False other
// Logical Or Operator - True if at least one side is true. False otherwise
if(temp>=60 && temp<=90){
    console.log('it is pretty nice out')
}
 else if(temp <=0 || temp >=120){
     console.log('Do Not go outside');
 }

 //challenge area

 let isGuestOneVegan= true;
 let isGuestTwoVegan= false;
 
 //Are both vegan ? only offer up vegan dishes
 if(isGuestOneVegan && isGuestTwoVegan){
     console.log('only offer up vegan dishes');
 }
 // Atleast one vegan?Make sure to offere up some vegan options
 else if(isGuestOneVegan || isGuestTwoVegan ){
console.log('Make sure to offere up some vegan options');
 }
 //Else , offer up anything on the menu
 else{
     console.log('offer up anything on the menu');
 }
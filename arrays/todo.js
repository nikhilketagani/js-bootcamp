//create an array with five todos
const todos=['1.wake up 5 am','2.Go for jogging','3.meditate for 30 mins','4.eat breakfast','5.start the work'];
//you have x todos
console.log(`you have ${todos.length} todos`)
//print the first and second to last items -> Todo: walk the dog
console.log(todos[0]);
console.log(todos[todos.length-2])
console.log(todos)
//challenge area
//Delete the 3rd item
todos.splice(2,1);
//Add a new item at the end
todos.push('new item added at the end')
//Remove the first item from the list
console.log(todos)

//1. the first item
//2. the second item
//forEach loop
todos.forEach(function(item,index){
    console.log(`${index+1}. ${item}`)
});

//for loop
//documentation
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

for(let count=0;count<todos.length;count++){
    let num=count+1;
    console.log(`${num}. ${todos[count]}`)
}

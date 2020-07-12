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

//1.convert array to array of objects => text, completed
const todos1=[
{
text:'wake up 5 am',
completed:false
},
{text:'Go for jogging',
completed:true},
{text:'meditate for 30 mins',
completed:false},
{text:'eat breakfast',
completed:false},
{text:'start the work',
completed:true}];
//2.create a function to remove a todo by text value
const deleteTodo= function(todos,text){
    const index =todos.findIndex(
        function(todo,index){
            return todo.text===text;
        }
    )
    if(index>-1){
    todos.splice(index,1);
    }
}
console.log(todos1)
deleteTodo(todos1,'5.start the work')
console.log(todos1)
//create a function that retun todos that are yet to be don based on completed 
const getThingsTodo=function(todos){
return todos.filter(function(todo,index){
    return !todo.completed
})
}
console.log(getThingsTodo(todos1))
//Sort todos based completed or not..ones those are not completed will be seen on top
//if two of compared objects have completed as false then alphabatecally sorted
//https://gomakethings.com/sorting-an-array-by-multiple-criteria-with-vanilla-javascript/
const sortTodos =function(todos){
    todos.sort(function(a,b){
        if(!a.completed && b.completed){
            
            return -1;
        }if(a.completed && !b.completed){
            return 1;
        }
        if (a.text > b.text) return 1;
	if (a.text < b.text) return -1;


    });

}
sortTodos(todos1);
console.log(todos1)
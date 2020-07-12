const notes =['Note 1', 'Note 2', 'Note 3' ];
console.log(notes);
console.log(notes.length);

//documentation
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
console.log(notes[notes.length-1]);
console.log('before '+notes);

//remove element from end of the array -pop()
console.log(notes.pop());

//add element at the end of the array -push() method
notes.push('My new note');

//remove element from the begining of the array -shift() method
console.log(notes.shift());

//add element at the begining of the array -unshift() method
notes.unshift('My first notes')

//remove 0 elements from and index 1 and add item
notes.splice(1,0,'This is the new second item');

//remove 1 element from array at index 1 and add the element in 3rd arguement
notes.splice(1,1,'This is the new second new item1')
console.log('after '+notes);

notes.forEach(function(item,index){
    console.log(index)
    console.log(item)
});


//for loop
for(let count=0;count<3;count++){
    console.log(count);
}
for(let count=notes.length-1;count>=0;count--){
    console.log(notes[count]);
}

//indexof() method --valid case
console.log(notes.indexOf('Note 3'))

//indexof() method --invalid case
console.log(notes.indexOf('Note 2'))

const notes1=[{
title: "My next trip",
body: "I would like to go to Araku"
},{
    title: "Habbits to work on",
    body: "Excercise, Eating a bit better"
},{
    title: "Office Modification",
    body: "Get a new chair"
}];
//finding an item in array of objects
const index =notes1.findIndex(function (note,index){
    console.log(note)
    return note.title === 'Habbits to work on';
})
console.log(index)

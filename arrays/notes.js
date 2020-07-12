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
});
console.log(index);
//finding an object with required title in array of objects using findIndex() method
// const findNote= function(notes,noteTitle){
// const index= notes.findIndex(function(note,index){
//     //using toLowerCase() method to make caseinsensitive search
//     return note.title.toLowerCase()===noteTitle.toLowerCase();

// })
// return notes[index];
// }
//finding an object with required title in array of objects using find() method
//find() method wil return object if found or undefined if it is not found
const findNote= function(notes,noteTitle){
    const note= notes.find(function(note,index){
        //using toLowerCase() method to make caseinsensitive search
        return note.title.toLowerCase()===noteTitle.toLowerCase();
    
    })
    return note;
    }
const note=findNote(notes1,"habbits to work on")
console.log("after findNote()");
console.log(note);
//using filter() method
const filteredNotes= notes1.filter(function(note,index){
const isTitleMatch =note.title.toLowerCase().includes('xt');
const isBodyMatch =note.body.toLocaleLowerCase().includes('xt');
return isTitleMatch || isBodyMatch;
    //return note.title.includes('to') || note.body.includes('to')
});
//console.log(filteredNotes);
const findNotes= function(notes1, query){
    const filteredNotes= notes1.filter(function(note,index){
        const isTitleMatch =note.title.toLowerCase().includes(query.toLowerCase());
        const isBodyMatch =note.body.toLowerCase().includes(query.toLowerCase());
        return isTitleMatch || isBodyMatch;
            //return note.title.includes('to') || note.body.includes('to')
        });
        return filteredNotes;
}
console.log(findNotes(notes1,'xt'));
console.log('a' <'b')
console.log('march' <'jan')
console.log('a' <'A')
const sortNotes =function(notes){
    notes.sort(function(a,b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1;
        }else if(b.title.toLowerCase() < a.title.toLowerCase()){
            return 1;
        }else{
            return 0;
        }

    });

}
console.log(notes1);
sortNotes(notes1);
console.log(notes1);
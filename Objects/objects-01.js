let myBook ={
    title: '1994',
    author: 'George Orwell',
    pageCount:326
}
console.log(`${myBook.title} by  ${myBook.author}`);
myBook.title= 'Animal Farm';
console.log(`${myBook.title} by  ${myBook.author}`);


//Challenge Area

//name ,age , location
let myInfo ={
    name: 'nikhil',
    age : 25,
    location: 'Guntur'
}
//Andrew is 27 and lives in philadelphia
console.log(`${myInfo.name} is ${myInfo.age} and lives in ${myInfo.location}.`)
myInfo.age=myInfo.age+1;
console.log(`${myInfo.name} is ${myInfo.age} and lives in ${myInfo.location}.`)
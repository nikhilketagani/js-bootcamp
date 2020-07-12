let myBook ={
    title: '1994',
    author: 'George Orwell',
    pageCount:326
}
let otherBook ={
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount:723
}

let getSummary =function(Book){
   return {
       summary :`${Book.title} by  ${Book.author}`,
       pageCountSummary: `${Book.title} is ${Book.pageCount} pages`
   }
    //console.log(`${Book.title} by  ${Book.author}`);
}
let bookSummary =getSummary(myBook);
let bookSummary1= getSummary(otherBook);
console.log(bookSummary.pageCountSummary)

//Challenge area
//create function - take fahrenhiet in - return object with all three
let convertFahrenhiet=function(fahrenhiet){
    let celsius = (fahrenhiet-32)*(5/9);
    let kalvin =(fahrenhiet+459.67)*(5/9);
    return {fahrenhiet:fahrenhiet,
    celsius:celsius,
    kalvin:kalvin
    };
}

let temp=convertFahrenhiet(60);
console.log(`temperature is ${temp.celsius}C , ${temp.fahrenhiet}f, ${temp.kalvin}K`)
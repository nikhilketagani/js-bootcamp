let name = ' nikhil ';

//Length property

console.log(name.length);

// covert to Upper case
console.log(name.toUpperCase());

//documentation for javascript
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// search a string in another string
let password= 'abc123asdf098';
console.log(password.includes('as'));

//Trim
console.log(name)
console.log(name.trim());

//Challange Area
//length should be more than 8
//doesnt contain the word password
let isValidPassword=function(password){
    return password.length >8 && ! password.toLowerCase().includes('password')
    }
console.log(isValidPassword('asdfs'))
console.log(isValidPassword('asdfswdvfv'))
console.log(isValidPassword('asdfpasswordvfv'))

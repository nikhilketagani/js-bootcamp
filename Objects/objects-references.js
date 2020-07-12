let myAccount ={
    name: 'Nikhil',
    expenses: 0,
    income:0
}

let addExpense =function(account,amount){
account.expenses=account.expenses+amount;
console.log(account)
}

// addIncome
let addIncome = function(account,income){
    account.income=account.income+income;
}


// resetAccount
 let resetAccount = function(account){
     account.expenses=0;
     account.income=0;
 }


// getAccountSummary
let getAccountSummary = function(account){
    balance = account.income- account.expenses;

    return `Account for ${account.name} has ${balance}. $${account.income} in income. $${account.expenses} in expenses.`;
}
// addExpense(myAccount,2.50);
// console.log(myAccount)

//addIncome
addIncome(myAccount,2000);
 
//addExpense
addExpense(myAccount,2.50)

//addExpense
addExpense(myAccount,160)

//getAccountSummary
console.log(getAccountSummary(myAccount));
 //resetAccount
 resetAccount(myAccount);


console.log(getAccountSummary(myAccount));
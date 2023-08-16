import Account from "./account.js";
import Transaction from "./transaction.js";
import Statement from "./statement.js";

let myAccount = new Account();

let transaction1 = new Transaction(`deposit`, `2012/01/10`, 1000);
let transaction2 = new Transaction(`deposit`, `2012/01/13`, 2000)
let transaction3 = new Transaction(`withdrawal`, `2012/01/14`, 500);

myAccount.depositAmount(transaction1);
myAccount.depositAmount(transaction2);
myAccount.withdrawAmount(transaction3);

Statement.printStatement(myAccount.getTransactions());


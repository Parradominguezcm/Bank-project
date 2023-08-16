# Bank

This challenge helps you practice your OO design skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* Results of your code should display via the JavaScript console.  (NB: You don't need to implement a command line interface that takes user input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, credit or debit amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```


#### Standard
- [x] Meets the spec
- [x] Developed test-first
- [x] Passes tests and code is clean and well formatted
- [x] Encapsulates adding and storing Transactions in a class
- [x] Encapsulates Statement formatting in a class
- [x] Encapsulates Transaction data in a class

#### Extended
- [ ] Can you format the console output?  Credited values should be GREEN and debited values should be RED.  The balance should be GREEN if positive and RED if negative

You may find this link useful [Output to the command line using NodeJS](https://nodejs.dev/en/learn/output-to-the-command-line-using-nodejs/) - check the formatting section (and this links out to a GitHub doc on the [ANSI color codes](https://gist.github.com/iamnewton/8754917))

#### Bank challenge user stories, domain model and initial test list
#### User stories:
- [x]	As a client, so that I can store my money safely, I want to have an account.
- [x]	As a client, so I can take out cash, I want to be able to make withdrawals.
- [x]	As a client, so that I can save money, I want to be able to make deposits
- [x]	As a Client, so that I can keep healthy finances, I want to not be able to overdraft my account
- [x]	As a Client, so that I can keep track of my finances, I want to see all transactions on my account statement
- [x]	As a Client, so that I can keep track of my finances, I want my statement to be ordered by date
- [ ]	As a user, so that I can check my statement easily, I want the statement to be color coded



#### Domain Modelling:
| Object      | Property     | Message       | Output        |
| :---        |    :----:    |     :----:    |          ---: |
|             |              |               |               |
| Account     |transactions  |depositAmount()|               |
|             |  -[Tra]      |               |               |
|             |balance       |withdrawAmount |               |
|             |              | -()           |               |
|             |              |               |               |
| Transaction |#date         |               |               |
|             |#amount       |               |               |
|             |#resultingBal |               |               |
|             |#type         |               |               |
|             |              |               |               |
|             |              |               |               |
| Statement   |statementList |formatCredit() |               |
|             |  -[]         |formatDebit()  |               |
|             | header       |formatDate()   |               |
|             |              |formatBalance()|               |
|             |              |printStatement |statement      |
|             |              |               |               |




#### Test list:

- [x]	My account exists
- [x]	Deposits can be made
- [x]	Only numbers can be deposited
- [x]	Withdrawals can be made
- [x]	Only numbers can be withdrawn
- [x]	I can’t overdraft my balance
- [x]	My account keeps track of transactions in an array
- [x]	My Statement formats the credit
- [x]	My Statement formats debit
- [x]	My statement formats the balance
- [x]	My date is formatted
- [x]	My statement creates an array 
- [x]	My statement gets printed

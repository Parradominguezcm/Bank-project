import Account from '../src/account.js';

describe(`Account tests`, () => {

    let testAccount;
    let mockTransaction;

    beforeEach(() => {
        testAccount = new Account();
        mockTransaction = {
            amount: 5,
            type: `deposit`,
            date: new Date(`2014-06-23`),
        };
    });

    afterEach(() => {
        testAccount = undefined;
        mockTransaction = undefined;
    });


    it(`Shows that there is an account object that contains a #balance and can be checked`, () => {
        //arrange
        //act
        //assert
        expect(testAccount.getBalance()).toBeDefined();
    });

    it(`Allows for transactions to be done in the account`, () => {
        //arrange

        //act
        testAccount.depositAmount(mockTransaction);
        //assert
        expect(testAccount.getTransactions().length).toBeGreaterThan(0);
    });

    it(`Allows for the balance to increase when deposits are made`, () => {
        //arrange
        //act
        testAccount.depositAmount(mockTransaction);
        //assert
        expect(testAccount.getBalance()).toBeGreaterThan(0);
    });

    it(`Allows for the balance to decrease when there's a withdrawal`, () => {
        //arrange
        testAccount.depositAmount(mockTransaction);
        //act
        testAccount.withdrawAmount(mockTransaction);
        //assert
        expect(testAccount.getBalance()).toBeLessThan(5);

    });

    it(`Alerts the user if the input is not a number`, () => {
        //arrange
        mockTransaction.amount = `turtle`;
        //act
        //assert
        expect(() => testAccount.withdrawAmount(mockTransaction)).toThrowError('That is not an amount');
    });

    it('Does not allow the balance to be overdraft', () => {
        //arrange
        //act
        //assert
        expect(() => testAccount.withdrawAmount(mockTransaction)).toThrowError("You don't have enough money");
    });

    it('Updates the transactions array with every transaction made', () => {
        //arrange
        //act
        testAccount.depositAmount(mockTransaction);
        testAccount.depositAmount(mockTransaction);
        testAccount.withdrawAmount(mockTransaction);
        //assert
        expect(testAccount.getTransactions().length).toBeGreaterThan(1);
    });

})

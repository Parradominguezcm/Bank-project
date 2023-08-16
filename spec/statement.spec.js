import Statement from "../src/statement.js";

describe('statement tests', () => {

    let consoleSpy;

    let transactionArray;

    beforeEach(() => {
        consoleSpy = spyOn(console, 'log');
        transactionArray = [{
            amount: 5,
            type: 'deposit',
            date: new Date('2014-06-27'),
            resultingBalance: 5
        },
        {
            amount: 5,
            type: 'deposit',
            date: new Date('2014-05-23'),
            resultingBalance: 5
        },
        {
            amount: 5,
            type: 'withdrawal',
            date: new Date('2013-05-23'),
            resultingBalance: 5
        }
        ];
    });

    afterEach(() => {
        transactionArray = undefined;
    });

    it('console.logs each element of the array', () => {
        //arrange
        //act
        Statement.printStatement(transactionArray);
        //assert
        expect(consoleSpy).toHaveBeenCalledTimes(transactionArray.length + 1);
    });

    it('formats the dates in short form', () => {
        //arrange
        //act
        //assert
        expect(Statement.formatDate(transactionArray[0])).toBe(`27/06/2014`);
    });

    it('formats the deposits', () => {
        //arrange
        //act
        //assert
        expect(Statement.formatCredit(transactionArray[0])).toHaveSize(7);
    });

    it('formats the deposits', () => {
        //arrange
        //act
        //assert
        expect(Statement.formatDebit(transactionArray[0])).toHaveSize(7);
    });

    it('formats the balance', () => {
        //arrange
        //act
        //assert
        expect(Statement.formatBalance(transactionArray[0])).toHaveSize(7);
    });
})
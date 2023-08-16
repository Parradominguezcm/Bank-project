class Statement {
    static printStatementHeader() {
        console.log(`date       || credit  || debit  || balance`)
    };

    static formatDate(transaction) {
        return transaction.date.toLocaleDateString("en-GB");
    };

    static formatCredit(transaction) {
        return transaction.type == 'deposit' && transaction.amount.toFixed(2).toString().padEnd(7, ' ') || ''.padEnd(7, ' ');
    };

    static formatDebit(transaction) {
        return transaction.type != 'deposit' && transaction.amount.toFixed(2).toString().padEnd(7, ' ') || ''.padEnd(7, ' ');
    };

    static formatBalance(transaction) {
        return parseFloat(transaction.resultingBalance).toFixed(2).padEnd(7, ' ');
    };

    static printStatement(transactions) {
        Statement.printStatementHeader();
        transactions.reverse().forEach((tr) => {
            console.log(Statement.formatDate(tr) + ` || ` + Statement.formatCredit(tr) + ` || ` +
                Statement.formatDebit(tr) + `|| ` + Statement.formatBalance(tr));
        });
    };
};

export default Statement;
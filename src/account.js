class Account {
    #balance = 0;
    #transactions = [];

    errorIfNaN(value) {
        if (isNaN(value)) throw new Error("That is not an amount");
    };

    errorIfOverdraft(amount, balance) {
        if (amount > balance)
            throw new Error("You don't have enough money");
    };

    depositAmount(deposit) {
        this.errorIfNaN(deposit.amount)
        this.#balance += deposit.amount;
        deposit.resultingBalance = this.#balance;
        this.#transactions.push(deposit);
    };

    withdrawAmount(withdrawal) {
        this.errorIfNaN(withdrawal.amount)
        this.errorIfOverdraft(withdrawal.amount, this.#balance);
        this.#balance -= withdrawal.amount;
        withdrawal.resultingBalance = this.#balance;
        this.#transactions.push(withdrawal);
    };

    getBalance() {
        return this.#balance;
    };

    getTransactions() {
        return this.#transactions;
    };

}

export default Account;
class Transaction {
    #date;
    #amount;
    #resultingBalance;
    #type;

    constructor(type, date, amount) {
        this.#type = type;
        this.#date = new Date(date);
        this.#amount = parseFloat(amount);

    };

    get amount() {
        return this.#amount;
    };

    get resultingBalance() {
        return this.#resultingBalance;
    };

    set resultingBalance(newBalance) {
        this.#resultingBalance = newBalance;
    };

    get date() {
        return this.#date;
    };

    get type() {
        return this.#type;
    }
};

export default Transaction;
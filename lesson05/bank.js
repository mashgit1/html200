class BankAccount {
    constructor() {
        this.balance = 0;
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return true;
        }
        return false;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return true;
        }
        return false;
    }

    viewBalance() {
        return this.balance;
        }
    }

const account = new BankAccount();

function completeOption() {
    const action = prompt("Choose an action (W = Withdraw, D = Deposit, B = View Balance, Q = Quit):").toUpperCase();

    if (action === 'Q') {
        alert("Thank you for using this bank application.");
        return;
    } else if (action === 'W') {
        const amount = parseFloat(prompt("Enter amount to withdraw:"));
        if (account.withdraw(amount)) {
            alert(`Withdrawal successful. Updated balance: ${account.viewBalance()}`);
        } else {
            alert("Withdrawal failed.");
        }
    } else if (action === 'D') {
        const amount = parseFloat(prompt("Enter amount to deposit:"));
        if (account.deposit(amount)) {
             alert(`Deposit successful. Updated balance: ${account.viewBalance()}`);
        } else {
            alert("Deposit failed. Invalid amount.");
        }
    } else if (action === 'B') {
        alert(`Your balance: ${account.viewBalance()}`);
    } else {
        alert("Invalid. Please choose from W, D, B, or Q.");
    }

    completeOption();
}

completeOption(); 

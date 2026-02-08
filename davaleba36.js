
// 1
// car კლასის შექმნა brand, model da speed პარამეტრებით
class Car {
    constructor(brand, model, speed = 0) {
        this.brand = brand;
        this.model = model;
        this.speed = speed;
    }
    // start მეთოდი(თუ სისწრაფე=0, იწყებს მოძრაობას 3კმ/სთ სიჩქარით)
    start() {
        if (this.speed === 0) {
            this.speed = 1;
            return `${this.brand} ${this.model} has started moving at ${this.speed} km/h.`;
        }
        // თუ მანქანა უკვე მოძრაობს, console.log-ში გამოიტანს შემდეგს:
        else {
            return `${this.brand} ${this.model} is already moving at ${this.speed} km/h.`;
        }

    }
    // თუ სიჩქარე 0-ზე მეტია, აჩერებს. თუ სიჩქარე = 0 console.log-ში დაგვიწერს, რომ მანქანა უკვე გაჩერებულია
    stop() {
        if (this.speed > 0) {
            this.speed = 0;
            return `${this.brand} ${this.model} has stopped.`;
        } else {
            return `${this.brand} ${this.model} is already stopped.`;
        }
    }
    // აჩქარების მეთოდი, საწყის სიჩქარეს ვუმატებთ სიჩქარის ცვლილებას(თუ მანქანა არ დაგვიძრავს, სიჩქარე არ მოემატება)
    accelerate(speed2) {
        if (this.speed > 0) {
            this.speed += speed2;
            return `${this.brand} ${this.model} accelerated to ${this.speed} km/h.`;
        } else {
            return `${this.brand} ${this.model} can't accelerate.`;
        }
    }
    // მანქანის status(გაჩერებულია თუ მოძრაობს და რამდენი კმ/სთ-ით)
    getStatus() {
        let status;
        if (this.speed > 0) {
            status = "running";
        } else {
            status = "stopped";
        }
        return `${this.brand} ${this.model} is ${status} (${this.speed} km/h)`;
    }

}


const manqana = new Car("Ferrari", "LaFerrari");
console.log(manqana.start());
console.log(manqana.accelerate(150));
console.log(manqana.getStatus());
console.log(manqana.stop());
console.log(manqana.getStatus());



// 2
// BankAccount კლასის შექმნა, user და balance პარამეტრებით
class BankAccount {
    constructor(user, balance = 0) {
        this.user = user;
        this.balance = balance;
        this.history = ""; //ტრანზაქციას ვინახავთ ტექსტად
    }

    //   deposit მეთოდი: თუ შესატანი თანხა მეტია 0ზე, მაშინ თანხები ემატება, წინაამღდეგ შემთხვევაში თანხას ვერ შევიტანთ
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.history += `Deposited ${amount} GEL\n`;
            return `You deposited ${amount} GEL. New balance: ${this.balance} GEL`;
        } else {
            return `Deposit amount must be positive.`;
        }
    }
    // withdraw მეთოდი იგივე ლოგიკით(თანხა უნდა იყოს 0-ზე მეტი, და არ უნდა აჭარბებდეს balance-ს)
    withdraw(amount) {
        if (amount <= 0) {
            return `Withdrawal amount must be positive.`;
        } else if (amount > this.balance) {
            this.history += `Failed withdrawal of ${amount} GEL (Insufficient funds)\n`;
            return `Insufficient funds. Current balance: ${this.balance} GEL`;
        } else {
            this.balance -= amount;
            this.history += `Withdrew ${amount} GEL\n`;
            return `You withdrew ${amount} GEL. New balance: ${this.balance} GEL`;
        }
    }
    // ბალანსის გამოტანის მეთოდი
    getBalance() {
        return `Current balance: ${this.balance} GEL`;
    }
    // ტრანზაქციების ისტორია
    getTransactionHistory() {
        return this.history === "" ? "No transactions yet." : this.history;
    }
}


const myAcc = new BankAccount("Zuka", 290);
console.log(myAcc.deposit(55));
console.log(myAcc.withdraw(195));
console.log(myAcc.getBalance());
console.log(myAcc.getTransactionHistory());


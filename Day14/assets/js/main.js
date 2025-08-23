class Account {
    #balance = 0;//private 
    #accountNumber;

    static totalAccounts = 0;
    constructor(accountHolder, initialbalance = 0) {
        this.accountHolder = accountHolder;
        this.#accountNumber = `ACC${++Account.totalAccounts}`;
        this.#balance = initialbalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`${amount} deposited . New balance: ${this.#balance}`);
        } else {
            console.log("Deposit amount must be positive.");

        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`${amount} withdrawn. New Balace: ${this.#balance}`);
        }
        else {
            console.log("Invalid amount.");
        }
    }
    getBalance() {
        return this.#balance;
    }
    static showTotaAccounts() {
        console.log(`Total Account Created: ${Account.totalAccounts}`);
    }
}


class SavingesAccount extends Account {
    constructor(accountHolder, initialbalance, intersetRate = 0.05) {
        super(accountHolder, initialbalance);
        this.intersetRate = intersetRate;
    }
    withdraw(amount) {
        const balance = this.getBalance();
        if (amount > balance * 0.2) {
            console.log("Saving Account: Can't withdraw more than 20% of balance at once");
        } else {
            super.withdraw(amount);
        }
    }
    addInterst() {
        const interest = this.getBalance() * this.intersetRate;
        this.deposit(interest);
        console.log(`Interest added: ${interest}`);
    }
}
//Create Accounts
const acc = new SavingesAccount("Alice", 1000);

//Deposite
acc.deposit(200);

//polymorphism in action
acc.withdraw(300);
acc.withdraw(200);

console.log(acc.getBalance());
//static method& property
Account.showTotaAccounts();
console.log(Account.totalAccounts);
//unique behavior
acc.addInterst();






//Abstracted class shape
class Shape {
    constructor(color) {
        if (new.target === Shape) {
            throw new Error("Shape is an abstract calss must be implemented by subclass");
        }
        this.color = color;
    }
    //Abstract method
    area() {
        throw new Error("Abstract Method 'area()'must be implemented by subclass");

    }
    render() {
        throw new Error("Abstract Method Reder() must be implemented by subclass");
    }
    getInfo() {
        return A`${this.color} shape with area: ${this.area()}`;
    }
}
class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    //Implement abstract method
    area() {
        return this.width * this.height
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}
const circle = new Circle("red", 5);
const rect = new Rectangle("blue", 4, 6);
//polymorphism methods
console.log('circle area ', circle.area().toFixed(2));
console.log('rect area ', rect.area().toFixed(2));
//shared methods
console.log(circle.getInfo());
console.log(rect.getInfo());
// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map
phoneNumbers.set('home', '510-867-5309').set('mobile', '415-555-1212').set('business', '415-123-4567')

// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 

function printAccount(name, number, business) {
    console.log(`Account Holder Name: ${name}`);
    console.log(`Account Holder Number: ${number}`);
    console.log(`Business Name: ${business}`); 
}


// Add function to print all addresses, including a header

function showAddresses(addresses) {
    console.log("Addresses:\n");
    for (let address of addresses) {
        console.log(address);
    }
}

// Add function to print phone types and numbers

function showPhones(phoneNumbers) {
    console.log("Phone Numbers:\n");
    for (let [type, number] of phoneNumbers) {
        console.log(`${type}: ${number}`);
    }
}



// ///////////////////////////////////////////////////////
// Transactions:

// Create a map of transactions
let transactions = new Map();

transactions.set('May-2',-500).set('May-13', 1200).set('May-15', -100).set('May-21', -359).set('May-29', 2200)

// Add function to add transactions

function addTransaction(date, amount) {
    transactions.set(date, amount);
}

// Add function to show balance status
function showBalanceStatus(balance) {
    console.log(`Balance: ${balance}`);
    if (balance <= 0) {
        console.log("YOU ARE OVERDRAWN");
    }
    else if (20 > balance > 0) {
        console.log("Warning: You are close to zero balance");
    }
    else {
        console.log("Thank you for your business");
    }

}

// Add function to show transactions

const beginningBalance = 26000

function showTransactions(transactions, beginningBalance) {
    let transactionType;
    let balance = beginningBalance;
    console.log(`Starting Balance: ${beginningBalance}\n`);

    for (let [date, amount] of transactions) {
        console.log(`Transaction Date: ${date}`);

        if (amount >= 0) {
            transactionType = 'Deposit'
        } else {
            transactionType = 'Withdrawal'
        }      
        // Transaction Type
        console.log(`Transaction Type: ${transactionType}`);
        // Amount Changed
        console.log(`Amount Changed: ${amount}`);
        // New balance
        balance += amount;
        console.log(`Balance: ${balance}\n`);
        if (balance < 0) {
            balance -= 25;
            console.log(`Date: ${date}`);
            console.log("You broke ass, -$25 overdraft penalty");
            console.log(`Balance: ${balance}\n`);
        }
        }
    }

// showTransactions(transactions, beginningBalance)


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make a Map of customer info
let customerInfo = new Map([
    ['Account Holder', accountHolder],
    ['Account Number', accountNumber],
    ['Business Name', businessName],
    ['Addresses', addresses],
    ['Phone Numbers', phoneNumbers],
    ['Transactions', transactions],
    ['Starting Balance', beginningBalance]
    ])

console.log(customerInfo)

// Function to add customer attributes
function add_properties(property, value) {
    customerInfo.set(property, value);
}

add_properties('Favorite Melon', 'Casaba')
add_properties('Number of Pets', 0)

// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours







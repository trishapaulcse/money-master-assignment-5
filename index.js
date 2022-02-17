


// input and expense function
function inputAmount(inputId) {
    const input = document.getElementById(inputId);
    const amount = parseInt(input.value);
    if (amount >= 0) {
        return amount;
    }

}
// get value from input
function getValue() {
    const income = inputAmount('income-field');
    const food = inputAmount('food-field');
    const rent = inputAmount('rent-field');
    const clothes = inputAmount('clothes-field');
    const totalExpense = document.getElementById('total-expense');
    const balance = document.getElementById('Balance');
    if (income >= totalExpense.innerText) {
        totalExpense.innerText = food + rent + clothes;
        if (totalExpense.innerText <= income) {

            balance.innerText = income - totalExpense.innerText;
        }
        else {
            totalExpense.innerText = 'Out of range';
            balance.innerText = income;
            alert('not valid order with balance');
        }

    }
    else {
        alert('Nedd more doller to expense');
    }

}

// save function saving amount
function savingAmount() {
    const income = inputAmount('income-field');
    const percentValue = document.getElementById('parcent-input');
    const percentAmount = parseInt(percentValue.value);
    const balance = document.getElementById('Balance');
    const balanceTotal = balance.innerText;
    const SavingsInput = document.getElementById('saving-amount');
    if ((percentAmount > 0) && (percentAmount <= balanceTotal)) {
        const savings = income * (percentAmount / 100);
        SavingsInput.innerText = parseInt(savings);
    }
    else {
        alert('Give proper percentage amount')
    }

}
function reaminingBalance() {
    // remaining balance 
    const balance = document.getElementById('Balance');
    const balanceTotal = balance.innerText;
    const savingAmount = document.getElementById('saving-amount');
    const saving = parseInt(savingAmount.innerText);
    let remainiBalance = document.getElementById('remaining-balance');
    if (balanceTotal >= saving) {
        remainiBalance.innerText = balanceTotal - saving;
    }
    else {
        savingAmount.innerText = 00;
        alert('There is no money to save');
    }
}

// calculation button
document.getElementById('calculation-field').addEventListener('click', function () {
    getValue();
})

// save button
document.getElementById('button-save').addEventListener('click', function () {
    savingAmount();
    reaminingBalance();

})
// input function
function inputAmount(inputId) {
    const input = document.getElementById(inputId);
    const amount = parseInt(input.value);
    if (amount >= 0) {
        return amount;
    }

}
// value from input
function getValue() {
    const income = inputAmount('income-tag');
    const food = inputAmount('food-tag');
    const rent = inputAmount('rent-tag');
    const clothes = inputAmount('clothes-tag');
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
            alert('not valid');
        }

    }
    else {
        alert('Nedd more expense');
    }

}

// saving amount
function savingAmount() {
    const income = inputAmount('income-tag');
    const percentValue = document.getElementById('input-percent');
    const percentAmount = parseInt(percentValue.value);
    const balance = document.getElementById('Balance');
    const balanceTotal = balance.innerText;
    const SavingsInput = document.getElementById('saving-amount');
    if ((percentAmount > 0) && (percentAmount <= balanceTotal)) {
        const savings = income * (percentAmount / 100);
        SavingsInput.innerText = parseInt(savings);
    }
    else {
        alert('Need perfect amount')
    }

}
function reaminingBalance() {
    // remaining balance 
    const balance = document.getElementById('Balance');
    const balanceTotal = balance.innerText;
    const savingAmount = document.getElementById('saving-amount');
    const saving = parseInt(savingAmount.innerText);
    let remainigBalance = document.getElementById('remaining-balance');
    if (balanceTotal >= saving) {
        remainigBalance.innerText = balanceTotal - saving;
    }
    else {
        savingAmount.innerText = 00;
        alert('No money to save');
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
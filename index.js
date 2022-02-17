function inputAmount(inputId) {
    const input = document.getElementById(inputId);
    const amount = parseInt(input.value);
    return amount;
}

// get value from input
function getValue() {
    //income
    const income = inputAmount('income-field');
    // const incomeField = document.getElementById('income-field');
    // const income = parseFloat(incomeField.value);
    // const foodField = document.getElementById('food-field');
    // const food = parseFloat(foodField.value);
    // Expenses
    const food = inputAmount('food-field');
    // const rentField = document.getElementById('rent-field');
    // const rent = parseFloat(rentField.value);
    const rent = inputAmount('rent-field');
    const clothes = inputAmount('clothes-field');
    // const clothesField = document.getElementById('clothes-field');
    // const clothes = parseFloat(clothesField.value);
    const totalExpense = document.getElementById('total-expense');
    const balance = document.getElementById('Balance');
    // balance.innerText = income - totalExpense.innerText;
    if (income >= totalExpense.innerText) {

        balance.innerText = income - totalExpense.innerText;
    }
    else {
        alert('Invalid Income Amount');
    }
}

// balance function
function balance() {
    const income = inputAmount('income-field');
    // Expenses
    const food = inputAmount('food-field');
    const rent = inputAmount('rent-field');
    const clothes = inputAmount('clothes-field');
    const totalExpense = document.getElementById('total-expense');
    totalExpense.innerText = food + rent + clothes;
    const balance = document.getElementById('Balance');
    const lastBalance = income - totalExpense.innerText;
    balance.innerText = lastBalance;
    if (income > totalExpense.innerText) {
        balance.innerText = lastBalance;
    }
    else {
        alert('Invalid Income Amount');
    }
    return lastBalance;

}
// save function
function saveButton() {
    const income = inputAmount('income-field');
    const percentValue = document.getElementById('parcent-input');
    const percentAmount = parseInt(percentValue.value);
    const SavingsInput = document.getElementById('saving-amount');
    const remainingBalance = document.getElementById('remaining-balance');
    if ((percentAmount > 0) && (percentAmount < 100)) {
        const savings = income * (percentAmount / 100);
        SavingsInput.innerText = savings;
    }
    else {
        alert('Invalid percentage amount')
    }
    const balance = balance();
    remainingBalance.innerText = parseInt(balance) - savings;

}

// calculation button
document.getElementById('calculation-field').addEventListener('click', function () {
    getValue();
})

// save button

document.getElementById('button-save').addEventListener('click', function () {

    saveButton();

})
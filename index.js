function inputAmount(inputId) {
    const input = document.getElementById(inputId);
    const amount = parseInt(input.value);
    return amount;
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
            alert('insufficient balance');
        }

    }
    else {
        alert('Need more income amount ');
    }

}

// save function
function saveButton() {
    const income = inputAmount('income-field');
    const percentValue = document.getElementById('parcent-input');
    const percentAmount = parseInt(percentValue.value);
    const SavingsInput = document.getElementById('saving-amount');
    if ((percentAmount > 0) && (percentAmount < 100)) {
        const savings = income * (percentAmount / 100);
        SavingsInput.innerText = savings;
    }
    else {
        alert('Give proper percentage amount')
    }

}

// calculation button
document.getElementById('calculation-field').addEventListener('click', function () {
    getValue();
})

// save button
document.getElementById('button-save').addEventListener('click', function () {
    saveButton();
    const balance = document.getElementById('Balance');
    const balanceTotal = balance.innerText;
    const savingAmount = document.getElementById('saving-amount');
    const saving = savingAmount.innerText;
    let remainiBalance = document.getElementById('remaining-balance');
    if (balanceTotal >= saving) {
        remainiBalance.innerText = balanceTotal - saving;
    }
    else {
        savingAmount.innerText = 00;
        alert('There is no money to save');
    }
})
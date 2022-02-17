// Global function for all inputs 

function getInputValue(inputId) {
    const inputFieldValueText = document.getElementById(inputId).value;
   const inputFieldValue = parseFloat(inputFieldValueText);
   return inputFieldValue;
}

// Global function for all inner texts 

function getInnerText(amountId, amountIsAdd){
    const totalAmount = document.getElementById(amountId);
    totalAmount.innerText = amountIsAdd;
}

// Calculate income & expenses event 

document.getElementById('calculate-button').addEventListener('click', function(e){
    e.preventDefault();
    const incomeInput = getInputValue ('income-input');
    const foodInput = getInputValue ('food-input');
    const rentInput = getInputValue ('rent-input');
    const clothesInput = getInputValue ('clothes-input');

    const totalExpenses = foodInput + rentInput + clothesInput;
    const balance = incomeInput - totalExpenses;

    totalExpenses.innerText = getInnerText ('total-expenses', totalExpenses);
    balance.innerText = getInnerText ('balance', balance);

    // Error handling 
    if ( incomeInput < 0 || foodInput < 0 || rentInput < 0 || clothesInput < 0)
    {
        getInnerText ('total-expenses', '');
        getInnerText ('balance', '');
        alert('please give a greater number than 0')
    }
    else if (isNaN(incomeInput)== true || isNaN(foodInput) == true || isNaN(rentInput) == true || isNaN(clothesInput) == true ){
        getInnerText ('total-expenses', '');
        getInnerText ('balance', '');
        alert('please give a number')
    }
    else if ( incomeInput < totalExpenses){
        getInnerText ('total-expenses', '');
        getInnerText ('balance', '');
        alert('Expense is more than your income')
    }
    else {
        getInnerText ('total-expenses', totalExpenses);
        getInnerText ('balance', balance);
    }
})

// Savings event 
document.getElementById('save-button').addEventListener('click', function(e){
    e.preventDefault();
    debugger;
    const savePercentage = getInputValue ('saving-input');
    const incomeInput = getInputValue ('income-input');
    const balance = parseFloat(document.getElementById('balance').innerText);

    const savingsAmount = (incomeInput * savePercentage) / 100;
    const remainingBalance = balance - savingsAmount;


    // error handling 
    if (savingsAmount > balance) {
        getInnerText('saving-amount', '');
        getInnerText('remaining-balance', '');
        alert('can not save more than what you have in your account')
    }
    else if (savingsAmount < 0){
        getInnerText('saving-amount', '');
        getInnerText('remaining-balance', '');
        alert('please give a greater number than 0')
    }
    else if ( isNaN(savePercentage)){
        getInnerText('saving-amount', '');
        getInnerText('remaining-balance', '');
        alert('please give a Number')
    }
    else{
        getInnerText('saving-amount', savingsAmount);
        getInnerText('remaining-balance', remainingBalance);
       
    }
})

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
    e.preventDefault()
    debugger;
    const incomeInput = getInputValue ('income-input');
    const foodInput = getInputValue ('food-input');
    const rentInput = getInputValue ('rent-input');
    const clothesInput = getInputValue ('clothes-input');

    const totalExpenses = foodInput + rentInput + clothesInput;
    const balance = incomeInput - totalExpenses;

    totalExpenses.innerText = getInnerText ('total-expenses', totalExpenses);
    balance.innerText = getInnerText ('balance', balance);

})

// Saving event 

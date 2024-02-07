let incb = document.querySelector(".green");
let expb = document.querySelector(".red");
let flag1 = false; // flag 1 for green income button
let flag2 = false;

// Button functions
incb.addEventListener("click", function () {
    // If the green button was already clicked, reset its color
    if (flag1) {
        document.getElementById('green').style.backgroundColor = '';
        flag1 = false;
    } else {
        // Set the background color for the green button
        document.getElementById('green').style.backgroundColor = '#90EE90';

        // Reset the red button
        document.getElementById('red').style.backgroundColor = '';

        // Update flags
        flag1 = true;
        flag2 = false;
    }
});

expb.addEventListener("click", function () {
    // If the red button was already clicked, reset its color
    if (flag2) {
        document.getElementById('red').style.backgroundColor = '';
        flag2 = false;
    } else {
        // Set the background color for the red button
        document.getElementById('red').style.backgroundColor = '#FFCCCB';

        // Reset the green button
        document.getElementById('green').style.backgroundColor = '';

        // Update flags
        flag1 = false;
        flag2 = true;
    }
});

document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the entered amount
    let amount = parseFloat(document.querySelector('.amount').value) || 0; // Parse as a float, default to 0 if not a valid number

    if (flag1) {
        // Get the current income
        let currentIncome = parseFloat(document.getElementById('income').innerText.replace('₹', '')) || 0;

        // Calculate the new income
        let newIncome = currentIncome + amount;

        // Update the income span with the new income
        document.getElementById('income').innerText = `₹${newIncome.toFixed(2)}`;
    }
    if (flag2) {
        // Get the current expense
        let currentExpense = parseFloat(document.getElementById('expense').innerText.replace('₹', '')) || 0;

        // Calculate the new expense
        let newExpense = currentExpense + amount;

        // Update the expense span with the new expense
        document.getElementById('expense').innerText = `₹${newExpense.toFixed(2)}`;
    }
    

    // Calculate the total balance
    let totalIncome = parseFloat(document.getElementById('income').innerText.replace('₹', '')) || 0;
    let totalExpense = parseFloat(document.getElementById('expense').innerText.replace('₹', '')) || 0;
    //Adding it to the total balance
     document.getElementById('balance').innerText = `${totalIncome - totalExpense}`

    // Update the total balance span with the calculated balance
    document.getElementById('balance').innerText = `₹${totalBalance.toFixed(2)}`;

    // Reset the form and clear the amount input field
    this.reset();
   

});





"use strict";

// This function validates the form data that the user inputs
function formValidation()
{
    if (isNaN($("#principalAmount").val()) == true)
    {
        alert("Principal value must be a number");
        return false;
    }
    else if ($("#principalAmount").val() < 0)
    {
        alert("Principal value must be positive");
        return false;
    }
    if (isNaN($("#interestRate").val()) == true)
    {
        alert("Interest value must be a number");
        return false;
    }
    else if ($("#interestRate").val() < 0)
    {
        alert("Interest rate must be positive");
        return false;
    }
    else if ($("#interestRate").val() > 100)
    {
        alert("Interest rate must be below 100%");
        return false;
    }
    if (isNaN($("#mortgageLength").val()) == true)
    {
        alert("Term length must be a number");
        return false;
    }
    else if ($("#mortgageLength").val() < 5)
    {
        alert("Mortgage length must be at least five years");
        return false;
    }
    else if ($("#mortgageLength").val() > 50)
    {
        alert("Mortgage length cannot be greater than fifty years");
        return false;
    }
}

// Mortgage Calculator - this function can be used to determine the monthly payments of
// a mortgage given the principal, interest rate, and term length of a mortgage.
function getMortgage()
{
    // principal is the initial value of the mortgage loan
    let principal = $("#principalAmount").val();
    principal = parseFloat(principal);

    // this sets the value of the principal to 0 if the user enters a negative number
    if (principal < 0)
    {
        principal = 0
    }

    // interestRate is the expected yearly interest rate
    let interestRate = $("#interestRate").val();
    interestRate = parseFloat(interestRate);

    // This statement sets the interest rate to 0 if the user enters a negative number
    if (interestRate < 0)
    {
        interestRate = 0;
    }
    // This statement sets the interest rate to 100 if the user enters a number above 100%
    if (interestRate > 100)
    {
        interestRate = 100;
    }

    // interestPct is the interestRate after being converted to a decimal
    let interestPct = interestRate / 1200;

    // mortgageLength is the desired number of years to payoff the loan
    let mortgageLength = $("#mortgageLength").val();
    mortgageLength = parseFloat(mortgageLength);

    // This statement sets the mortgage length to 5 years if the user enters a value below 5 years
    if (mortgageLength < 5)
    {
        mortgageLength = 0;
    }

    // This statement sets the mortgage length to 50 if the user enters a value larger than 50
    if (mortgageLength > 50)
    {
        mortgageLength = 0;
    }

    // numPayments is the number of monthly payments until the loan is paid off
    let numPayments = mortgageLength * 12;

    // mortgagePayment is the value of each monthly payment
    let mortgagePayment = principal * ( ( interestPct * Math.pow((1 + interestPct), numPayments) ) / ( Math.pow( (1 + interestPct), numPayments ) - 1 ) )

    // mortgageField is the field where the mortgage payment displays on the page
    const mortgageField = $("#mortgagePayments");
    mortgageField.val("$ " + mortgagePayment.toFixed(2))

    // totalCost is the total dollar value you will pay over the duration of the loan
    let totalCost = numPayments * mortgagePayment;

    // costfield is the field where the totalCost will display on the page
    const costField = $("#totalCost");
    costField.val("$ " + totalCost.toFixed(2));
}

$(document).ready(function()
{
    $('#mortgageForm input:text, #mortgageForm textarea').first().focus();
    $('form > input').keyup(function()
    {
        var empty = false;
        $('form > input').each(function()
        {
            if ($(this).val() == '')
            {
                empty = true;
            }
        });
        if (empty)
        {
            $('#mortgageCalc').attr('disabled', 'disabled');
        }
        else 
        {
            $('#mortgageCalc').removeAttr('disabled');
        }
    });    
    $("#mortgageCalc").on("click", function()
    {
        formValidation();
        getMortgage();
    })
})
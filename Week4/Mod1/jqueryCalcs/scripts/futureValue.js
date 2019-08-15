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
    if (isNaN($("#termLength").val()) == true)
    {
        alert("Term length must be a number");
        return false;
    }
    else if ($("#termLength").val() < 5)
    {
        alert("Mortgage length must be at least five years");
        return false;
    }
    else if ($("#termLength").val() > 50)
    {
        alert("Mortgage length cannot be greater than fifty years");
        return false;
    }
}

// Future Value Calculator - this function can be used to determine the future value
// of a principal dollar amount given the interest rate and term length

function getFutureValue()
{
    // principal is the initial value of the mortgage loan
    let principal = $("#principalAmount").val();
    principal = parseFloat(principal);

    // interestRate is the expected yearly interest rate
    let interestRate = $("#interestRate").val();
    interestRate = parseFloat(interestRate);

    // interestPct is the interestRate after being converted to a decimal
    let interestPct = interestRate / 1200;

    // interestPct is the interestRate after being converted to a decimal
    let termLength = $("#termLength").val();
    termLength = parseFloat(termLength);

    // numPeriods is the number of monthly payments until the loan is paid off
    let numPeriods = termLength * 12;

    // futValue is the future value of the investment
    let futValue = principal * Math.pow(1 + interestPct, numPeriods)

    // netInterest is the difference between the future value and the initial value of the investment
    let netInterest = futValue - principal

    // futValueField is the field where the future value displays on the page
    const futValueField = $("#futureValue");
    futValueField.val("$ " + futValue.toFixed(2))

    // netInterestField is the field where the net interest displays on the page
    const netInterestField = $("#netInterest");
    netInterestField.val("$ " + netInterest.toFixed(2));
}

$(document).ready(function()
{
    $('#futValForm input:text, #futValForm textarea').first().focus();
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
            $('#futValCalc').attr('disabled', 'disabled');
        }
        else 
        {
            $('#futValCalc').removeAttr('disabled');
        }
    }); 
    $("#futValCalc").on("click", function()
    {
        formValidation();
        getFutureValue();
    })
})
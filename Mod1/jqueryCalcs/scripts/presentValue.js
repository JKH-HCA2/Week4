"use strict";

// Present Value Calculator - this function can be used to determine the monthly payments of
// a mortgage given the principal, interest rate, and term length of a mortgage.
function getPresentValue()
{
    // annualPayout is the desired payout per year
    let annualPayout = document.getElementById("annualPayout").value;
    annualPayout = parseFloat(annualPayout);

    // interestRate is the expected yearly interest rate
    let interestRate = document.getElementById("interestRate").value;
    interestRate = parseFloat(interestRate);

    // interestPct is the interestRate after being converted to a decimal
    let interestPct = interestRate / 100;

    // termLength is the desired number of years to receive payouts
    let termLength = document.getElementById("termLength").value;
    termLength = parseInt(termLength);

    // presentValue is the estimated investment required to get
    // your desired payout
    let presentValue = annualPayout * ( (1 - Math.pow(1 + interestPct, -termLength)) / interestPct)

    // presValueField is the form input field where the present
    // value will be displayed
    const presValueField = document.getElementById("presentValue");
    presValueField.value = "$ " + presentValue.toFixed(2);
}

window.onload = function()
{
    const btn = document.getElementById("presValCalc")
    btn.onclick = getPresentValue;
}
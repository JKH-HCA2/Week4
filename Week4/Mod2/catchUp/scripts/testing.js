"use strict";

$(function()
{
    let para = $("<p>Our adventures include:</p>");
    para.insertBefore("#adventures");

    let para2 = $("<p>You will enjoy all of the adventures above</p>");
    para2.insertAfter("#adventures")

    let newAdv = $("<li>Kayaking the Amazon</li>");
    newAdv.appendTo("#adventures")

    let name = $("<td>John Smith</td>")
    name.prependTo("tbody > tr")

    let age = $("<td>35</td>")
    age.appendTo("tbody > tr")

})
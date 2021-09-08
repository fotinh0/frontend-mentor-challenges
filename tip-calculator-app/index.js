// Get custom tip %
$(".custom-tip").click(function() {
    let customTip = $("#custom-tip-percentage");
    let tipPercentage = parseInt(customTip.elements[0].value);

    let bill = Number(billAmount());

    let people = numberOfPeople();

    let tipTotal = totalTip(tipPercentage, bill);
    
    let individualTip = (totalTipPerson(tipTotal, people)).toFixed(2);
    if (individualTip == "NaN" || individualTip == "Infinity") {
        individualTip = "0";
    }

    let individualTotal = (totalPerPerson(tipTotal, bill, people)).toFixed(2);
    if (individualTotal == "NaN" || individualTotal == "Infinity") {
        individualTotal = "0";
    }

    $(".tip-amount").text(individualTip);
    $(".total-amount").text(individualTotal);
})

$(".btn").click(function() {
    let textValue = parseInt(this.html.split("%, 1")[0])
    console.log("textValue:" + textValue);

    let bill = Number(billAmount());

    let people = numberOfPeople();

    let tipTotal = totalTip(tipPercentage, bill);
    
    let individualTip = (totalTipPerson(tipTotal, people)).toFixed(2);
    if (individualTip == "NaN" || individualTip == "Infinity") {
        individualTip = "0";
    }

    let individualTotal = (totalPerPerson(tipTotal, bill, people)).toFixed(2);
    if (individualTotal == "NaN" || individualTotal == "Infinity") {
        individualTotal = "0";
    }

    $(".tip-amount").text(individualTip);
    $(".total-amount").text(individualTotal);

})




//  Get bill input
function billAmount() {
    let billForm = $("#bill-form");
    let total = "";

    return total = billForm.elements[0].value;
}

//  Get number of people 
function numberOfPeople() {
    let numPeopleForm = $("#number-people-form");
    let totalPeople = "";

    return totalPeople = numPeopleForm.elements[0].value;
}

// Calculate total tip 
function totalTip(tip, bill) {
    return totalTip = (tip * bill) * 100;
}

// Calculate total tip / person 
function totalTipPerson(totalTip, people) {
    return tipPerPerson = totalTip / people;
}

// Calculate total / person
function totalPerPerson(totalTip, bill, people) {
    return (totalTip + bill) / people;
}

// Reset inputs 
$("#reset-btn").click(function(){
    $("#bill-form").elements[0].value = "";
    $("#number-people-form").elements[0].value = "";
    $("#custom-tip-percentage").elements[0].value = "";
    $(".tip-amount").text("$0.00");
    $(".total-amount").text("$0.00");
})
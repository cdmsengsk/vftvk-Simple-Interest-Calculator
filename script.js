function compute() {
    // pulls entered values from HTML
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    // calculates simple interest
    var interest = principal * rate * years / 100;
    // calculates year of result
    var year = new Date().getFullYear() + parseInt(years);
    // compiles string and markes entered and computed values for highliting.
    document.getElementById("result").innerHTML = "If you deposit " + "<mark>" + principal + "</mark>" + "<br/>"
            + "at an interest rate of " + "<mark>" + rate + "%." + "</mark>" + "<br/>"
            + "You will receive an amount of " + "<mark>" + interest + "</mark>" + "<br/>"
            + "in the year " + "<mark>" + year + "</mark>";
    

}

function checkPrincipal() {
    // Checks that the pricipal enetered is greater thank zero using an if statement. If invalid number is entered throws alert, resets fields and focuses if invalid value is entered. Else progressed to computing result. 
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert("Please enter a positive number");
        document.getElementById("principal").value = "";
        document.getElementById("result").innerText = "";
        document.getElementById("principal").focus();
    }
    else {
        compute();
    }
}


function updateRate()
{
    // calculates rate to and returns with two decimal precision.
    var rateval = parseFloat(document.getElementById("rate").value).toFixed(2)
    document.getElementById("rate_val").innerText = rateval +"%";
}

        

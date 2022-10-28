function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

function calculate() {
    const cost = parseInt(document.getElementById("cost").value)
    const startdate = document.getElementById("startdate").value
    const enddate = document.getElementById("enddate").value
    const interest = parseFloat(document.getElementById("interest").value)

    const startdatestr = startdate.split("/")
    const start_month = parseInt(startdatestr[1])
    const start_year = parseInt(startdatestr[2]) 

    const enddatestr = enddate.split("/")
    const end_month = parseInt(enddatestr[1])
    const end_year = parseInt(enddatestr[2])
    
    const n_months = (end_month - start_month) + 12 * (end_year - start_year)
    console.log("number of months", n_months)

    const first_val = cost/n_months
    const value = first_val + first_val * interest * 0.01
    console.log(first_val);
    console.log(roundToTwo(value));


    document.getElementById("answer").style.display="block"
    document.getElementById("answer-text").innerHTML = roundToTwo(value)


}


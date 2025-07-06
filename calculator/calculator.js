const calculate = ()=>{
    let no1 = parseInt(document.getElementById("no1").value);
    let no2 = parseInt(document.getElementById("no2").value);
    let choice = document.getElementById("choice").value;

    let result = document.getElementById("result");

    switch(choice){
        case "+":
            result.innerHTML = "Addition = " + (no1 + no2);
            break;

        case "-":
            result.innerHTML = "Subtraction = " + (no1 - no2);
            break;

        case "*":
            result.innerHTML = "Multiplication = " + (no1 * no2);
            break;

        case "/":
            result.innerHTML = "Division = " + (no1 / no2);
            break;

        case "%":
            result.innerHTML = "Remainder = " + (no1 % no2);
            break;
    }
}
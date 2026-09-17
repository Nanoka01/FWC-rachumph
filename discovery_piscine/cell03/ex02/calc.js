function calculate() {
    const leftVal = document.getElementById("left").value;
    const rightVal = document.getElementById("right").value;
    const op = document.getElementById("op").value;
//
    if (!/^\d+$/.test(leftVal) || !/^\d+$/.test(rightVal)) {
        alert("Error :(");
        return;
    }

    const num1 = parseInt(leftVal, 10);
    const num2 = parseInt(rightVal, 10);


    if ((op === "/" || op === "%") && num2 === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;
    switch (op) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num1 / num2; break;
        case "%": result = num1 % num2; break;
    }

    alert(result);
    console.log(result);
}



setInterval(() => {
    alert("Please, use me...");
}, 30000);
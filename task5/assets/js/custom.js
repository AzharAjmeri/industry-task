function calculate(){
    val1 = document.getElementById("number1").value;
    val2 = document.getElementById("number2").value;

    document.getElementById("error1").innerHTML = "...";
    document.getElementById("error2").innerHTML = "...";

    if(val1 == ""){
        document.getElementById("error1").innerHTML = "Please enter value";
        return false;
    }
    if(isNaN(val1)){
        document.getElementById("error1").innerHTML = "Please numeric enter value";
        return false;
    }
    document.getElementById("error1").innerHTML = "...";
    if(val2 == ""){
        document.getElementById("error2").innerHTML = "Please enter value";
        return false;
    }
    if(isNaN(val2)){
        document.getElementById("error2").innerHTML = "Please numeric enter value";
        return false;
    }
    document.getElementById("error2").innerHTML = "...";

    var operation = document.getElementById("operation").value;
    switch (operation) {
        case "add":
            output = parseInt(val1) + parseInt(val2)
            break;
        case "sub":
            output = parseInt(val1) - parseInt(val2)
            break;
        case "mul":
            output = parseInt(val1) * parseInt(val2)
            break;
        case "div":
            output = parseInt(val1) / parseInt(val2)
            break;
        case "mod":
            output = parseInt(val1) % parseInt(val2)
            break;
    }
    document.getElementById("output").innerHTML = output
}
// required field checker
function requiredField(elements){
    var flag = true;
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].value === "" && elements[i].name != "user-url")
        {
            elements[i].parentElement.querySelector('.error-content').innerHTML = "Field Required";
            flag = false;
        }
    }
    return flag;
}

// Alphabetic Values only checker
function alphaFieldOnly(element){
    elementValue = element.value;
    for(var i = 0; i < elementValue.length; i++){
        code = elementValue.charCodeAt(i)
        if(code < 65 || code > 90 && code < 97 || code > 122){
            element.parentElement.querySelector('.error-content').innerHTML = "Enter only alphabetic value";
            return false;
        }
    }
    return true;
}

// Email checker
function emailValidator(element){
    var code;
    var elementValue = element.value;
    if(elementValue.length < 9 || !(elementValue.includes("@")) || !(elementValue.includes("."))){
        element.parentElement.querySelector('.error-content').innerHTML = "Invalid Email";
        return false;
    }

    var indexOfAtTheRate = elementValue.indexOf("@")
    var name = elementValue.slice(0, indexOfAtTheRate);
    if(name.length < 3){
        element.parentElement.querySelector('.error-content').innerHTML = "Invalid Email";
        return false;
    }
    for(var i=0; i < name.length; i++){
        code = name.charCodeAt(i)
        if((code < 48 || code > 57) && (code < 65 || code > 90) && (code < 97 || code > 122) && code != 95 && code != 46){
            element.parentElement.querySelector('.error-content').innerHTML = "Invalid Email";
            return false;
        }
    }

    var indexOfFullStop = elementValue.indexOf(".")
    var url = elementValue.slice(indexOfAtTheRate+1, indexOfFullStop);
    if(url.length < 2){
        element.parentElement.querySelector('.error-content').innerHTML = "Invalid Email";
        return false;
    }
    for(var i=0; i < url.length; i++){
        code = url.charCodeAt(i)
        if((code < 48 || code > 57) && (code < 65 || code > 90) && (code < 97 || code > 122)){
            element.parentElement.querySelector('.error-content').innerHTML = "Invalid Email";
            return false;
        }
    }

    var domain = elementValue.slice(indexOfFullStop+1);
    if(domain.length < 2){
        element.parentElement.querySelector('.error-content').innerHTML = "Invalid Email";
        return false;
    }
    for(var i=0; i < domain.length; i++){
        code = domain.charCodeAt(i)
        if((code < 65 || code > 90) && (code < 97 || code > 122)){
            element.parentElement.querySelector('.error-content').innerHTML = "Invalid Email";
            return false;
        }
    }
    return true
}

// URL Checker
function urlValidator(element){
    var elementValue = element.value;
    if(elementValue == ""){
        return true;
    }
    else if(elementValue.length < 7){
        element.parentElement.querySelector('.error-content').innerHTML = "Invalid URL 1";
        return false;
    }
    if('http' != elementValue.slice(0, 4)){
        element.parentElement.querySelector('.error-content').innerHTML = "Invalid URL 1";
        return false;
    }
    if(elementValue[4] != "s" && elementValue[4] != ":"){
        element.parentElement.querySelector('.error-content').innerHTML = "Invalid URL !";
        return false;
    }
    return true;
}

// Phone number validation
function phoneNumberValidator(element){
    elementValue = element.value;
    const startLetter = ["9", "8", "7"];
    if(elementValue.length != 10 || isNaN(elementValue))
    {
        element.parentElement.querySelector('.error-content').innerHTML = "Invalid Phone Number";
        return false;
    }
    else if(!(startLetter.includes(elementValue[0]))){
        element.parentElement.querySelector('.error-content').innerHTML = "Invalid Phone Number";
        return false;
    }
    return true
}

// Address validator
function addressValidator(element){
    var elementValue = element.value;
    if(elementValue.length > 125){
        element.parentElement.querySelector('.error-content').innerHTML = "Address to long";
        return false;
    }
    return true;
}

// Password Validation
function passwordValidator(element){
    var elementValue = element.value;
    if(elementValue.length < 8 || elementValue.length > 14){
        element.parentElement.querySelector('.error-content').innerHTML = "Invalid Password";
        return false;
    }
    else if(elementValue == elementValue.toUpperCase() || elementValue == elementValue.toLowerCase()){
        element.parentElement.querySelector('.error-content').innerHTML = "Invalid Password";
        return false;
    }
    var specialCharacterPresent = false;
    var numberPresent = false;
    var code;
    for (var i = 0; i < elementValue.length - 1; i++) {
        code = elementValue.charCodeAt(i);
        if(elementValue[i] > 0 && elementValue[i] <10){
            numberPresent = true;
        }
        else if((code < 48 || code > 57) && (code < 65 || code > 90) && (code < 97 || code > 122)){
            specialCharacterPresent = true;
        }
        if(numberPresent && specialCharacterPresent){
            break
        }
    }
    if(!(numberPresent) && !(specialCharacterPresent)){
        element.parentElement.querySelector('.error-content').innerHTML = "Invalid Password";
    }else{
        return true;
    }
}

// Gender Validation
function genderValidator(gender){
    console.log(gender, "hello")
    if(gender == null){
        document.getElementById("user-gender").innerHTML = "Select Gender";
        return false;
    } else{
        document.getElementById("user-gender").innerHTML = "";
        return true;
    }
}

// Hobby dropdown
function hobbyValidator(hobby){
    console.log(hobby)
    if(hobby == "none"){
        document.getElementById("user-hobby").innerHTML = "Select hobby";
        return false
    } else{
        document.getElementById("user-hobby").innerHTML = "";
        return true
    }
}

function formValidation(){
    // Clear Error Fields
    var elements = document.querySelectorAll("#user-form input[type=text], #user-form input[type=password], #user-form textarea");
    for (var i = 0; i < elements.length - 1; i++) {
        elements[i].parentElement.querySelector('.error-content').innerHTML = "";
    }

    // Get Elements
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");

    var email = document.getElementById("user-email");

    var url = document.getElementById("user-url");

    var phone = document.getElementById("user-phone");

    var address = document.getElementById("address");

    var password = document.getElementById("user-password");
    var confirm_password = document.getElementById("user-password-confirm");

    // Radio button validation
    var gender = document.querySelector('input[name="gender"]:checked');

    // Dropdown validation
    var hobby = document.getElementById('hobby').value;
    

    if(requiredField(elements) && alphaFieldOnly(firstname) && alphaFieldOnly(lastname) && emailValidator(email) && urlValidator(url) && phoneNumberValidator(phone) && addressValidator(address) && passwordValidator(password) && genderValidator(gender) && hobbyValidator(hobby)){
        
        // Password same as confirm password
        if(confirm_password.value !== password.value){
            document.getElementById("confirm-password").innerHTML = "Password not same";
        }
        else{
            document.getElementById("confirm-password").innerHTML = "";
            if(document.getElementById("user-image").files[0]){
                alert("No errors in form!");
                document.getElementById("user-form").reset();
            }else{
                document.getElementsByClassName("file-error").innerHTML = "Select File";
            }
        }
    }
}

function loadImg(){
    var file = document.getElementById("user-image").files[0];
    console.log(file.name)
    var fReader = new FileReader();
    fReader.readAsDataURL(file);
    fReader.onloadend = function(event){
        var img = document.getElementById("uploaded-img");
        img.src = event.target.result;
    }
}
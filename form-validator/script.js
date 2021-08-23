const submit = document.getElementById("submit")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm password")
const com = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function checkUsername(input) {
    var table = input.parentElement;
    var error = table.querySelector('h3');
    if (input.value.length >= 15 ) {

        error.innerText='Username must be less than 15 characters';
        error.style.visibility = 'visible';
    }
    else if (input.value.length <=3 ) {

        error.innerText='Username must be at least 3 characters';
        error.style.visibility = 'visible';

    }
    else {
        error.style.visibility = 'hidden';
    }
}

function checkEmail(input) {
    var table = input.parentElement;
    var error = table.querySelector('h3');
    if (!com.test(input.value) ) {
        error.innerText='Email is not valid';
        error.style.visibility = 'visible';
    }
    else {
        error.style.visibility = 'hidden';
    }

}


function checkPasswordLength(input) {
    var table = input.parentElement;
    var error = table.querySelector('h3');
    if (input.value.length <= 6 )  {
        
        error.innerText='Password must be at least 6 characters';
        error.style.visibility = 'visible';
    }
    else {
        error.style.visibility = 'hidden';
    }

}


function checkConfirmPassword(input) {
    var table = input.parentElement;
    var error = table.querySelector('h3');

    if (input.value === '')  {
        error.innerText='Confirm password is required.';
        error.style.visibility = 'visible';
    }
    else {
        error.style.visibility = 'hidden';
    }

}


function checkPasswordMatch(input1,input2) {
    var table = input2.parentElement;
    var error = table.querySelector('h3');
    if (input1.value !== input2.value)  {
        error.innerText='Passwords do not match';
        error.style.visibility = 'visible';
    }
    else {
        error.style.visibility = 'hidden';
    }

}




submit.onclick = function check() {
    checkUsername(username);
    checkEmail(email);
    checkPasswordLength(password);
    checkPasswordMatch(password,confirmPassword);
    checkConfirmPassword(confirmPassword);
}



/*
<h3 id='long'>Username must be less than 15 characters</h3>
<h3 id='short'>Username must be at least 3 characters</h3>
Email is not valid
<h3>Password must be at least 6 characters</h3>
                    <h3 id='wrong'>Passwords do not match</h3>
                    <h3 id='empty'>Password2 is required.</h3>
*/
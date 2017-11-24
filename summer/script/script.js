function emailValidater() {
    var email = document.getElementById('email').value;
    if (/^[a-z][a-z0-9_]+@gmail+.[a-z]{2,}$/.test(email) == true) {
        return true;
    } else {
        return false;
    }
}

function fnameValidater() {
    var fname = document.getElementById('firstName').value;
    if (/^[a-zA-Z][a-zA-z/ a-zA-Z]+$/.test(fname) == true) {
        return true;
    } else {
        return false;
    }
}

function lnameValidater() {
    var lname = document.getElementById('lastName').value;
    if (/^[a-zA-Z][a-zA-Z/ a-zA-Z]+$/.test(lname) == true) {
        return true;
    } else {
        return false;
    }
}

function validatePassword() {

    var password = document.getElementById('password').value;

    if (password.length >= 8 && /^[a-zA-Z]+[0-9]+[!@#%^&*]+$/.test(password) == true) {

        return true;

    } else {

        return false;

    }

}

function validateReenterPassword() {

    var re = document.getElementById('reenterpassword').value

    if (re.length >= 8 && /^[a-zA-Z]+[0-9]+[!@#%^&*]+$/.test(re) == true) {

        return true;
    } else {

        return false;

    }

}

function checkpassword() {

    var firpassword = document.getElementById('password').value;

    var secpassword = document.getElementById('reenterpassword').value;

    if (firpassword == secpassword && validatePassword() == true && validateReenterPassword() == true)

    {

        return true;

    } else

    {
        return false;
    }

}

function returnAge() {
    var dob = document.getElementById('dob');
    var age = document.getElementById('age');
    if (age.innerHTML == NaN) {
        age.innerHTML = "";
    } else {
        var currdate = new Date();
        var temp = new Date(dob.value);
        var result = currdate.getFullYear() - temp.getFullYear();
        age.innerHTML = result;
    }
}
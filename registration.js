var Merror = "";
var Perror = "";

var mobile = document.getElementById('mobile');
var pass = document.getElementById('pw')
console.log(mobile, pass)

mobile.addEventListener('input', isvalidMobile);

function isvalidMobile() {
    var mobile = document.getElementById('mobile').value;

    if (mobile === "") {
        Merror = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(mobile)) {
        Merror = "Invalid mobile number.";
    } else {
        Merror = "";
    }
    updateErrorDisplay('Merror', Merror);
}

pass.addEventListener('input', isvalidPassword);

function isvalidPassword() {
    var password = document.getElementById('pw').value;

    if (password === "") {
        Perror = "Password is required.";
    } else if (password.length < 8) {
        Perror = "Password must be at least 8 characters long.";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        Perror = "Invalid Password";
    } else {
        Perror = "";
    }
    updateErrorDisplay('Perror', Perror);
}

function updateErrorDisplay(elementId, errorMessage) {
    var errorElement = document.getElementById(elementId);
    errorElement.textContent = errorMessage;
}


function SubmitEvent(event) {
    isvalidMobile();
    isvalidPassword();

    if (Merror === "" && Perror === "") {
        alert("Form submitted successfully!");
    } else {
        event.preventDefault();
    }
}
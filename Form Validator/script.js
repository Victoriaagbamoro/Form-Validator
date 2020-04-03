// Select UI
const form = document.getElementById('form');
const name = document.getElementById('name');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Show Input Error Message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

// Confirm if email address is Valid
function ValidateEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if(re.test(input.value.trim())){
        showSuccess(input);
    } else {
        showError(input, 'Email is not Valid.')
    }
}

// Check Characters of Email
// function checkEmailCharacters(input){
//     const reValidate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if(input.value !== reValidate){
//         showError(input, 'Email must contain @');
//     }
// }


function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
};

// Check length of Input and Username
function checkLength(input, min, max) {
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${max} characters.`)
    } else if(input.value.length > max){
        showError(input, `${getFieldName(input)}must be at less than ${max} characters.`)
    } else{
        showSuccess(input);
    }
}


// Check If Password matches
function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value)
    showError(input2, 'Password do not match');
}


// Get FieldName
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// Form Validation (Event Listeners)
form.addEventListener('submit', function(e){
    e.preventDefault();

    // Create a Function for validation
    checkRequired([name, username, email, password,password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    ValidateEmail(email);
    checkPasswordsMatch(password, password2);
    checkEmailCharacters(email);
});


// Objects for form elements and errors
const form = {
    element: document.getElementById('validation_form'),
    emailInput: document.getElementById('email_input'),
    countryInput: document.getElementById('country_input'),
    zipCodeInput: document.getElementById('zip_code_input'),
    originalPasswordInput: document.getElementById('original_password_input'),
    repeatPasswordInput: document.getElementById('repeat_password_input'),
    submitButton: document.querySelector('.submit_button'),
}

const error = {
    email: {
        span: document.querySelector('.email_error'),
        1: 'Email can\'t be empty',
        2: 'Enter a valid email address',
    },
    country: {
        span: document.querySelector('.country_error'),
        1: 'Country can\'t be empty',
    },
    zipCode: {
        span: document.querySelector('.zip_error'),
        1: 'Zip code can\'t be empty',
        2: 'Zip code needs to be 5 digits long',
    }
}


// EMAIL ERRORS
form.emailInput.addEventListener('input', (e) => {
    if (form.emailInput.validity.valid) {
        error.email.span.textContent = '';
        error.email.span.className = 'error';
    } else {
        emailError();
    }
});

function emailError () {
    if (form.emailInput.validity.valueMissing) {
        error.email.span.textContent = error.email[1];
    } else if (form.emailInput.validity.typeMismatch) {
        error.email.span.textContent = error.email[2];
    }
    error.email.span.className = 'error active';
}

// COUNTRY ERRORS
form.countryInput.addEventListener('input', (e) => {
    if (form.countryInput.validity.valid) {
        error.country.span.textContent = '';
        error.country.span.className = 'error';
    } else {
        countryError();
    }
})

function countryError () {
    if (form.countryInput.validity.valueMissing) {
        error.country.span.textContent = error.country[1];
    }
    error.country.span.className = 'error active';
}

// ZIP CODE ERRORS
form.zipCodeInput.addEventListener('input', (e) => {
    if (form.zipCodeInput.validity.valid) {
        error.zipCode.span.textContent = '';
        error.zipCode.span.className = 'error';
    } else {
        zipError();
    }
})

function zipError () {
    if (form.zipCodeInput.validity.valueMissing) {
        error.zipCode.span.textContent = error.zipCode[1];
    } else if (form.zipCodeInput.validity.tooShort) {
        error.zipCode.span.textContent = error.zipCode[2];
    }
    error.zipCode.span.className = 'error active';
}
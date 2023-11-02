// OBJECTS FOR FORM ELEMENTS AND ERRORS
const form = {
    countryInput: document.getElementById('country_input'),
    dialog: document.querySelector('.submit_dialog'),
    dialogCloseButton: document.querySelector('.dialog_close_button'),
    element: document.getElementById('validation_form'),
    emailInput: document.getElementById('email_input'),
    originalPasswordInput: document.getElementById('original_password_input'),
    repeatPasswordInput: document.getElementById('repeat_password_input'),
    submitButton: document.querySelector('.submit_button'),
    zipCodeInput: document.getElementById('zip_code_input'),
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
    },
    originalPassword: {
        span: document.querySelector('.original_password_error'),
        1: 'Password can\'t be empty',
        2: 'Password needs to be at least 8 characters long',
    },
    repeatPassword: {
        span: document.querySelector('.repeat_password_error'),
        1: 'Password can\'t be empty',
        2: 'Passwords do not match!',
    }
}


// EMAIL ERRORS
function emailError () {
    if (form.emailInput.validity.valueMissing) {
        error.email.span.textContent = error.email[1];
    } else if (form.emailInput.validity.typeMismatch) {
        error.email.span.textContent = error.email[2];
    }
    error.email.span.className = 'error active';
}

form.emailInput.addEventListener('input', (e) => {
    if (form.emailInput.validity.valid) {
        error.email.span.textContent = '';
        error.email.span.className = 'error';
    } else {
        emailError();
    }
});

// COUNTRY ERRORS
function countryError () {
    if (form.countryInput.validity.valueMissing) {
        error.country.span.textContent = error.country[1];
    }
    error.country.span.className = 'error active';
}

form.countryInput.addEventListener('input', (e) => {
    if (form.countryInput.validity.valid) {
        error.country.span.textContent = '';
        error.country.span.className = 'error';
    } else {
        countryError();
    }
})

// ZIP CODE ERRORS
function zipError () {
    if (form.zipCodeInput.validity.valueMissing) {
        error.zipCode.span.textContent = error.zipCode[1];
    } else if (form.zipCodeInput.validity.tooShort) {
        error.zipCode.span.textContent = error.zipCode[2];
    }
    error.zipCode.span.className = 'error active';
}

form.zipCodeInput.addEventListener('input', (e) => {
    if (form.zipCodeInput.validity.valid) {
        error.zipCode.span.textContent = '';
        error.zipCode.span.className = 'error';
    } else {
        zipError();
    }
})

// ORIGINAL PASSWORD ERRORS
function originalPasswordError () {
    if (form.originalPasswordInput.validity.valueMissing) {
        error.originalPassword.span.textContent = error.originalPassword[1];
    } else if (form.originalPasswordInput.validity.tooShort) {
        error.originalPassword.span.textContent = error.originalPassword[2];
    }
    error.originalPassword.span.className = 'error active';
}

form.originalPasswordInput.addEventListener('input', (e) => {
    if (form.originalPasswordInput.validity.valid) {
        error.originalPassword.span.textContent = '';
        error.originalPassword.span.className = 'error';
    } else {
        originalPasswordError();
    }
})

// REPEAT PASSWORD ERRORS
function repeatPasswordError () {
    if (form.repeatPasswordInput.validity.valueMissing) {
        error.repeatPassword.span.textContent = error.repeatPassword[1];
    } else if (form.repeatPasswordInput.value !== form.originalPasswordInput.value) {
        error.repeatPassword.span.textContent = error.repeatPassword[2];
    }
    error.repeatPassword.span.className = 'error active';
}

form.repeatPasswordInput.addEventListener('input', (e) => {
    if (form.repeatPasswordInput.validity.valid) {
        error.repeatPassword.span.textContent = '';
        error.repeatPassword.span.className = 'error';
    } else {
        repeatPasswordError();
    }
})

// FORM SUBMIT
form.element.addEventListener('submit', (e) => {
    if (form.emailInput.validity.valid === false ||
        form.countryInput.validity.valid === false ||
        form.zipCodeInput.validity.valid === false ||
        form.originalPasswordInput.validity.valid === false ||
        form. repeatPasswordInput.validity.valid === false) {
        e.preventDefault();
    } else {
        e.preventDefault();
        form.element.reset();
        form.dialog.showModal();
    }
})

// FORM DIALOG CLOSE
form.dialogCloseButton.addEventListener('click', () => {
    form.dialog.close();
})
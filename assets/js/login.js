var formHeading = document.getElementById('form-heading');

var signinShowPassword = document.getElementById('signin-showPassword');
var signupShowPassword = document.getElementById('signup-showPassword');

var signinPasswordIcon = document.getElementById('signinPasswordIcon');
var signupPasswordIcon = document.getElementById('signupPasswordIcon');

var signinPassword = document.getElementById('signin-password');
var signupPassword = document.getElementById('signup-password');

var signinButton = document.getElementById('signin-button');
var signupButton = document.getElementById('signup-button');

var signinForm = document.getElementById('signin');
var signupForm = document.getElementById('signup');

signinShowPassword.addEventListener('click', signinPasswordViewer);
signupShowPassword.addEventListener('click', signupPasswordViewer);

function signinPasswordViewer() {
    if (signinPassword.type === 'password') {
        signinPasswordIcon.classList.remove('fa-eye-slash');
        signinPasswordIcon.classList.add('fa-eye');
        signinPassword.type = 'text';
    } else {
        signinPasswordIcon.classList.remove('fa-eye');
        signinPasswordIcon.classList.add('fa-eye-slash');
        signinPassword.type = 'password';
    }
}

function signupPasswordViewer() {
    if (signupPassword.type === 'password') {
        signupPasswordIcon.classList.remove('fa-eye-slash');
        signupPasswordIcon.classList.add('fa-eye');
        signupPassword.type = 'text';
    } else {
        signupPasswordIcon.classList.remove('fa-eye');
        signupPasswordIcon.classList.add('fa-eye-slash');
        signupPassword.type = 'password';
    }
}

signupButton.addEventListener('click', ()=>{
    signupButton.setAttribute('disabled', 'true');
    signinButton.removeAttribute('disabled');

    signinForm.style.opacity = "0";
    formHeading.style.display = "none";
    formHeading.style.opacity = "0";
    formHeading.innerText = "Sign Up";
    setTimeout(()=>{
        signupForm.style.display = "Block";
        signinForm.style.display = "None";
        signupForm.style.opacity = "1";
        formHeading.offsetHeight;
        formHeading.style.display = "block";
        formHeading.style.opacity = "1";
    },700);

});

signinButton.addEventListener('click', ()=>{
    signinButton.setAttribute('disabled', 'true');
    signupButton.removeAttribute('disabled');
    signupForm.style.opacity = "0";
    formHeading.style.display = "none";
    formHeading.style.opacity = "0";
    formHeading.innerText = "Sign In";
    setTimeout(()=>{
        signupForm.style.display = "None";
        signinForm.style.display = "Block";
        signinForm.style.opacity = "1";
        formHeading.offsetHeight;
        formHeading.style.display = "block";
        formHeading.style.opacity = "1";
    },700);
});

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
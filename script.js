// Validation code for input 

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validated(){
  if (email.value.length < 8) {
    email.style.border = "1px solid red";
    email_error.style.display = "block";
    email.focus();
    return false;
  }
  if (password.value.length < 8) {
    password.style.border = "1px solid red";
    pass_error.style.display = "block";
    password.focus();
    return false;
  }
}
function email_Verify(){
  if (email.value.length >= 8) {
    email.style.border = "1px solid gray";
    email_error.style.display = "none";
    return true;
}
function pass_Verify(){
  if (password.value.length >= 8) {
    password.style.border = "1px solid gray";
    pass_error.style.display = "none";
    return true;
}



// Typing Animation
var typing = new Typed (".typing" ,{strings : ["UI Designer", "FrontEnd Dev"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true;
})
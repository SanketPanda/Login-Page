
 function toggleform()
 {
    var registrationForm = document.getElementById("registration-from");
    var loginForm = document.getElementById("login-form");
    if(registrationForm.style.display == "none")
    {
       loginForm.style.display = "none";
       registrationForm.style.display = "block";
    }
    else
    {
      loginForm.style.display = "block";
       registrationForm.style.display = "none";  
    }
    var weakPassowrd = document.getElementById("weakpassword");
    weakPassowrd.innerHTML = "";
 }

 function checkPassword()
 {
    var password = document.getElementById("password").value;
    var weakPassowrd = document.getElementById("weakpassword");
    var numbers = /[0-9]/g;
    var upperCaseLetters = /[A-Z]/g;
    var lowerCaseLetters = /[a-z]/g;
     console.log(password);
    if(password.match(numbers)&&password.match(lowerCaseLetters)&&password.match(upperCaseLetters))
    {
      weakPassowrd.innerHTML = "";
    }
    else
    {
      weakPassowrd.innerHTML = "Password must contain a number, lowercase letter, uppercase letter";
    }
 }
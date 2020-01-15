
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

 function CreatUser()
 {
    var userName = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var weakPassowrd = document.getElementById("weakpassword");
   
    if(!userName.value || !email.value || !password.value)
    {
      weakPassowrd.innerHTML = "All fields are required";
      
    }
    else
    {
      checkPassword();
    }

 }

 function openNav() {
  document.getElementById("mySidebar").style.width = "700px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function Login()
{
  console.log("Coming Here");
 var loginform = document.getElementById("login-page");
 loginform.style.display = "block";
 
}
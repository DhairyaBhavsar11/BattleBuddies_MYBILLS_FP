function store(){
    var inputFname = document.getElementById("Fname");
    var inputLname = document.getElementById("Lname");
    var inputEmail = document.getElementById("email");
    var inputPassword = document.getElementById("Spassword");
    
    localStorage.setItem("Fname", inputFname.value);
    localStorage.setItem("Lname", inputLname.value);
    localStorage.setItem("email", inputEmail.value);
    localStorage.setItem("Spassword", inputPassword.value);
    
    }
    
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "dhairya@gmail.com" && password == "Dhairya"){
    alert ("Login successfully");
    window.open("home.html") 
    return;
    }
    else{
    
    }
}
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "dhairya@gmail.com" && password == "Dhairya"){
    alert ("Login successfully");
    window.location.href = "aboutus.html"; 
    return;
    }
    else{
    
    }
}
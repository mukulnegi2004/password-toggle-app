let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function() {
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "./assets/eye.png";
    }else{
        password.type = "password";
        eyeicon.src = "./assets/view.png";
    }
}
password.addEventListener("input", function() {
    if (password.value === "") {
        eyeicon.src = "./assets/view.png";  // Reset icon when input box is empty
    }
});

var regName = /^([а-яА-Яa-zA-Z0-9_\-]{4})/;
var regMail = /^([a-zA-Z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;


function Validate() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var send = username;

    var name_error = document.getElementById('name_error');
    var email_error = document.getElementById('email_error');


    // validate username______________________________________________________
    if (username.length < 0 || regName.test(username) == false) {
        document.getElementById('username').className = "error";
        document.getElementById('username_div').style.color = "red";
        name_error.textContent = "Username is required";
        return false;
    }
    document.getElementById('username').className = "";
    document.getElementById('username_div').style.color = "";
    document.getElementById('name_error').textContent = "";

    // validate email______________________________________________________
    if (email.length < 0 || regMail.test(email) == false) {
        document.getElementById('email').className = "error";
        document.getElementById('email_div').style.color = "red";
        email_error.textContent = "Email is required";
        return false;
    }
    document.getElementById('email').className = "";
    document.getElementById('email_div').style.color = "";
    document.getElementById('email_error').textContent = "";

    if (send = true) {
        alert(" Congratulations " + username + " send a letter to you");
        setData();
    }

}

function setData (){

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
        var data = {userName: username, userMail: email};
    var stringData = JSON.stringify(data);
    localStorage.setItem("data", stringData);
}



    function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById("revision").src = e.target.result;
            revision.height = 180;
            revision.width = 180;
        };

        reader.readAsDataURL(input.files[0]);
    }
}




function toTop(){
    var scrolled;
    var timer;
    document.getElementById('top').onclick = function(){
        scrolled = window.pageYOffset;
        scrollToTop();
    }
    function scrollToTop(){
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 100;
            timer = setTimeout(scrollToTop, 200);
        }
        else {
            clearTimeout(timer);
            window.scrollTo(0,0);
        }
    }
}

function login() {
    window.location.href = "./Sign in.html"
}
// function signin() {
//     // alert("Welcome to decathlon shopping");
//     window.location.href = "./index.html"
// }
function add() {
    alert("your Address is successfully save")
}
function add2() {
    window.location.href = "./payment.html"

}
function apply() {
    window.location.href = "./index.html"
    alert("We Added Pin:431001 Succesfully Now fill your Bag with happiness!")
}
function logiii() {
    window.location.href = "./Sign in.html"

}
// ===================================================================================Entry=========================================================================
function openSign() {
    var logUp = document.getElementById("logUp");
    logUp.style.display = "block";

    window.onclick = function (event) {
        if (event.target == logUp) {
            logUp.style.display = "none";
        }
    }
    var span = document.getElementById("back")
    span.onclick = function () {
        logUp.style.display = "none";
    }
    document.getElementById("gbsignIn").onclick = function () {
        logUp.style.display = "none";
    }
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~signup entry``~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.getElementById("signUp").addEventListener("click", signUp);
let userData = JSON.parse(localStorage.getItem("userDatabase")) || []
async function signUp() {
    try {

        let user = document.getElementById("userName").value;
        var phone = document.getElementById("mobileNumber").value;
        var mail = document.getElementById("mailId").value;
        var password = document.getElementById("passWord").value;

        // "newprice":"933";
        //    console.log(user,phone)
        var userobj = {
            username: user,
            phone: phone,
            email: mail,
            password: password
        }
        // http://localhost:2400/user/register
        userobj = JSON.stringify(userobj);

        let response = await fetch("http://localhost:2400/register", {
          method: "POST",

          body: userobj,

          headers: {
            "Content-Type": "application/json",
          },
        });
        let data = await response.json();
        console.log(data);
        alert(data.message);
        // window.location.href='./index.html';
    }
    catch (err) {
        console.log(err)
        alert(err);
    }

}     // ================================================================================================Sign in===================================================================
document.getElementById("signInn").addEventListener("click", signInfu);
var regUserData = JSON.parse(localStorage.getItem("userDatabase"));


async function signInfu() {

    try {
        var email = document.getElementById("emailId").value;
        var password = document.getElementById("pasword").value;
        // var func = "Noworking";
        // for (var i = 0; i < regUserData.length; i++) {
        //     if (regUserData[i].mail == email && regUserData[i].password == password) {
        //         localStorage.setItem("signIn", JSON.stringify("signedUp"));
        //         localStorage.setItem("User", JSON.stringify(regUserData[i].mail));
        //         func = "working";
        //         alert("Signed in Succesfully Now fill your Bag with happiness!")


        //     }
        // } if (func == "Noworking") {
        //     document.getElementById("paragraph").textContent = "! Wrong username and Password";
        // }
        var userlogin = {
            email:email,
            password:password
        }
        userlogin = JSON.stringify(userlogin);

        let response = await fetch("http://localhost:2400/login", {
          method: "POST",
          body: userlogin,
          headers: {
            "Content-Type": "application/json",
          },
        });
        let data =await response.json();
        console.log(data);
        
        console.log(response)
        if(response.status=="200"){
            window.location.href = "./index.html";
        }
        else {
            alert(data.message)
            window.location.href = "./Sign in.html";
        }
    } catch (e) {
        console.log(e);
        alert("In the error part");
    }
}


function openSignIn() {
    var signin = document.getElementById("Signin")

    signin.style.display = "block";
    window.onclick = function (event) {
        if (event.target == signin) {
            signin.style.display = "none";
        }
    }
    var span = document.getElementById("Crosser")
    span.onclick = function () {
        signin.style.display = "none";
    }
}
        //  function openSign(){

        //  }
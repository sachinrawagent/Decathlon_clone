function login(){
    window.location.href="./Sign in.html"
}
function signin(){
    window.location.href="./navbar.html"
}
function add(){
    alert("your Address is successfully saved")
 }
 function add2(){
    window.location.href="./payment.html"
    alert("")
 }
 function apply(){
    window.location.href="./navbar.html"
    alert("We Added Pin:431001 Succesfully Now fill your Bag with happiness!")
  }
  function logiii(){
    window.location.href="./Sign in.html"
    
  }
 // ===================================================================================Entry=========================================================================
 function openSign(){
    var logUp= document.getElementById("logUp");
    logUp.style.display="block";
 
    window.onclick=function(event){
        if(event.target==logUp){
            logUp.style.display="none";
        }
    }
    var span = document.getElementById("back")
    span.onclick =function(){
     logUp.style.display="none";
    }
     document.getElementById("gbsignIn").onclick=function(){
         logUp.style.display="none"; 
     }
 }
 // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~signup entry``~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 document.getElementById("signUp").addEventListener("click", signUp);
    let userData=JSON.parse(localStorage.getItem("userDatabase"))||[]
     function signUp(){
        let user = document.getElementById("userName").value;
        var phone = document.getElementById("mobileNumber").value;
        var mail = document.getElementById("mailId").value;
        var password=document.getElementById("passWord").value;
       console.log(user,phone)
        var userobj={
            user:user,
            phone:phone,
            mail:mail,
            password:password
        }
 
        userData.push(userobj);
        localStorage.setItem("userDatabase", JSON.stringify(userData));
     //    window.location.href="mainpage.html";
        alert("Signed Up Succesfuly Now you can login")
     }
 
     // ================================================================================================Sign in===================================================================
     document.getElementById("signInn").addEventListener("click", signInfu);
     var regUserData = JSON.parse(localStorage.getItem("userDatabase"));
 
 
 function signInfu(){
      var email=document.getElementById("emailId").value;
      var password=document.getElementById("pasword").value;
 
               var func = "Noworking";
             for(var i = 0; i < regUserData.length; i++){
                 if (regUserData[i].mail==email && regUserData[i].password==password){
                     localStorage.setItem("signIn", JSON.stringify("signedUp"));
                     localStorage.setItem("User", JSON.stringify(regUserData[i].mail));
                     func = "working";
                     alert("Signed in Succesfully Now fill your Bag with happiness!")
                  
                    
                 }
             } if(func=="Noworking"){
                 document.getElementById("paragraph").textContent="! Wrong username and Password";
             }
         }
 
 
         function openSignIn(){
             var signin = document.getElementById("Signin")
 
             signin.style.display="block";
             window.onclick=function(event){
                 if(event.target==signin){
                     signin.style.display="none";
                 }
             }
             var span = document.getElementById("Crosser")
             span.onclick=function(){
                 signin.style.display="none";
             }
         }
         
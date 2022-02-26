document.getElementById("btn").addEventListener("click", myfunction);
  function myfunction(event) {
    event.preventDefault();
    var cardnum = document.getElementById("sac-no").value;
    var expiry = document.getElementById("sac-ex").value;
    var cvv = document.getElementById("sac-pass").value;
    var name = document.getElementById("sac-name").value;
    console.log(cardnum.length,expiry.length,cvv.length,name.length);
    if(cardnum.length>=12 && expiry.length>=4 && cvv>=3 && name.length!=0){
      window.location.href="otp.html";
      
    }else{
      alert("Invalid credential");
    }
    // if (
    //   cardnum === "1234567891234567" &&
    //   expiry === "0000" &&
    //   cvv === "000" &&
    //   name === "decathlon"
    // ) {
    //   window.location.href = "otp.html";
    // } else {
    //   alert("Invalid User Credential");
    // }
  }
  let Tsum=JSON.parse(localStorage.getItem("Tsum"))
  document.getElementById("btn").innerHTML=`Pay securely ₹${Tsum}`;
  console.log(Tsum)
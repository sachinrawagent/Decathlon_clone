function otpForm() {
    var otp = document.querySelector("#number").value;
    if (otp == "1234") {
      alert("Payment Successful");
     
      window.location.href = "delievery.html";
    } else {
      alert("Invalid OTP");
    }
  }
function otpForm() {
    var otp = document.querySelector("#number").value;
    if (otp == "1234") {
      alert("Payment Successful");
      alert("Thank you! for Shopping");
      window.location.href = "land2.html";
    } else {
      alert("Invalid OTP");
    }
  }
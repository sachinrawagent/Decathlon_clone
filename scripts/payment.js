document.getElementById("btn").addEventListener("click", myfunction);
  function myfunction(event) {
    event.preventDefault();
    var cardnum = document.getElementById("sac-no").value;
    var expiry = document.getElementById("sac-ex").value;
    var cvv = document.getElementById("sac-pass").value;
    var name = document.getElementById("sac-name").value;
    if (
      cardnum === "1234567891234567" &&
      expiry === "0000" &&
      cvv === "000" &&
      name === "decathlon"
    ) {
      window.location.href = "otp.html";
    } else {
      alert("Invalid User Credential");
    }
  }
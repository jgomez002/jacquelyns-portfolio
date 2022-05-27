function validate(){
  var password= document.getElementById("password").value;
  {

    if (password == "perspective") {
      alert("slayyyy");
      window.location.href = "desktop.html";
    }
    else {
      alert("deslay sad");
    }
  }
}

var input = document.getElementById("password");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("login").click();
  }
});

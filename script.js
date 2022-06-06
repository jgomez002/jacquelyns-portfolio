// let loginbutton = document.querySelector("#login");
// loginbutton.addEventListener("click", shake(), false);

function shake(event){
  document.getElementById("loginsq").style.animation = "none";
  requestAnimationFrame(() => {
    document.getElementById("loginsq").style.animation = "wrong 0.5s";
  });
}


function validate(){
  var password= document.getElementById("password").value;

  {
    if (password == "perspective") {
      // alert("slayyyy");
      window.location.href = "desktop.html";
    }
    else {
      // alert("deslay sad");
      shake()
        // document.getElementById("loginsq").style.animation = "wrong 0.5s"
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

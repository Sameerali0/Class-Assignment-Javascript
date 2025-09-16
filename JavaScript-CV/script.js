let image = document.getElementById("image");
let imageBtn = document.getElementById("image-btn");

function openImage() {
    if ( image.style.display === "none" || image.style.display === ""){
        image.style.display = "block";
        imageBtn.textContent = "Hide Image";
    }else {
        image.style.display = "none";
        imageBtn.textContent = "Show Image";
    }
}

let information = document.getElementById("inform-div");
let informBtn = document.getElementById("information-btn");

function SeeDetails() {
    if ( information.style.display === "none" || information.style.display === ""){
        information.style.display = "block";
        informBtn.textContent = "Hide Information Details";
    }else {
        information.style.display = "none";
        informBtn.textContent = "Show Information Details";
    }
}



function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name == "") {
      alert("Please enter your name");
      return false;
    }
    else if (email == "") {
      alert("Please enter your email address");
      return false;
    }
    else if(!email.match(/^[A-Za-z0-9._\-]+@[A-Za-z]+\.[a-z]{2,4}$/)){
        alert("Please enter a valid email address with @gmail.com");
        return false;
    }
     else {
      alert("Thanks for submission");
      return false;
    }
};

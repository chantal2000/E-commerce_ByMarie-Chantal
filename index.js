AOS.init();

function check() {
    var dots = document.getElementById("dot");
    var moreText = document.getElementById("more")
    var btnText = document.getElementById("btn")
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none"
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less"
        moreText.style.display = "inline"
    }
}


if (text === "") {
    document.getElementById("id").innerHTML = "Please This can't be empty!"
}
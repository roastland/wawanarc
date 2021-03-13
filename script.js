const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const li = document.querySelector('nav li');

const readMore=()=>{
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    }
    else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
}

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

li.addEventListener('click', function () {
    nav.classList.toggle('slide');
});


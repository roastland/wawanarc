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

// (2/3) 01101011 00110100 01101011 01011111 01101101 00110011 01101110 01101010 00110100 01100100 00110001 01011111 01101011 00110100 00110101 01110101 01101000 01101011

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

li.addEventListener('click', function () {
    nav.classList.toggle('slide');
});


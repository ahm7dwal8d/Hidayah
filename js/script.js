let landingSection = document.querySelector(".landing");

let landingSectionArrey = ["slide-1.jpg" , "slide-2.jpg" , "slide-3.jpg"]

let landingRandomNumber = Math.floor(Math.random() * landingSectionArrey.length)

setInterval(function() {
    let landingRandomNumber = Math.floor(Math.random() * landingSectionArrey.length)
    landingSection.style.backgroundImage = "url(../images/slide/" + landingSectionArrey[landingRandomNumber] + ")"
} , 10000)

// Fixed Header 

let Header = document.querySelector(".header")

window.onscroll = function () {
    if (window.scrollY >= 1000) {
        Header.classList.add("fixed")
    } else {
        Header.classList.remove("fixed")
    }

    if (window.scrollY > (AboutSctionOfsetTop + AboutSectionHeight - PageHeight)) {
        AboutSpan.forEach((span)=> {
            span.style.width = span.dataset.progress;
        })
    }
    if (window.scrollY < (AboutSctionOfsetTop + AboutSectionHeight - PageHeight)) {
        AboutSpan.forEach((span)=> {
            span.style.width = "0";
        })
    }
    if (window.scrollY > AboutSctionOfsetTop) {
        if (!Started) {
            CounterSectionElement.forEach((span)=> StartCounter(span) )
        }
        Started = true
    }

    if (window.scrollY >= 1000) {
        ButtonToUp.classList.add("active")
    } else {
        ButtonToUp.classList.remove("active")
    }
}

// Progress Section 

let AboutSection = document.querySelector(".about")
let AboutSctionOfsetTop = AboutSection.offsetTop;
let AboutSectionHeight = AboutSection.offsetHeight;
let PageHeight = window.innerHeight;
let AboutSpan = document.querySelectorAll(".about .skills .prog-holder .prog span")



// Counter Section 

let CounterSection = document.querySelector(".counter")
let CounterSectionElement = document.querySelectorAll(".counter .contianer .box .num");
console.log(CounterSectionElement[0])
let CounterSectionoffsetTop = CounterSection.offsetTop;
let Started = false

function StartCounter(el) {
    let goal = el.dataset.goal;
    let Counte = setInterval(function () {
        el.textContent++;
        if (el.textContent === goal) {
            clearInterval(Counte)
        }
    } , 2000 / goal)
}

// Portfolio Section 

let PortfolioSpans = document.querySelectorAll(".portfolio .container .head-links span")
let PortfolioBoxs = document.querySelectorAll(".portfolio .container .portfolio-content .img1")

// Remove Active Class From Element And Add To Clicked Element

PortfolioSpans.forEach((span)=> {
    span.addEventListener("click" , RemoveActive)
    span.addEventListener("click" , MangeBoxs)
})

function RemoveActive() {
    PortfolioSpans.forEach((span) => {
        span.classList.remove("active")
        this.classList.add("active")
    })
}

function MangeBoxs() {
    PortfolioBoxs.forEach((box)=> {
        box.style.display = "none"
    })
    document.querySelectorAll(this.dataset.class).forEach((el)=> {
        el.style.display = "block"
    })
}

// Button To Up 

let ButtonToUp = document.querySelector("span.up")

ButtonToUp.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    })
}

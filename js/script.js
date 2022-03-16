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
    if (window.scrollY > CounterSectionoffsetTop) {
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

// About Animate 

    if (window.scrollY >= AboutSctionOfsetTop) {

        $(".img").animate({

            opacity: "1",

            left: "0"

        } , 1000)

        $(".info").animate({

            opacity: "1",

            right: "0"

        } , 1000)

    }
    // counter Animate 

    if (window.scrollY >= CounterSectionoffsetTop) {

        $(".counter .box").animate({

            opacity: "1"

        } , 2000)

    }

    // Services animate

    let ServicesSection = document.querySelector(".services")
    let ServicesOffsetTop = ServicesSection.offsetTop;

    if (window.scrollY >= ServicesOffsetTop) {

        $(".services .box").animate({

            opacity: "1"

        } , 2000)

    }

    // portfolio section 

    let portfolio = document.querySelector(".portfolio");
    let portfolioOffsetTop = portfolio.offsetTop

    if (window.scrollY >= portfolioOffsetTop) {
        $(".portfolio .img1").animate({
            opacity: "1",
        } , 1000)
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

let ProtfolioImg = document.querySelectorAll(".portfolio img")
ProtfolioImg.forEach((img) => {
    img.addEventListener("click" , function () {
        let overlyBox = document.createElement("div")

        overlyBox.className = "overly-box"

        document.body.appendChild(overlyBox)

        let BoxImg = document.createElement("div")

        BoxImg.className = "box-img"

        if (img.alt !== null) {

            let Heade = document.createElement("h3")

            Heade.className = "box-head"

            let HeaderText = document.createTextNode(img.alt)

            Heade.appendChild(HeaderText)

            BoxImg.appendChild(Heade)
        }

        let overlyImg = document.createElement("img")

        overlyImg.src = img.src;

        BoxImg.appendChild(overlyImg)

        overlyBox.appendChild(BoxImg)

        

        let CloseButton = document.createElement("span");

        CloseButton.className = "close-button"

        let CloseButtonText = document.createTextNode("X")

        CloseButton.appendChild(CloseButtonText)

        BoxImg.appendChild(CloseButton)

        document.addEventListener("click" , function (e) {
            if (e.target.className === "close-button") {
                BoxImg.remove()
                overlyBox.remove()
            }
        })
    })
})

// Button To Up 

let ButtonToUp = document.querySelector("span.up")

ButtonToUp.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    })
}


// Header Section 

$(".header .burger-icon").click(function () {

    $(".header ul").slideToggle()

})

$(".header ul li a").click(function (Event) {

    Event.preventDefault()

    $(this).addClass("active").parent().siblings().find("a").removeClass("active")

    var scroll = 

    $("html , body").animate({

        scrollTop: $('.' + $(this).data("scroll")).offset().top - $(".header").innerHeight()

    })

})

$(window).scroll(function () {

    if ($(window).scrollTop() >= 800) {

        $(".header").addClass("active")

    } else {

        $(".header").removeClass('active')

    }

})


// Landing Section 

let LandingSection = document.querySelector(".landing")

let LandingArrey = ["slide-1.jpg" , "slide-2.jpg" , "slide-3.jpg"]

let RandomNumber = Math.floor(Math.random() * LandingArrey.length)


setInterval(function () {

    let RandomNumber = Math.floor(Math.random() * LandingArrey.length)

    LandingSection.style.backgroundImage = "url(images/slide/"+ LandingArrey[RandomNumber]+")"


} , 10000)


// Box Model Section 

$(".box-model .icon").click(function () {

    $(".box-model").toggleClass("active")

})

$(".box-model ul div").click(function () {

    $(this).addClass("active").siblings().removeClass("active")

})

document.body.classList.add(localStorage.getItem("body-color"))

let bodyColor = document.querySelectorAll(".box-model ul div")

let bodyColorArrey = []

for (let i = 0; i < bodyColor.length; i++) {

    bodyColorArrey.push(bodyColor[i].getAttribute("data-color"))

    bodyColor[i].addEventListener("click" , function () {

        document.body.classList.remove(...bodyColorArrey)

        document.body.classList.add(bodyColor[i].getAttribute("data-color"))

        localStorage.setItem("body-color" , bodyColor[i].getAttribute("data-color"))

    })
}

// Skills Section 

let SkillsSection = document.querySelector('.skills')

let ProgSpan = document.querySelectorAll(".skills .prog-holder span")

let SkillsOffsetTop = SkillsSection.offsetTop


// State section 

let StateSection = document.querySelector(".state")

let StateOffsetTop = StateSection.offsetTop

let StateSpan = document.querySelectorAll('.state .box > span')

let Started = false

function StartCounter(el) {

    let Goal = el.dataset.goal;

    let Counte = setInterval(function () {

        el.textContent++;

        if (el.textContent === Goal) {

            clearInterval(Counte)

        }

    })

}


// Portfolio Section 

$(".portfolio ul li").click(function () {

    $(this).addClass("active").siblings().removeClass("active")

    var Box =  "." + $(this).data("portfolio")

    $(".portfolio .row .all").fadeOut()

    $(".portfolio .row "+ Box+"").fadeIn()

})


// Button To Top 

$(".up").click(function () {

    $("html , body").animate({

        scrollTop: 0

    })

})

$(window).scroll(function () {

    if ($(window).scrollTop() >= 800) {

        $(".up").fadeIn()

    } else {

        $(".up").fadeOut()

    }

})

window.onscroll = function () {

    // Skills Section 

    if (window.scrollY >= SkillsOffsetTop - 550 ) {

        ProgSpan.forEach((span)=> {

            span.style.width = span.dataset.prog

        })

    }

    // State Section 

    if (window.scrollY >= StateOffsetTop - 500) {

        if (!Started) {

            StateSpan.forEach((state) => {

                StartCounter(state)

            })

        }

        Started = true

    }

}
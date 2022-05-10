
// Header Section 

$(".header .burger-icon").click(function () {

    $(".header ul").slideToggle()

})

$(".header ul li a").click(function (Event) {

    Event.preventDefault()

    $(this).addClass("active").parent().siblings().find("a").removeClass("active")

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

$(window).ready(function () {

    $(".landing .slide").css("opacity" , "1")

})

let LandingSection = document.querySelectorAll(".landing .slide")

let LandingArrey = ["slide-1.jpg" , "slide-2.jpg" , "slide-3.jpg"]

LandingSection.forEach((section)=> {

    setInterval(function () {

    let RandomNumber = Math.floor(Math.random() * LandingArrey.length)

    section.style.backgroundImage = "url(images/slide/"+ LandingArrey[RandomNumber]+")"


} , 10000)

})



let sliderWrap = document.querySelector(".landing .slider")

let slider = sliderWrap.getElementsByClassName("slide")

function next() {

    sliderWrap.append(slider[0])

}

function prev() {

    sliderWrap.prepend(slider[slider.length - 1])

}

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

// About Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".about").offset().top - 400) {

        $(".about .right").animate({

            right: 0,
            
            opacity:1

        })

        $(".about .left").animate({

            left: 0,

            opacity:1

        })

    }

})

// Skills Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".skills").offset().top - 400) {

        $(".skills .right").animate({

            right: 0,

            opacity:1

        })

        $(".skills .left").animate({

            left: 0,

            opacity:1

        })

    }
})

let SkillsSection = document.querySelector('.skills')

let ProgSpan = document.querySelectorAll(".skills .prog-holder span")

let SkillsOffsetTop = SkillsSection.offsetTop


// State section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".state").offset().top - 400) {

        $(".state .hidden").animate({

            opacity:1

        })

    }

})

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

// Services Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".services").offset().top - 400) {

        $(".services .hidden").animate({

            opacity:1

        })

        $(".services .left").animate({

            left:0,

            opacity:1

        })

        $(".services .right").animate({

            right:0,

            opacity:1

        })
        
    }

})

// Action Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".action").offset().top - 400) {

        $(".action .hidden").animate({

            opacity:1

        })

    }

})

// Portfolio Section 

$(".portfolio ul li").click(function () {

    $(this).addClass("active").siblings().removeClass("active")

    var Box =  "." + $(this).data("portfolio")

    $(".portfolio .row .all").fadeOut()

    $(".portfolio .row "+ Box+"").fadeIn()

})

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".portfolio").offset().top - 400) {

        $(".portfolio .hidden").animate({

            opacity:1

        })

        $(".portfolio .right").animate({

            right:0,

            opacity:1

        })

        $(".portfolio .left").animate({

            left:0,

            opacity:1

        })

    }

})


// Testimonlis Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".testimonlis").offset().top - 400) {

        $(".testimonlis .right").animate({

            right: 0,
            
            opacity:1

        })

        $(".testimonlis .left").animate({

            left: 0,

            opacity:1

        })

    }

})

// Team Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".team").offset().top - 400) {

        $(".team .hidden").animate({

            opacity:1

        })

        $(".team .right").animate({

            right:0,

            opacity:1

        })

        $(".team .left").animate({

            left:0,

            opacity:1

        })

    }

})

// Contact Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".contact").offset().top - 400) {

        $(".contact .hidden").animate({

            opacity: 1

        })

        $(".contact .right").animate({

            right: 0 ,
            
            opacity:1

        })

        $(".contact .left").animate({

            left: 0 ,

            opacity:1

        })

    }

})

let contactForm = document.querySelector(".contact form")

let userName = document.querySelector(".contact input[name=username]")

let userEmail = document.querySelector(".contact input[name=mail]")

let userSubject = document.querySelector(".contact input[name=sub]")

let userMsg = document.querySelector(".contact input[name=msg]")

contactForm.onsubmit = function (event) {

    event.preventDefault()

    if (userName.value !== "") {

        localStorage.setItem("userName" , userName.value)

    }

    if (userName.value !== "") {

        localStorage.setItem("userEmail" , userEmail.value)

    }

    if (userSubject.value !== "") {

        localStorage.setItem("userSubject" , userSubject.value)

    }


}


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


// Footer Section 

$(".footer .links li a").click(function (Event) {

    Event.preventDefault()

    $("html , body").animate({

        scrollTop: $("." + $(this).data("footer")).offset.top - $(".header").innerHeight()

    })

})
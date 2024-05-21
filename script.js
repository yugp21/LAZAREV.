function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  tablet: { smooth: true },

  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

function navAnimation() {
    var nav = document.querySelector("nav");

nav.addEventListener("mouseenter", () => {
    let tl = gsap.timeline();

    tl.to("#nav-bottom", {
        height: "25vh",
    });
    tl.to("nav #nav-center .nav-elem h5", {
        display: "block",
    });
    tl.to("nav #nav-center .nav-elem h5 span", {
        y: 0,
        stagger : {
            amount: 0.7,
        }
    })
})

nav.addEventListener("mouseleave", () => {
    let tl = gsap.timeline();

    tl.to("nav #nav-center .nav-elem h5 span", {
        y: 25,
        stagger : {
            amount: 0.2,
        }
    })
    tl.to("nav #nav-center .nav-elem h5", {
        display: "none",
        duration: 0.1,
    })
    tl.to("#nav-bottom", {
        height: "0",
        duration: 0.2,
    })
})
}

function page2Animation() {
    var rightElem = document.querySelectorAll(".right-elem");

rightElem.forEach( (elem)=> {
    elem.addEventListener("mouseenter", () => {
        gsap.to(elem.childNodes[3], {
            opacity: 1,
            scale: 1,
        })
    })
    elem.addEventListener("mouseleave", () => {
        gsap.to(elem.childNodes[3], {
            opacity: 0,
            scale: 0,
        })
    })
    elem.addEventListener("mousemove", (dets) => {
        gsap.to(elem.childNodes[3], {
            x: dets.x - elem.getBoundingClientRect().x - 50,    
            y: dets.y - elem.getBoundingClientRect().y - 120,
        })
    })
})
}

function page3VideoAnimation() {
    var page3Center = document.querySelector(".page3-center");
var page3Video = document.querySelector("#page3 video");

page3Center.addEventListener("click", () => {
    page3Video.play();
    gsap.to(page3Video, {
        transform: "scaleX(1) scaleY(1)",
        opacity: 1,
        borderRadius: 0,
    })
})

page3Video.addEventListener("click", () => {
    page3Video.pause();
    gsap.to(page3Video, {
        transform: "scaleX(0.7) scaleY(0)",
        opacity: 0,
        borderRadius: "30px",
    })
})
}

function cursorImageAnimation() {
    var sections = document.querySelectorAll(".section-right");

    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", () => {
            elem.childNodes[3].style.opacity = 1,
                elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave", () => {
            elem.childNodes[3].style.opacity = 0,
                elem.childNodes[3].load()
        })
    })
}

function page8Animation() {
    gsap.from("#bottom8-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#bottom8-part2",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 10%",
            scrub: true,
        }
    })
}


locomotiveAnimation();

navAnimation();

page2Animation();

page3VideoAnimation();

cursorImageAnimation();

page8Animation();
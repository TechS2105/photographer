let barIcon = document.querySelector("#open");
let heading = document.querySelector("h1");
let spanSection = document.querySelector("span");
let textSection = document.querySelector("p");
let buttonSection = document.querySelector("button");
let imageOverlay = document.querySelector(".imgoverlay");
let images = document.querySelectorAll("#img");
let slider = document.querySelector(".imageslider");
let logoImg = document.querySelector(".logoimg");
let menuSection = document.querySelectorAll(".menu ul li");

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

/** header logo section animtion */
logoImg.style.transform = "translateY(-100px)";
logoImg.style.opacity = "0";

const headerLogoFun = () => {
  logoImg.style.transform = "translateY(0px)";
  logoImg.style.opacity = "1";
  logoImg.style.transition = "all 0.8s ease";
};

/** header menu section animation */
menuSection[0].style.transform = "translateY(-100px)";
menuSection[1].style.transform = "translateY(100px)";
menuSection[2].style.transform = "translateY(-100px)";
menuSection[3].style.transform = "translateY(100px)";
menuSection[4].style.transform = "translateY(-100px)";

const headerMenuFun = () => {
  menuSection[0].style.transform = "translateY(0px)";
  menuSection[0].style.opacity = "1";
  menuSection[0].style.transition = "all 0.8s ease 0.5s";
  menuSection[1].style.transform = "translateY(0px)";
  menuSection[1].style.opacity = "1";
  menuSection[1].style.transition = "all 0.8s ease 0.6s";
  menuSection[2].style.transform = "translateY(0px)";
  menuSection[2].style.opacity = "1";
  menuSection[2].style.transition = "all 0.8s ease 0.7s";
  menuSection[3].style.transform = "translateY(0px)";
  menuSection[3].style.opacity = "1";
  menuSection[3].style.transition = "all 0.8s ease 0.8s";
  menuSection[4].style.transform = "translateY(0px)";
  menuSection[4].style.opacity = "1";
  menuSection[4].style.transition = "all 0.8s ease 0.9s";
};

/** Sticky scrolling top button */

let bodySection = document.querySelector("body");
let scrollingBtn = document.createElement("div");
bodySection.prepend(scrollingBtn);
scrollingBtn.classList.add("scrollingButton");
let scrollingClass = document.querySelector(".scrollingButton");

scrollingClass.innerHTML = `<i class="ri-arrow-up-s-line"></i>`;

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollingClass.style.display = "flex";
    scrollingClass.style.transition = "all 1s ease-in";
  } else {
    scrollingClass.style.display = "none";
    scrollingClass.style.transition = "all 1s ease-out";
  }
});

scrollingBtn.addEventListener("click", () => {
  $(window).scrollTop(0);
});

/** Responsive Button Section */

barIcon.addEventListener("click", () => {
  $(".responsivemenu").css("display", "block");
  $("#open").css("display", "none");
  $("#close").css("display", "block");
});

$("#close").on("click", function () {
  $(".responsivemenu").css("display", "none");
  $("#close").css("display", "none");
  $("#open").css("display", "block");
});

/** Herosection text animation  */

const animationFun = () => {
  imageOverlay.classList.add("zoomSection");
  spanSection.classList.add("headingClass");
  heading.classList.add("headingClass");
  textSection.classList.add("headingClass");
  buttonSection.classList.add("headingClass");
};

/** Hero section scroll animation */

const heroSectionTextAnimation = () => {
  window.addEventListener("scroll", () => {
    if (Math.floor(scrollY) > 500) {
      document.querySelector(
        ".textsection"
      ).style.transform = `translateX(-700px)`;
      document.querySelector(".textsection").style.transition =
        "all 1s ease-out";
    }
    if (Math.floor(scrollY) < 300) {
      document.querySelector(
        ".textsection"
      ).style.transform = `translateX(0px)`;
      document.querySelector(".textsection").style.transition =
        "all 1s ease-in";
    }
  });
};

/** About section animation */

const aboutmeAnimation = () => {
  $(window).on("scroll", function () {
    /** About me text section  */

    if ($(window).scrollTop() < 200) {
      $(".text h2").css({ opacity: "0", transition: "all 1.5s ease-out" });
      $(".text span").css({ opacity: "0", transition: "all 2s ease-out" });
      $(".text p").css({ opacity: "0", transition: "all 3s ease-out" });
    } else if ($(window).scrollTop() > 500) {
      $(".text h2").css({ opacity: "1", transition: "all 1.5s ease-in" });
      $(".text span").css({ opacity: "1", transition: "all 2s ease-in" });
      $(".text p").css({ opacity: "1", transition: "all 3s ease-in" });
    }
  });
};

/** Service section animation */

const serviceAnimation = () => {
  window.addEventListener("scroll", () => {
    /** Service heading animation */

    if ($(window).scrollTop() > 1000) {
      $(".services-section .serviceHeading").css("overflow", "hidden");
      $(".serviceHeading h2").css({
        transform: "translateY(-100%)",
        transition: "all 1s ease-out",
      });
      $(".serviceHeading h2").css({
        transform: "translateY(0%)",
        transition: "all 2s ease-in",
      });
    } else if ($(window).scrollTop() < 1000) {
      $(".serviceHeading h2").css({
        transform: "translateY(-100%)",
        transition: "all 1s ease-out",
      });
    }
  });

  /** Service subtext section */

  window.addEventListener("scroll", () => {
    $(".text1,.text2").css("overflow", "hidden");

    // box 1 animation

    let a = $(".box1 h3").offset();

    if (window.scrollY > a.top) {
      $(".box1").css({
        transform: "translateX(-500px)",
        transition: "all 1s ease-out",
      });
    } else if (window.scrollY < a.top) {
      $(".box1").css({
        transform: "translateX(0px)",
        transition: "all 1s ease-in",
      });
    }

    // box 4 animation

    let b = $(".box4 h3").offset();

    if (window.scrollY > b.top) {
      $(".box4").css({
        transform: "translateX(500px)",
        transition: "all 1s ease-out",
      });
    } else if (window.scrollY < b.top) {
      $(".box4").css({
        transform: "translateX(0px)",
        transition: "all 1s ease-in",
      });
    }

    // box 2 animation

    let c = $(".box2 h3").offset();

    if (window.scrollY > c.top) {
      $(".box2").css({
        transform: "translateX(-500px)",
        transition: "all 1s ease-out",
      });
    } else if (window.scrollY < c.top) {
      $(".box2").css({
        transform: "translateX(0px)",
        transition: "all 0.9s ease-in",
      });
    }

    // box 5 animation

    let d = $(".box5 h3").offset();

    if (window.scrollY > d.top) {
      $(".box5").css({
        transform: "translateX(500px)",
        transition: "all 1s ease-out",
      });
    } else if (window.scrollY < d.top) {
      $(".box5").css({
        transform: "translateX(0px)",
        transition: "all 0.9s ease-in",
      });
    }

    // box 3 animation

    let e = $(".box3 h3").offset();

    if (window.scrollY > e.top) {
      $(".box3").css({
        transform: "translateX(-500px)",
        transition: "all 1s ease-out",
      });
    } else if (window.scrollY < e.top) {
      $(".box3").css({
        transform: "translateX(0px)",
        transition: "all 0.7s ease-in",
      });
    }

    // box 6 animation

    let f = $(".box6 h3").offset();

    if (window.scrollY > f.top) {
      $(".box6").css({
        transform: "translateX(500px)",
        transition: "all 1s ease-out",
      });
    } else if (window.scrollY < f.top) {
      $(".box6").css({
        transform: "translateX(0px)",
        transition: "all 0.7s ease-out",
      });
    }
  });
};

/** Portfolio section */

const protfolioanimation = () => {
  window.addEventListener("scroll", () => {
    let x = $(".headingsection").parent().offset();
    $(".headingsection").css({ overflow: "hidden" });

    if ($(window).scrollTop() > x.top) {
      $(".headingsection h2").css({
        transform: "translateY(-100%)",
        transition: "all 1s ease-out",
      });
      $(".headingsection h2").css({ transform: "translateY(0%)" });
    } else if ($(window).scrollTop() < 2000) {
      $(".headingsection h2").css({ transform: "translateY(-100%)" });
    }

    if ($(window).scrollTop() > x.top) {
      $(".headingsection p").css({
        transform: "scale(0)",
        transition: "all 0.8s ease-out 1s",
      });
      $(".headingsection p").css({ transform: "scale(1)" });
    } else if ($(window).scrollTop() < 4000) {
      $(".headingsection p").css({ transform: "scale(0)" });
    }

    let y = $(".colorpaletimg").parent().offset();
    $(".colorpaletimg img").css({ opacity: "0" });

    if ($(window).scrollTop() > y.top) {
      $(".colorpaletimg img").css({
        opacity: "1",
        transition: "all 1s ease-in 0.8s",
      });
    }
  });
};

/** image wrapper carousel */

let buttons = document.querySelector(".button");

for (let i = 0; i < images.length; i++) {
  let newButtons = document.createElement("div");
  buttons.appendChild(newButtons);
  newButtons.classList.add("div");
}

let button = document.querySelectorAll(".div");

button.forEach((buttonval, i) => {
  buttonval.addEventListener("click", () => {
    $(".imageslider img").css({
      transform: `translateX(-${i * 360}px)`,
      transition: "all 0.5s linear",
    });
  });
});

/** Hire me section  */

function hiremesection() {
  window.addEventListener("scroll", function () {
    let xy = $(".hiremebackgroundimg").parent().offset();
    $("#image1").css({ opacity: "0" });

    if ($(window).scrollTop() > xy.top) {
      console.log("offset is triggered");
      $("#image1").css({ opacity: "1", transition: "all 0.5s ease-in" });
    }

    /** Image animation  */
    let xz = $(".hiremeimg").parent().offset();
    $(".hiremeimg img").css({ transform: "scale(0)", opacity: "0" });

    if ($(window).scrollTop() > xz.top) {
      $(".hiremeimg img").css({
        transform: "scale(1)",
        transition: "all 1s ease-in",
        opacity: "1",
      });
    }

    /** text section animation */
    let text = $(".hiremetext").parent().offset();
    $(".hiremetext h2").css({ opacity: "0", transform: "translateX(-500px)" });
    $(".hiremetext button").css({
      opacity: "0",
      transform: "translateX(-100px)",
    });

    if (window.scrollY > text.top) {
      $(".hiremetext h2").css({
        opacity: "1",
        transition: "all 1s ease-in",
        transform: "translateX(0px)",
      });
      $(".hiremetext button").css({
        opacity: "1",
        transition: "all 1s ease-in",
        transform: "translateX(0px)",
      });
    }
  });
}

/** Window Load Event */
window.addEventListener("load", () => {
  setTimeout(() => {
    headerLogoFun();
    headerMenuFun();
    aboutmeAnimation();
    animationFun();
    heroSectionTextAnimation();
    serviceAnimation();
    protfolioanimation();
    hiremesection();
  });
});

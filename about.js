let open = document.querySelector("#open");
let close = document.querySelector("#close");
let responsiveMenu = document.querySelector(".responsivemenu");
let body = document.querySelector("body");

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

/** bottom to top scroller button */
let scrollerButton = document.createElement("div");
body.prepend(scrollerButton);
scrollerButton.classList.add("scrollBtn");
scrollerButton.innerHTML = `<i class="fa-solid fa-angle-up"></i>`;

$(window).scroll(function () {
  if (window.scrollY > 200) {
    $(".scrollBtn").css({ display: "flex" });
  } else {
    $(".scrollBtn").css({ display: "none", transition: "all 2s ease" });
  }
});

$(scrollerButton).click(function () {
  $(window).scrollTop(0);
});

/** Responsive menu bar */
open.addEventListener("click", () => {
  responsiveMenu.style.display = "block";
  open.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  responsiveMenu.style.display = "none";
  close.style.display = "none";
  open.style.display = "block";
});

/** menu section animation */
let logo = document.querySelector(".logoimg");
let menus = document.querySelectorAll(".menu ul li");
logo.style.transform = `translateY(-500px)`;
logo.style.opacity = "0";

const logoAnimation = () => {
  logo.style.transform = `translateY(0px)`;
  logo.style.opacity = "1";
  logo.style.transition = "all 0.8s ease 0.1s";
};

menus[0].style.transform = `translateY(-100px)`;
menus[1].style.transform = `translateY(100px)`;
menus[2].style.transform = `translateY(-100px)`;
menus[3].style.transform = `translateY(100px)`;
menus[4].style.transform = `translateY(-100px)`;

const headerMenuAnimation = () => {
  menus[0].style.transform = `translateY(0px)`;
  menus[0].style.transition = "all 1s ease 0.5s";
  menus[1].style.transform = `translateY(0px)`;
  menus[1].style.transition = "all 1s ease 0.6s";
  menus[2].style.transform = `translateY(0px)`;
  menus[2].style.transition = "all 1s ease 0.7s";
  menus[3].style.transform = `translateY(0px)`;
  menus[3].style.transition = "all 1s ease 0.8s";
  menus[4].style.transform = `translateY(0px)`;
  menus[4].style.transition = "all 1s ease 0.9s";
};

/** hero section animation */

let heroText = document.querySelector(".textdiv h1");
let heroImage = document.querySelector(".imgdiv img");
let descText = document.querySelector(".desctext h3");
let descTextPara = document.querySelector(".desctext p");
heroText.style.transform = "translateX(500px)";
heroText.style.opacity = "0";
heroImage.style.opacity = "0";
heroImage.style.transform = "scale(0)";
descText.style.transform = "translate(-500px)";
descText.style.opacity = "0";
descTextPara.style.transform = "translateX(-500px)";
descTextPara.style.opacity = "0";

const heroSectionFun = () => {
  heroText.style.transform = "translateX(0px)";
  heroText.style.transition = "all 2s ease 1s";
  heroText.style.opacity = "1";
  heroImage.style.opacity = "1";
  heroImage.style.transform = "scale(1)";
  heroImage.style.transition = "all 3s ease 1s";
  descText.style.transform = `translateX(0px)`;
  descText.style.opacity = "1";
  descText.style.transition = "all 2s ease 1s";
  descTextPara.style.transform = "translateX(0px)";
  descTextPara.style.opacity = "1";
  descTextPara.style.transition = "all 2s ease 1.2s";
};

/** main text section */
const mainTextSection = () => {
  $(".headingtext img").css({ opacity: "0", transform: "scale(0)" });

  $(".headingtext h2").css({
    transform: "translateX(-500px)",
    transition: "all 0.5s ease",
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 800) {
      $(".headingtext img").css({
        opacity: "0.5",
        transform: "scale(1)",
        transition: "all 0.5s ease 0.3s",
      });

      $(".headingtext h2").css({
        transform: "translateX(0px)",
        transition: "all 1s ease 0.4s",
      });
    } else {
      $(".headingtext img").css({ opacity: "0", transform: "scale(0)" });
      $(".headingtext h2").css({
        transform: "translateX(-500px)",
        transition: "all 0.5s ease 0.5s",
      });
    }
  });
};

/** Year Section */

const yearsSection = () => {
  let yearBoxes = document.querySelectorAll(".year");
  yearBoxes[0].classList.add("yearBox1");
  yearBoxes[1].classList.add("yearBox2");
  yearBoxes[2].classList.add("yearBox3");

  $(window).on("scroll", () => {
    $(".yearBox1").css({ transform: "translateX(-500px)", opacity: "0" });

    if (window.scrollY > 800) {
      $(".yearBox1").css({
        opacity: "1",
        transform: "translateX(0px)",
        transition: "all 0.8s ease 0.5s",
      });
    }
  });

  $(window).on("scroll", () => {
    $(".yearBox2").css({ transform: "translateX(-500px)", opacity: "0" });

    if (window.scrollY > 800) {
      $(".yearBox2").css({
        opacity: "1",
        transform: "translateX(0px)",
        transition: "all 0.8s ease 0.6s",
      });
    }
  });

  $(window).on("scroll", () => {
    $(".yearBox3").css({ transform: "translateX(-500px)", opacity: "0" });

    if (window.scrollY > 800) {
      $(".yearBox3").css({
        opacity: "1",
        transform: "translateX(0px)",
        transition: "all 0.8s ease 0.7s",
      });
    }
  });
};

/** text 2 section */
const secondTextSection = () => {
  let secondSubHeading = document.querySelector(".headingtext2 h3");
  let para = document.querySelectorAll(".headingtext2 p");
  secondSubHeading.style.transform = `translateX(-800px)`;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 800) {
      $(".headingtext2 h3").css({
        transform: "translateX(0px)",
        transition: "all 2s ease",
        opacity: 1,
      });
    } else {
      $(".headingtext2 h3").css({
        transform: "translateX(-800px)",
        opacity: "0",
        transition: "all 2s ease 0.5s",
      });
    }
  });

  para.forEach((val) => {
    val.style.transform = `translateX(-800px)`;
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 900) {
      para[0].style.transform = `translateX(0px)`;
      para[0].style.opacity = "1";
      para[0].style.transition = "all 1s ease 0.3s";
    } else {
      para[0].style.transform = `translateX(-800px)`;
      para[0].style.opacity = "0";
      para[0].style.transition = "all 1s ease 0.5s";
    }

    if (window.scrollY > 1000) {
      para[1].style.transform = `translateX(0px)`;
      para[1].style.opacity = "1";
      para[1].style.transition = "all 1s ease 0.3s";
    } else {
      para[1].style.transform = `translateX(-800px)`;
      para[1].style.opacity = "0";
      para[1].style.transition = "all 1s ease 0.5s";
    }
  });
};

/** image wrapper carousel */
let slides = document.querySelector(".wrapperframe");
let rightArrow = document.querySelector("#rightarrow");
let leftArrow = document.querySelector("#leftarrow");
let images = document.querySelectorAll("#image");
let slideNum = 1;

$(".wrapperimg").css({ transform: "translateX(-800px)" });

window.addEventListener("scroll", () => {
  if (window.scrollY > 1000) {
    $(".wrapperimg").css({
      transform: "translateX(0px)",
      opacity: "1",
      transition: "all 1s ease 0.6s",
    });
  } else {
    $(".wrapperimg").css({
      transform: "translateX(-800px)",
      opacity: "0",
      transition: "all 1s ease",
    });
  }
});

rightArrow.addEventListener("click", () => {
  slides.scrollLeft += 150;
  slides.style.scrollBehavior = "smooth";
});

leftArrow.addEventListener("click", () => {
  slides.scrollLeft -= 150;
  slides.style.scrollBehavior = "smooth";
});

window.addEventListener("load", () => {
  logoAnimation();
  headerMenuAnimation();
  heroSectionFun();
  mainTextSection();
  yearsSection();
  secondTextSection();
});

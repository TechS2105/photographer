let open = document.querySelector("#open");
let close = document.querySelector("#close");
let responsiveMenu = document.querySelector(".responsivemenu");
let text1 = document.querySelector(".text1 h1");
let heroImg = document.querySelector(".image img");
let text2 = document.querySelector(".text2 h1");
let text2para = document.querySelector(".text2 p");
let logoImg = document.querySelector(".logoimg");
let menuSection = document.querySelectorAll(".menu ul li");

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

/** Scrolling button */
let scrollingBtn = document.createElement("div");
let body = document.querySelector("body");
scrollingBtn.className = "scrollBtn";
body.prepend(scrollingBtn);
scrollingBtn.innerHTML = `<i class="ri-arrow-up-s-line"></i>`;

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    $(scrollingBtn).show();
  } else {
    $(scrollingBtn).hide();
  }

  if (window.innerWidth < 800) {
    $(scrollingBtn).hide();
  } else {
    $(scrollingBtn).show();
  }
});

$(scrollingBtn).click(() => {
  $(window).scrollTop(0);
});

/** header section logo animation */
logoImg.style.transform = "translateY(-100px)";
logoImg.style.opacity = "0";

const logoAnimeFun = () => {
  $(logoImg).css({
    opacity: "1",
    transform: "translateY(0px)",
    transition: "all 1s ease 0.2s",
  });
};

/** header section menu animation */
menuSection[0].style.transform = "translateY(-100px)";
menuSection[1].style.transform = "translateY(100px)";
menuSection[2].style.transform = "translateY(-100px)";
menuSection[3].style.transform = "translateY(100px)";
menuSection[4].style.transform = "translateY(-100px)";

const menuAnimeFun = () => {
  menuSection[0].style.transform = "translateY(0px)";
  menuSection[0].style.opacity = "1";
  menuSection[0].style.transition = "all 1s ease 0.5s";
  menuSection[1].style.transform = "translateY(0px)";
  menuSection[1].style.opacity = "1";
  menuSection[1].style.transition = "all 1s ease 0.6s";
  menuSection[2].style.transform = "translateY(0px)";
  menuSection[2].style.opacity = "1";
  menuSection[2].style.transition = "all 1s ease 0.7s";
  menuSection[3].style.transform = "translateY(0px)";
  menuSection[3].style.opacity = "1";
  menuSection[3].style.transition = "all 1s ease 0.8s";
  menuSection[4].style.transform = "translateY(0px)";
  menuSection[4].style.opacity = "1";
  menuSection[4].style.transition = "all 1s ease 0.9s";
};

/** responsive menu section */
open.addEventListener("click", () => {
  responsiveMenu.style.display = "block";
  open.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  responsiveMenu.style.display = "none";
  open.style.display = "block";
  close.style.display = "none";
});

/** hero section first text */
text1.style.transform = "translateX(500px)";
text1.style.opacity = "0";

const firstText = () => {
  $(text1).css({
    opacity: "1",
    transform: "translateX(0px)",
    transition: "all 1s ease 1s",
  });
};

/** hero section image text */
heroImg.style.opacity = "0";
heroImg.style.transform = "scale(0)";

const heroImage = () => {
  $(heroImg).css({
    opacity: "1",
    transform: "scale(1)",
    transition: "all 1.5s ease 1.5s",
  });
};

/** hero section second text */
text2.style.opacity = "0";
text2.style.transform = "translateX(-500px)";
text2para.style.opacity = "0";
text2para.style.transform = "translateX(-500px)";

const secondText = () => {
  $(text2).css({
    opacity: "1",
    transform: "translateX(0px)",
    transition: "all 1s ease 1s",
  });

  $(text2para).css({
    opacity: "1",
    transform: "translateX(0px)",
    transition: "all 1s ease 1s",
  });
};

/** Service section animation */
let serviceSection = document.querySelector(".servicetypesection");
let serviceSectionImg = document.querySelector(".servicetypesection img");
let serviceSectionBoxes = document.querySelectorAll(".servicetypes .box");

serviceSectionImg.style.transform = "translateY(-500px)";
serviceSectionImg.style.opacity = "0";

/** Service section img */
const serviceSectionImgFun = () => {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 700) {
      serviceSectionImg.style.transform = "translateY(0px)";
      serviceSectionImg.style.opacity = "1";
      serviceSectionImg.style.transition = "all 2s ease";
    } else {
      serviceSectionImg.style.transform = "translateY(-500px)";
      serviceSectionImg.style.opacity = "0";
      serviceSectionImg.style.transition = "all 2s ease";
    }
  });
};

/** Service section boxes */
const serviceSectionFun = () => {
  serviceSectionBoxes[0].style.transform = "scale(0)";
  serviceSectionBoxes[0].style.opacity = "0";
  serviceSectionBoxes[1].style.transform = "scale(0)";
  serviceSectionBoxes[1].style.opacity = "0";
  serviceSectionBoxes[2].style.transform = "scale(0)";
  serviceSectionBoxes[2].style.opacity = "0";
  serviceSectionBoxes[3].style.transform = "scale(0)";
  serviceSectionBoxes[3].style.opacity = "0";
  serviceSectionBoxes[4].style.transform = "scale(0)";
  serviceSectionBoxes[4].style.opacity = "0";
  serviceSectionBoxes[5].style.transform = "scale(0)";
  serviceSectionBoxes[5].style.opacity = "0";

  window.addEventListener("scroll", () => {
    if (window.scrollY > 800) {
      // box 1
      serviceSectionBoxes[0].style.transform = "scale(1)";
      serviceSectionBoxes[0].style.transition = "all 2s ease 0.2s";
      serviceSectionBoxes[0].style.opacity = "1";

      // box2
      serviceSectionBoxes[1].style.transform = "scale(1)";
      serviceSectionBoxes[1].style.transition = "all 2s ease 0.3s";
      serviceSectionBoxes[1].style.opacity = "1";

      //box3
      serviceSectionBoxes[2].style.transform = "scale(1)";
      serviceSectionBoxes[2].style.transition = "all 2s ease 0.4s";
      serviceSectionBoxes[2].style.opacity = "1";

      // box4
      serviceSectionBoxes[3].style.transform = "scale(1)";
      serviceSectionBoxes[3].style.transition = "all 2s ease 0.5s";
      serviceSectionBoxes[3].style.opacity = "1";

      // box5
      serviceSectionBoxes[4].style.transform = "scale(1)";
      serviceSectionBoxes[4].style.transition = "all 2s ease 0.6s";
      serviceSectionBoxes[4].style.opacity = "1";

      //box6
      serviceSectionBoxes[5].style.transform = "scale(1)";
      serviceSectionBoxes[5].style.transition = "all 2s ease 0.7s";
      serviceSectionBoxes[5].style.opacity = "1";
    } else {
      // box 1
      serviceSectionBoxes[0].style.transform = "scale(0)";
      serviceSectionBoxes[0].style.transition = "all 2s ease 0.2s";
      serviceSectionBoxes[0].style.opacity = "1";

      // box2
      serviceSectionBoxes[1].style.transform = "scale(0)";
      serviceSectionBoxes[1].style.transition = "all 2s ease 0.3s";
      serviceSectionBoxes[1].style.opacity = "1";

      //box3
      serviceSectionBoxes[2].style.transform = "scale(0)";
      serviceSectionBoxes[2].style.transition = "all 2s ease 0.4s";
      serviceSectionBoxes[2].style.opacity = "1";

      // box4
      serviceSectionBoxes[3].style.transform = "scale(0)";
      serviceSectionBoxes[3].style.transition = "all 2s ease 0.5s";
      serviceSectionBoxes[3].style.opacity = "1";

      // box5
      serviceSectionBoxes[4].style.transform = "scale(0)";
      serviceSectionBoxes[4].style.transition = "all 2s ease 0.6s";
      serviceSectionBoxes[4].style.opacity = "1";

      //box6
      serviceSectionBoxes[5].style.transform = "scale(0)";
      serviceSectionBoxes[5].style.transition = "all 2s ease 0.7s";
      serviceSectionBoxes[5].style.opacity = "1";
    }
  });
};

/** contact me box */
let contactMeImg = document.querySelector(".contactmesection img");
let contactTextHeading = document.querySelector(".contacttext h3");
let contactTextPara = document.querySelector(".contacttext p");
let contactButton = document.querySelector(".button button");

contactMeImg.style.transform = "translateY(-500px)";
contactMeImg.style.opacity = "0";
contactTextHeading.style.transform = "scale(0)";
contactTextHeading.style.opacity = "0";
contactTextPara.style.transform = "scale(0)";
contactTextHeading.style.transition = "all 2s ease";
contactButton.style.transform = "translateX(500px)";
contactButton.style.transform = "scale(0)";
contactButton.style.transition = "all 2s ease";

const contactMeAnimeFun = () => {
  window.addEventListener("scroll", () => {
    if ($(window).scrollTop() > 1200) {
      // contact image
      contactMeImg.style.transform = "translateY(0px)";
      contactMeImg.style.opacity = "1";
      contactMeImg.style.transition = "all 1s ease";

      // contact text
      contactTextHeading.style.transform = "scale(1)";
      contactTextHeading.style.opacity = "1";
      contactTextHeading.style.transition = "all 2s ease 0.5s";
      contactTextPara.style.transform = "scale(1)";
      contactTextPara.style.opacity = "1";
      contactTextPara.style.transition = "all 2s ease 1s";

      //contact button
      contactButton.style.transform = "scale(1)";
      contactButton.style.transition = "all 2s ease 1s";
    } else if ($(window).scrollTop() < 1000) {
      // contact image
      contactMeImg.style.transform = "translateY(-500px)";
      contactMeImg.style.opacity = "0";
      contactMeImg.style.transition = "all 1s ease";

      // contact text
      contactTextHeading.style.transform = "scale(0)";
      contactTextHeading.style.opacity = "0";
      contactTextHeading.style.transition = "all 2s ease 0.5s";
      contactTextPara.style.transform = "scale(0)";
      contactTextPara.style.opacity = "0";
      contactTextPara.style.transition = "all 2s ease 0.5s";

      // contact button
      contactButton.style.transform = "scale(0)";
      contactButton.style.transition = "all 2s ease 1s";
    }
  });
};

/** window loading time */
window.addEventListener("load", () => {
  setTimeout(() => {
    logoAnimeFun();
    menuAnimeFun();
    firstText();
    heroImage();
    secondText();
    serviceSectionImgFun();
    serviceSectionFun();
    contactMeAnimeFun();
  });
});

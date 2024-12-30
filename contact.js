window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

/** add a scroll button */
$("body").prepend(`<div class="scrollBtn"></div>`);
$(".scrollBtn").html(`<i class="ri-arrow-up-s-line"></i>`);

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    $(".scrollBtn").css({
      display: "flex",
      transform: "scale(1)",
      transition: "all 1s ease",
    });
  } else {
    $(".scrollBtn").css({
      display: "none",
      transform: "scale(0)",
      transition: "all 1s ease",
    });
  }

  if (window.innerWidth < 800) {
    $(".scrollBtn").css("display", "none");
  }
});

$(".scrollBtn").click(function () {
  $(window).scrollTop(0);
});

/** header animation */

// header logo
let logo = document.querySelector(".logoimg");
logo.style.opacity = "0";
logo.style.transform = "translateY(-100px)";

const logoAnimation = () => {
  $(logo).css({
    opacity: "1",
    transform: "translateY(0px)",
    transition: "all 1s ease",
  });
};

// menu animation

let menu = document.querySelectorAll(".menu ul li");

menu[0].style.transform = "translateY(-500px)";
menu[0].style.opacity = "0";

menu[1].style.transform = "translateY(500px)";
menu[1].style.opacity = "0";

menu[2].style.transform = "translateY(-500px)";
menu[2].style.opacity = "0";

menu[3].style.transform = "translateY(500px)";
menu[3].style.opacity = "0";

menu[4].style.transform = "translateY(-500px)";
menu[4].style.opacity = "0";

const menuAnimation = () => {
  menu[0].style.transform = "translateY(0px)";
  menu[0].style.opacity = "1";
  menu[0].style.transition = "all 1.5s ease 0.2s";
  menu[1].style.transform = "translateY(0px)";
  menu[1].style.opacity = "1";
  menu[1].style.transition = "all 1.5s ease 0.3s";
  menu[2].style.transform = "translateY(0px)";
  menu[2].style.opacity = "1";
  menu[2].style.transition = "all 1.5s ease 0.4s";
  menu[3].style.transform = "translateY(0px)";
  menu[3].style.opacity = "1";
  menu[3].style.transition = "all 1.5s ease 0.5s";
  menu[4].style.transform = "translateY(0px)";
  menu[4].style.opacity = "1";
  menu[4].style.transition = "all 1.5s ease 0.6s";
};

/** responsive menu */
let openMenu = document.querySelector("#open");
let closeMenu = document.querySelector("#close");
let responsiveMenu = document.querySelector(".responsivemenu");

$(openMenu).click(() => {
  $(responsiveMenu).show();
  $(openMenu).hide();
  $(closeMenu).show();
});

$(closeMenu).click(() => {
  $(responsiveMenu).hide();
  $(closeMenu).hide();
  $(openMenu).show();
});

/** hero section animation */

// hero animation

let heroText1 = document.querySelector(".text1 h1");

$(heroText1).css({
  opacity: "0",
  transform: "translateX(500px)",
});

const heroFirstText = () => {
  $(heroText1).css({
    opacity: "1",
    transition: "all 1s ease 1.5s",
    transform: "translateX(0px)",
  });
};

let heroImage = document.querySelector(".image img");

$(heroImage).css({
  opacity: "0",
  transform: "scale(0)",
});

const heroImg = () => {
  $(heroImage).css({
    opacity: "1",
    transform: "scale(1)",
    transition: "all 1.5s ease 1.5s",
  });
};

let heroText2 = document.querySelector(".text2 h1");
let heroPara = document.querySelector(".text2 p");

$(heroText2).css({
  opacity: "0",
  transform: "translateX(-500px)",
});

$(heroPara).css({
  opacity: "0",
  transform: "translateX(-500px)",
});

const heroSecondHeadingPara = () => {
  $(heroText2).css({
    opacity: "1",
    transform: "translateX(0px)",
    transition: "all 1s ease 1.5s",
  });

  $(heroPara).css({
    opacity: "1",
    transform: "translateX(0px)",
    transition: "all 1s ease 1.7s",
  });
};

/** Sub section animation */

// social icon section

let socialIcons = document.querySelectorAll(".socialicon i");
let socialIconBox = document.querySelector(".socialicon");

socialIcons.forEach((icons) => {
  icons.addEventListener("mouseenter", () => {
    icons.style.transform = "scale(1.1)";
    icons.style.transition = "all 0.5s ease";
  });

  icons.addEventListener("mouseleave", () => {
    icons.style.transform = "scale(1)";
  });
});

socialIconBox.style.transform = "scale(0)";
socialIconBox.style.opacity = "0";

// icon 1
socialIcons[0].style.transform = "translateX(-500px)";
socialIcons[0].style.opacity = "0";

// icon 2
socialIcons[1].style.transform = "translateX(500px)";
socialIcons[1].style.opacity = "0";

// icon 3
socialIcons[2].style.transform = "translateX(-500px)";
socialIcons[2].style.opacity = "0";

// icon 4
socialIcons[3].style.transform = "translateX(-500px)";
socialIcons[3].style.opacity = "0";

// icon 5
socialIcons[4].style.transform = "translateX(-500px)";
socialIcons[4].style.opacity = "0";

window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    socialIconBox.style.transform = "scale(1)";
    socialIconBox.style.opacity = "1";
    socialIconBox.style.transition = "all 0.8s ease";
    // icon1
    socialIcons[0].style.transform = "translateX(0px)";
    socialIcons[0].style.opacity = "1";
    socialIcons[0].style.transition = "all 0.8s ease 0.2s";

    // icon 2
    socialIcons[1].style.transform = "translateX(0px)";
    socialIcons[1].style.opacity = "1";
    socialIcons[1].style.transition = "all 0.8s ease 0.3s";

    //icon 3
    socialIcons[2].style.transform = "translateX(0px)";
    socialIcons[2].style.opacity = "1";
    socialIcons[2].style.transition = "all 0.8s ease 0.4s";

    // icon 4
    socialIcons[3].style.transform = "translateX(0px)";
    socialIcons[3].style.opacity = "1";
    socialIcons[3].style.transition = "all 0.8s ease 0.4s";

    // icon 5
    socialIcons[4].style.transform = "translateX(0px)";
    socialIcons[4].style.opacity = "1";
    socialIcons[4].style.transition = "all 0.8s ease 0.5s";
  } else {
    socialIconBox.style.transform = "scale(1)";
    socialIconBox.style.opacity = "0";
    socialIconBox.style.transition = "all 0.8s ease";

    socialIcons[0].style.transform = "translateX(-500px)";
    socialIcons[0].style.opacity = "0";
    socialIcons[0].style.transition = "all 2s ease";
    socialIcons[1].style.transform = "translateX(500px)";
    socialIcons[1].style.opacity = "0";
    socialIcons[1].style.transition = "all 2s ease";
    socialIcons[2].style.transform = "translateX(-500px)";
    socialIcons[2].style.opacity = "0";
    socialIcons[2].style.transition = "all 2s ease";
    socialIcons[3].style.transform = "translateX(500px)";
    socialIcons[3].style.opacity = "0";
    socialIcons[3].style.transition = "all 2s ease";
    socialIcons[4].style.transform = "translateX(-500px)";
    socialIcons[4].style.opacity = "0";
    socialIcons[4].style.transition = "all 2s ease";
  }
});

// contact form section

let contactFormHeading = document.querySelector(".contactform h3");
let contactForm = document.querySelectorAll("form input");
let formTextArea = document.querySelector("form textarea");

contactFormHeading.style.transform = "translateX(-500px)";
contactFormHeading.style.opacity = "0";

// input box 1
contactForm[0].style.transform = "translateX(-800px)";
contactForm[0].style.opacity = "0";

// input box 2
contactForm[1].style.transform = "translateX(-800px)";
contactForm[1].style.opacity = "0";

// input box 3
contactForm[2].style.transform = "translateX(-800px)";
contactForm[2].style.opacity = "0";

// input box 4
contactForm[3].style.transform = "translateX(-800px)";
contactForm[3].style.opacity = "0";

// form text area
$(formTextArea).css({
  transform: "translateX(-800px)",
  opacity: "0",
  transition: "all 1s ease 1.5s",
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    // form heading
    contactFormHeading.style.transform = "translateX(0px)";
    contactFormHeading.style.opacity = "1";
    contactFormHeading.style.transition = "all 1s ease 0.6s";

    /** form input boxes */

    // input box 1
    contactForm[0].style.transform = "translateX(0px)";
    contactForm[0].style.opacity = "1";
    contactForm[0].style.transition = "all 1s ease 0.8s";

    // input box 2
    contactForm[1].style.transform = "translateX(0px)";
    contactForm[1].style.opacity = "1";
    contactForm[1].style.transition = "all 1s ease 0.9s";

    // input box 3
    contactForm[2].style.transform = "translateX(0px)";
    contactForm[2].style.opacity = "1";
    contactForm[2].style.transition = "all 1s ease 1s";

    // form text area
    $(formTextArea).css({
      transform: "translateX(0px)",
      opacity: "1",
      transition: "all 1s ease 1.1s",
    });
    // input box 3
    contactForm[3].style.transform = "translateX(0px)";
    contactForm[3].style.opacity = "1";
    contactForm[3].style.transition = "all 1s ease 1.2s";
  } else {
    // form heading
    contactFormHeading.style.transform = "translateX(-500px)";
    contactFormHeading.style.opacity = "0";
    contactFormHeading.style.transition = "all 1s ease 0.6s";

    // input box 1
    contactForm[0].style.transform = "translateX(-800px)";
    contactForm[0].style.opacity = "0";
    contactForm[0].style.transition = "all 1s ease 0.7s";

    // input box 2
    contactForm[1].style.transform = "translateX(-800px)";
    contactForm[1].style.opacity = "0";
    contactForm[1].style.transition = "all 1s ease 0.8s";

    // input box 3
    contactForm[2].style.transform = "translateX(-800px)";
    contactForm[2].style.opacity = "0";
    contactForm[2].style.transition = "all 1s ease 0.9s";

    // form text area
    $(formTextArea).css({
      transform: "translateX(-800px)",
      opacity: "1",
      transition: "all 1s ease 1s",
    });

    // input box 3
    contactForm[3].style.transform = "translateX(-800px)";
    contactForm[3].style.opacity = "0";
    contactForm[3].style.transition = "all 1s ease 1.1s";
  }
});

/** Contact address section */
let contactAddressHeading = document.querySelector(".contact h2");
let contactPhoneHeading = document.querySelector(".phone h4");
let contactPhonePara = document.querySelector(".phone p");
let contactEmailHeading = document.querySelector(".email h4");
let contactEmailPara = document.querySelector(".email p");
let contactLocationHeading = document.querySelector(".location h4");
let contactLocationPara = document.querySelector(".location p");

const contactAddress = () => {
  $(contactAddressHeading).css({
    transform: "translateX(-800px)",
    opacity: "0",
  });

  $(contactPhoneHeading).css({
    transform: "translateX(-800px)",
    opacity: "0",
  });

  $(contactPhonePara).css({
    transform: "translateX(-800px)",
    opacity: "0",
  });

  $(contactEmailHeading).css({
    transform: "translateX(-800px)",
    opacity: "0",
  });

  $(contactEmailPara).css({
    transform: "translateX(-800px)",
    opacity: "0",
  });

  $(contactLocationHeading).css({
    transform: "translateX(-800px)",
    opacity: "0",
  });

  $(contactLocationPara).css({
    transform: "translateX(-800px)",
    opacity: "0",
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 800) {
      $(contactAddressHeading).css({
        transform: "translateX(0px)",
        opacity: "1",
        transition: "all 1s ease 1.3s",
      });

      $(contactPhoneHeading).css({
        transform: "translateX(0px)",
        opacity: "1",
        transition: "all 1s ease 1.4s",
      });

      $(contactPhonePara).css({
        transform: "translateX(0px)",
        opacity: "1",
        transition: "all 1s ease 1.5s",
      });

      $(contactEmailHeading).css({
        transform: "translateX(0px)",
        opacity: "1",
        transition: "all 1s ease 1.6s",
      });

      $(contactEmailPara).css({
        transform: "translateX(0px)",
        opacity: "1",
        transition: "all 1s ease 1.7s",
      });

      $(contactLocationHeading).css({
        transform: "translateX(0px)",
        opacity: "1",
        transition: "all 1s ease 1.8s",
      });

      $(contactLocationPara).css({
        transform: "translateX(0px)",
        opacity: "1",
        transition: "all 1s ease 1.9s",
      });
    } else {
      $(contactAddressHeading).css({
        transform: "translateX(-800px)",
        opacity: "0",
        transition: "all 1s ease 1.2s",
      });

      $(contactPhoneHeading).css({
        transform: "translateX(-800px)",
        opacity: "0",
        transition: "all 1s ease 1.3s",
      });

      $(contactPhonePara).css({
        transform: "translateX(-800px)",
        opacity: "0",
        transition: "all 1s ease 1.4s",
      });

      $(contactEmailHeading).css({
        transform: "translateX(-800px)",
        opacity: "0",
        transition: "all 1s ease 1.5s",
      });

      $(contactEmailPara).css({
        transform: "translateX(-800px)",
        opacity: "0",
        transition: "all 1s ease 1.6s",
      });

      $(contactLocationHeading).css({
        transform: "translateX(-800px)",
        opacity: "0",
        transition: "all 1s ease 1.7s",
      });

      $(contactLocationPara).css({
        transform: "translateX(-800px)",
        opacity: "0",
        transition: "all 1s ease 1.8s",
      });
    }
  });
};

window.addEventListener("load", () => {
  setTimeout(() => {
    logoAnimation();
    menuAnimation();
    heroFirstText();
    heroImg();
    heroSecondHeadingPara();
    contactAddress();
  });
});

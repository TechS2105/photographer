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

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

/** Responsive header button */
let openMenu = document.querySelector("#open");
let closeMenu = document.querySelector("#close");
let responsiveMenu = document.querySelector(".responsivemenu");

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// add contact me section respective with window size
let responsiveContact = document.querySelector(".responsivecontactmesection");
let contactMeBlock = document.querySelector(".contactmesection");
let x = window.innerWidth;
if (x < 500) {
  console.log("you reach " + x);
  responsiveContact.style.display = "block";
  contactMeBlock.style.display = "none";
} else if (x > 500) {
  console.log("you reach " + x);
  responsiveContact.style.display = "none";
  contactMeBlock.style.display = "block";
}

// open and close btn
const mobileMenu = () => {
  $(openMenu).on("click", () => {
    $(responsiveMenu).show();
    $(openMenu).css({ display: "none" });
    $(closeMenu).css({ display: "block" });
  });

  $(closeMenu).on("click", () => {
    $(responsiveMenu).hide();
    $(openMenu).css({ display: "block" });
    $(closeMenu).css({ display: "none" });
  });
};

/** header section animation */

// Logo image animation
let logoImg = document.querySelector(".logoimg");
logoImg.style.transform = "translateY(-500px)";
logoImg.style.opacity = "0";

const headerSectionAnimeFun = () => {
  logoImg.style.transform = "translateY(0px)";
  logoImg.style.opacity = "1";
  logoImg.style.transition = "all 0.8s ease";
};

// Menu animation
let menu = document.querySelectorAll(".menu ul li");
menu[0].style.transform = "translateY(-500px)";
menu[1].style.transform = "translateY(500px)";
menu[2].style.transform = "translateY(-500px)";
menu[3].style.transform = "translateY(500px)";
menu[4].style.transform = "translateY(-500px)";

const menuAnimeFun = () => {
  // home
  menu[0].style.transform = "translateY(0px)";
  menu[0].style.opacity = "1";
  menu[0].style.transition = "all 1.5s ease 0.2s";

  // about
  menu[1].style.transform = "translateY(0px)";
  menu[1].style.opacity = "1";
  menu[1].style.transition = "all 1.5s ease 0.3s";

  // services
  menu[2].style.transform = "translateY(0px)";
  menu[2].style.opacity = "1";
  menu[2].style.transition = "all 1.5s ease 0.4s";

  // portfolio
  menu[3].style.transform = "translateY(0px)";
  menu[3].style.opacity = "1";
  menu[3].style.transition = "all 1.5s ease 0.5s";

  // contact
  menu[4].style.transform = "translateY(0px)";
  menu[4].style.opacity = "1";
  menu[4].style.transition = "all 1.5s ease 0.6s";
};

/** hero section animation */

// banner text animation
let bannerText = document.querySelector(".text1 h1");

bannerText.style.transform = "translateX(500px)";
bannerText.style.opacity = "0";

const bannerTextAnimeFun = () => {
  bannerText.style.transform = "translateX(0px)";
  bannerText.style.opacity = "1";
  bannerText.style.transition = "all 1s ease 1.3s";
};

// banner image animation

let bannerImg = document.querySelector(".image img");

bannerImg.style.transform = "scale(0)";
bannerImg.style.opacity = "0";

const bannerImageFun = () => {
  bannerImg.style.transform = "scale(1)";
  bannerImg.style.opacity = "1";
  bannerImg.style.transition = "all 2s ease 1.5s";
};

// hero section text

let bannerSecondText = document.querySelector(".text2 h2");
let bannerSectionPara = document.querySelector(".text2 p");

bannerSecondText.style.transform = "translateX(-500px)";
bannerSecondText.style.opacity = "0";
bannerSectionPara.style.transform = "translateX(-500px)";
bannerSectionPara.style.opacity = "0";

const bannerSecondTextAnimeFun = () => {
  // second heading
  bannerSecondText.style.transform = "translateX(0px)";
  bannerSecondText.style.opacity = "1";
  bannerSecondText.style.transition = "all 1s ease 1.3s";

  // second heading para
  bannerSectionPara.style.transform = "translateX(0px)";
  bannerSectionPara.style.opacity = "1";
  bannerSectionPara.style.transition = "all 1s ease 1.4s";
};

/** Portfolio image section */
const portfolioImgAnime = () => {
  let portfolioImages = document.querySelectorAll(".img .portimage");

  // first image
  portfolioImages[0].style.transform = "rotateY(0deg) scale(0)";
  portfolioImages[0].style.opacity = "0";

  // second image
  portfolioImages[1].style.transform = "rotateY(0deg) scale(0)";
  portfolioImages[1].style.opacity = "0";

  // third image
  portfolioImages[2].style.transform = "rotateY(0deg) scale(0)";
  portfolioImages[2].style.opacity = "0";

  // first image row animation
  $(window).on("scroll", () => {
    if ($(window).scrollTop() > 800) {
      // first image
      portfolioImages[0].style.transform = "rotateY(360deg) scale(1)";
      portfolioImages[0].style.opacity = "1";
      portfolioImages[0].style.transition = "all 1s ease 0.4s";

      // second image
      portfolioImages[1].style.transform = "rotateY(360deg) scale(1)";
      portfolioImages[1].style.opacity = "1";
      portfolioImages[1].style.transition = "all 1s ease 0.5s";

      // third image
      portfolioImages[2].style.transform = "rotateY(360deg) scale(1)";
      portfolioImages[2].style.opacity = "1";
      portfolioImages[2].style.transition = "all 1s ease 0.6s";
    } else {
      // first image
      portfolioImages[0].style.transform = "rotateY(0deg) scale(0)";
      portfolioImages[0].style.opacity = "0";
      portfolioImages[0].style.transition = "all 1s ease 0.5s";

      // second image
      portfolioImages[1].style.transform = "rotateY(0deg) scale(0)";
      portfolioImages[1].style.opacity = "0";
      portfolioImages[1].style.transition = "all 1s ease 0.4s";

      // third image
      portfolioImages[2].style.transform = "rotateY(0deg) scale(0)";
      portfolioImages[2].style.opacity = "0";
      portfolioImages[2].style.transition = "all 1s ease 0.3s";
    }
  });

  // fourth image
  portfolioImages[3].style.transform = "rotateY(0deg) scale(0)";
  portfolioImages[3].style.opacity = "0";

  // fifth image
  portfolioImages[4].style.transform = "rotateY(0deg) scale(0)";
  portfolioImages[4].style.opacity = "0";

  // seixth image
  portfolioImages[5].style.transform = "rotateY(0deg) scale(0)";
  portfolioImages[5].style.opacity = "0";

  // second image row animation
  $(window).on("scroll", () => {
    if ($(window).scrollTop() > 1400) {
      // fourth image
      portfolioImages[3].style.transform = "rotateY(360deg) scale(1)";
      portfolioImages[3].style.opacity = "1";
      portfolioImages[3].style.transition = "all 1s ease 0.4s";

      // fifth image
      portfolioImages[4].style.transform = "rotateY(360deg) scale(1)";
      portfolioImages[4].style.opacity = "1";
      portfolioImages[4].style.transition = "all 1s ease 0.5s";

      // sixth image
      portfolioImages[5].style.transform = "rotateY(360deg) scale(1)";
      portfolioImages[5].style.opacity = "1";
      portfolioImages[5].style.transition = "all 1s ease 0.6s";
    } else {
      // fourth image
      portfolioImages[3].style.transform = "rotateY(0deg) scale(0)";
      portfolioImages[3].style.opacity = "0";
      portfolioImages[3].style.transition = "all 1s ease 0.5s";

      // fifth image
      portfolioImages[4].style.transform = "rotateY(0deg) scale(0)";
      portfolioImages[4].style.opacity = "0";
      portfolioImages[4].style.transition = "all 1s ease 0.4s";

      // sixth image
      portfolioImages[5].style.transform = "rotateY(0deg) scale(0)";
      portfolioImages[5].style.opacity = "0";
      portfolioImages[5].style.transition = "all 1s ease 0.3s";
    }
  });

  // seventh image
  portfolioImages[6].style.transform = "rotateY(0deg) scale(0)";
  portfolioImages[6].style.opacity = "0";

  // eighth image
  portfolioImages[7].style.transform = "rotateY(0deg) scale(0)";
  portfolioImages[7].style.opacity = "0";

  // ningth image
  portfolioImages[8].style.transform = "rotateY(0deg) scale(0)";
  portfolioImages[8].style.opacity = "0";

  // third image row animation
  $(window).on("scroll", () => {
    if ($(window).scrollTop() > 2000) {
      // seventh image
      portfolioImages[6].style.transform = "rotateY(360deg) scale(1)";
      portfolioImages[6].style.opacity = "1";
      portfolioImages[6].style.transition = "all 1s ease 0.4s";

      // eighth image
      portfolioImages[7].style.transform = "rotateY(360deg) scale(1)";
      portfolioImages[7].style.opacity = "1";
      portfolioImages[7].style.transition = "all 1s ease 0.5s";

      // ningth image
      portfolioImages[8].style.transform = "rotateY(360deg) scale(1)";
      portfolioImages[8].style.opacity = "1";
      portfolioImages[8].style.transition = "all 1s ease 0.6s";
    } else {
      // seventh image
      portfolioImages[6].style.transform = "rotateY(0deg) scale(0)";
      portfolioImages[6].style.opacity = "0";
      portfolioImages[6].style.transition = "all 1s ease 0.5s";

      // eighth image
      portfolioImages[7].style.transform = "rotateY(0deg) scale(0)";
      portfolioImages[7].style.opacity = "0";
      portfolioImages[7].style.transition = "all 1s ease 0.4s";

      // ningth image
      portfolioImages[8].style.transform = "rotateY(0deg) scale(0)";
      portfolioImages[8].style.opacity = "0";
      portfolioImages[8].style.transition = "all 1s ease 0.3s";
    }
  });

  // tenth image
  portfolioImages[9].style.transform = "rotateY(0deg) scale(0)";
  portfolioImages[9].style.opacity = "0";

  // eleventh image
  portfolioImages[10].style.transform = "rotateY(0deg) scale(0)";
  portfolioImages[10].style.opacity = "0";

  // twelveth image
  portfolioImages[11].style.transform = "rotateY(0deg) scale(0)";
  portfolioImages[11].style.opacity = "0";

  // fourth image row animation
  $(window).on("scroll", () => {
    if ($(window).scrollTop() > 2400) {
      // tenth image
      portfolioImages[9].style.transform = "rotateY(360deg) scale(1)";
      portfolioImages[9].style.opacity = "1";
      portfolioImages[9].style.transition = "all 1s ease 0.4s";

      // elevnth image
      portfolioImages[10].style.transform = "rotateY(360deg) scale(1)";
      portfolioImages[10].style.opacity = "1";
      portfolioImages[10].style.transition = "all 1s ease 0.5s";

      // twelvth image
      portfolioImages[11].style.transform = "rotateY(360deg) scale(1)";
      portfolioImages[11].style.opacity = "1";
      portfolioImages[11].style.transition = "all 1s ease 0.6s";
    } else {
      // tenth image
      portfolioImages[9].style.transform = "rotateY(0deg) scale(0)";
      portfolioImages[9].style.opacity = "0";
      portfolioImages[9].style.transition = "all 1s ease 0.5s";

      // eleventh image
      portfolioImages[10].style.transform = "rotateY(0deg) scale(0)";
      portfolioImages[10].style.opacity = "0";
      portfolioImages[10].style.transition = "all 1s ease 0.4s";

      // twelvth image
      portfolioImages[11].style.transform = "rotateY(0deg) scale(0)";
      portfolioImages[11].style.opacity = "0";
      portfolioImages[11].style.transition = "all 1s ease 0.3s";
    }
  });
};

/** Responsive portfolio image section */
const responsivePortfolioImgAnime = () => {
  let responsivePortfolioImages =
    document.querySelectorAll(".rimg .rportimage");

  // first image
  responsivePortfolioImages[0].style.transform = "rotateY(0deg) scale(0)";
  responsivePortfolioImages[0].style.opacity = "0";

  // second image
  responsivePortfolioImages[1].style.transform = "rotateY(0deg) scale(0)";
  responsivePortfolioImages[1].style.opacity = "0";

  // third image
  responsivePortfolioImages[2].style.transform = "rotateY(0deg) scale(0)";
  responsivePortfolioImages[2].style.opacity = "0";

  // first image row animation
  $(window).on("scroll", () => {
    if ($(window).scrollTop() > 900) {
      // first image
      responsivePortfolioImages[0].style.transform = "rotateY(360deg) scale(1)";
      responsivePortfolioImages[0].style.opacity = "1";
      responsivePortfolioImages[0].style.transition = "all 1s ease 0.4s";

      // second image
      responsivePortfolioImages[1].style.transform = "rotateY(360deg) scale(1)";
      responsivePortfolioImages[1].style.opacity = "1";
      responsivePortfolioImages[1].style.transition = "all 1s ease 0.5s";

      // third image
      responsivePortfolioImages[2].style.transform = "rotateY(360deg) scale(1)";
      responsivePortfolioImages[2].style.opacity = "1";
      responsivePortfolioImages[2].style.transition = "all 1s ease 0.6s";
    } else {
      // first image
      responsivePortfolioImages[0].style.transform = "rotateY(0deg) scale(0)";
      responsivePortfolioImages[0].style.opacity = "0";
      responsivePortfolioImages[0].style.transition = "all 1s ease 0.5s";

      // second image
      responsivePortfolioImages[1].style.transform = "rotateY(0deg) scale(0)";
      responsivePortfolioImages[1].style.opacity = "0";
      responsivePortfolioImages[1].style.transition = "all 1s ease 0.4s";

      // third image
      responsivePortfolioImages[2].style.transform = "rotateY(0deg) scale(0)";
      responsivePortfolioImages[2].style.opacity = "0";
      responsivePortfolioImages[2].style.transition = "all 1s ease 0.3s";
    }
  });

  // fourth image
  responsivePortfolioImages[3].style.transform = "rotateY(0deg) scale(0)";
  responsivePortfolioImages[3].style.opacity = "0";

  // fifth image
  responsivePortfolioImages[4].style.transform = "rotateY(0deg) scale(0)";
  responsivePortfolioImages[4].style.opacity = "0";

  // seixth image
  responsivePortfolioImages[5].style.transform = "rotateY(0deg) scale(0)";
  responsivePortfolioImages[5].style.opacity = "0";

  // second image row animation
  $(window).on("scroll", () => {
    if ($(window).scrollTop() > 1200) {
      // fourth image
      responsivePortfolioImages[3].style.transform = "rotateY(360deg) scale(1)";
      responsivePortfolioImages[3].style.opacity = "1";
      responsivePortfolioImages[3].style.transition = "all 1s ease 0.4s";

      // fifth image
      responsivePortfolioImages[4].style.transform = "rotateY(360deg) scale(1)";
      responsivePortfolioImages[4].style.opacity = "1";
      responsivePortfolioImages[4].style.transition = "all 1s ease 0.5s";

      // sixth image
      responsivePortfolioImages[5].style.transform = "rotateY(360deg) scale(1)";
      responsivePortfolioImages[5].style.opacity = "1";
      responsivePortfolioImages[5].style.transition = "all 1s ease 0.6s";
    } else {
      // fourth image
      responsivePortfolioImages[3].style.transform = "rotateY(0deg) scale(0)";
      responsivePortfolioImages[3].style.opacity = "0";
      responsivePortfolioImages[3].style.transition = "all 1s ease 0.5s";

      // fifth image
      responsivePortfolioImages[4].style.transform = "rotateY(0deg) scale(0)";
      responsivePortfolioImages[4].style.opacity = "0";
      responsivePortfolioImages[4].style.transition = "all 1s ease 0.4s";

      // sixth image
      responsivePortfolioImages[5].style.transform = "rotateY(0deg) scale(0)";
      responsivePortfolioImages[5].style.opacity = "0";
      responsivePortfolioImages[5].style.transition = "all 1s ease 0.3s";
    }
  });

  // seventh image
  responsivePortfolioImages[6].style.transform = "rotateY(0deg) scale(0)";
  responsivePortfolioImages[6].style.opacity = "0";

  // eighth image
  responsivePortfolioImages[7].style.transform = "rotateY(0deg) scale(0)";
  responsivePortfolioImages[7].style.opacity = "0";

  // ningth image
  responsivePortfolioImages[8].style.transform = "rotateY(0deg) scale(0)";
  responsivePortfolioImages[8].style.opacity = "0";

  // third image row animation
  $(window).on("scroll", () => {
    if ($(window).scrollTop() > 1500) {
      // seventh image
      responsivePortfolioImages[6].style.transform = "rotateY(360deg) scale(1)";
      responsivePortfolioImages[6].style.opacity = "1";
      responsivePortfolioImages[6].style.transition = "all 1s ease 0.4s";

      // eighth image
      responsivePortfolioImages[7].style.transform = "rotateY(360deg) scale(1)";
      responsivePortfolioImages[7].style.opacity = "1";
      responsivePortfolioImages[7].style.transition = "all 1s ease 0.5s";

      // ningth image
      responsivePortfolioImages[8].style.transform = "rotateY(360deg) scale(1)";
      responsivePortfolioImages[8].style.opacity = "1";
      responsivePortfolioImages[8].style.transition = "all 1s ease 0.6s";
    } else {
      // seventh image
      responsivePortfolioImages[6].style.transform = "rotateY(0deg) scale(0)";
      responsivePortfolioImages[6].style.opacity = "0";
      responsivePortfolioImages[6].style.transition = "all 1s ease 0.5s";

      // eighth image
      responsivePortfolioImages[7].style.transform = "rotateY(0deg) scale(0)";
      responsivePortfolioImages[7].style.opacity = "0";
      responsivePortfolioImages[7].style.transition = "all 1s ease 0.4s";

      // ningth image
      responsivePortfolioImages[8].style.transform = "rotateY(0deg) scale(0)";
      responsivePortfolioImages[8].style.opacity = "0";
      responsivePortfolioImages[8].style.transition = "all 1s ease 0.3s";
    }
  });

  // tenth image
  responsivePortfolioImages[9].style.transform = "rotateY(0deg) scale(0)";
  responsivePortfolioImages[9].style.opacity = "0";

  // eleventh image
  responsivePortfolioImages[10].style.transform = "rotateY(0deg) scale(0)";
  responsivePortfolioImages[10].style.opacity = "0";

  // twelveth image
  responsivePortfolioImages[11].style.transform = "rotateY(0deg) scale(0)";
  responsivePortfolioImages[11].style.opacity = "0";

  // fourth image row animation
  $(window).on("scroll", () => {
    if ($(window).scrollTop() > 1700) {
      // tenth image
      responsivePortfolioImages[9].style.transform = "rotateY(360deg) scale(1)";
      responsivePortfolioImages[9].style.opacity = "1";
      responsivePortfolioImages[9].style.transition = "all 1s ease 0.4s";

      // elevnth image
      responsivePortfolioImages[10].style.transform =
        "rotateY(360deg) scale(1)";
      responsivePortfolioImages[10].style.opacity = "1";
      responsivePortfolioImages[10].style.transition = "all 1s ease 0.5s";

      // twelvth image
      responsivePortfolioImages[11].style.transform =
        "rotateY(360deg) scale(1)";
      responsivePortfolioImages[11].style.opacity = "1";
      responsivePortfolioImages[11].style.transition = "all 1s ease 0.6s";
    } else {
      // tenth image
      responsivePortfolioImages[9].style.transform = "rotateY(0deg) scale(0)";
      responsivePortfolioImages[9].style.opacity = "0";
      responsivePortfolioImages[9].style.transition = "all 1s ease 0.5s";

      // eleventh image
      responsivePortfolioImages[10].style.transform = "rotateY(0deg) scale(0)";
      responsivePortfolioImages[10].style.opacity = "0";
      responsivePortfolioImages[10].style.transition = "all 1s ease 0.4s";

      // twelvth image
      responsivePortfolioImages[11].style.transform = "rotateY(0deg) scale(0)";
      responsivePortfolioImages[11].style.opacity = "0";
      responsivePortfolioImages[11].style.transition = "all 1s ease 0.3s";
    }
  });
};

/** Contact me section  */

let contactImg = document.querySelector(".contactmesection img");
let contactText = document.querySelector(".contacttext h2");
let contactBtn = document.querySelector(".contactbtn a button");

const contactSectionAnimeFun = () => {
  // contact image
  contactImg.style.transform = "translate(0%, 0%)scale(0)";
  contactImg.style.opacity = "0";

  // contact text
  contactText.style.transform = "translateY(-500px)";
  contactText.style.opacity = "0";

  // contact btn
  contactBtn.style.transform = "translateY(500px)";
  contactBtn.style.opacity = "0";

  window.addEventListener("scroll", () => {
    if ($(window).scrollTop() > 3000) {
      // // contact image
      contactImg.style.transform = "translate(-50%, -50%) scale(1)";
      contactImg.style.opacity = "1";
      contactImg.style.transition = "all 0.8s ease 0.4s";

      // contact text
      contactText.style.transform = "translateY(0px)";
      contactText.style.opacity = "1";
      contactText.style.transition = "all 0.8s ease 0.5s";

      // contact btn
      contactBtn.style.transform = "translateY(0px)";
      contactBtn.style.opacity = "1";
      contactBtn.style.transition = "all 0.8s ease 0.6s";
    } else if ($(window).scrollTop() < 2900) {
      // // contact image
      contactImg.style.transform = "translate(0%, 0%)scale(0)";
      contactImg.style.opacity = "0";
      contactImg.style.transition = "all 0.5s ease";

      // contact text
      contactText.style.transform = "translateY(-500px)";
      contactText.style.opacity = "0";
      contactText.style.transition = "all 0.8s ease";

      // contact btn
      contactBtn.style.transform = "translateY(500px)";
      contactBtn.style.opacity = "0";
      contactBtn.style.transition = "all 0.8s ease";
    }
  });
};

/** responsive Contact me section  */

let responsiveContactImg = document.querySelector(
  ".responsivecontactmesection img"
);
let responsiveContactText = document.querySelector(".rcontacttext h2");
let responsiveContactBtn = document.querySelector(".rcontactbtn a button");

const responsiveContactSectionAnimeFun = () => {
  // contact image
  responsiveContactImg.style.transform = "translate(0%, 0%)scale(0)";
  responsiveContactImg.style.opacity = "0";

  // contact text
  responsiveContactText.style.transform = "translateY(-500px)";
  responsiveContactText.style.opacity = "0";

  // contact btn
  responsiveContactBtn.style.transform = "translateY(500px)";
  responsiveContactBtn.style.opacity = "0";

  window.addEventListener("scroll", () => {
    if ($(window).scrollTop() > 1900) {
      // // contact image
      responsiveContactImg.style.transform = "translate(-50%, -50%) scale(1)";
      responsiveContactImg.style.opacity = "1";
      responsiveContactImg.style.transition = "all 0.8s ease 0.4s";

      // contact text
      responsiveContactText.style.transform = "translateY(0px)";
      responsiveContactText.style.opacity = "1";
      responsiveContactText.style.transition = "all 0.8s ease 0.5s";

      // contact btn
      responsiveContactBtn.style.transform = "translateY(0px)";
      responsiveContactBtn.style.opacity = "1";
      responsiveContactBtn.style.transition = "all 0.8s ease 0.6s";
    } else if ($(window).scrollTop() < 1900) {
      // // contact image
      responsiveContactImg.style.transform = "translate(0%, 0%)scale(0)";
      responsiveContactImg.style.opacity = "0";
      responsiveContactImg.style.transition = "all 0.5s ease";

      // contact text
      responsiveContactText.style.transform = "translateY(-500px)";
      responsiveContactText.style.opacity = "0";
      responsiveContactText.style.transition = "all 0.8s ease";

      // contact btn
      responsiveContactBtn.style.transform = "translateY(500px)";
      responsiveContactBtn.style.opacity = "0";
      responsiveContactBtn.style.transition = "all 0.8s ease";
    }
  });
};

/** window loading animation function */
$(window).on("load", () => {
  setTimeout(() => {
    mobileMenu();
    headerSectionAnimeFun();
    menuAnimeFun();
    bannerTextAnimeFun();
    bannerImageFun();
    bannerSecondTextAnimeFun();
    portfolioImgAnime();
    responsivePortfolioImgAnime();
    contactSectionAnimeFun();
    responsiveContactSectionAnimeFun();
  });
});

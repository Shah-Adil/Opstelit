// load

const load = document.querySelector(".preloader");

window.addEventListener("load", () => {
  load.style.display = "none";
});

// img popup

$(document).ready(function () {
  // required elements
  var imgPopup = $(".img-popup");
  var imgCont = $(".home-work-box");
  var popupImage = $(".img-popup img");
  var closeBtn = $(".close-btn");

  // handle events
  imgCont.on("click", function () {
    var img_src = $(imgCont).children("img").attr("src");
    imgPopup.children("img").attr("src", img_src);
    imgPopup.addClass("opened");
  });

  $(imgPopup, closeBtn).on("click", function () {
    imgPopup.removeClass("opened");
    imgPopup.children("img").attr("src", "");
  });

  popupImage.on("click", function (e) {
    e.stopPropagation();
  });
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("header-active", scrollY > 0);
});

let list = document.querySelectorAll(".work-list");
let listContent = document.querySelectorAll(".home-work-box");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("date-menu");

    for (let k = 0; k < listContent.length; k++) {
      listContent[k].classList.remove("active");
      listContent[k].classList.add("hide");

      if (
        listContent[k].getAttribute("date-item") == dataFilter ||
        dataFilter == "all"
      ) {
        listContent[k].classList.remove("hide");
        listContent[k].classList.add("active");
      }
    }
  });
}

// nav

const navBtn = header.querySelector("#menu-btn");
const navContent = header.querySelector(".nav");

navBtn.addEventListener("click", () => {
  navContent.classList.toggle("active");
  navBtn.classList.toggle("bx-x");
});

// video open

const videobtn = document.querySelector(".top-banner-video video");
const popupVideo = document.querySelector(".popup-video video");

const videoConent = document.querySelector(".popup-video");
const videoClose = document.querySelector(".popup-video span");

videobtn.addEventListener("click", () => {
  videoConent.classList.add("active");
  popupVideo.src = videobtn.getAttribute("src");
});

videoClose.addEventListener("click", () => {
  videoConent.classList.remove("active");
});

videoConent.addEventListener("click", () => {
  videoConent.classList.remove("active");
});

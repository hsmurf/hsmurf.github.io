const changeBg = document.querySelector(".change-bg");
const img = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
];
function selectImg() {
  const todaysImg = img[Math.floor(Math.random() * img.length)];
  const bgImg = document.createElement("img");
  bgImg.classList.add("bg-image");
  bgImg.src = `img/${todaysImg}`;
  bgImg.style.width = "100vw";
  bgImg.style.height = "100vh";
  bgImg.style.position = "absolute";
  bgImg.style.top = 0;
  bgImg.style.left = 0;
  bgImg.style.zIndex = -1;
  return bgImg;
}

function bgInsert() {
  const bgImg = selectImg();
  const bgTag = document.querySelector(".bg-image");
  if (bgTag) {
    bgTag.parentNode.replaceChild(bgImg, bgTag);
  } else document.body.appendChild(bgImg);
}

if (savedUserName) {
  const bgImg = selectImg();
  document.body.appendChild(bgImg);
}

loginForm.addEventListener("submit", bgInsert);
changeBg.addEventListener("click", bgInsert);

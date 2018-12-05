const header = document.querySelector(".header h1");
header.addEventListener("mouseover", event => {
  TweenMax.to(header, 1, { rotation: 360 });
});

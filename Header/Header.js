
//Animation for Header
let header = document.getElementsByClassName("header");
    TweenLite.from(header, 1, {
    scale:0,
    backgroundColor:"white",
    opacity:0,
    ease:Back.easeOut,
    // onComplete:staggerArticles
});


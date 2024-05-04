
const tile = document.querySelector(".tile");


/*-------*/
tile.addEventListener("mouseenter", function () {
  tile.classList.toggle("is-flipped");
});

tile.addEventListener("mouseleave", function () {
  tile.classList.toggle("is-flipped");
});

AOS.init({
  disable: function() {
    var minWidth = 800;
    return window.innerWidth < minWidth;
  }
});

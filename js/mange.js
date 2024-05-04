
window.addEventListener('scroll', function() {
  console.log( window.scrollY + 'px');
});

const m1= document.getElementById("m1");
const m2 = document.getElementById("m2");

function onWindowScroll(event) {
	if (window.scrollY < 2341 ) {
  	m1.style.backgroundColor="#f9ee7795";
    
    m1.style.border="solid #00a1f0";
      m2.style.backgroundColor="white";
      m2.style.border="none";
  
  }else if (window.scrollY > 2341  ){
  	m1.style.backgroundColor="white";
    m1.style.border="none";
    m2.style.backgroundColor="#f9ee7795";
    m2.style.border="solid #00a1f0";
}};

  window.addEventListener('scroll', onWindowScroll);



/*-------*/

const tile = document.querySelector(".tile");

tile.addEventListener("mouseenter", function () {
  tile.classList.toggle("is-flipped");
});

tile.addEventListener("mouseleave", function () {
  tile.classList.toggle("is-flipped");
});




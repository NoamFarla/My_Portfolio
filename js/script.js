// About me 

var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// Header

var sidemenu = document.getElementById("sidemenu");
var headerLinks = document.querySelectorAll("#sidemenu li a");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

headerLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      closemenu();
    });
  });
  
// Form

const form = document.querySelector("form");
const msg = document.getElementById("msg");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(data).toString(),
  })
    .then(() => {
      msg.innerHTML = "Message sent successfully!";
      form.reset();
    })
    .catch((error) => {
      msg.innerHTML = "An error occurred, please try again later.";
      console.error(error);
    });
});

// example 2

var controller = new ScrollMagic.Controller();

// loop through all elements
$('.fade-in').each(function() {
  
  var tween = new TimelineMax();
  var fromLeftFrom  = TweenMax.from($(this) , 1, {x: -500 , opacity: 0, ease:Linear.easeNone});
  var fromLeftTo    = TweenMax.to($(this)   , 1, {x: 0    , opacity: 1, ease:Linear.easeNone});
  
tween
    .add(fromLeftFrom)
    .add(fromLeftTo)

  var scene = new ScrollMagic.Scene({triggerElement: this, offset: '50%'})
  .setTween(tween) // trigger a TweenMax.to tween
  .addIndicators()
  .addTo(controller);
  
});

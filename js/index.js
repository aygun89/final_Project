let cardsOfClasses = document.querySelectorAll("#classes .card");

let myNav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop >= 100) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  }
};

let styleItems = document.querySelectorAll(".style-item");
styleItems.forEach((item) => {
  item.addEventListener("mouseover", function () {
    item.style.opacity = "0.8";
  });
  item.addEventListener("mouseout", function () {
    item.style.opacity = "1";
  });
});

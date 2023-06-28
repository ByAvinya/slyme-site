const displayname = document.getElementById("displayname");

const names = [
  "William",
  "Noah",
  "Prateek",
  "Rahul",
  "Ayana",
  "Shrishti",
  "Emma",
  "Hugh",
  "Kate",
  "Ranbir",
  "Varun",
  "Ariana",
  "Pam",
];

let count = 0;
setInterval(() => {
  displayname.textContent = names[count].toLowerCase();
  count++;
  if (count === names.length) {
    count = 0;
  }
}, 3000);

document.getElementById("join-button").onclick = function () {
  window.scrollBy(0, 0.9 * window.innerHeight);
};

// $(".features-container > div").slick({
//   slidesToShow: 1,
//   infinite: true,
//   slidesToScrol: 1,
//   // arrows: true,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   pauseOnFocus: false,
//   pauseOnHover: false,
//   swipeToSlide: true,
// });

// $("#services-icon-container").slick({
//   // infinite: true,
//   // autoplay: true,
//   // autoplaySpeed: 1000,
// });

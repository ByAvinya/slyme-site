const menuButton = document.getElementById("menu-btn");
const mobileNavContaner = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
  if (mobileNavContaner.style.display === "block") {
    mobileNavContaner.style.display = "none";
  } else {
    mobileNavContaner.style.display = "block";
  }
});

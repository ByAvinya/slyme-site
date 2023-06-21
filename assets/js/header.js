const menuButton = document.getElementById("menu-btn");
const mobileNavContaner = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
  if (mobileNavContaner.style.display === "block") {
    mobileNavContaner.style.display = "none";
  } else {
    mobileNavContaner.style.display = "block";
  }
});

const getpValue = ()=>{
  const displayNameInput = document.getElementById("display-name-input");
  const userName = displayNameInput.innerText;
  if(userName==='') return ;
  window.open(`https://login.slyme.club/login?username=${userName}`)
}

const getInputValue = ()=>{
  const displayNameInput = document.getElementById("display-name-input-mobile");
  const userName = displayNameInput.value;
  if(userName==='') return ;
  window.open(`https://login.slyme.club/login?username=${userName}`)
}
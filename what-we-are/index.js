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

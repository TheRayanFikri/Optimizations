const popularCategorie = document.querySelector("#popularCategorie");
const friendsCategorie = document.querySelector("#friendsCategorie");
const recentCategorie = document.querySelector("#recentCategorie");

popularCategorie.addEventListener("click", (event) => {
  event.preventDefault();
  popularCategorie.style.color = "#55a367";
  friendsCategorie.style.color = "grey";
  recentCategorie.style.color = "grey";
});
friendsCategorie.addEventListener("click", (event) => {
  event.preventDefault();
  friendsCategorie.style.color = "#55a367";
  popularCategorie.style.color = "grey";
  recentCategorie.style.color = "grey";
});
recentCategorie.addEventListener("click", (event) => {
  event.preventDefault();
  recentCategorie.style.color = "#55a367";
  friendsCategorie.style.color = "grey";
  popularCategorie.style.color = "grey";
});

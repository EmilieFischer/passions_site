document.querySelector("#kontakt-knap").addEventListener("click", openForm);
function openForm() {
  console.log(this);
  document.querySelector("#kontaktform").style.display = "block";
}

document.querySelector("#luk-knap").addEventListener("click", lukPopup);

function lukPopup() {
  document.querySelector("#kontaktform").style.display = "none";
}

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
  console.log("toggleMenu");

  document.querySelector("#menu").classList.toggle("hidden");
}

//Her laves kontakt formularen

//Når man klikker på kontakt-knap åbner kontaktform (formularen) i et popup på siden
document.querySelector("#kontakt-knap").addEventListener("click", openForm);
function openForm() {
  console.log(this);
  document.querySelector("#kontaktform").style.display = "block";
}

//Når man klikker på send skjuler form (formularen) sig og tak-teksten kommer frem
document.querySelector("#send").addEventListener("click", takForm);
function takForm() {
  document.querySelector("#tak").style.display = "block";
  document.querySelector("#form").style.display = "none";
}

//Ved klik på luk-knap skjuler kontaktform sig fra siden
document.querySelector("#luk-knap").addEventListener("click", lukPopup);
function lukPopup() {
  document.querySelector("#kontaktform").style.display = "none";
}

//Her laves burgermenuen

// lytter efter når siden er loaded
window.addEventListener("load", sidenVises);

// når siden er loaded viser den menuknappen og gør den klikbar
function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}
// når man klikker på menuknap lytter den efter funktionen toggle
function toggleMenu() {
  console.log("toggleMenu");

  // toggle = når toggle er aktiv og der trykkes på menuknappen bliver .hidden aktiveret på #menu og den "forsvinder",
  // og hvis .hidden er på #menu når der trykkes på menuknappen bliver den vist igen da .hidden fjernes
  document.querySelector("#menu").classList.toggle("hidden");
  let erSkjult = document.querySelector("#menu").classList.contains("hidden");

  // hvis det er sandt at .hidden er aktiv vises "☰" og hvis .hidden ikke er aktiv og menuen bliver set vises "x".
  if (erSkjult == true) {
    document.querySelector("#menuknap").textContent = "☰";
  } else {
    document.querySelector("#menuknap").textContent = "x";
  }
}

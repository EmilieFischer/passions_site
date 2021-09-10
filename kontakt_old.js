const openKontaktButtons = document.querySelectorAll("[data-open-kontakt]");
const closeKontaktButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openKontaktButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const contactForm = document.querySelector(button.dataset.openKontakt);
    openContactForm(contactForm);
  });
});

overlay.addEventListener("click", () => {
  const contactForm = document.querySelectorAll(".contactForm.active");
  contactForm.forEach((contactForm) => closeKontaktButtons(contactForm));
});

closeKontaktButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const contactForm = button.closest(".contactForm");
    closeContactForm(contactForm);
  });
});

function openContactForm(contactForm) {
  if (contactForm == null) return;
  contactForm.classlist.add(".active");
  overlay.classlist.add(".active");
}

function closeContactForm(contactForm) {
  if (contactForm == null) return;
  contactForm.classlist.remove(".active");
  overlay.classlist.remove(".active");
}

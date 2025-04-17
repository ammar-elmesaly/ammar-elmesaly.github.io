let contactMePane = document.querySelector("#contact-me-pane");

document.querySelector(".contact-btn").addEventListener("click", function() {
    contactMePane.classList.remove("contact-me-inactive");
});

document.querySelector("#close-contact-me").addEventListener("click", function () {
    contactMePane.classList.add("contact-me-inactive");
});
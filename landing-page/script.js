//svako sign up dugme, tj get started dugme povezujemo sa register-login-page
const signUpButtons = document.querySelectorAll(".sign-up-bttn");

signUpButtons.forEach((button) => {
    button.addEventListener("click", () => {
        window.location.href = "/register-login-page/index.html";
    });
});

//learn more dugme povezujemo sa about sekcijom
const learnMoreButton = document.querySelector(".learn-more-bttn");

learnMoreButton.addEventListener('click', () => {
    document.querySelector("#about").scrollIntoView({
        behavior: "smooth"
    });
});
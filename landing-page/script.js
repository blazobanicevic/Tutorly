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

//strelice za faq strelicu
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon i");

    question.addEventListener("click", () => {
        const isOpen = answer.style.display === "block";

        answer.style.display = isOpen ? "none" : "block";

        icon.classList.toggle("fa-chevron-down", isOpen);
        icon.classList.toggle("fa-chevron-up", !isOpen);
    });
});
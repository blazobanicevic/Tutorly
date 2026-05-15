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

//language switch
const languageButton = document.querySelector(".current-language");
const languageText = document.querySelector("#language-text");
const languageFlag = document.querySelector(".current-language img");

let currentLanguage = "en";

const translations = {

    en: {

        navHome: "Home",
        navAbout: "About",
        navFeatures: "Features",
        navFaq: "FAQ",

        heroMessage: "Learn. Teach. Grow.",
        heroDescription1: "Tutorly is a platform where you can teach and absorb all the knowledge with your peers.",
        heroDescription2: "Connect with students and tutors worldwide through one modern learning platform.",

        learnMore: "LEARN MORE",
        getStarted: "GET STARTED",

        aboutLabel: "ABOUT",
        aboutTitle: "What is Tutorly?",

        aboutDescription1: "Tutorly connects students and tutors from around the world.",
        aboutDescription2: "Whether you want to learn a new skill or share your knowledge,",
        aboutDescription3: "Tutorly makes it simple, effective and meaningful!",

        aboutCard1Title: "Find tutors",
        aboutCard1Text: "Search and connect with tutors who match your needs and goals.",

        aboutCard2Title: "Schedule sessions",
        aboutCard2Text: "Book sessions at times that work for you with just a few clicks.",

        aboutCard3Title: "Learn together",
        aboutCard3Text: "Join live sessions, ask questions and grow together.",

        aboutFooterTitle: "Ready to start your learning journey?",

        featuresLabel: "Features",

        featuresTitleMain: "Everything you need",
        featuresTitleSecond: "to",
        featuresTitleSpecial: "succeed",

        featuresDescription1: "Tutorly gives you the tools to learn, teach and grow",
        featuresDescription2: "in a supportive community.",

        featureCard1Title: "Find the perfect tutor",
        featureCard1Text: "Discover tutors that match your goals, learning style and interests in just a few clicks.",

        featureCard2Title: "Flexible scheduling",
        featureCard2Text: "Book lessons whenever it fits your schedule and learn at your own pace.",

        featureCard3Title: "Live communication",
        featureCard3Text: "Chat, ask questions and interact with tutors in real time during every session.",

        featureCard4Title: "Learn anything",
        featureCard4Text: "From math to marketing, languages to programming. Explore a wide range of topics.",

        featureCard5Title: "Community Forum",
        featureCard5Text: "Join discussions, ask questions and connect with students and tutors worldwide.",

        featureCard6Title: "Tutor Leaderboard",
        featureCard6Text: "Climb the rankings, earn recognition and become one of Tutorly’s top tutors.",

        featuresFooterTitle: "Ready to unlock your potential?",
        featuresFooterText: "Join Tutorly today and start learning with confidence.",

        faqLabel: "FAQ",

        faqTitleMain: "Frequently asked",
        faqTitleSpecial: "questions",

        faqDescription1: "Everything you need to know about Tutorly.",
        faqDescription2: "Can't find the answer you are looking for?",
        faqDescriptionSpecial: " Join us and find out!",

        faqQuestion1: "What is Tutorly?",
        faqAnswer1: "Tutorly is a peer-to-peer platform that connects students and tutors through interactive online sessions.",

        faqQuestion2: "Is Tutorly free to use?",
        faqAnswer2: "Tutorly offers free access to the platform with additional premium features.",

        faqQuestion3: "Can I become a tutor on Tutorly?",
        faqAnswer3: "Yes! Anyone can apply to become a tutor and start helping students worldwide.",

        faqQuestion4: "Can I schedule lessons anytime?",
        faqAnswer4: "Absolutely. Tutorly allows flexible scheduling so you can learn whenever it suits you.",

        faqQuestion5: "Does Tutorly support community discussions?",
        faqAnswer5: "Yes, Tutorly includes community features where students and tutors can share ideas and ask questions.",

        footerSlogan: "Learn. Teach. Grow.",

        footerText1: "Tutorly helps students and tutors connect in one modern learning platform.",
        footerText2: "Learn new skills, share knowledge and grow together through interactive sessions.",
        footerText3: "Built for anyone who wants to learn smarter, teach easier and improve every day.",

        copyright: "Copyright © 2026 Tutorly. Empowering students and tutors worldwide."
    },

    mne: {

        navHome: "Početna",
        navAbout: "O nama",
        navFeatures: "Mogućnosti",
        navFaq: "FAQ",

        heroMessage: "Uči. Predaj. Napreduj.",
        heroDescription1: "Tutorly je platforma gdje možeš dijeliti i usvajati znanje sa svojim vršnjacima.",
        heroDescription2: "Poveži se sa studentima i tutorima širom svijeta kroz jednu modernu platformu za učenje.",

        learnMore: "SAZNAJ VIŠE",
        getStarted: "ZAPOČNI",

        aboutLabel: "O NAMA",
        aboutTitle: "Šta je Tutorly?",

        aboutDescription1: "Tutorly povezuje studente i tutore iz cijelog svijeta.",
        aboutDescription2: "Bilo da želiš naučiti novu vještinu ili podijeliti svoje znanje,",
        aboutDescription3: "Tutorly čini učenje jednostavnim, efikasnim i smislenim!",

        aboutCard1Title: "Pronađi tutore",
        aboutCard1Text: "Pretraži i poveži se sa tutorima koji odgovaraju tvojim potrebama i ciljevima.",

        aboutCard2Title: "Zakaži sesije",
        aboutCard2Text: "Zakaži sesije u terminima koji ti odgovaraju u samo nekoliko klikova.",

        aboutCard3Title: "Učite zajedno",
        aboutCard3Text: "Pridruži se sesijama uživo, postavljaj pitanja i napreduj zajedno.",

        aboutFooterTitle: "Spreman da započneš svoje učenje?",

        featuresLabel: "Mogućnosti",

        featuresTitleMain: "Sve što ti treba",
        featuresTitleSecond: "da",
        featuresTitleSpecial: "uspiješ",

        featuresDescription1: "Tutorly ti daje alate da učiš, predaješ i napreduješ",
        featuresDescription2: "u podržavajućoj zajednici.",

        featureCard1Title: "Pronađi idealnog tutora",
        featureCard1Text: "Otkrij tutore koji odgovaraju tvojim ciljevima, stilu učenja i interesovanjima.",

        featureCard2Title: "Fleksibilno zakazivanje",
        featureCard2Text: "Zakaži časove kada ti odgovara i uči svojim tempom.",

        featureCard3Title: "Komunikacija uživo",
        featureCard3Text: "Dopisuj se, postavljaj pitanja i komuniciraj sa tutorima u realnom vremenu.",

        featureCard4Title: "Uči bilo šta",
        featureCard4Text: "Od matematike do marketinga, jezika i programiranja. Istraži širok izbor tema.",

        featureCard5Title: "Forum zajednice",
        featureCard5Text: "Učestvuj u diskusijama, postavljaj pitanja i poveži se sa studentima i tutorima.",

        featureCard6Title: "Rang lista tutora",
        featureCard6Text: "Penji se na rang listi, stekni priznanje i postani jedan od najboljih Tutorly tutora.",

        featuresFooterTitle: "Spreman da otključaš svoj potencijal?",
        featuresFooterText: "Pridruži se Tutorly-ju danas i počni da učiš sa samopouzdanjem.",

        faqLabel: "FAQ",

        faqTitleMain: "Često postavljana",
        faqTitleSpecial: "pitanja",

        faqDescription1: "Sve što treba da znaš o Tutorly-ju.",
        faqDescription2: "Ne možeš pronaći odgovor koji tražiš?",
        faqDescriptionSpecial: " Pridruži nam se i saznaj!",

        faqQuestion1: "Šta je Tutorly?",
        faqAnswer1: "Tutorly je peer-to-peer platforma koja povezuje studente i tutore kroz interaktivne online sesije.",

        faqQuestion2: "Da li je Tutorly besplatan?",
        faqAnswer2: "Tutorly nudi besplatan pristup platformi uz dodatne premium mogućnosti.",

        faqQuestion3: "Mogu li postati tutor na Tutorly-ju?",
        faqAnswer3: "Da! Svako se može prijaviti da postane tutor i pomogne studentima širom svijeta.",

        faqQuestion4: "Mogu li zakazivati časove kad god želim?",
        faqAnswer4: "Naravno. Tutorly omogućava fleksibilno zakazivanje kako bi učio kada tebi odgovara.",

        faqQuestion5: "Da li Tutorly podržava diskusije u zajednici?",
        faqAnswer5: "Da, Tutorly uključuje community funkcije gdje studenti i tutori mogu dijeliti ideje i postavljati pitanja.",

        footerSlogan: "Uči. Predaj. Napreduj.",

        footerText1: "Tutorly pomaže studentima i tutorima da se povežu na jednoj modernoj platformi.",
        footerText2: "Uči nove vještine, dijeli znanje i napreduj kroz interaktivne sesije.",
        footerText3: "Napravljen za sve koji žele učiti pametnije, predavati lakše i napredovati svakog dana.",

        copyright: "Copyright © 2026 Tutorly. Osnažujemo studente i tutore širom svijeta."
    }
};

function setText(id, value){
    const element = document.querySelector(id);
    if(element){
        element.textContent = value;
    }
}

function setLanguage(language){

    const t = translations[language];

    setText("#nav-home", t.navHome);
    setText("#nav-about", t.navAbout);
    setText("#nav-features", t.navFeatures);
    setText("#nav-faq", t.navFaq);

    setText("#footer-nav-home", t.navHome);
    setText("#footer-nav-about", t.navAbout);
    setText("#footer-nav-features", t.navFeatures);
    setText("#footer-nav-faq", t.navFaq);

    setText("#hero-message", t.heroMessage);
    setText("#hero-description-1", t.heroDescription1);
    setText("#hero-description-2", t.heroDescription2);
    setText("#learn-more-btn", t.learnMore);

    document.querySelectorAll(".sign-up-bttn").forEach((button) => {
        button.textContent = t.getStarted;
    });

    setText("#about-label", t.aboutLabel);
    setText("#about-title", t.aboutTitle);
    setText("#about-description-1", t.aboutDescription1);
    setText("#about-description-2", t.aboutDescription2);
    setText("#about-description-3", t.aboutDescription3);

    setText("#about-card-1-title", t.aboutCard1Title);
    setText("#about-card-1-text", t.aboutCard1Text);
    setText("#about-card-2-title", t.aboutCard2Title);
    setText("#about-card-2-text", t.aboutCard2Text);
    setText("#about-card-3-title", t.aboutCard3Title);
    setText("#about-card-3-text", t.aboutCard3Text);
    setText("#about-footer-title", t.aboutFooterTitle);

    setText("#features-label", t.featuresLabel);

    document.querySelector("#features-title-main").childNodes[0].textContent = t.featuresTitleMain + " ";
    document.querySelector("#special").childNodes[0].textContent = t.featuresTitleSecond + " ";
    setText("#features-title-special", t.featuresTitleSpecial);

    setText("#features-description-1", t.featuresDescription1);
    setText("#features-description-2", t.featuresDescription2);

    for(let i = 1; i <= 6; i++){
        setText(`#feature-card-${i}-title`, t[`featureCard${i}Title`]);
        setText(`#feature-card-${i}-text`, t[`featureCard${i}Text`]);
    }

    setText("#features-footer-title", t.featuresFooterTitle);
    setText("#features-footer-text", t.featuresFooterText);

    setText("#faq-label", t.faqLabel);

    document.querySelector("#faq-title").childNodes[0].textContent = t.faqTitleMain + " ";
    setText("#faq-title-special", t.faqTitleSpecial);

    setText("#faq-description-1", t.faqDescription1);
    document.querySelector("#faq-description-2").childNodes[0].textContent = t.faqDescription2;
    setText("#faq-description-special", t.faqDescriptionSpecial);

    for(let i = 1; i <= 5; i++){
        setText(`#faq-question-${i}`, t[`faqQuestion${i}`]);
        setText(`#faq-answer-${i}`, t[`faqAnswer${i}`]);
    }

    setText("#footer-slogan", t.footerSlogan);
    setText("#footer-text-1", t.footerText1);
    setText("#footer-text-2", t.footerText2);
    setText("#footer-text-3", t.footerText3);
    setText("#copyright-text", t.copyright);

    if(language === "en"){
        languageText.textContent = "ENG";
        languageFlag.src = "images/uk.svg";
    } else {
        languageText.textContent = "MNE";
        languageFlag.src = "images/mne.svg";
    }
}

languageButton.addEventListener("click", () => {

    currentLanguage = currentLanguage === "en" ? "mne" : "en";

    setLanguage(currentLanguage);

});


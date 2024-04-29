
//when content will load first time or refresh
document.addEventListener("DOMContentLoaded", function () {
    const language = localStorage.getItem("language");
    const categoryValue = localStorage.getItem("category");
    // It will set the current language to the select language option
    const languageSelect = document.querySelector(".language-select");

    for (let i = 0; i < languageSelect.options.length; i++) {
        if (languageSelect.options[i].value === language) {
            languageSelect.selectedIndex = i;
            break;
        }
    }
    // It will set the current seleted category to the select category option
    
    const categorySelect = document.querySelector(".categorySelect");
    for (let i = 0; i < categorySelect.options.length; i++) {
        if (categorySelect.options[i].value === categoryValue) {
            categorySelect.selectedIndex = i;
            break;
        }
    }

    languageChangeFunction(language);
    categoryChange(categoryValue);
});


function languageChangeFunction(value) {

    localStorage.setItem("language", value.trim());
    const language = localStorage.getItem("language");
    const heading = language == "english" ? "News Blogs" : "समाचार ब्लॉग";
    const subHeading = language == "english" ? "World Wide News" : "वर्ल्ड वाइड न्यूज़";
    const headingText = language == "english" ? "All news" : "सभी समाचार";
    const subscribeText = language=="english"?"Search-box" :"खोज बॉक्स";
    const subscribeButton = language == "english" ? "Search" : "ढूंढ";
    const selectCategory = language == "english" ? "Select category" : "श्रेणी चुनें";
    const selectLanguage = language == "english" ? "Select language" : "भाषा चुने";


    document.querySelector('.capitalText1').innerText = heading;
    document.querySelector('.capitalText2').innerText = subHeading;
    document.querySelector('.HeadingText').innerText = headingText;
    document.querySelector('.subscribe-text').innerText = subscribeText;
    document.querySelector('.subscribe-button').value = subscribeButton;
    document.querySelector('.selectCategoryText').textContent = selectCategory;
    document.querySelector('.selectLanguageText').textContent = selectLanguage;

    if (language == "hindi") {
        hindiNewsData();
    } else {
        englishNewsdata();
    }
}

function categoryChange(value) {
    localStorage.setItem("category", value.trim());
    const content = document.querySelector(".Content");
    content.innerHTML = "<div class='loading-message'>Loading...</div>";


    if (localStorage.getItem("language") === "hindi") {
        hindiNewsData();
    } else {
        englishNewsdata();
    }

}


document.addEventListener("DOMContentLoaded", function() {
    const language = localStorage.getItem("language");
    const heading =  language=="english"?"News Blogs":"समाचार ब्लॉग";
    const subHeading = language=="english"?"World Wide News" :"वर्ल्ड वाइड न्यूज़";
    const headingText = language=="english"?"All news" :"सभी समाचार";
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

});
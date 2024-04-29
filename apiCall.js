const api_key = "10dce5db23cb4feab5c46f96a00a1f19";
const api_url_english = "https://newsapi.org/v2/everything?q=tesla&from=2024-03-29&sortBy=publishedAt&apiKey=651cd162b0c64cc38b495453d6a5d261";
const api_url_hindi = "https://newsapi.org/v2/everything?q=tesla&from=2024-03-29&sortBy=publishedAt&apiKey=651cd162b0c64cc38b495453d6a5d261";


const englishNewsdata = () => {
    fetch(api_url_english)
        .then((res) => {
            if (!res.ok) {
                throw new Error('API request failed');
            }
            return res.json();
        })
        .then((data) => {
            xyz = data.articles;
            renderData(xyz);

        })
        .catch((error) => {
            console.error("API fetching unsuccessful:", error);
            const content = document.querySelector(".Content");
            content.innerHTML = "<div class='error-message'>Error fetching data. Please try again later.</div>";
        });
}

const hindiNewsData = () => {
    fetch(api_url_hindi)
        .then((res) => {
            if (!res.ok) {
                throw new Error('API request failed');
            }
            return res.json();
        })
        .then((data) => {
            xyz = data.articles;
            renderData(xyz);

        })
        .catch((error) => {
            console.error("API fetching unsuccessful:", error);
            const content = document.querySelector(".Content");
            content.innerHTML = "<div class='error-message'>Error fetching data. Please try again later.</div>";
        });
}

function renderData(data) {
   let count =0;
    const content = document.querySelector(".Content");
    content.innerHTML = "";

    data.forEach((item, index) => {
        const categoryValue = localStorage.getItem("category")
        if ((item.urlToImage != null && (categoryValue.includes(item.source.name)) || categoryValue == "")) {
            count++;
            const contentMaterial = document.createElement('div');
            contentMaterial.classList.add('content-material');

            const poster = document.createElement('div');
            poster.style.height="11rem";
            poster.style.width="11rem";
            poster.classList.add('poster');

            const posterImage = document.createElement('img');
            posterImage.src = item.urlToImage;
            posterImage.alt = "News poster";
            poster.appendChild(posterImage);

            const separator = document.createElement('div');
            separator.classList.add('separator');
            separator.style.margin = '10px';

            const title = document.createElement('div');
            title.classList.add('title');
            title.textContent = item.title;

            const details = document.createElement('div');
            details.classList.add('details');
            details.textContent = 'published on : ' + new Date(item.publishedAt).toLocaleDateString('en-IN');


            const description = document.createElement('div');
            description.classList.add('description');
            description.textContent = item.content;

            const continueReadingButton = document.createElement('button');
            continueReadingButton.classList.add('continue-reading-button');
            continueReadingButton.textContent = 'Continue Reading';
            continueReadingButton.onclick = () => { window.open(item.url, '_blank'); };

            separator.appendChild(title);
            separator.appendChild(document.createElement('br'));
            separator.appendChild(details);
            separator.appendChild(document.createElement('br'));
            separator.appendChild(description);
            separator.appendChild(continueReadingButton);

            contentMaterial.appendChild(poster);
            contentMaterial.appendChild(separator);

            content.appendChild(contentMaterial);
        }
       
        if (count == 0) {
            const content = document.querySelector(".Content");
            content.innerHTML = "<div class='loading-message'>Sorry no data found</div>";
            count = 0;
        }

      
    });
}

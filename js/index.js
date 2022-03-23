// Get the references to the active parts of your html
const container = document.querySelector('.container');
const tag = document.querySelector('.tagline h1');
const img = document.querySelector('.header')
const links = document.querySelectorAll('nav a');
let url = './partials/home.html';

// Create the function that will contain fetch function. This function will need to have a parameter for url.

const loadContent = (e) => {

    e.preventDefault();
    let t = e.target.textContent;

    if (t === "Portfolio") {

        let url = './partials/portfolio.html';
        let tagline = "My most recent portfilio projects.";

        //RUN THE fetch(urlFeed).then().then().catch()
        fetch(url).then(function(response) {

                //Turn the response into text and pass to the data parameter
                return response.text();

            }).then(function(data) {

                container.innerHTML = data;
                tag.innerHTML = tagline;
                document.getElementById('bg-img').style.backgroundImage = "url('./img/back-img.jpg')";

            })
            // Error if anything is wrong in the process
            .catch(function(error) {
                console.log(error.message);
            });

    } else if (t === "Home") {
        let tagline = "My Hot Topics for education.";


        //Load by Defaul Home Page
        fetch(url).then(function(response) {
                return response.text();

            }).then(function(data) {

                container.innerHTML = data;
                tag.innerHTML = tagline;
                document.getElementById('bg-img').style.backgroundImage = "url('./img/back-img.jpg')";

            })
            // Error if anything is wrong in the process
            .catch(function(error) {
                console.log(error.message);
            });
    }
}

// Create the function that will select a partial
const selectContent = () => {

    let tagline = "My Hot Topics that I enjoy always.";


    //Load by Defaul Home Page
    fetch(url).then(function(response) {
            return response.text();

        }).then(function(data) {

            container.innerHTML = data;
            tag.innerHTML = tagline;
            document.getElementById('bg-img').style.backgroundImage = "url('./img/back-img.jpg')";

        })
        // Error if anything is wrong in the process
        .catch(function(error) {
            console.log(error.message);
        });
}

for (let link of links) {
    link.addEventListener("click", loadContent);
}

selectContent();
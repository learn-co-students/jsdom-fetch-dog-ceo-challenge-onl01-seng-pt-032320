console.log('%c HI', 'color: firebrick');

// Declare variables
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';


// Create functions
function fetchImages(url) {
    fetch(url)
    .then (resp => resp.json())
    .then (json => displayImages(json));
}

function fetchBreeds(url) {
    fetch(url)
    .then (resp => resp.json())
    .then (json => displayBreeds(json));
}

function displayImages(images) {
    const imagesContainer = document.getElementById("dog-image-container");
    images["message"].forEach(image => {
        const img = document.createElement("IMG");
        img.src = image;
        imagesContainer.append(img);
    })
}

function displayBreeds(breeds) {
    const breedsContainer = document.getElementById("dog-breeds");
    for (let breed in breeds["message"]) {
        const newBreed = document.createElement("LI");
        if (breeds["message"][breed].length != 0){
            breeds["message"][breed].forEach(breedName => {
                if (breedName == "shepherd") {
                    newBreed.innerHTML = breed + " " + breedName;
                } else {
                    newBreed.innerHTML = breedName + " " + breed;
                }
            })
        } else {
            newBreed.innerHTML = breed;
        }
        breedsContainer.appendChild(newBreed);
    }

    // Event Listener
    document.querySelectorAll("#dog-breeds li").forEach(breed => { 
        breed.addEventListener("click", function() { 
            this.style.color = "blue"; 
        });
    });
}

function clearAllDisabled(elements) {
    elements.forEach(e => {
        e.hidden = false;
    })
}

function filter() {
    const dropdown = document.getElementById("breed-dropdown");
    const breedsStartsWith = dropdown.options[dropdown.selectedIndex].text;
    const list = document.getElementById("dog-breeds");
    const breedsList = document.querySelectorAll("#dog-breeds li");
    clearAllDisabled(breedsList);

    breedsList.forEach(breed => {
        const firstLetter = breed.innerText[0];
        if (firstLetter != breedsStartsWith) {
            breed.hidden = true;
        }
    });
}

// Event listener to load after page load

document.addEventListener("DOMContentLoaded", function() {
    fetchImages(imgUrl);
    fetchBreeds(breedUrl);
    document.getElementById("breed-dropdown").onchange = filter;
});

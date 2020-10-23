console.log('%c HI', 'color: firebrick')

const breedsList = []
let filteredBreedsList = []

document.addEventListener("DOMContentLoaded", function() { 
    //console.log("is this thing on")
    loadImages();
    fetchBreeds();
}); 

//dog images

function loadImages() {
    //fetching the images
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then((response) => response.json())
        .then((data) => {
            //console.log(data.message) //this gave us an array of 4 images

            //adding the images onto teh page
            data.message.forEach(dogString => {
                
                //an image tag for each image
                let dogImageContainer = document.querySelector("#dog-image-container")
                let newImgTag = document.createElement("img")
                //now the dom has to know it an image?
                newImgTag.src = dogString
                //append images
                dogImageContainer.appendChild(newImgTag)
            })
        })
};

//dog breeds 

    //fetch dog breeds
function fetchBreeds() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    fetch(breedUrl)
        .then((response) => response.json())
        .then((data) => {
            breeds = Object.keys(data.message)
            
            loadDogBreeds(breeds)
            filterDogBreeds(breeds)
            console.log(breeds)
        })};

    //add breeds to a ul
//const breedsList = [] --> moving this to the top of the page
function loadDogBreeds(breeds) {

    breeds.forEach(breed => {
        breedsList.push(breed)
        
        let dogBreedContainer = document.querySelector('#dog-breeds')
        let dogBreedLiTag = document.createElement("li")
        dogBreedContainer.appendChild(dogBreedLiTag)
        //append the dog breed text to li list
        dogBreedLiTag.innerHTML = breed
        dogBreedLiTag.addEventListener('click', changeColor);
    })};

    //clicking dog breed changes its color
function changeColor(clickEvent) {
    clickEvent.target.style.color='red'
};

    //filter breeds that start with a particular letter using a dropdown

function filterDogBreeds(breeds) {
    let breedDropdown = document.querySelector('#breed-dropdown')
    let dogUL = document.querySelector("#dog-breeds")

    breedDropdown.addEventListener('change', (event) => {

        let breedList = breeds.filter(breed => {
           
            let ul = document.querySelector('#dog-breeds');
            ul.innerHTML = ""

            return breed.startsWith(event.target.value)
        })
        
        breedList.forEach(breed => {
           
            let newli = document.createElement('li');
            newli.innerText = breed;
            dogUL.appendChild(newli);

            //console.log(breed)

        })
    })
}

  

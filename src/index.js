console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let images; 
let breeds;


function fetchImages() {
  return fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(function(response) {
  return response.json();
  }).then(function(json) {
    images = json.message;
    renderImages(images);
  })
};


function fetchBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response) {
    return response.json();
    }).then(function(json) {
      breeds = Object.keys(json.message);
      renderBreeds(breeds);
    })
  };



function renderImages(images) {
  const imageDiv = document.getElementById('dog-image-container')
  images.forEach(image => {
    let img = document.createElement('img');
    img.src = image;
    imageDiv.appendChild(img);
  })
}

function renderBreeds(breeds) {
    const breedUl = document.getElementById('dog-breeds')
    breeds.forEach(breed => {
      let listItem = document.createElement('li');
      listItem.addEventListener('click', function(e) { //e is the event. target is the item the event is listening on 
        listItem.style.color = "blue";
      })
      listItem.innerHTML = breed;
      breedUl.appendChild(listItem);
    })
  }



document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
    fetchBreeds();
    let breedDropdown = document.getElementById('breed-dropdown');
    breedDropdown.addEventListener('change', function(e) {
      let letter = e.target.value
      results = breeds.filter(breed => breed.startsWith(letter))
      const breedUl = document.getElementById('dog-breeds')
      breedUl.innerHTML = results 
    });
  })

  

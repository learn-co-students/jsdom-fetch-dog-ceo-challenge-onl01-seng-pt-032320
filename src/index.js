console.log('%c HI', 'color: firebrick')

const breedList = [];

function fetchImages() {
  fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(resp => resp.json())
  .then(json => renderImages(json.message));
}

function fetchBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(json => renderBreeds(json));
}

function renderImages(images) {
  const main = document.getElementById('dog-image-container')
  images.forEach(image => {
    let img = document.createElement('IMG')
    img.src = image
    main.appendChild(img)
  })
}

function renderBreeds(breeds) {
  const main = document.getElementById('dog-breeds')
  const breedKey = Object.keys(breeds.message)
  breedKey.forEach(breed => {
    breedList.push(breed);
    let li = document.createElement('li')
    li.innerText = breed
    main.appendChild(li)
  })
}

function filterBreeds(letter) {
    const main = document.getElementById('dog-breeds')
    const allBreeds = Array.from(document.getElementsByTagName('li'))
    allBreeds.forEach(name => { name.remove() })
    breedList.forEach(breed => {
        if (breed.startsWith(letter)) {
            let li = document.createElement('li')
            li.innerText = breed
            main.appendChild(li)
        }
    })

}

document.addEventListener('DOMContentLoaded', function() {
    const breeds = document.getElementById('dog-breeds')
    const letter = document.getElementById("breed-dropdown")

    letter.addEventListener("change", function(event) {
        filterBreeds(event.target.value);
    });

    breeds.addEventListener('click', function(event) {
        event.target.style.color = 'blue';
    });

    fetchImages()
    fetchBreeds()
})



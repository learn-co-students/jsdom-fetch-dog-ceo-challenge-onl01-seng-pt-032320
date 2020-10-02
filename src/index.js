console.log('%c HI', 'color: firebrick')
function fetchDogs() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => renderDogs(json.message))

  }

  function fetchBreed() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => renderBreed(Object.keys(json.message)))

  }

  
  function renderDogs(dogs) {
    console.log(dogs)
    const divTag = document.querySelector('div#dog-image-container')
    dogs.forEach(dog => {
      const image = document.createElement('img')
      image.src = dog
      divTag.appendChild(image)
    })
  }
const breedsList = []
  function renderBreed(breeds) {
    console.log(breeds)
    const ulTag = document.querySelector('ul#dog-breeds')
    breeds.forEach(breed => {
        debugger
    breedsList.push(breed)
    const newLi = document.createElement('li')
    newLi.innerHTML = breed
    ulTag.appendChild(newLi)
    newLi.addEventListener('click', function() {
    newLi.style.color = "red"
    })
    })
  }

//   document.addEventListener("DOMContentLoaded", (event) => {  
//       let dropdownSelection = document.getElementById("breed-dropdown");  
//       dropdownSelection.onchange = function () {    
//       let breedList = document.getElementById("dog-breeds");    
//       for (let breed of breedList.children) {
//       breed.removeAttribute("style");      
//       if (!breed.innerText.startsWith(dropdownSelection.value)) {        
//           breed.setAttribute("style", "display:none");      
//           }    
//         }  
//     };
// });

    let dropdownSelection = document.getElementById("breed-dropdown");  
    const liLists = document.querySelectorAll('li')
    dropdownSelection.onchange = function () {  
    liLists.forEach(liList => {
        if (!liList.innerText.startsWith(dropdownSelection.value)){
            liList.parentNode.removeChild(liList);
        }
    })
}


  document.addEventListener('DOMContentLoaded', function() {
    fetchDogs()
    fetchBreed()
  })
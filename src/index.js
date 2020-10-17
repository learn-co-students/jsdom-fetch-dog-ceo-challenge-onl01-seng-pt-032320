console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){

  let dogUL = document.querySelector("#dog-breeds")

  // Challenge 1
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
  .then(handleImageAppending)
  // Challenge 1

  // Challenge 2
  makeFetchHappen()
//   function makeFetchHappen(){
//     return fetch("https://dog.ceo/api/breeds/list/all")
//     .then(response => response.json())
//   }
  .then(response => {
    let dogBreedsArr = Object.keys(response.message)
    //Object  = class
    dogBreedsArr.forEach((breed) => addLI(breed))
    // dogBreedsArr.forEach(addLiToDOM)
    //all an arrow function 
//     function addLI(breed){
//         let dogUL = document.querySelector("#dog-breeds")
//         dogUL.innerHTML += `<li data-info="breed">${breed}!</li>`
//       }
//   })
// (breed) => addLI(breed) = callback function
  // Challenge 2


  // Challenge 3
  dogUL.addEventListener("click", function(event){
    if (event.target.dataset.info === "breed") {
      event.target.style.color = "red"
    }
  })
  //event.target = important , when you click it its the event that happens 
  //target = thing you clicked 
  // Challenge 3


  // Challenge 4
  let dogSelect = document.getElementById('breed-dropdown')
  dogSelect.addEventListener("change", (event) => {
    makeFetchHappen()
    .then(res => {
      let dogBreedsArr = Object.keys(res.message)

      let filteredArray = dogBreedsArr.filter(breed => {
        return breed.startsWith(event.target.value)
      })

      dogUL.innerHTML = ""

      filteredArray.forEach(addLI)


    })
  })
  // Challenge 4

  // DOMContentLoaded
})


function makeFetchHappen(){
  return fetch("https://dog.ceo/api/breeds/list/all")
  .then(response => response.json())
}

// CHALLENGE 1 STUFF
function handleImageAppending(jsonObject){
  let dogImageContainer = document.getElementById('dog-image-container')
  let arrOfDogURLs = jsonObject.message
  arrOfDogURLs.forEach(url => {
    dogImageContainer.innerHTML += makeImageTagString(url)
    // dogImageContainer.append(makeImageTagElement(url))
  })
}

function makeImageTagString(url){
  return `<img src="${url}"/>`
}

// function makeImageTagElement(url){
//   let imageTag = document.createElement("img")
//   imageTag.src = url
//   return imageTag
// }

// CHALLENGE 2 AND 4 STUFF
function addLI(breed){
  let dogUL = document.querySelector("#dog-breeds")
  dogUL.innerHTML += `<li data-info="breed">${breed}!</li>`
}













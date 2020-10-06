// document.addEventListener("DOMContentLoaded", grabDoggos);
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// function grabDoggos() {
//   fetch(imgUrl)
//   .then(resp => resp.json())
//   .then(json => renderDoggos(json));
// }
// function renderDoggos(dogs) {
//    const dogHouse = document.getElementById("dog-image-container");
//    dogs.message.forEach(dog => {
//      let x = document.createElement("img");
//      x.setAttribute("src", dog);
//      dogHouse.appendChild(x);
//    })
// }

document.addEventListener("DOMContentLoaded", grabBreeds);
document.addEventListener("DOMContentLoaded", setupDrop);
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function setupDrop() { document.getElementById("breed-dropdown").onchange = grabBreeds; }

function grabBreeds () {
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => renderBreeds(json));
}

function renderBreeds(breeds) {
  const breedDIV = document.getElementById("dog-breeds");
  breedDIV.innerHTML = "";
  const breedKeys = Object.keys(breeds.message);
  breedKeys.forEach(breed => {
   let x = document.createElement("li");
   x.innerHTML = breed;
   x.onclick = function(){x.style.color = 'red';}
   let letterCheck = breed.split('')[0];
   let dropDown = document.getElementById("breed-dropdown").value;
   if (letterCheck == dropDown) { breedDIV.appendChild(x);}
  })
}

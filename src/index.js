console.log("%c HI", "color: firebrick");

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetchDogs();
fetchBreeds();

document.addEventListener("DOMContentLoaded", (event) => {
  let dropdownSelection = document.getElementById("breed-dropdown");
  dropdownSelection.onchange = function () {
    let breedList = document.getElementById("dog-breeds");
    let dropdownSelection = document.getElementById("breed-dropdown");
    for (let breed of breedList.children) {
      breed.removeAttribute("style");
      if (!breed.innerText.startsWith(dropdownSelection.value)) {
        breed.setAttribute("style", "display:none");
      }
    }
  };
});

function fetchDogs() {
  return fetch(imgUrl)
    .then((resp) => resp.json())
    .then((json) => renderDogs(json.message));
}

function renderDogs(dogs) {
  const images = document.getElementById("dog-image-container");
  dogs.forEach((dog) => {
    const dogImg = document.createElement("img");
    dogImg.setAttribute("src", `${dog}`);
    dogImg.height = "200";
    dogImg.style.marginRight = "5px";
    images.appendChild(dogImg);
  });
}

function fetchBreeds() {
  return fetch(breedUrl)
    .then((resp) => resp.json())
    .then((json) => renderBreeds(json.message));
}

function renderBreeds(breeds) {
  let arr = Object.keys(breeds);
  let breedList = document.getElementById("dog-breeds");
  arr.forEach((breed) => {
    let li = document.createElement("li");
    li.innerHTML = breed.toString();
    li.onclick = function () {
      li.style.color === "red"
        ? li.removeAttribute("style")
        : li.setAttribute("style", "color:red");
    };
    breedList.appendChild(li);
  });
}

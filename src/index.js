console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(){
    fetchDogs();
    fetchBreeds();
    filterBreeds();
})

const fetchDogs = function(){
    const imgUrl = "http://dog.ceo/api/breeds/image/random/10";
    fetch(imgUrl)
    .then(response => response.json())
    .then(json => renderDogs(json))
}


const renderDogs = function(json){
    const div = document.querySelector('#dog-image-container');
    json.message.forEach(key => {
        const ele = document.createElement('div')
        const img = document.createElement('img')
         img.setAttribute("src, key");
         ele.appendChild(img);
         div.appendChild(ele);
    })
}

const fetchBreeds = function(filter = "") {
    const breedUrl = 'https://do.ceo/api/breeds/list/all';
    fetch(breedUrl)
    .then(response => response.json())
    .then(json => renderBreeds(json, filter))
}

const renderBreeds = function (json, filter = "") {
    const ul = document.querySelector('#dog-breeds');
    if(filter != ""){
        ul.innerHTML = "";
    }
    Object.keys(json.message).forEach((breed) => {
        if (breed.startsWith(filter)) {
            const li = document.createElement('li');
            const liText = document.createElement('liText');
            liText.textContent = breed;
            li.appendChild(liText);
            ul.appendChild(li);
            li.addEventListener("click", () => {
                li.style.color = "red";
            })
        } 
        
    })


}


const updateBreeds = (breed) => {
    const ul = document.getElementById("dog-breeds");
    const li = document.createElement('li');
    li.innerText = breed; 
    ul.appendChild(li);
}

const filterBreeds = function(letter) {
    const dropdown = document.getElementById("breed-dropdown");
    dropdown.addEventListener('change', (event) => {
        const filter = event.target.value;

        fetchBreeds(filter);
    }
}
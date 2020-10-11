let breeds = [];

    document.addEventListener('DOMContentLoaded', (event) => {
        fetchImages()
        fetchBreeds()
    })

   function fetchImages(){
      const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
      fetch(imgUrl)
        .then(response => response.json())
        .then(results =>{results.message.forEach(image => renderImage(image))})
    }

    function renderImage(images){
            let container = document.getElementById('dog-image-container') 
            let img = document.createElement('img')
            img.src = images;
            container.appendChild(img)
    }

    function fetchBreeds(){
        const breedUrl = 'https://dog.ceo/api/breeds/list/all'
         fetch(breedUrl)
            .then(response => response.json())
            .then(results =>{
                breeds = Object.keys(results.message);
                updateBreedList(breeds);
                addBreedSelectListener();

            })

    }

    function updateBreedList(breeds){
        let ul = document.getElementById('dog-breeds')
        removeChildren(ul);
        breeds.forEach(breed => addBreed(breed));

    }

    function removeChildren(element){
        let child = element.lastElementChild;
        while(child){
            element.removeChild(child)
            child = element.lastElementChild
        }
    }

    function addBreed(breed){
        let ul = document.getElementById('dog-breeds');
        let li = document.createElement('li');
        li.innerText = breed;
        ul.appendChild(li);
        li.addEventListener('click', updateColor)

    }

    function updateColor(event){
        event.target.style.color = 'blue'
    }

    function selectBreedsStartingWith(letter){
        updateBreedList(breeds.filter(breed => breed.startsWith(letter)))
    }

    function addBreedSelectListener(){
        let breedDropdown = document.getElementById('breed-dropdown');
        breedDropdown.addEventListener('change',function(event){
            selectBreedsStartingWith(event.target.value);
        })
    }

console.log('%c HI', 'color: firebrick') //%c = fancy way of injecting css in console
document.addEventListener("DOMContentLoaded", function(){ //takes 2 arguments (event, function)
//DOMContentLoaded is an event, takes time for event to be loaded, console log doesn't happen until events of DOMContentLoaded happens
//on page Load 
let dogUL = document.querySelector('#dog-breeds')
//remember to choose an id = # 
//querySelector = returns one single element 
//querySelector = pass CSS selectors into it  
//passing in a CSS selector(querySelector) for an id = pass in all of my CSS selectors 
//don't use getElementsById = gives you plural elements (confusing)
//or you could use getElementByID


  // Challenge 1
fetch("https://dog.ceo/api/breeds/image/random/4") //tell external api i want this info im making request
//made a fetch to this URL
//for http get verb, just fetch to the URL
//fetch returns a promise object as a response(hey this might take some time and when it resolves i promise ill give you something )
//use .then 
    //fetch the images using the url
    .then(response => response.json())
    //response object from fetch request = holds all the api data info of all the 4 images
    //then response is changed into json format 
    .then(handleImageAppending)
    
       // object = json.message

    //.then(function(jsonObject){
        //got back this object inside this json object = array of dog urls
    //let arrayOfDogURLs  = jsonObject.message 
    // arrayOfDogURLs.forEach(url => {
        //then i iterated on each of them
    // dogImageContainer.innerHTML += makeImageTagString(url) 
    // })
    //doing my iteration inside my function 

 // here we appended pictures to the DOM  
 // Challenge 1 

// Challenge 2
    function makeFetchHappen('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json()) // convert in order to work with json object
    .then(response => {
        let dogBreedsArray = Object.keys(response.message)
        dogBreedsArray.forEach((breed) => {  //takes callback/function definition
    dogUL.innerHTML += `<li data-info="breed">${breed}!</li>`
  
            //innerHTML = parse info into workable element 
            ///innerText = just literally get text tags and text 
            // <li> tag = list </li>
        })
       //DOMContentLoaded
     
     //append each of the elements on the DOM 
//just worry about keys = list of breeds i want on the page
//bulldog = is just a bulldog (not french, or boston)
//how to pull out keys of an object =
//object = response.message
//save it to a variable 
//pulling out keys out of that object
//now we iterate over each of dogs elements in the array 
//forEach = method Performs the specified action for each element in an array.
//forEach = takes in a callback function definition (not function execution) as argument 
//syntax: Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
//overall goal/objective: append (the breeds) each element onto the DOM in a ul(<ul></ul>) =each breed element to DOM 
//huge diff bw function definition vs function execution 
//function definition = add 2 to any number (give me 4 i get 6)
// grab ul   <ul id="dog-breeds">
   // </ul>
// })

//Challenge 3 

// let liToFind = document.querySelector("li")
// console.log(liToFind);
// document.querySelector("li").style.color = "#609ce0";
dogUL.addEventListener("click", function(event) { // pass in arguments
    //we will get event for free = what will the callback get for free inside of argument 
  if (event.target.dataset.info === "breed") { // if the target of the event has data-info that's equal to breed then fire it off bc it has that data-info
  //making li's specific 
      event.target.style.color = "#609ce0"
  } 
})
  //tells you what target of event is 
    //you need to find a way to stop with condition 
    //event delegation = almost always has if
    //i only want to change my li's innerText
    //first step in event delegation: find stable parent and attach event listener onto that stable parent
    // ul = single parent add event listener to that 
    //2nd step: figure out a way to block/gait the event from firing by a condition
    //aka = you don't want the stable parent to get that event so stop it with a condition from
    // event fires = you only want the specific children of the stable parent 

//dogUL = stable parent 
//add JavaScript so that the font color of a particular <li> changes on click. 
//This can be a color of your choosing.

// When the user clicks any of the dog breed list items, the color the text should change.
//fetch is asynchronous 
//Challenge 3
    function handleImageAppending(jsonObject) {
        let dogImageContainer = document.getElementById('dog-image-container')
//grab this element from DOM after making sure it was loaded with DOMContentLoaded above
        let arrayOfDogURLs = jsonObject.message 
        arrayOfDogURLs.forEach(url => {
            dogImageContainer.innerHTML += makeImageTagString(url)
        })
    }
    //innerHTML = adds  a string 
    // functionality to add something to page 
    //parse the response as JSON
    //all that goes in .then is a callback function = function def we are passing inside argument 
    function makeImageTagString(url){
        return `<img src="${url}"/>` 
        //run chance of HTML injection ? 

    // function addLIToDOM(breed){ 
    //     //takes callback/function definition
    //     let dogUL = document.querySelector('#dog-breeds')
    //     dogUL.innerHTML += `<li>${breed}</li>` 
    }
  
/*
Add JavaScript so that:

on page load
fetch the images using the url above 
parse the response as JSON
add image elements to the DOM for each image in the array
*/ 

        // json => { 
        // console.log(json)

//other way to append image for Challenge 1 = safer way 
        //dogImageContainer.append(makeImageTagElement(url))
        // function makeImageTagElement(url){
        //     let imageTag = document.createElement("img")
        //     imageTag.src = url 
        //     return ImageTag
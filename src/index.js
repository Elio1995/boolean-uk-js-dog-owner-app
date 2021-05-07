console.log(data);
// We create individual components here



// Description
// In this exercise, we're going to create an app to show off our furry friends. 
// This will also let us practice events and forms! This is a combo that you will find all the time out there

// Instructions
// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item should be clickable. When you click on an item, the selected dog should display on the main card
// - The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
// - There should be only one card at the time on the screen
// - The card should have a button that toggles for the selected dog between good dog/ bad dog

// Tips
// - Take advantage of scope in JS to have access to the data you need
// - Remember you can add event listeners to any element on the page

// Challenge
// You might have noticed there's a plus button at the beginning of the top row. Add the behaviour to it. When clicked, it should replace the main card with a form to add a new dog to the list. 
// You'll find a template for the form on the HTML page. Once the form is submitted, add the new dog to the beginning of the list, right next to the plus button.
let listOfDogs = document.querySelector(`.dogs-list`)
let  mainDogSection = document.querySelector(".main__dog-section")

// ADDING THE DOG NAMES IN THE MENU

// One Dog
function addDogList(dog) {
let listOfDogsLi = document.createElement('li')
let listOfDogsButton = document.createElement('button')
listOfDogsButton.setAttribute("class", "dogs-list__button")
listOfDogsButton.innerText= dog.name

listOfDogsLi.append(listOfDogsButton)
listOfDogs.append(listOfDogsLi)

listOfDogsButton.addEventListener("click", function() {
    mainDogSection.innerHTML = ""
    displayDogCard(dog)
})
}


// All Dogs
function addDogsList(dogs){
    for (const dog of dogs) {
        addDogList(dog);
    }
    }

    addDogsList(data)


// MAIN CARD

//     SECTION class="main__dog-section"

function displayDogCard(dog) {
//     NAME
let h2Dog = document.createElement("h2")
h2Dog.innerText= dog.name
//     IMAGE
let imgDog = document.createElement("img")
imgDog.setAttribute("src", dog.image)
imgDog.setAttribute("alt", "")
imgDog.setAttribute("width", "400px")

//    DIV class="main__dog-section__desc">
let dogDesc = document.createElement("div")
dogDesc.setAttribute("class", "main__dog-section__desc")
//       <h3>Bio</h3>
let bioDog = document.createElement("h3")
bioDog.innerText = "BIO"
//       P> BIO TEXT
let bioTextDog = document.createElement("p")
bioTextDog.innerText = dog.bio
// 
//       DIV
let divButtonEl = document.createElement("div")
//       DIV BTN
let dogBtn = document.createElement("div")
dogBtn.setAttribute("class", "main__dog-section__btn")
//     <p>Is naughty? yes!</p>
let naughtyDog = document.createElement("p")

let naughtyEmDog = document.createElement("em")
naughtyEmDog.innerText = "Is it naughty?"
// naughtyDog.innerText = (`Is it naughty? ${eachDog.isGoodDog}`)
naughtyDog.append(naughtyEmDog, !dog.isGoodDog ? " yes!" : " no!")


//       BAD OR GOOD DOG
let dogButton = document.createElement("button")
dogButton.innerText= (!dog.isGoodDog? "Good Dog!" : "Bad Dog")


dogDesc.append(bioDog, bioTextDog)
divButtonEl.append(dogBtn, naughtyDog, dogButton)
mainDogSection.append(h2Dog, imgDog, dogDesc,divButtonEl)

dogButton.addEventListener("click", function() {
    mainDogSection.innerHTML = ""
    dog.isGoodDog=!dog.isGoodDog
    displayDogCard(dog)
})
}



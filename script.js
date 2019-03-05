'use strict';
let x;

function getDogImage() {
    fetch(`https://dog.ceo/api/breeds/image/random/${x}`)
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
}
  
function displayResults(responseJson) {
    console.log(responseJson);
    var i = 0;

    while(i < x) {
        $('.results').append(
        `<img src="${responseJson.message[i]}" class="results-img">`
        )
        i++;
    }
}

function numberOfDogs() {
    x = document.getElementById("number-dogs").value;
    return x;
}

function removeOldDogs() {
    $('img').remove('.results-img');
}

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      removeOldDogs();
      numberOfDogs();
      getDogImage();
    });
}

function runDogApp() {
    console.log('App Loaded');
    watchForm();
}

$(runDogApp);
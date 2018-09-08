let containerDiv = document.createElement('div');
containerDiv.className = 'header-container';

let headerOne = document.createElement('h1');
let headerText = document.createTextNode('This is an h1');
headerOne.appendChild(headerText);
headerOne.className = 'h1';

let headerTwo = document.createElement('h2');
let headerTextTwo = document.createTextNode('This is an h2');
headerTwo.appendChild(headerTextTwo);
headerTwo.className = 'h2';

let headerThree = document.createElement('h3');
let headerTextThree = document.createTextNode('This is an h3');
headerThree.appendChild(headerTextThree);
headerThree.className = 'h3';

let headerFour = document.createElement('h4');
let headerTextFour = document.createTextNode('This is an h4');
headerFour.appendChild(headerTextFour);
headerFour.className = 'h4';

let headerFive = document.createElement('h5');
let headerTextFive = document.createTextNode('This is an h5');
headerFive.appendChild(headerTextFive);
headerFive.className = 'h5';

let headerSix = document.createElement('h6');
let headerTextSix = document.createTextNode('This is an h6');
headerSix.appendChild(headerTextSix);
headerSix.className = 'h6';

let button = document.getElementsByClassName('btn');

let randomColors = [
    "blue",
    "green",
    "brown",
    "orange",
    "red",
    "yellow",
    "purple",
    "black"
];

let num = 1;

let listElement = document.createElement('li');
let listElementText = document.createTextNode(`This is list item ${num}`);
listElement.appendChild(listElementText);

listElement.addEventListener('click', function () {
    listElement.style.backgroundColor = randomColors[Math.floor(Math.random() * randomColors.length)];
});

listElement.addEventListener('dblclick', function () {
    listElement.remove();
});

window.addEventListener('DOMContentLoaded', function() {
    document.body.appendChild(containerDiv);
    containerDiv.appendChild(headerOne);
    containerDiv.appendChild(headerTwo);
    containerDiv.appendChild(headerThree);
    containerDiv.appendChild(headerFour);
    containerDiv.appendChild(headerFive);
    containerDiv.appendChild(headerSix);
    containerDiv.appendChild(listElement);

    headerTwo.addEventListener('dblclick', function() {
        headerTwo.style.backgroundColor = randomColors[Math.floor(Math.random() * randomColors.length)];
    });

    button[0].addEventListener("click", function () {
        num++
        let listElement = document.createElement('li');
        let listElementText = document.createTextNode(`This is list item ${num}`);
        listElement.appendChild(listElementText);
        containerDiv.appendChild(listElement);
        console.log(num);
        listElement.addEventListener('click', function () {
            listElement.style.backgroundColor = randomColors[Math.floor(Math.random() * randomColors.length)];
        });
        listElement.addEventListener('dblclick', function() {
            listElement.remove();
        });
    });

});
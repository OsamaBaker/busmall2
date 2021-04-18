'use strict';

let allProducts = []

let leftIndex;
let middleIndex;
let rightIndex;

let userAttemptsCounter = 0;

let maxAttempts = 10;


function Product(productName, path){
    this.productName = productName,
    this.path = path,
    this.shown = 0,
    this.clicked = 0,

    allProducts.push(this);

}
// console.log(allProducts)

new Product('bag', 'img/bag.jpg'); 
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');

let container = document.getElementById('container');
let leftPictureElement = document.getElementById('left-picture');
let middlePictureElement = document.getElementById('middle-picture');
let rightPictureElement = document.getElementById('right-picture');


function randomIndexGenerator(){
    return Math.floor(Math.random() * allProducts.length);
}



function renderImages(){
    leftIndex = randomIndexGenerator();
    middleIndex = randomIndexGenerator();
    rightIndex = randomIndexGenerator();

    while(leftIndex === middleIndex || leftIndex === rightIndex || middleIndex === rightIndex){
        leftIndex = randomIndexGenerator();
        middleIndex = randomIndexGenerator();
        rightIndex = randomIndexGenerator();
    }


    leftPictureElement.src = allProducts[leftIndex].path;
    allProducts[leftIndex].shown++;
    middlePictureElement.src = allProducts[middleIndex].path;
    allProducts[middleIndex].shown++;
    rightPictureElement.src = allProducts[rightIndex].path;
    allProducts[rightIndex].shown++;

}

renderImages();

container.addEventListener('click', handleUserClick)

function handleUserClick(event){
    renderImages();

    userAttemptsCounter++;

    if(userAttemptsCounter < maxAttempts){
        if(event.target.id === 'left-picture'){
            allProducts[leftIndex].clicked++
        } else if (event.target.id === 'middle-picture'){
            allProducts[middleIndex].clicked++;
        } else if (event.target.id === 'right-picture'){
            allProducts[rightIndex].clicked++;
        } else{
            alert('please click on an image');
            userAttemptsCounter--;
        }
    }
}
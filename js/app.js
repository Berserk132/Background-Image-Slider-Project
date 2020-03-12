
let images = [];
let currImage = 0;

for (let i = 0; i < 5; i++){

    images.push(`../img/contBcg-${i}.jpeg`);
}


/*document.querySelector(".img-container").
    style.
    backgroundImage = 
    "url(../img/contBcg-1.jpeg)";*/


document.querySelector(".btn-left").addEventListener('click',()=>{

    if (currImage == 0){
        
        currImage = images.length - 1;
        document.querySelector(".img-container").
        style.
        backgroundImage = 
        `url(${images[currImage]})`;
        return;
    }
    currImage--;
    document.querySelector(".img-container").
        style.
        backgroundImage = 
        `url(${images[currImage]})`;

});

document.querySelector(".btn-right").addEventListener('click',()=>{

    if (currImage == images.length - 1){
        
        currImage = 0;
        document.querySelector(".img-container").
        style.
        backgroundImage = 
        `url(${images[currImage]})`;
        return;
    }
    currImage++;
    document.querySelector(".img-container").
        style.
        backgroundImage = 
        `url(${images[currImage]})`;

});
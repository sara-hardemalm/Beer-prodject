
const api =`https://api.punkapi.com/v2/beers`;
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("name");
const mainElement = document.querySelector("main"); /* html element */
const url =`${api}/${id}`;


getData(url,render);

/* fetch data */   
function getData(url){

    fetch(url)
    .then(res => res.json())
    .then(data => {

        render(data);
    })
    .catch(error => console.log(error));
}



function render(data) {
    
    const beer = data[0];
    const name = beer.name;
    const Img = beer.image_url;
    const description = beer.description; 
    const brewers_tips = beer.brewers_tips;
    const ingredients = beer.ingredients.malt;
    const hops = beer.ingredients.hops;
    const food_pairing = beer.food_pairing;

    ulElemnet = document.getElementById("beer_inform");
    
    /*li elements*/
    const h1Tag = document.createElement("h1");     /* Beer name header*/
    const liImg = document.createElement("img");    /* Beer images */
    const liImg2 = document.createElement("img");   /* Beer images that is null*/
    const liDescrip = document.createElement("li"); /* Beer description */
    const liBrew = document.createElement("li");    /* Beer brewers_tips */
    const liAbv = document.createElement("li");     /* Beer alcohol by volume*/
    const liVol = document.createElement("li");     /* Beer volume*/
    const liIng = document.createElement("li");     /* Beer ingridients*/
    const liHops = document.createElement("li");    /* Beer hops */
    const liFood = document.createElement("li");    /* Beer food_pairing*/
    
     /*values */

     /*Beer image */
    h1Tag.textContent = name;
    liImg.src = Img
   if (Img == null) {
       liImg2.src = "beerhasnoimage.png";
   }
    liDescrip.textContent = `Descrption:${description}`;
    liAbv.textContent = `Alcohol by volume :${beer.abv}%`;
    liBrew.textContent = `Brewing tips:${brewers_tips}`;
    liVol.textContent = `volume:${Object.values(beer.volume)}`;

    /*appending the values*/

    ulElemnet.appendChild(h1Tag);
    ulElemnet.appendChild(liImg2);
    ulElemnet.appendChild(liImg);
    ulElemnet.appendChild(liDescrip);
    ulElemnet.appendChild(liAbv);
    

    ulElemnet.appendChild(liVol);
    ingredients.forEach(element => {

        liIng.textContent = `Ingredients: Name :${element.name} Amount :${Object.values(element.amount)}`;

        ulElemnet.appendChild(liIng);
    });
    hops.forEach(element => {

        liHops.textContent = `Hops: Name :${element.name} Amount :${Object.values(element.amount)}`;

        ulElemnet.appendChild(liHops);


    });
    food_pairing.forEach(element => {

        liFood.textContent = `Food Pairing: ${element}`;

        ulElemnet.appendChild(liFood);


    });


    ulElemnet.appendChild(liBrew);


   
}

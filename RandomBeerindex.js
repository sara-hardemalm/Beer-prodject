const api ="https://api.punkapi.com/v2/beers/random"; /* api */

const DivElement = document.querySelector("div.beerContainer"); /* html element */



/* Fetch Data */                                         
function getData(url){

    fetch(url) 
    .then(res => res.json())
    .then(data => {

        render(data);
    })
    .catch(error => console.log(error));
    
}

/*javascript*/

/* Random Beer generator EVT*/                         
function getRandomBeer(evt){
 evt.preventDefault();

    fetch(api) 
    .then(res => res.json())
    .then(beers => {
        const beer = beers[0];
        const name = beer.name; 
        const Img = beer.image_url; 
        
        /*Element */
        const h1Tag = document.querySelector("h1.beernameH1"); /* beer name header*/
        const imgTag = document.querySelector("img.imgbeer"); /* beer images */
        const Img2 = document.querySelector("img.imgbeer"); /* beer image that is null*/
        const pTag = document.querySelector("p.readmore"); /* Read More*/
       
        /*i tried doing createElement but i did something wrong so it never showed up.
        it mabey didn't show up because i put the html class there or something else*/
    
        const beer_btn = document.getElementById("beer_btn"); /*beerbutton */


        /*beer image */
        imgTag.imagecontent = Img;
        imgTag.src = Img
        if (Img == null) { 
            Img2.src = "beerhasnoimage.png"; /*made an "this beer has no image" pic for the null images */
    
        }
        

        /* p. read more text that is for link to the next page */
        pTag.innerHTML = "Read More";
        pTag.setAttribute('name',beer.id); 
        pTag.addEventListener("click", onReadMClicked);

    

        
        h1Tag.innerHTML = name;
        imgTag.innerHTML = Img;
        Img2.innerHTML = Img;

        

    })
   
}


/*for Read More link to the next page*/                
function onReadMClicked(evt) {
    
    const id = evt.target.getAttribute('name');
    const url = `./Beer_Information.html?name=${id}`;
    document.location.href = url;
    
   
    console.log()
}

/* BeerButton Click function */                       
beer_btn.addEventListener("click", getRandomBeer)


/* function on "get random Beer". text change to "Get New Beer" and turns orange. for extra detail */
document.getElementById('beer_btn').onclick = function changeContent() {

    document.getElementById('beer_btn').textContent = "Get New Beer"; /* change text */
    document.getElementById('beer_btn').style.color = "#FA8334"; /*text new color*/
 
 }
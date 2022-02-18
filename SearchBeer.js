const api ="https://api.punkapi.com/v2/beers";
const formElement = document.querySelector("form"); /*html element */
const mainElement = document.querySelector("main"); /* html element */

/*onsubmit event for search bar */
formElement.addEventListener("submit", onSubmit); 



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

    const ulElement = document.createElement("ul");
    ulElement.addEventListener("click", onUlClicked);

    for (let i = 0; i < data.length; i++){
        
        const beer = data[i];

        const liElement = document.createElement("li");
        liElement.setAttribute("name", beer.id);
        liElement.textContent = beer.name; 
        
        ulElement.appendChild(liElement);

    }

    mainElement.appendChild(ulElement);
}


function onUlClicked(evt) {

    const id = evt.target.getAttribute("name");

    const url = `./Beer_Information.html?name=${id}`;
    document.location.href = url;
    console.log()
}


/*search button */
function onSubmit(evt) {
    const searchStr = evt.target[0].value;

    
    const url = `${api}?beer_name=${searchStr}`; 
    
    getData(url); 

    evt.preventDefault();
}



/*wanted the div to show up at the same time as the search reaults did. tried hide and show code. didn't go well.
so i did changecontent insted. made the background and box-shadow transparent in the css and then gave the normal
background and box-shadow here */

document.getElementById('SearchBtn').onclick = function changeContent() {

    document.getElementById("BeerResult").style.backgroundColor = "rgb(243, 161, 8)";

    document.getElementById('BeerResult').style.boxShadow = "10px 10px 7px 0px #135f7b"; /*box-shadow color*/
 
 };



  
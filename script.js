const cardObjectDefinitions = [
    {id:1, path:"/images/10coeur.jpg"},
    {id:2, path:"/images/as_pique.jpg"},
    {id:3, path:"/images/as_coeur.jpg"},
    {id:4, path:"/images/JackClubs.png"}
];

const backPath = '/images/back.jpg';
const altBack = "Le derrière de d'une carte!"
const altFront = "Une carte!"

{/*
    <div class="card">
        <div class="card-inner">
            <div class="card-front">
                <img src="/images/card-JackClubs.png" alt="La carte à trouver!" class="card-img">
            </div>
            <div class="card-back">
                <img src="/images/card-back-Blue.png" alt="Le derrière de d'une carte!" class="card-img">
            </div>
        </div>
    </div>
*/}
    

const cardContainer = document.querySelector(".card-container");
       
creerCartes();
function creerCartes() {
    cardObjectDefinitions.forEach((carte) => {
        createCard(carte);
    });
}

function createCard(carte) {

    const cardElem = createElement("div");
    const innerElem = createElement("div");
    const frontElem = createElement("div");
    const backElem = createElement("div");

    // Les faces des images
    const frontImg = createElement("img");
    const backImg = createElement("img");
    
    //----------------

    // cardElem
    addClass(cardElem, "card");
    addId(cardElem, carte.id);

    // innerElem
    addClass(innerElem, "card-inner");

    //----------------

    // frontElem
    addClass(frontElem, "card-front");

    // frontimages
    addSrc(frontImg, carte.path);
    addAlt(frontImg, altFront);
    addClass(frontImg, "card-img");

    //----------------

    // backElem
    addClass(backElem, "card-back");

    // backimages
    addSrc(backImg, backPath);
    addAlt(backImg, altBack);
    addClass(backImg, "card-img");

    //----------------

    addChild(frontElem, frontImg);
    addChild(innerElem, frontElem);
    addChild(backElem, backImg);
    addChild(innerElem, backElem);
    addChild(cardElem, innerElem);
    
    //----------------

    // Ajout de classe dans un grille
    remplirGrille(carte);

}   

// Une fonction qui crée un élément
function createElement(type) {
    return document.createElement(type);
} 

// Une fonction qui ajoute une classe à un élément
function addClass(elem, className) {
    elem.classList.add(className);
}

// Une fonction aui ajoute un Id à un élément
function addId(elem, id) {
    elem.id = id;
}

// Une fonction qui ajoute l' attributs src à une image
function addSrc(elem, src) {
    elem.src = src;
}

// Une fonction qui ajoute l' attributs alt à une image
function addAlt(elem, alt) {
    elem.alt = alt;
}

// Une fonction qui ajoute un enfant à un élément
function addChild(elem, child) {
    elem.appendChild(child);
}

// Une fonction qui ajoute une carte dans une grille
function remplirGrille(carte) {
    const classeCarte = mapperCarte(carte);
    const cartePosElem = document.querySelector(classeCarte);

    addChild(cartePosElem, carte);
}

// Une fonction qui spécifie la grille  d'une carte
function mapperCarte(carte) {
    switch (carte.id) {
        case 1:
            return '.card-pos-a';
        
        case 2:
            return '.card-pos-b';
        
        case 3:
            return '.card-pos-c';
        
        case 4: 
            return '.card-pos-d';

        default:
            break;
    }
}
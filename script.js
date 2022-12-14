const cardObjectDefinitions = [
    {id:1, path:"/images/10coeur.jpg"},
    {id:1, path:"/images/as_pique.jpg"},
    {id:1, path:"/images/as_coeur.jpg"},
    {id:1, path:"/images/JackClubs.png"}
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
    
        
function createCard(carte) {

    const cardElem = createElement("div");
    const innerElem = createElement("div");
    const frontElem = createElement("div");
    const backElem = createElement("div");

    // Les faces des images
    const frontImg = createElement("img");
    const backImg = createElement("img");
    
    // Ajout d'une classe et d'un id à card
    addClass(cardElem, "card");
    addId(cardElem, cardItem.id);

    // Ajout d'une classe et d'un id à card-inner
    addClass(innerElem, "card-inner");

    // Ajout d'une classe et d'un id à front-card
    addClass(frontElem, "card-front");

    // Ajout d'une classe et d'un id à front-back
    addClass(backElem, "card-back");

    //----------------
    // Ajout des attributs src à backimages
    addSrc(backImg, backPath);

    // Ajout des attributs alt à backimages
    addSrc(backImg, altBack);

    // Ajout d'une classe à backimages
    addClass(backImg, "card-img");

    //-------------------
    // Ajout des attributs src, alt et href des images
    addSrc(frontImg, cardItem.imagePath);

    // Ajout des attributs alt à frontimages
    addSrc(frontImg, altFront);

    // Ajout d'une classe à frontimages
    addClass(frontImg, "card-img");
 

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
    elem.appenChild(child);
}
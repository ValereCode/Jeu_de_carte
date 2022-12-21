const cardObjectDefinitions = [
    {id:1, path:"/images/10coeur.jpg"},
    {id:2, path:"/images/as_pique.jpg"},
    {id:3, path:"/images/as_coeur.jpg"},
    {id:4, path:"/images/card-JackClubs.png"}
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

    // Création des différents éléments 
    const eltCarte = createElement("div");
    const eltInner = createElement("div");
    const eltFace = createElement("div");
    const eltDos = createElement("div");

    // Les faces des images
    const faceImg = createElement("img");
    const dosImg = createElement("img");
    
    //----------------

    // Action sur les éléments
    // eltCarte
    addClass(eltCarte, "card");
    addId(eltCarte, carte.id);

    // eltInner
    addClass(eltInner, "card-inner");

    //----------------

    // eltFace
    addClass(eltFace, "card-front");

    // frontimages
    addSrc(faceImg, carte.path);
    addAlt(faceImg, altFront);
    addClass(faceImg, "card-img");

    //----------------

    // eltDos
    addClass(eltDos, "card-back");

    // backimage
    addSrc(dosImg, backPath);
    addAlt(dosImg, altBack);
    addClass(dosImg, "card-img");

    //----------------
    
    addChild(eltFace, faceImg);
    addChild(eltInner, eltFace);
    addChild(eltDos, dosImg);
    addChild(eltInner, eltDos);
    addChild(eltCarte, eltInner);
    
    //----------------
    console.log(eltCarte.className);
    // Ajout de classe dans un grille
    remplirGrille(carte);

}   

//--------------------------

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
function addChild(parent, enfant) {
   if (typeof enfant == Node) {
    parent.appendChild(enfant)
   }
}

//---------------------

// Une fonction qui ajoute une carte dans une grille
function remplirGrille(carte) {
    const classeCarte = mapperCarte(carte);
    const grille = document.querySelector(classeCarte);
    
    addChild(grille, carte);
    console.log(carte.className);
}

// Une fonction qui spécifie la grille  d'une carte
function mapperCarte(carte) {
    switch (carte.id) {
        case 1:
            return '.carte1';
        
        case 2:
            return '.carte2';
        
        case 3:
            return '.carte3';
        
        case 4: 
            return '.carte4';

        default:
            break;
    }
}
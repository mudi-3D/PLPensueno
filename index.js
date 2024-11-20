
/** Contador para detener la busqueda y revisión de las "cards" */
let counterSearch = 0;

/** Contenido de la imagen icono identificador 3D  */
let ImageElement = document.createElement('DIV');
ImageElement.classList.add('icon3DPLP');

const createStylesPLP = () => {
    if (document.head.querySelector('#PLPStyle')) return;
    const link = document.createElement('LINK')
    link.rel = "stylesheet";
    link.id = "PLPStyle";
    link.href = "https://cdn.jsdelivr.net/gh/mudi-3D/PLPensueno@latest/index.css";
    document.head.appendChild(link);
};

const searchCards = () => {

    if (counterSearch === 1000) return;

    const allCards = document.querySelectorAll('[data-product_id]')

    if (allCards.length == 0) {
        counterSearch++;
        requestAnimationFrame(searchCards);
    };

    for (i = 0; i < allCards.length; i++) {
        const father = allCards[i].parentElement;
        father.appendChild(ImageElement);
    };


};

createStylesPLP();
searchCards();

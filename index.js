import SKUS from "https://cdn.jsdelivr.net/gh/mudi-3D/PLPensueno@latest/skus.js";

/** Contador para detener la busqueda y revisión de las "cards" */
let counterSearch = 0;

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

    for ( let i = 0; i < allCards.length; i++) {

        let numberSKu = allCards[i].getAttribute("data-product_id");

        if (SKUS.includes(numberSKu)) {
            /** Contenido de la imagen icono identificador 3D  */
            let ImageElement = document.createElement('DIV');
            ImageElement.classList.add('icon3DPLP');

            const father = allCards[i].parentElement;
            father.appendChild(ImageElement);
        }

    };


};

createStylesPLP();
searchCards();

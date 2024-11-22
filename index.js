const SKUS = [1138, 1236, 1363, 1436, 982, 'Mueble_Atenas_Sofa', 'Mueble_Atenas_ChaiseLongue', 'Mueble_Versalles', 'Mueble_Turin_Sofa', 'Mueble_Turin_Silla', 'Mueble_Turin_Sala', 'Mueble_Manchester', 'Mueble_Galaxy', 'Orion_Sala', 'Viena_Sofa', 'Viena_ChaiseLongue', 1252, 1200, 1318, 1086, 1036, 921, 'Mueble_Nova', 'Mueble_Davinchi', 'Mueble_Roma_Sofa', 'Mueble_Roma_Poltrona', 'Mueble_Roma_Chaise_longue ', 'Mueble_Paris_Chaise_longue ', 'Mueble_Paris_Poltrona', 5383, 'mueble_Rosemberg_Chaise_Longue', 2160, 'Mueble_Rochester_Silla', 5406, 5895, 'Mueble_Palermo_Sofa', 2067, 'Mueble_Palermo_ChaiseLongue', 'Mueble_Estocolmo_Sofa', 'Mueble_Estocolmo_Poltrona', 'Mueble_Portugal_Sofa', 2093, 'mueble_Rosemberg', 'Mueble_Rochester', 'Cama_nido_niño', 'Cama_nido_niña', 1416, 1463, 1492, 1257, 1614, 830, 'Colchon_Kids', 738, 867];

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

console.log('Buscando cards')

    if (counterSearch === 1000) return;

    const allCards = document.querySelectorAll('[data-product_id]')

    if (allCards.length == 0) {
        counterSearch++;
        requestAnimationFrame(searchCards);
    };

    for ( let i = 0; i < allCards.length; i++) {

        let numberSKu = allCards[i].getAttribute("data-product_id");
        console.log(numberSKU)

        if (SKUS.includes(numberSKu)) {
            console.log('enciontramos una card ')
            /** Contenido de la imagen icono identificador 3D  */
            let ImageElement = document.createElement('DIV');
            ImageElement.classList.add('icon3DPLP');

            const father = allCards[i].parentElement;
            father.appendChild(ImageElement);
        }

    };


};

createStylesPLP();

setTimeout(()=>{ searchCards(); },3000)


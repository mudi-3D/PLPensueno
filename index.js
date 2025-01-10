const SKUS = ['1457',
'1442',
'1470',
'1138',
'1144',
'1150',
'1363',
'1347',
'1358',
'1436',
'1369',
'1431',
'982',
'965',
'989',
'995',
'1200',
'1176',
'1193',
'1209',
'1216',
'1318',
'1323',
'1312',
'1086',
'1068',
'1093',
'1100',
'1036',
'1017',
'1043',
'1049',
'921',
'889',
'928',
'934',
'1492',
'1476',
'1602',
'1608',
'1257',
'1309',
'1614',
'1629',
'1634',
'830',
'315',
'840',
'847',
'738',
'330',
'752',
'779',
'867',
'291',
'875',
'882'];

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
    console.log(allCards)

    if (allCards.length == 0) {
        counterSearch++;
        requestAnimationFrame(searchCards);
    };

    for (let i = 0; i < allCards.length; i++) {

        let numberSKu = allCards[i].getAttribute("data-product_id");

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

setTimeout(() => {
    if (!(location.href.includes('/producto/'))) { searchCards() }
}, 1500)

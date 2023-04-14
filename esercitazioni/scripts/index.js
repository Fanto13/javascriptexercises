// in questo script vado ad importare la classe Header per poterla utilizzare
import Aside from "./modules/aside.js";
import Content from "./modules/content.js";
import Header from "./modules/header.js";

// vado a definire l'elemento root dove andrò ad appendere gli elementi base del mio DOM
const root = document.getElementById("root");
// richiamo la funzione Header con i suoi parametri (dove appenderlo, l'immagine di sfondo, di logo ed il titolo)
Header(
  root,
  "../mazziotti - website/assets/banner.jpeg",
  "../mazziotti - website/assets/logo.jpg",
  "Associazione ci piacciono i gatti"
);
// richiamo la funzione Aside con i suoi parametri (dove appenderlo e l'immagine di sfondo)
Aside(root, "../mazziotti - website/assets/banner.jpeg");
// richiamo la funzione Content con i suoi parametri (dove appenderlo)
Content(root);

//fare le cartelle: assets, scripts, styles, poi dentro index.html fare il link al file css e al file js, poi aggiungere la favucin, e dare l'id al div che deve corrispondere a quello del css, di solito è il root
//nel file index.js si crea una costante "const pincoPallino = document.getElementById("root")", tutto poi verrà collegato qui con root.appendChild(pincoPallino)
//per cambiare colore al testo: "pincoPallino.style.color = "red"
//1)richiamo di un elemento già esistente nel DOM, tramite let nomevariabile = document.getElementById("id_elemento");
//2)creazione di un elemento tramite let nomevariabile = document.createElement("tagDellelementofacreare");
//3)dire dove l'elemento creato andrà fissato nel DOM tramite variabileElementoPadre.appendChild(variabileElementoFiglio)
//4)creazione di un ascoltatore di eventi collegato all'elemento del DOM che abbiamo creato tramite un variabileElementoCreato.addEventListener("tipoEvento", puntatoreAllaFunzione) oppure variabileElementoCreato.addEventListener("tipoEvento", () => {funzioneCheBisognaEseguire}) )
//5)eliminazione di un elemento dal DOM o solo di uno dei suoi figli tramite un elementoDOM.remove() o nel primo caso, o tramite un variabileElementoDOMPadre.removeChild(variabileElementoFiglio) )
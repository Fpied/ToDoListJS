const ajouter = document.getElementById("ajouter");
const liste = document.getElementById("liste");
let id = 0;
const text = document.getElementById("tache");
let fait = false;
let ToDoList = []; // Initialise le tableau

ajouter.addEventListener("click", (event)=>{
    // Récupération de la valeur actuelle du textarea
    event.preventDefault();

    const texteValue = text.value;

    const nouvelleTache = {
        id: id++,
        texte: texteValue,
        fait: false
    };
    ToDoList.push(nouvelleTache);
    localStorage.setItem("TodoListMa", JSON.stringify(nouvelleTache));

    // Affichage pour vérification
    console.log("Tâche ajoutée :", nouvelleTache);
    console.log("Liste complète :", ToDoList);

    text.value = "";

});

let li = document.createElement("li");
let newListe = localStorage.getItem('nouvelleTache');
const newListeParse = newListe
li.nouvelleTache








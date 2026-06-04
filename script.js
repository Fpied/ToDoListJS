const ajouter = document.getElementById("ajouter");
const liste = document.getElementById("liste");
let id = 0;
const text = document.getElementById("tache");
let fait = false;
let ToDoList = []; // Initialise le tableau
let li = document.createElement("li");
let newListe = localStorage.getItem('ToDoListMa');
const newTableauParse = newListe ? JSON.parse(newListe) : [];
console.log(newTableauParse.texte);
liste.appendChild(li);

for(let index = 0; index < ToDoListMa.length; index++){
    
}




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
    localStorage.setItem("TodoListMa", JSON.stringify(ToDoList));

    // Affichage pour vérification
    text.value="";

    
    newTableauParse = newListe ? JSON.parse(newListe) : [];
    console.log(newTableauParse);
    li.textContent = nouvelleTache.texte;
    liste.appendChild(li);



});












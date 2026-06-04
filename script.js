const ajouter = document.getElementById("ajouter");
const liste = document.getElementById("liste");
let id = 0;
const text = document.getElementById("tache");
let fait = false;
let ToDoList = []; // Initialise le tableau

let newListe = localStorage.getItem('ToDoListMa');
let newTableauParse = newListe ? JSON.parse(newListe) : [];
let li = document.createElement("li");
let label = document.createElement("label");
let checkbox = document.createElement("input");
let labelBoxSupprime = document.createElement("label");
let checkBoxSupprime = document.createElement("input");
let span = document.createElement("span");

afficherTache = (tache)=>{
    li = document.createElement("li");
    span = document.createElement("span");
    span.textContent = tache.texte;
    li.appendChild(span);
    liste.appendChild(li);
    checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    label = document.createElement("label");
    label.textContent = "faite";
    label.prepend(checkbox);
    li.appendChild(label);
    checkBoxSupprime = document.createElement("input");
    checkBoxSupprime.type = "checkbox";
    labelBoxSupprime = document.createElement("label");
    labelBoxSupprime.textContent = "Supprimé";
    label.appendChild(checkBoxSupprime);
    li.appendChild(labelBoxSupprime);

}



for(let index = 0; index < newTableauParse.length; index++){
    afficherTache(newTableauParse[index]);
    

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
    newTableauParse.push(nouvelleTache);
    localStorage.setItem("ToDoListMa", JSON.stringify(newTableauParse));

    // Affichage pour vérification
    text.value="";

    afficherTache(nouvelleTache);

});

checkbox.addEventListener("change", ()=>{
    if(checkbox.checked){
        span.style.color = "green";
    } else {
        span.style.color = "red";
    }
})











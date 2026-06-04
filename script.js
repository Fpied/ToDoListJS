const ajouter = document.getElementById("ajouter");
const liste = document.getElementById("liste");
const button = document.getElementById("button");

const text = document.getElementById("tache");
let fait = null;
let ToDoList = []; // Initialise le tableau

let newListe = localStorage.getItem('ToDoListMa');
let newTableauParse = newListe ? JSON.parse(newListe) : [];
let id = newTableauParse.length;
let labelBoxSupprime = document.createElement("label");
let checkBoxSupprime = document.createElement("input");
const filterToutes = document.createElement("button");
const filterAFaire = document.createElement("button");
const filterFaite = document.createElement("button");

filterToutes.textContent = "Toutes";
filterAFaire.textContent = "À faire";
filterFaite.textContent = "Faites";

button.appendChild(filterToutes);
button.appendChild(filterAFaire);
button.appendChild(filterFaite);


afficherTache = (tache)=>
{
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = tache.id + "-"+ tache.texte;
    li.appendChild(span);
    liste.appendChild(li);
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    let label = document.createElement("label");
    label.textContent = "faite";
    label.prepend(checkbox);
    li.appendChild(label);
    let buttonSupprime = document.createElement("button");
    buttonSupprime.type = "button";
    buttonSupprime.textContent = "Supprimé";
    li.appendChild(buttonSupprime);
    if(tache.fait){
        span.style.color = "green";
    }
    else if(tache.fait === false){
        span.style.color = "red";
    } else{
        span.style.color = "black";
    }
    
    checkbox.addEventListener("change", ()=>
    {
        if(checkbox.checked)
        {
            span.style.color = "green";
            tache.fait = true;
            console.log(tache);
            
        } 
        else if(checkbox.checked === false)
        {
            span.style.color = "red";
            tache.fait = false;
            console.log(tache);
        } else{
            span.style.color = "black";
        }
    });
    
    buttonSupprime.addEventListener("click", ()=>
    {
        console.log("supprimé");
        console.log(tache);
        console.log(tache.id);
        for(let index = 0; index < newTableauParse.length; index++)
        {
            if(tache.id === newTableauParse[index].id)
            {
                newTableauParse.splice(index, 1);
                localStorage.setItem("ToDoListMa", JSON.stringify(newTableauParse));
                li.remove();
            }
        }

    });
};







for(let index = 0; index < newTableauParse.length; index++)
{
    afficherTache(newTableauParse[index]);
    

}

ajouter.addEventListener("click", (event)=>
{
    // Récupération de la valeur actuelle du textarea
    event.preventDefault();

    const texteValue = text.value;

    const nouvelleTache = {
        id: id++,
        texte: texteValue,
        fait: null
    };
    newTableauParse.push(nouvelleTache);
    localStorage.setItem("ToDoListMa", JSON.stringify(newTableauParse));

    // Affichage pour vérification
    text.value="";

    afficherTache(nouvelleTache);

});

filterToutes.addEventListener("click", ()=>{
    liste.innerHTML = "";
    for(let index = 0; index < newTableauParse.length; index++)
            {
                afficherTache(newTableauParse[index]);
            }

})

filterAFaire.addEventListener("click", ()=>{
    liste.innerHTML = "";
    for(let index = 0; index < newTableauParse.length; index++)
            {
                if(newTableauParse[index].fait === true)
                {
                    afficherTache(newTableauParse[index]);
                    
                } 
            }

})

filterFaite.addEventListener("click", () => {
    liste.innerHTML = "";
    for(let index = 0; index < newTableauParse.length; index++)
            {
                if(newTableauParse[index].fait === false)
                {
                    afficherTache(newTableauParse[index]);
                    
                } 
            }

});





function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
// on selectionne l'élément qui a la class bground et on le met dans modalbg
const modalbg = document.querySelector(".bground");
// on selectionne tous les éléments qui ont la class modal-btn
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// Fonction fermeture formulaire
function closeForm() {
    modalbg.style.display = "none";
}
// fonction validate
function validate() {
    alert("Merci ! Votre réservation a été reçue.");

}
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
    var formOK = true;
    let isFirstNameOk = checkFristName();
    let isLastOk = checkLastName();
    let isCheckboxCgChecked = checkCheckBox1();


    if (isFirstNameOk == false) {
        formOK = false;

    }

    if (isLastOk == false) {
        formOk = false;

    }

    if (isCheckboxCgChecked == false) {
        formOK = false;

    }


    if (formOK == true) {
        alert("Merci ! Votre réservation a été reçue.");
    } else {
        alert("error");
    }

}
/** controle si le prénom est valide 
 * renvoi true si les contrôles sont ok et false si les contrôles ne sont pas bon
 * @returns 
 */
function checkFristName() {
    var firstname = document.getElementById("first");
    let isFirstNameOk = false;
    if (firstname.value.length >= 2) {
        isFirstNameOk = true;
    }
    return isFirstNameOk;

}
/** contrôle si nom de famille est valide
 * 
 * @returns 
 */
function checkLastName() {

    var lastname = document.getElementById("last");
    let isLastOk = false;
    if (lastname.value.length >= 2) {
        isLastOk = true;
    }
    return isLastOk;



}

/** contrôle si la case est coché 
 * 
 * @returns 
 */
function checkCheckBox1() {
    var checkbox = document.getElementById("checkbox1");

    return checkbox.checked;


}
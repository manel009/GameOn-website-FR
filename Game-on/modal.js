function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// on declare une constante "modalbg" en lui affectant le premier element qui a la classe "bground" dans le html
const modalbg = document.querySelector(".bground");
// on declare une constante "modalBtn" en lui affectant TOUT LES ELEMENTS qui ont la classe "modal-btn" dans le html
const modalBtn = document.querySelectorAll(".modal-btn");
// on declare une constante "modalBtn" en lui affectant TOUT LES ELEMENTS qui ont la classe "modal-btn" dans le html
const formData = document.querySelectorAll(".formData");

// Pour chaque element dans la constante modalBtn, on valorise "btn" avec l'element en cours de lecture par le foreach
// => pour l'element en cours de lecture symbolisé par la variable "btn", lorsqu'on clique dessus "click", on lui dit d'executer la methode "launchModal"
modalBtn.forEach((btn) => btn.addEventListener("click", displayForm));

/**
 * Pour l'element html dans la constante "modalbg", on va modifier son style en allant valoriser la propriete "display"
 * avec la valeur "block"
 */
function displayForm() {
    modalbg.style.display = "block";
}

/**
 * Pour l'element html dans la constante "modalbg", on va modifier son style en allant valorisé la propriete "display"
 * avec la valeur "none" (cache l'element html)
 */
function closeForm() {
    modalbg.style.display = "none";
}

/**
 * Controle les valeurs de chaques champs du formulaire.
 * Si un champs est en erreur, affiche un message en dessous et empeche l'envoi.
 * Si tous les champs sont OK, affiche une pop-up avec un message de succes.
 * 
 * @returns 
 */
function validate() {
    //   dataEnErreur();
    // on creer une variable qui s'appel "formOK" et qui contient la valeur true
    var formOK = true;
    // on creer une variable qui s'appelle "isFirstNameOk". Elle contient le resultat de la fonction "checkFirstName"
    let isFirstNameOk = checkFristName();
    let isLastOk = checkLastName();
    let isCheckboxCgChecked = checkCheckBox1();

    // on recupere l'element qui a l'id "quantity"
    var quantity = document.getElementById("quantity");
    // on creer une variable "isQuantityOk" qui contient le resultat de checkQuantity avec en parametre le champs quantity recupere juste au dessus
    let isQuantityOk = checkQuantity(quantity.value);

    // Meme fonctionnement que pour checkQuantity
    var email = document.getElementById("email");
    let isEmailOk = checkEmail(email.value);

    // on declare une variable qui s'appelle "isAtLeastOneLocationChecked". Elle contient le resultat de la fonction "checkLocation"
    let isAtLeastOneLocationChecked = checkLocation();

    // on vide les message d'erreur existant avant de faire les controles
    document.getElementById("errorFirst").innerHTML = "";
    document.getElementById("errorLast").innerHTML = "";
    document.getElementById("errorEmail").innerHTML = "";
    document.getElementById("errorBirthdate").innerHTML = "";
    document.getElementById("errorQuantity").innerHTML = "";
    document.getElementById("errorLocation").innerHTML = "";
    document.getElementById("errorCg").innerHTML = "";

    // si la variable firstnameOk est équivalent à false alors  formOk egal à false et on affiche messsage d'erreur 
    if (isFirstNameOk == false) {
        formOK = false;
        document.getElementById("errorFirst").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    }
    // si la variable isLastOk est équivalent à false alors formOk egal false et on affiche message d'erreur
    if (isLastOk == false) {
        formOK = false;
        document.getElementById("errorLast").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";

    }
    // si la variable isEmailOk egal false alors on affiche le message veuillez entrer un email valide 
    if (!isEmailOk) {
        formOK = false;
        document.getElementById("errorEmail").innerHTML = "Veuillez entrer un email valide.";
    }
    // si la fonction !checkDate renvoi false alors on affiche le message veuillez entrer une date 
    if (!checkDate()) {
        formOK = false
        document.getElementById("errorBirthdate").innerHTML = "Veuillez entrer une date."

    }
    // si la variable isQuantityOk est équivalente à false alors on affiche le message veuillez entrer un nombre valide 
    if (isQuantityOk == false) {
        formOK = false;
        document.getElementById("errorQuantity").innerHTML = "Veuillez entrer un nombre valide.";
    }
    // si la variable isAtleastOneLoactionChecked est equivalente à false alors on affiche le message veuillez sélectionner une ville 
    if (isAtLeastOneLocationChecked == false) {
        formOK = false;
        document.getElementById("errorLocation").innerHTML = "Veuillez sélectionner une ville";
    }
    // si la variable isCheckboxCgChecked est équivalente à false alors on affiche le message veuillez verifier que vous acceptez 
    // les termes et les conditons 
    if (isCheckboxCgChecked == false) {
        formOK = false;
        document.getElementById("errorCg").innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";

    }
    //si formOK equivalente à true alors on affiche le message votre réservation à été reçu
    if (formOK == true) {
        alert("Merci ! Votre réservation a été reçue.");
        return true;
    } else {
        // Laisse le formulaire afficher avec les erreurs
        return false;
    }

}
/** controle si le prénom est valide 
 * renvoi true si les contrôles sont ok et false si les contrôles ne sont pas bon
 * @returns 
 */
function checkFristName() {
    // on creer une variable "firstname" qui contient l'element HTML avec l'id "first"
    var firstname = document.getElementById("first");
    let isFirstNameOk = false;
    // Pour l'element qui a l'id "first", on recupere sa valeur ("value") et on verifie si 
    // le nombre de caractere qu'il contient ("lenght") est >= a 2
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
    return (lastname.value.length >= 2);
}

/** contrôle si la case est coché 
 * 
 * @returns 
 */
function checkCheckBox1() {
    var checkbox = document.getElementById("checkbox1");
    return checkbox.checked;
}

/** Contrôle si quantity est un nombre
 * 
 * @param {*} quantity 
 * @returns 
 */
function checkQuantity(quantity) {
    // on utilise la fonction isNaN (pour isNotANumber) en lui passant la valeur du champs quantity passer en parametre.
    // on inverse le resultat avec un ! devant car on veut verifier si c'est un nombre donc l'inverse de isNaN
    let isQuantityOk = !isNaN(quantity);
    return isQuantityOk;
}

/** Contrôle si un mail est au bon format 
 * 
 * @param {*} email 
 * @returns 
 */
function checkEmail(email) {
    let isEmailOk = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    return isEmailOk;
}

/** contrôle si la date est remplie ou vide
 * 
 * @returns 
 */
//!! la fonction va verfifer si la date est remplie  , variable birthdate  ( avec l'élement directement pris par id du html )
// !! donc si date équivalent à champ vide alors il retourne faux 
function checkDate() {
    var birthdate = document.getElementById("birthdate");
    if (birthdate.value == "") {
        return false;

    }
    return true;
}


/** contrôle  si un bouton est coché 
 * 
 * @returns 
 */
function checkLocation() {
    // on recupère tous les boutons 
    var radios = document.getElementsByName("location");
    // on recupère le nombre de bouton 
    let nbButton = radios.length;

    // pour position = 0 jusqu'à i < nbButton , pour chaque bouton 
    for (var position = 0; position < nbButton; position++) {
        // on verifie que le bouton d'indice i est coché , si oui on renvoi true 
        if (radios[position].checked) {
            return true;
        }
    }

    return false;
}

/** contounrne les contrôles html 
 * 
 */
function dataEnErreur() {
    // recupère l'élement par id email et on lui donne la valeur "M"
    document.getElementById("email").value = "M";
    document.getElementById("birthdate").value = "";
    document.getElementById("quantity").value = "";
}
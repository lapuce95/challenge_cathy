/* === Exo1 ===
 *
 * 1. Demander à l'utilisateur de rentrer un premier nombre dans une boîte de dialogue.*/
var a = window.prompt("Entrez le premier nombre");
/*
/* 2. Demander à l'utilisateur de rentrer un 2e nombre dans une boîte de dialogue.*/
var b = window.prompt("rentrezle deuxième nombre");
/* 3. Additionner les deux nombres.*/
var somme = parseInt(a) + parseInt(b);

/* 4. Afficher le résultat dans #result. */
let sommeElement = document.querySelector("#result");
sommeElement.textContent = somme;
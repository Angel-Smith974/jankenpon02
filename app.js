// Variable

let boutton = document.querySelectorAll("button"); //Cette variable querySelectionne tout les boutons qui sont dans l'achteumeleux.
let choixOrdi; //C'est variable n'a pas de valeur.
let choixUser; //Celle-ci non plus.
let resultat = document.querySelector(".resultat");
let divOrdi = document.querySelector('.ordi');

// choix du joueur
function choixDuJoueur() { //
    boutton[0].onclick = function() {
        choixUser = "pierre";
        console.log(choixUser);
        hasard()
        comparaison();
    }
    boutton[1].onclick = function() {
        choixUser = "feuille";
        console.log(choixUser);
        hasard()
        comparaison();
    }
    boutton[2].onclick = function() {
        choixUser = "ciseaux";
        console.log(choixUser);
        hasard()
        comparaison();
    }
};

choixDuJoueur(); //La fonction est appeller ici.

// comparaison
function comparaison(){
    if(choixUser == choixOrdi ){
        resultat.textContent = "Egalité";
    }
    else if((choixUser == "pierre" && choixOrdi == "feuille") || (choixUser == "feuille" && choixOrdi == "ciseaux") || (choixUser == "ciseaux" && choixOrdi == "pierre")){
        resultat.textContent = "Vous avez perdu";
    }
    else{
        resultat.textContent = "Vous avez gagner";
    }
}

// choix de l'ordi
function hasard() {
    choixOrdi = Math.random();
    if(choixOrdi <0.33 ){
    choixOrdi = "pierre";
    }
    else if (choixOrdi <0.66){
    choixOrdi = "feuille";
    }
    else {
    choixOrdi = "ciseaux";
    }
    console.log(" le choix de l'ordi : " + choixOrdi);
    divOrdi.textContent = choixOrdi;
}


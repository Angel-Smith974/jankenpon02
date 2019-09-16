/* 
-- ETAPE --

 -- Choix de l'ordi
 -- Choix du joueur
 -- Comparaison
 
 -- Les boutons
 -- Selection du choix du joueur avec les boutons
 -- Comparaison avec le nouveaux systeme
 
 -- Amelioration

*/

// Variable

let boutton = document.querySelectorAll("button"); //Cette variable querySelectionne tout les boutons qui sont dans l'achteumeleux.
let choixOrdi; //C'est variable n'a pas de valeur.
let choixUser; //Celle-ci non plus.
let resultat = document.querySelector(".resultat");
let divOrdi = document.querySelector('.ordi');
let affichageJoueur = document.querySelector('.scoreJoueur');
let affichageOrdi = document.querySelector('.scoreOrdi')
let scoreHumain = 0;
let scoreOrdi = 0;

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
    affichageJoueur.value = scoreHumain;
    affichageOrdi.value = scoreOrdi;
};

choixDuJoueur(); //La fonction est appeller ici.

// comparaison
function comparaison(){
    if(choixUser == choixOrdi ){
        resultat.textContent = "Egalité";
    }
    else if((choixUser == "pierre" && choixOrdi == "feuille") || (choixUser == "feuille" && choixOrdi == "ciseaux") || (choixUser == "ciseaux" && choixOrdi == "pierre")){
        resultat.textContent = "Vous avez perdu";
        scoreOrdi++;
    }
    else{
        resultat.textContent = "Vous avez gagner";
        scoreHumain++;
    }
    affichageJoueur.value = scoreHumain;
    affichageOrdi.value = scoreOrdi;
    finDePartie();
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

function finDePartie() {
    if (scoreHumain == 3) {
        alert("Vous avez gagner!")
    } else if (scoreOrdi == 3) {
        alert("Vous avez perdue!")
    }
}


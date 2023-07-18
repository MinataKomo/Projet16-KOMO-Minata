alert('bonjpour les amis!');
console.log("hello la console");
console.log(14 + 25); 



// 1ER partie
console.log("hello");
let maVariableSuperCool = "kamelCase";
console.log(maVariableSuperCool);



// ll
 var unTexte = "Voici un texte";
 console.log(unTexte);
 unTexte  = "Nouveau texte...";
 console.log('unTexte');
 
//  2ème
const prenom = "Mami";
console.log(prenom);
// prenom = "Julie";
// console.log(prenom)

// 3èm
let unChiffre = 24;
unChiffre = 12;
console.log(unChiffre);

// 4èm
let chaine = "je suis une chaine de caractère";
let nouvelleChaine = "Chaine precedente :" + chaine + "degrés";
console.log(nouvelleChaine);
 

// 5èm
let chaineDeCaractère = "je suis une chaine";
let chiffre = 24;
let boolean = true;
let array = [ "je" , "suis", 24, false];
let object = {
    prenom: "ra",
    age: 2,
    ville: "Bordeaux",
};
console.log(typeof array);
let  arbre = null;
console.log(typeof arbre);

// 6èm
console.log(4 + 5);
let total = 0;
let p = 4;
total = total + 1;
console.log(total);
// 7èm
let x = 2;
let y = 5;
if(x < y){
    console.log("x est inferieur a y");
}
else{
    console.log("x est superieur a y");
}
if(x){
    console.log("x existe");
}
if(x === y || x > 3){
    console.log("true");
}
else{
    console.log("false");
}
if(x == y){
    console.log("true!");
}
else if(x == y) {
    console.log("   x et y sont egaux");
}
else{
    console.log(x + " et " + y + "ne sont pas du tout egaux");
}
// 8èm
x = y ? console.log("true!") : console.log("false!");

// 9èm
function faireQuelqueChose(){
    console.log(" je fais un truc");
    console.log("Trop cool");
}
faireQuelqueChose();

const faireUnetache = (tache) => {
    console.log("je fais : * + tache");
};
faireUnetache("les courses");
faireUnetache("le menage");
function calc( x , y) {
   return x + y;
}
(function() {
    console.log("je ne joue toute seule");
}
) ();
(() =>{
    console.log("je me joue aussi tout seul");
})();


// 10èm
let tota = 0;
function addition(x , y){
    tota = x + y;
    return tota;
}
function soustraction(x){
    tota += x;
    return tota;
}
function division(x){
    tota /= x;
    return tota;
}
function multiplication(x) {
    if (tota === 0) {
        return ( tota = x);
    }
    else{
        total *= x ;
        return tota;
    }
    
}
function reset(){
    tota = 0;
}
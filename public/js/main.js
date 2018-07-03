var guerrier = {
  nom : "Kakashi",
  age : 30,
  taille : 170,
  attaque : 1000,
  vie : 2550,
  arme : "kunai",
};

var mage = {
  nom : "Megumin",
  age : 17,
  taille : 157,
  attaque : 960,
  vie : 1950,
  arme : "baton",
};

var paysan = {
  nom : "Eren",
  age : 18,
  taille : 169,
  attaque  : 500,
  arme : "transformation"
}

var kakashi = guerrier.nom.length;
var k = guerrier.nom.charAt(0);
var weap = guerrier.arme.substring(1, 3);
var atout = ["rapide", "discret"];
var atout2 = ["instakill", "foudre"];
var atouts = atout.concat(atout2);

var megumin = mage.nom.length;
var m = mage.nom.charAt(0);
var weap = mage.arme.substring(2, 4);
var atout3 = ["mignonne", "courageuse"];
var atout4 = ["instakill", "feu"];
var atouts2 = atout3.concat(atout4);

var eren = paysan.nom.length;
var e = paysan.nom.charAt(0);
var weap = mage.arme.substring(1, 2);
var atout5 = ["transformation", "esprit vengeur"];
var atout6 = ["Titan", "force brute"];
var atouts3 = atout5.concat(atout6);
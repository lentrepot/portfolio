/*------- TABLEAU ASTROLOGIE----*/

function controlForm(event) {
    event.preventDefault();
    controlDate();
    alertprenom();
    astrof();
    astroc();
  }
  

  
  function controlDate(event) {
    alertjour();
    alertmois();
    alertannee();
  }
  
  function alertjour() {
    let champjour = document.getElementById("jour"),
      valjour = champjour.value;
    if (valjour == "") {
      alert("Entrez un jour");
    } else if (valjour < 1 || valjour > 31) {
      alert("Entrez un jour valide");
    }
  }
  
  function alertmois() {
    let champmois = document.getElementById("mois"),
      valmois = champmois.value;
    if (valmois === "x") {
      alert("choisissez un mois");
    }
  }
  
  function alertannee() {
    let champannée = document.getElementById("annee"),
      valannée = champannée.value;
    if (valannée == "") {
      alert("Entrez une année");
    } else if (valannée < 1900 || valannée > 2022) {
      alert("Entrez une année valide");
    }
  }
  
  function alertprenom() { 
     const champici = document.getElementById("ici");
    let champprenom = document.getElementById("inputprenom"),
      valprenom = champprenom.value;
    if (valprenom === "") {
      alert("Entrez un prénom");
    } else if (valprenom != "") {
      champici.innerHTML = "Bonjour" + " " + valprenom.big();
    }
  }
  
  var valid = document.getElementById("valid");
  
  /*................. afficher signe zodiac......................*/
  const astro1 = document.getElementById("signe1");
  const astro2 = document.getElementById("signe2");
  
  function astrof() {
    const champjour = document.getElementById("jour"),
      valjour = champjour.value;
    const champmois = document.getElementById("mois"),
      valmois = champmois.value;
    if ((valmois == 3 && valjour >= 21) || (valmois == 4 && valjour <= 20)) {
      astro1.innerHTML = "Bélier";
    } else if (
      (valmois == 4 && valjour >= 21) ||
      (valmois == 5 && valjour <= 21)
    ) {
      astro1.innerHTML = "Taureau";
    } else if (
      (valmois == 5 && valjour >= 22) ||
      (valmois == 6 && valjour <= 21)
    ) {
      astro1.innerHTML = "Gémeaux";
    } else if (
      (valmois == 6 && valjour >= 22) ||
      (valmois == 7 && valjour <= 22)
    ) {
      astro1.innerHTML = "Cancer";
    } else if (
      (valmois == 7 && valjour >= 23) ||
      (valmois == 8 && valjour <= 22)
    ) {
      astro1.innerHTML = "Lion";
    } else if (
      (valmois == 8 && valjour >= 23) ||
      (valmois == 9 && valjour <= 22)
    ) {
      astro1.innerHTML = "Vierge";
    } else if (
      (valmois == 9 && valjour >= 23) ||
      (valmois == 10 && valjour <= 22)
    ) {
      astro1.innerHTML = "Balance";
    } else if (
      (valmois == 10 && valjour >= 23) ||
      (valmois == 11 && valjour <= 22)
    ) {
      astro1.innerHTML = "Scorpion";
    } else if (
      (valmois == 11 && valjour >= 23) ||
      (valmois == 12 && valjour <= 21)
    ) {
      astro1.innerHTML = "Sagittaire";
    } else if (
      (valmois == 12 && valjour >= 22) ||
      (valmois == 1 && valjour <= 20)
    ) {
      astro1.innerHTML = "Capricorne";
    } else if (
      (valmois == 1 && valjour >= 21) ||
      (valmois == 2 && valjour <= 19)
    ) {
      astro1.innerHTML = "Verseau";
    } else if (
      (valmois == 2 && valjour >= 20) ||
      (valmois == 3 && valjour <= 20)
    ) {
      astro1.innerHTML = "Poisson";
    }
  }
  
  const arraycheval = [
    "1930",
    "1942",
    "1954",
    "1966",
    "1978",
    "1990",
    "2002",
    "2014",
    "2026",
  ];
  
  const arraychèvre = [
    "1931",
    "1943",
    "1955",
    "1967",
    "1979",
    "1991",
    "2003",
    "2015",
    "2027",
  ];
  
  const arraysinge = [
    "1932",
    "1944",
    "1956",
    "1968",
    "1980",
    "1992",
    "2004",
    "2016",
    "2028",
  ];
  
  const arraycoq = [
    "1933",
    "1945",
    "1957",
    "1969",
    "1981",
    "1993",
    "2005",
    "2017",
    "2029",
  ];
  
  const arraychien = [
    "1934",
    "1946",
    "1958",
    "1970",
    "1982",
    "1994",
    "2006",
    "2018",
    "2030",
  ];
  
  const arraycochon = [
    "1935",
    "1947",
    "1959",
    "1971",
    "1983",
    "1995",
    "2007",
    "2019",
    "2031",
  ];
  
  const arrayrat = [
    "1936",
    "1948",
    "1960",
    "1972",
    "1984",
    "1996",
    "2008",
    "2020",
    "2032",
  ];
  
  const arraybuffle = [
    "1937",
    "1949",
    "1961",
    "1973",
    "1985",
    "1997",
    "2009",
    "2021",
    "2033",
  ];
  
  const arraytigre = [
    "1938",
    "1950",
    "1962",
    "1974",
    "1986",
    "1998",
    "2010",
    "2022",
    "2034",
  ];
  
  const arraylapin = [
    "1939",
    "1951",
    "1963",
    "1975",
    "1987",
    "1999",
    "2011",
    "2023",
    "2035",
  ];
  
  const arraydragon = [
    "1940",
    "1952",
    "1964",
    "1976",
    "1988",
    "2000",
    "2012",
    "2024",
    "2036",
  ];
  
  const arrayserpent = [
    "1941",
    "1953",
    "1965",
    "1977",
    "1989",
    "2001",
    "2013",
    "2025",
    "2037",
  ];
  
  function astroc() {
    const champannée = document.getElementById("annee"),
      valannée = champannée.value;
    if (arraycheval.includes(valannée)) {
      astro2.innerHTML = "Le cheval";
    } else if(arraychèvre.includes(valannée)){
      astro2.innerHTML = "La chèvre";
    }else if(arraysinge.includes(valannée)){
      astro2.innerHTML = "Le singe";
    }else if(arraycoq.includes(valannée)){
      astro2.innerHTML = "Le coq";
    }else if(arraychien.includes(valannée)){
      astro2.innerHTML = "Le chien";
    }else if(arraycochon.includes(valannée)){
      astro2.innerHTML = "Le cochon";
    }else if(arrayrat.includes(valannée)){
      astro2.innerHTML = "Le rat";
    }else if(arraybuffle.includes(valannée)){
      astro2.innerHTML = "Le buffle";
    }else if(arraytigre.includes(valannée)){
      astro2.innerHTML = "Le tigre";
    }else if(arraylapin.includes(valannée)){
      astro2.innerHTML = "Le lapin";
    }else if(arraydragon.includes(valannée)){
      astro2.innerHTML = "Le dragon";
    }else if(arrayserpent.includes(valannée)){
      astro2.innerHTML = "Le serpent";
  }}
  
  valid.addEventListener("click", controlForm);
  
  
  
  /*------------ CALCULETTE -------------*/

  const ecran = document.getElementById("retour");
const bouton = document.querySelectorAll(".btnC");
const toto = document.getElementById("egual");

function pushSign(a) {
 
    ecran.innerHTML += a;                         
console.log(ecran.innerHTML);
};


toto.addEventListener("click",function(){
 
  let result = eval(ecran.innerHTML); 
  var essai = '"0 + 0"';
  
  let convert = JSON.stringify(ecran.innerHTML);

if(convert === essai){
    ecran.innerHTML = "la tête à toto";
}else{
   ecran.innerHTML = result;  
}
});
  
    
/*----------- PRISE DE CONTACT -----------*/

function clearDisplay() {
    sorry.innerHTML = "";
};




const val = document.getElementById('insTel');
var nbr = document.getElementById('nbrTel');

const rep = document.getElementById('reponseembauche');
  let i = "";
let n = 3;


val.addEventListener('click',function moins(){
const sorry = document.getElementById('sorry2')
n--;
  nbr.textContent = n ;
  if(n === 0){
    n = 1;

    sorry.innerHTML = "Desolé, plus de disponibilité !";
rep.parentNode.replaceChild(sorry, rep);
   
  }
})


   





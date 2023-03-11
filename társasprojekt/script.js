
var jatekTer;
var balPanel;
var jobbPanel;
var kartyakDiv;
var kartyaBox;
var pontokBox;
var tabla;
var korokBox;
var TempKartya;
var kivalaszt;
var felhuzottKartya;
var varak;

var gomb;
var kor = 1; // Hanyadik körben van a játék

var kartyak;
var tornyok;

var cellak;



function alapok(){
    var jatekter = document.createElement("div");
    jatekter.id = "jatekter";
    document.body.appendChild(jatekter);



    jatekTer = document.getElementById("jatekter");
    balPanel = document.createElement("div");
    jobbPanel = document.createElement("div");
    kartyakDiv = document.createElement("div");
    kartyaBox = document.createElement("div");
    pontokBox = document.createElement("div");
    tabla = document.createElement("div");
    korokBox = document.createElement("div");
    TempKartya = document.createElement("div");
    kivalaszt = document.createElement("div");
    felhuzottKartya = document.createElement("div");
    varak = document.createElement("div");

    gomb;
    kor = 1; // Hanyadik körben van a játék

    kartyak=[
        {id:1,value:-3,sign:''},
        {id:2,value:2,sign:''},
        {id:3,value:5,sign:''},
        {id:4,value:4,sign:''},
        {id:5,value:3,sign:''},
        {id:6,value:0,sign:'pap'},
        {id:7,value:-6,sign:''},
        {id:8,value:6,sign:''},
        {id:9,value:0,sign:'taliga'},
        {id:10,value:0,sign:'hegy'},
        {id:11,value:-5,sign:''},
        {id:12,value:4,sign:''},
        {id:13,value:0,sign:'sarkany'},
        {id:14,value:5,sign:''},
        {id:15,value:6,sign:''},
        {id:16,value:-4,sign:''},
        {id:17,value:1,sign:''},
        {id:18,value:-1,sign:''},
        {id:19,value:-2,sign:''},
        {id:20,value:3,sign:''},
        {id:21,value:2,sign:''},
        {id:22,value:0,sign:'hegy'},
        {id:23,value:1,sign:''}
    ]

    tornyok = [
        {id:1, value:1},
        {id:2, value:2},
        {id:3, value:3},
        {id:4, value:4},
    ]

    cellak = [
    ];
}


function JatekterBetoltes()
{   
    /* -------------------------------- balPanel gen -------------------------------- */
    jatekTer.appendChild(balPanel);
    balPanel.appendChild(kartyaBox);
    balPanel.appendChild(pontokBox);
    let kartyabox = document.createElement("div")
    kartyabox.innerHTML='<h2>Pakli</h2>';
    kartyaBox.appendChild(kartyabox);
    let pontokbox = document.createElement("div")
    pontokbox.innerHTML='<h2>Érmék</h2>';
    pontokBox.appendChild(pontokbox);

    /* -------------------------- Tábla gen ------------------------- */
    jatekTer.appendChild(tabla);
    
    /* -------------------------------- jobbPanel gen ------------------------------- */
    jatekTer.appendChild(jobbPanel);


    /* ------------------------------------ KorokBox gen ----------------------------------- */

    korokBox.className = "korok";
    korokBox.innerHTML = "<h2>Kör száma</h2>";
    let temp = kor;
    let korok = `${temp}. Kör!`;
    korokBox.innerHTML += korok;
    
    
    jobbPanel.appendChild(korokBox);

    /* --------------------------- felhuzottKartya gen -------------------------- */

    kartyakDiv.appendChild(TempKartya);
    kartyakDiv.appendChild(felhuzottKartya)

    kivalaszt.classList += "kivalaszt";
    TempKartya.appendChild(kivalaszt)

    felhuzottKartya.id = "felhuzottKartya"
    let tempFelhuzott = document.createElement("div");
    tempFelhuzott.className = "felhuzott"
    tempFelhuzott.setAttribute("onclick","felhuzottLerak(this)")
    felhuzottKartya.appendChild(tempFelhuzott);
    
    

    kartyakDiv.id = "kartyakDiv";
    jobbPanel.appendChild(kartyakDiv);

}

function JatekterElrendezes()
{
    balPanel.id = "balpanel";
    kartyaBox.id = "kartyabox";
    pontokBox.id = "pontokbox";
    tabla.id = "tabla";
    korokBox.id = "korokbox";
    TempKartya.id ="TempKartya"
}
var k = 1;
function TablaGeneralas()
{
    for(var i = 0; i < 5; i++)
    {
        var sorDiv = document.createElement("div");
        sorDiv.classList += "sordiv";
        for(var j = 0; j<6;j++)
        {
            var oszlopDiv = document.createElement("div");
            oszlopDiv.classList += " oszlopdiv";
            oszlopDiv.id = k;
            oszlopDiv.setAttribute("onclick","cellaRanyom(this)")
            cellak.push({id:k})
            oszlopDiv.dataset.sor=i+1;
            oszlopDiv.dataset.oszlop = j+1;
            k++;
            sorDiv.appendChild(oszlopDiv);
        }
        tabla.appendChild(sorDiv);
    }

}

function varTablaGeneralas()
{
    let az = 1;
    var sorDiv = document.createElement("div");
    sorDiv.classList += "v-sordiv";
    for(var j = 0; j<10;j++)
    {
        var oszlopDiv = document.createElement("div");
        oszlopDiv.classList += "v-oszlopdiv";
        oszlopDiv.setAttribute("onclick","varLerak(this)")
        oszlopDiv.dataset.az=az;
        sorDiv.appendChild(oszlopDiv);
        az++;
    }
    document.body.appendChild(sorDiv);

    for (let index = 0; index < 10; index++) {
        if (index < 4) {
            var div = document.querySelectorAll(`[data-az="${index + 1}"]`)[0];
            div.textContent="teszt"
        }
        else if (index < 7) {
            var div = document.querySelectorAll(`[data-az="${index + 1}"]`)[0];
            div.textContent="teszt2"
        }
        else if (index < 9) {
            var div = document.querySelectorAll(`[data-az="${index + 1}"]`)[0];
            div.textContent="teszt3"
        }
        else if (index < 10) {
            var div = document.querySelectorAll(`[data-az="${index + 1}"]`)[0];
            div.textContent="teszt4"
        }

    }

}


var pakli = [];
function pakliFeltoltese(){

    var hasznaltkepek = [];
    var hasznalthelyek = [];
    for (let index = 0; index < 23; index++)
    {
        
        var randomhely = Math.floor(Math.random()*23)+1;
        while(hasznalthelyek.includes(randomhely))
        {
            var randomhely = Math.floor(Math.random()*23)+1;
        }
        hasznalthelyek.push(randomhely);

        var randomkep = Math.floor(Math.random()*23)+1;
        while(hasznaltkepek.includes(randomkep))
        {
            var randomkep = Math.floor(Math.random()*23)+1;
        }
        hasznaltkepek.push(randomkep);
        pakli[randomhely-1]=kartyak[randomkep-1]; 
    }
    console.log(pakli)
}

function pontozas(){


}

function GombKirakasaFelhuzzotKirak(){
    var gomb = document.createElement("input");
    // gomb.style.display ="block"
    gomb.type = "button";
    gomb.value = "Kártya felhuzása";
    gomb.className="gomb";
    gomb.id=31;
    gomb.setAttribute("onclick","KepKirako(this)");
    kartyaBox.appendChild(gomb);

    var img = document.createElement("img");
    img.src = "img/" + pakli[gomb.id - 31].id + ".png";
    var temp = document.getElementsByClassName("felhuzott")[0];
    temp.appendChild(img);

}


// !!!! A rányom simán jelentése: Már kiválasztottuk mit fogunk csinálni, csak egy cellára lehet nyomni
var ranyom = false;


// !!!! A rányom pakli jelentése: Már huztunk egy kártyát, csak lerakni tudjuk
var ranyomPakli = false;


// !!!! A rányom vár jelentése: Már kiválasztottunk egy várat, csak lerakni tudjuk
var ranyomVar = false;


// !!!! A rányom vár jelentése: Már kiválasztottunk a felhuzott kartyat, csak lerakni tudjuk
var ranyomFelhuzott = false;


function KepKirako(div){
    if (!ranyom) {
        ranyom = true;
        ranyomPakli = true;
        gomb = div;
        gomb.setAttribute("onclick","");
        console.log(div.id)
        var temp = cellak[div.id-31];
        console.log(temp.id);
        console.log(temp);
        console.log(kivalaszt.querySelector("img"));
        var img = document.createElement("img");
        img.src = "img/" + pakli[gomb.id - 30].id + ".png";
        kivalaszt.appendChild(img);
    }

}

function pakliLerak(div){
    console.log(gomb.id - 31);
    console.log (pakli[gomb.id - 31].id)
    var img = document.createElement("img");
    img.src = "img/" + pakli[gomb.id - 30].id + ".png";
    div.appendChild(img);
    cellak[div.id-1] = kartyak[pakli[gomb.id-30].id-1]
    div.dataset.vanbenne=true;
    cellak[div.id-1].kartyae =true;

    div.setAttribute("onclick","")
    gomb.id++;
    gomb.setAttribute("onclick","KepKirako(this)");

    if (!(kivalaszt.querySelector("img")===null)) {
        var regikep = kivalaszt.querySelector("img");
        kivalaszt.removeChild(regikep)
    }
}

function felhuzottLerak(div){
    ranyomFelhuzott = true;
    ranyom = true;
}


/* ------------- Kell ahoz hogy tudjuk melyik várat választottuk ------------ */
var varSzam;

function varLerak(div) {
    ranyom = true;
    ranyomVar = true;
    varSzam = div.az
}




function cellaRanyom(div){
    
    console.log(ranyom)
    console.log(ranyomFelhuzott)
    console.log(ranyomPakli)
    console.log(ranyomVar)
    if (ranyom == false){
        return;
    }
    else if(ranyom){
        if (ranyomPakli) {
            pakliLerak(div);
            console.log(cellak)
        }
        else if(ranyomFelhuzott){

            let temp = document.getElementsByClassName("felhuzott")[0];
            console.log(document.getElementsByClassName("felhuzott")[0].querySelector("img"));
            if (!(temp.querySelector("img")===null)) {
                var regikep = temp.querySelector("img");
                temp.removeChild(regikep)
            }    
            var img = document.createElement("img");
            img.src = "img/" + pakli[0].id + ".png";
            div.appendChild(img);

            cellak[div.id-1] = kartyak[pakli[0].id-1]
            div.dataset.vanbenne=true;
            cellak[div.id-1].kartyae =true;


        }
        else if(ranyomVar) {
            
        }
        
    /* ------------ gomb visszarakása, készülödés a következö lépésre ----------- */




    /* ---------------------------- mindent nullázunk --------------------------- */
    ranyom = false
    ranyomPakli = false;
    ranyomVar = false;
    ranyomFelhuzott = false;


    /* ----------------------- van e még a pakliban kártya check ---------------------- */
     if (gomb.id == 53) { //53
        gomb.disabled=true;
        gomb.value = "Kifogyott a pakli";
        
    }

    /*! ------------------------------------ Meg kell nézni hogy tele van e a cellák ----------------------------------- */

    if (teleACella == true) {
        document.body.innerHTML = "";
        Main();
        kor++;

    }

    }
}


function teleACella(){
    /* ------------------------------------ Végig kell menni a cellán hogy van e minedegyiknek a data-vanbenne = true  ----------------------------------- */

    return false;
}

var pontszam = 50;

function ermeSzamolas(szam){
    const ermek = [100, 50, 10, 5, 1];
    const ermekVege = {};
    var maradek = szam;
  
    for (let i = 0; i < ermek.length; i++) {
      const ermeErtek = ermek[i];
      const menyi = Math.floor(maradek / ermeErtek);
      if (menyi > 0) {
        ermekVege[ermeErtek] = menyi;
        maradek -= ermeErtek * menyi;
      }
    }       
    console.log(ermekVege);
}






function Main()
{
    alapok();
    document.body.appendChild(jatekter);
    JatekterBetoltes();
    JatekterElrendezes();
    TablaGeneralas();
    varTablaGeneralas();
    pakliFeltoltese();
    // console.log(cellak)
    GombKirakasaFelhuzzotKirak();
    // pontozas();

}

Main();
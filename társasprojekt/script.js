
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
var kor = 0; // Hanyadik körben van a játék

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
    k = 1;

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
    kor++;
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
    pontokbox.innerHTML='<h2 id="ermekirat">Érmék</h2>';
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
var k;
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
            cellak.push({hely:k})
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
            var img = document.createElement("img")
            img.src = "tornyok/1.png"
            div.appendChild(img);

        }
        else if (index < 7) {
            var div = document.querySelectorAll(`[data-az="${index + 1}"]`)[0];
            var img = document.createElement("img");
            img.src = "tornyok/2.png"

            div.appendChild(img);
        }
        else if (index < 9) {
            var div = document.querySelectorAll(`[data-az="${index + 1}"]`)[0];
            var img = document.createElement("img");
            img.src = "tornyok/3.png";
            div.appendChild(img);
        }
        else if (index < 10) {
            var div = document.querySelectorAll(`[data-az="${index + 1}"]`)[0];
            var img = document.createElement("img");
            img.src = "tornyok/4.png";
            div.appendChild(img);
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

function sarkany(){
    /* ------------------------------------ a soran, oszlopában minden értéket nulláz, kivéve ha negativ----------------------------------- */

    
    let sor;
    let oszlop;
    for (let index = 0; index < cellak.length; index++) {
        if(cellak[index] && cellak[index].sign == "sarkany"){
            sor = index % 6;
            oszlop = Math.floor(index / 6);
            break
        }
    }
    for (let index = 0; index < cellak.length; index++) {
        if(cellak[index] && cellak[index].kartyae == true){
            if (index % 6+1 == sor || Math.floor(index / 6)+1 == oszlop && cellak[index].value > 0) {
                cellak[index].value == 0;
            }
        }
    }

    console.log(sor,oszlop)
}
function taliga(){
    /* ------------------------------------ a soran, oszlopában minden értéket dupláz----------------------------------- */

    let sor;
    let oszlop;
    for (let index = 0; index < cellak.length; index++) {
        if(cellak[index] && cellak[index].sign == "taliga"){
            sor = index % 6;
            oszlop = Math.floor(index / 6);
            break
        }
    }
    for (let index = 0; index < cellak.length; index++) {
        if(cellak[index] && cellak[index].kartyae == true){
            if (index % 6+1 == sor || Math.floor(index / 6)+1 == oszlop) {
                cellak[index].value *= 2
            }
        }
    }

    console.log(sor,oszlop)
}
function pap(){
    /* ------------------------------------ a vele 4 mellete lévő várnak a szintjét növeli 1-el ----------------------------------- */
    let sor;
    let oszlop;
    for (let index = 0; index < cellak.length; index++) {
        if(cellak[index] && cellak[index].sign == "pap"){
            sor = index % 6;
            oszlop = Math.floor(index / 6);
            if (cellak[index-1].kartyae == true) {
                cellak[index-1].kartyae++;
            }
            if (cellak[index+1].kartyae == true) {
                cellak[index+1].kartyae++;
            }
            if (cellak[index+6].kartyae == true) {
                cellak[index+6].kartyae++;
            }
            if (cellak[index-6].kartyae == true) {
                cellak[index-6].kartyae++;
            }
            break
        }
    }


}




function pontozas(){
    sarkany();
    taliga();
    pap();


    // sor
    for (let sor = 0; sor < 30; sor+=6) {
        var pont = 0;
        var szoroz = 0;
        for (let oszlop = sor; oszlop < sor+6; oszlop++){
            if(cellak[oszlop].kartyae==true){
                pont += cellak[oszlop].value;
            }
            else if(cellak[oszlop].kartyae==false){
                szoroz += cellak[oszlop].value;
            }
        }
        console.log(pont*szoroz);
        pontszam+= pont*szoroz;
    }



    // oszlop
    for (let sor = 0; sor < 6; sor++) {
        var pont = 0;
        var szoroz = 0;
        for (let oszlop = sor; oszlop < 30; oszlop+=6){
            if(cellak[oszlop].kartyae==true){
                pont += cellak[oszlop].value;
            }
            else if(cellak[oszlop].kartyae==false){
                szoroz += cellak[oszlop].value;
            }
        }
        console.log(pont*szoroz);
        pontszam+= pont*szoroz;
    }

    ermeSzamolas(pontszam);
    
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


function KepKirako(tempGomb){
    if (!ranyom) {
        ranyom = true;
        ranyomPakli = true;
        gomb = tempGomb;
        gomb.setAttribute("onclick","");
        console.log(tempGomb.id)
        var temp = cellak[tempGomb.id-31];
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
    cellak[div.id-1].vanbenne =true;

    
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
    div.setAttribute("onclick","")
}


/* ------------- Kell ahoz hogy tudjuk melyik várat választottuk ------------ */
var varSzam;

function varLerak(div) {
    if (ranyom == false) {
        ranyom = true;
        ranyomVar = true;
        varSzam = div.dataset.az;
        var img = document.createElement("img");
        img.src = div.querySelector("img").src;
        kivalaszt.appendChild(img);
    }

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

            // van e még a pakliban kártya check 
            if (gomb.id == 53) { //53
                gomb.disabled=true;
                gomb.value = "Kifogyott a pakli";
            }

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
            div.setAttribute("onclick","")


        }
        else if(ranyomVar) {
            var vardiv = document.querySelectorAll(`[data-az="${varSzam}"]`)[0];
            console.log(vardiv);
            document.createElement(img);
            var img = document.createElement("img");
            if (!(kivalaszt.querySelector("img")===null)) {
                var regikep = kivalaszt.querySelector("img");
                kivalaszt.removeChild(regikep)
            }
            console.log(varSzam)
            if (varSzam <= 4) {
                img.src = "tornyok/1.png";
                cellak[div.id-1] = tornyok[0];
            }
            else if (varSzam <= 7) {
                img.src = "tornyok/2.png"
                cellak[div.id-1] = tornyok[1];
            }
            else if (varSzam <= 9) {
                img.src = "tornyok/3.png"
                cellak[div.id-1] = tornyok[2];
            }
            else if (varSzam = 10) {
                img.src = "tornyok/4.png"
                cellak[div.id-1]= tornyok[3];
            }
            console.log(img);
            div.appendChild(img);
            vardiv.setAttribute("onclick","")
            cellak[div.id-1].kartyae = false;
            vardiv.innerHTML="";
            div.setAttribute("onclick","")
        }
        
        cellak[div.id-1].vanbenne =true;



    /* ---------------------------- mindent nullázunk --------------------------- */
    ranyom = false
    ranyomPakli = false;
    ranyomVar = false;
    ranyomFelhuzott = false;




    /*! ------------------------------------ Meg kell nézni hogy tele van e a cellák ----------------------------------- */

    if (teleACella()) {
        if(kor!= 3){
            setTimeout(function() {
                    pontozas();
                    alert("A körnek vége. A jelenlegi pontszámod: "+pontszam)
                    document.body.innerHTML = "";
                    Main();


                    ranyom = false;
                    ranyomPakli = false;
                    ranyomVar = false;
                    ranyomFelhuzott = false;
              }, 20);

        }
        else{
            setTimeout(function() {
            // pontozas();
            alert("A játéknak vége. A végső pontszámod: "+pontszam)
            kor = 0;
            pontszam = 50;


            document.body.innerHTML = "";
            Main();


            ranyom = false;
            ranyomPakli = false;
            ranyomVar = false;
            ranyomFelhuzott = false;
          }, 20);

        }

    }

    }
}


function teleACella(){
    /* ------------------------------------ Végig kell menni a cellán hogy van e minedegyiknek a vanbenne = true  ----------------------------------- */
    db = 0;
    for (let index = 0; index < cellak.length; index++) {    
        if (cellak[index].vanbenne == true) {
            db++;
        }
    }
    if (db == cellak.length) {
        console.log("teszt")
        return true;
    }
    else{
        return false;
    }


}

var pontszam = 50;

function ermeSzamolas(szam) {
    const ermek = [100, 50, 10, 5, 1];
    const ermekVege = [];
    var maradek = szam;
  
    for (let i = 0; i < ermek.length; i++) {
      const ermeErtek = ermek[i];
      const menyi = Math.floor(maradek / ermeErtek);
      if (menyi > 0) {
        ermekVege.push({ erme: ermeErtek, db: menyi });
        maradek -= ermeErtek * menyi;
      }
    }
  
    console.log(ermekVege);
    console.log(ermekVege[0].db); 
    for (let i = 0; i < ermekVege.length; i++) {
      const erme = ermekVege[i];
      console.log(erme.db);
      for (let j = 0; j < erme.db; j++) {
        var img = document.createElement("img");
        if (erme.erme == 100) {
          img.src = "penz/100.png";
          img.className ="erme";
        } else if (erme.erme == 50) {
          img.src = "penz/50.png";
          img.className ="erme";
        } else if (erme.erme == 10) {
          img.src = "penz/10.png";
          img.className ="erme";
        } else if (erme.erme == 5) {
          img.src = "penz/5.png";
          img.className ="erme";
        } else if (erme.erme == 1) {
          img.src = "penz/1.png";
          img.className ="erme";
        }
        pontokBox.appendChild(img);
      }
    }
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
    GombKirakasaFelhuzzotKirak();
    ermeSzamolas(pontszam);
}

Main();
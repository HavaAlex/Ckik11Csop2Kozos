var jatekTer = document.getElementById("jatekter");

var balPanel = document.createElement("div");
var kartyaBox = document.createElement("div");
var pontokBox = document.createElement("div");
var tabla = document.createElement("div");
var korokBox = document.createElement("div");
var TempKartya = document.createElement("div");

var kartyak=[
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

var tornyok = [
    {id:1, value:1},
    {id:2, value:2},
    {id:3, value:3},
    {id:4, value:4},
    {id:5, value:1},
    {id:6, value:2},
    {id:7, value:3},
    {id:8, value:4},
    {id:9, value:1},
    {id:10,value:2},
    {id:11,value:3},
    {id:12,value:4},
    {id:13,value:1},
    {id:14,value:2},
    {id:15,value:3},
    {id:16,value:4}
]

var cellak = [
];

function JatekterBetoltes()
{
    balPanel.appendChild(kartyaBox);
    balPanel.appendChild(pontokBox);
    jatekTer.appendChild(balPanel);
    jatekTer.appendChild(tabla);
    jatekTer.appendChild(korokBox);
    document.body.appendChild(TempKartya);

    kartyaBox.innerHTML = "kartyaBox";
    pontokBox.innerHTML = "pontokBox";
    tabla.innerHTML = "tabla";
    korokBox.innerHTML = "korokBox";
    TempKartya.innerHTML = "TempKartya";
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
            k++;
            sorDiv.appendChild(oszlopDiv);
        }
        tabla.appendChild(sorDiv);
    }

}

function cellakFeltoltese(){

    var hasznaltkepek = [];
    var hasznalthelyek = [];
    var hasznalttornyok = [];



    for (let index = 0; index < 23; index++)
    {
        
        var randomhely = Math.floor(Math.random()*30)+1;
        while(hasznalthelyek.includes(randomhely))
        {
            var randomhely = Math.floor(Math.random()*30)+1;
        }
        hasznalthelyek.push(randomhely);

        var randomkep = Math.floor(Math.random()*23)+1;
        while(hasznaltkepek.includes(randomkep))
        {
            var randomkep = Math.floor(Math.random()*23)+1;
        }
        hasznaltkepek.push(randomkep);
        cellak[randomhely-1].kartyae=true;
        cellak[randomhely-1].kartya=kartyak[randomkep-1]; 
    }
    for (let index = 0; index < 7; index++) {
        var randomhely = Math.floor(Math.random()*30)+1;
        while(hasznalthelyek.includes(randomhely))
        {
            var randomhely = Math.floor(Math.random()*30)+1;
        }
        hasznalthelyek.push(randomhely);

        var randomkep = Math.floor(Math.random()*16)+1;
        while(hasznalttornyok.includes(randomkep))
        {
            var randomkep = Math.floor(Math.random()*16)+1;
        }
        cellak[randomhely-1].kartyae=false;
        cellak[randomhely-1].kartya=tornyok[randomkep-1]; 
        
    }
    console.log(hasznalttornyok)
}

function pontozas(){
    
    for (let sor = 0; sor < 30; sor+=6) {
        var pont = 0;
        for (let oszlop = sor; oszlop < sor+6; oszlop++){
            if(cellak[oszlop].kartyae==true){
                pont += cellak[oszlop].kartya.value;
            }
        }
        console.log(pont);
    }
    for (let sor = 0; sor < 6; sor++) {
        var pont = 0;
        for (let oszlop = sor; oszlop < 30; oszlop+=6){
            if(cellak[oszlop].kartyae==true){
                pont += cellak[oszlop].kartya.value;
            }
        }
        console.log(pont);
    }

}

function cucc(){
    var gomb = document.createElement("input");
    gomb.style.display ="block"
    gomb.type = "button";
    gomb.value = "Kártya felhuzása";
    gomb.style.marginTop="10vw";
    gomb.style.marginLeft="9vw";
    gomb.className="gomb";
    gomb.id=31;
    gomb.setAttribute("onclick","KepKirako(this)");
    kartyaBox.appendChild(gomb);
}

var ranyom = false

var gomb;
function KepKirako(div){
    ranyom = true
    gomb = div;
    gomb.setAttribute("onclick","");
    console.log(div.id)
    var temp = cellak[div.id-31];
    console.log(temp.id);
    console.log(temp);
        if (temp.kartyae === true) {
            var img = document.createElement("img");
            img.src = "img/" + temp.kartya.id + ".png";
            TempKartya.appendChild(img);
        }
        else{
            var img = document.createElement("img");
            img.src = "tornyok/" + temp.kartya.id + ".png";
            TempKartya.appendChild(img);
        }
}

function cellaRanyom(div){
    console.log(ranyom);
    if (ranyom == true)  {
        var cella = div
        console.log(cellak[gomb.id-31].id);
        console.log(cella.id)
        console.log("van kep");
        console.log(cellak[gomb.id-31].id);
        if (cellak[gomb.id-31].kartyae==true) {
            var img = document.createElement("img");
            img.src = "img/" + cellak[gomb.id-31].kartya.id + ".png";
            cella.appendChild(img);
        }
        else{
            var img = document.createElement("img");
            img.src = "tornyok/" + cellak[gomb.id-31].kartya.id + ".png";
            cella.appendChild(img);
        }
        cella.setAttribute("onclick","")

        gomb.id++;
        gomb.setAttribute("onclick","KepKirako(this)");
        
    }
    ranyom = false

}


function Main()
{
    JatekterBetoltes();
    JatekterElrendezes();
    TablaGeneralas();
    cellakFeltoltese();
    console.log(cellak)
    cucc();
    // pontozas();

}

Main();


    // kepekBerakasa

    // for (let i = 0; i < cellak.length; i++) {
    //     if (cellak[i].kartyae === true) {
    //         var temphely = document.getElementById(i+31);
    //         var img = document.createElement("img");
    //         img.src = "img/" + cellak[i].kartya.id + ".png";
    //         img.width = "10px";
    //         img.height = "10px";
    //         temphely.appendChild(img);
    //     }
    //     else{
    //         var temphely = document.getElementById(i+31);
    //         var img = document.createElement("img");
    //         img.src = "tornyok/" + cellak[i].kartya.id + ".png";
    //         temphely.appendChild(img);
    //     }
    // }

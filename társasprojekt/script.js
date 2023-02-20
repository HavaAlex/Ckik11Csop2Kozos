var jatekTer = document.getElementById("jatekter");

var balPanel = document.createElement("div");
var kartyaBox = document.createElement("div");
var pontokBox = document.createElement("div");
var tabla = document.createElement("div");
var korokBox = document.createElement("div");

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

var cellak = [];

function JatekterBetoltes()
{
    balPanel.appendChild(kartyaBox);
    balPanel.appendChild(pontokBox);
    jatekTer.appendChild(balPanel);
    jatekTer.appendChild(tabla);
    jatekTer.appendChild(korokBox);

    kartyaBox.innerHTML = "kartyaBox";
    pontokBox.innerHTML = "pontokBox";
    tabla.innerHTML = "tabla";
    korokBox.innerHTML = "korokBox";
}
function JatekterElrendezes()
{
    balPanel.id = "balpanel";
    kartyaBox.id = "kartyabox";
    pontokBox.id = "pontokbox";
    tabla.id = "tabla";
    korokBox.id = "korokbox";
}
var k = 1;
function TablaGeneralas()
{
    for(var i = 0; i < 5; i++)
    {
        var sorDiv = document.createElement("div");
        sorDiv.classList += " sordiv";
        for(var j = 0; j<6;j++)
        {
            var oszlopDiv = document.createElement("div");
            oszlopDiv.classList += " oszlopdiv";
            oszlopDiv.id = k;
            cellak.push({id:k})
            k++;
            sorDiv.appendChild(oszlopDiv);
        }
        tabla.appendChild(sorDiv);
    }
    console.log(cellak)
}

function cellakFeltoltese(){

    var hasznaltkepek = [];
    var hasznalthelyek = [];


    for (let index = 0; index < 23; index++)
    {
        var randomhely = Math.floor(Math.random()*30)+1;
        while(cellak[randomhely] === undefined)
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
        cellak[randomhely].type="Kártya";
        cellak[randomhely].kartya=kartyak[randomkep]; 
        var temphely = document.getElementById(randomhely);
        var img = document.createElement("img");
        img.src = "img/" + randomkep + ".png";
        temphely.appendChild(img);
    }
    // for (let index = 23; index < 30; index++) {
    //     var
    //     cellak[index].type ="vár";
    //     cellak[index].kartya=tornyok[index-23];
        
    // }
    console.log(hasznalthelyek)
    console.log(cellak)
}
// hf feltoltes atir hogy minden kartyabol veletlenszeruen egy keruljön be
// tomb alapján jelenitsd meg a kepeket 
function Main()
{
    JatekterBetoltes();
    JatekterElrendezes();
    TablaGeneralas();
    cellakFeltoltese();
}
Main();
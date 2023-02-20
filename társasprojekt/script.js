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

var cellak = [
    // {
    //     id:1,
    //     type:"" //var, kartya
    //     //kartya/ var tartalma
    // }
];

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
var kepnevek = [];
var toronynevek = [];
var indexek = [] ;

function cellakFeltoltese(){
    for (let index = 0; index < 23; index++)
    {
        cellak[index].type="Kártya";
        cellak[index].kartya=kartyak[index]; 
    }
    for (let index = 23; index < 30; index++) {
        cellak[index].type ="vár";
        cellak[index].kartya=varak[index-23];
        
    }
    console.log(cellak)
}
//hf feltoltes atir hogy minden kartyabol veletlenszeruen egy keruljön be
// tomb alapján jelenitsd meg a kepeket
function Main()
{
    JatekterBetoltes();
    JatekterElrendezes();
    TablaGeneralas();
    cellakFeltoltese();

}
Main();
var jatekTer = document.getElementById("jatekter");

var balPanel = document.createElement("div");
var kartyaBox = document.createElement("div");
var pontokBox = document.createElement("div");
var tabla = document.createElement("div");
var korokBox = document.createElement("div");

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
var k = 0;
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
            k++;
            sorDiv.appendChild(oszlopDiv);
        }
        tabla.appendChild(sorDiv);
    }
}

function tablafeltoltes (db)
{
    var kepnevek = [];
    var indexek = [] ;
    for (let index = 0; index < db; index++)
    {
        
        var randomhely = Math.floor(Math.random()*29);
        
        if(!indexek.includes(randomhely)){
            indexek.push(randomhely);
            var temphely = document.getElementById(randomhely);
        }

        
        var img = document.createElement("img");
        var randomkep = Math.floor(Math.random()*23)+1;
        img.src = "img/" + randomkep + ".png";

        temphely.appendChild(img);


    }
}
function Main()
{
    JatekterBetoltes();
    JatekterElrendezes();
    TablaGeneralas();
    tablafeltoltes(5);
}
Main();
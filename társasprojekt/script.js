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

function tablafeltoltes ()
{
    var kepnevek = [];
    var toronynevek = [];
    var indexek = [] ;
    for (let index = 0; index < 23; index++)
    {
        var randomhely = Math.floor(Math.random()*30);
        while(indexek.includes(randomhely))
        {
            var randomhely = Math.floor(Math.random()*30);

        }
        // ? A random hely csak uj szam lehet jelenleg?
        indexek.push(randomhely);

        // a kocka kivalasztva
        var temphely = document.getElementById(randomhely);


        var randomkep = Math.floor(Math.random()*23)+1;
        while(kepnevek.includes(randomkep))
        {
            var randomkep = Math.floor(Math.random()*23)+1;
        }
        kepnevek.push(randomkep);
        // ? A randomkep csak uj szam lehet jelenleg?

        var img = document.createElement("img");
        img.src = "img/" + randomkep + ".png";
        temphely.appendChild(img);

    }
        // !kepek mar mukodnek, kell a torony
    for (let index = 0; index < 7; index++)
    {
        var randomhely = Math.floor(Math.random()*30);
        while(indexek.includes(randomhely))
        {
            var randomhely = Math.floor(Math.random()*30);

        }
        // ? A random hely csak uj szam lehet jelenleg?
        indexek.push(randomhely);

        // a kocka kivalasztva
        var temphely = document.getElementById(randomhely);

        var randomkep = Math.floor(Math.random()*16)+1;

        while(toronynevek.includes(randomkep))
        {
            var randomkep = Math.floor(Math.random()*16)+1;
        }
        toronynevek.push(randomkep);
        var img = document.createElement("img");
        img.src = "tornyok 1/" + randomkep +".png";
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
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
            k++;
            sorDiv.appendChild(oszlopDiv);
        }
        tabla.appendChild(sorDiv);
    }
}
var kepnevek = [];
var toronynevek = [];
var indexek = [] ;
function tablafeltoltes ()
{

    for (let index = 0; index < 23; index++)
    {
        var randomhely = Math.floor(Math.random()*30)+1;
        while(indexek.includes(randomhely))
        {
            var randomhely = Math.floor(Math.random()*30)+1;

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
        img.id = "pont"
        temphely.appendChild(img);

    }
        // !kepek mar mukodnek, kell a torony
    for (let index = 0; index < 7; index++)
    {
        var randomhely = Math.floor(Math.random()*30)+1;
        while(indexek.includes(randomhely))
        {
            var randomhely = Math.floor(Math.random()*30)+1;

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
        img.id = "nempont"
        temphely.appendChild(img);

    }
}

// var kepnevek = []; melyik kartya
// var indexek = [] ; hova ment
const pontok = [-3, 2, 5, 4, 3, 0, -6, 6, 0, 0, -5, 4, 0, 5, 6, -4, 1, -1, -2, 3, 2, 0, 1]; // a kartyak erteke

function pontozas() {

    var vegpontok = [0,0,0,0,0]

    for (var index = 0; index < kepnevek.length; index++) 
    {
        if (indexek[index] < 7) {
            var kep = kepnevek[index]
            vegpontok[0] += pontok[kep-1];
        }
        else if(indexek[index] < 13){
            var kep = kepnevek[index]
            vegpontok[1] += pontok[kep-1];
        }
        else if(indexek[index] < 19){
            var kep = kepnevek[index]
            vegpontok[2] += pontok[kep-1];
        }
        else if(indexek[index] < 25){
            var kep = kepnevek[index]
            vegpontok[3] += pontok[kep-1];
        }
        else if(indexek[index] < 31){
            var kep = kepnevek[index]
            vegpontok[4] += pontok[kep-1];
        }
    }
    // console.log(vegpontok[0]);
    // console.log(vegpontok[1]);
    // console.log(vegpontok[2]);
    // console.log(vegpontok[3]);
    // console.log(vegpontok[4]);
    var pontokhely = document.createElement("div");
    var temp = document.createElement("p");
    temp.innerHTML = vegpontok[0];
    pontokBox.appendChild(pontokhely)
    temp.innerText+=", "
    temp.innerHTML += vegpontok[1];
    pontokhely.appendChild(temp);
    temp.innerText+=", "
    temp.innerHTML += vegpontok[2];
    pontokhely.appendChild(temp);
    temp.innerText+=", "
    temp.innerHTML += vegpontok[3];
    pontokhely.appendChild(temp);
    temp.innerText+=", "
    temp.innerHTML += vegpontok[4];
    pontokhely.appendChild(temp);

  }

function Main()
{
    JatekterBetoltes();
    JatekterElrendezes();
    TablaGeneralas();
    tablafeltoltes();
    pontozas();
    console.log(kepnevek)
    console.log(indexek)
}
Main();
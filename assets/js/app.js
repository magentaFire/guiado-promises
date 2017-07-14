var indice = 1;

getJSON("data/earth-like-results.json")
.then(function(mensaje){
    return getJSON(mensaje.results.forEach(function(planeta){
        getJSON(planeta).then(function(planeta){
            creaTarjeta(planeta);
            })
        })
)});

function creaTarjeta(planeta){
    var getRow = document.getElementById("rowContainer");
    var creaCardContainer = document.createElement("DIV");
    creaCardContainer.setAttribute("id", "cardContainer" + indice);
    creaCardContainer.setAttribute("class", "col m12");
    getRow.appendChild(creaCardContainer);
    var creaCardType = document.createElement("DIV");
    creaCardType.setAttribute("class", "card");
    creaCardType.setAttribute("id", "cardType" + indice);
    document.getElementById("cardContainer" + indice).appendChild(creaCardType);
    var creaCardImg = document.createElement("DIV");
    creaCardImg.setAttribute("class", "card-image");
    creaCardImg.setAttribute("id", "cardImage" + indice);
    document.getElementById("cardType" + indice).appendChild(creaCardImg);
    var creaCardContent = document.createElement("DIV");
    creaCardContent.setAttribute("class", "card-content");
    creaCardContent.setAttribute("id", "cardContent" + indice);
    document.getElementById("cardType" + indice).appendChild(creaCardContent);
    var creaImgNode = document.createElement("IMG");
    creaImgNode.setAttribute("src", "/assets/img/img_0" + indice + ".jpg");
    document.getElementById("cardImage" + indice).appendChild(creaImgNode);
    var creaParagraphNode = document.createElement("P");
    creaParagraphNode.setAttribute("id", "cardParagraph" + indice);
    document.getElementById("cardContent" + indice).appendChild(creaParagraphNode);
    var creaParagraphNode = document.createElement("P");
    creaParagraphNode.setAttribute("class", "planeta-nombre" + indice);
    creaParagraphNode.setAttribute("id", "planetaNombre" + indice);
    document.getElementById("cardParagraph" + indice).appendChild(creaParagraphNode);
    document.getElementById("planetaNombre" + indice).innerText = planeta.pl_name;
    var creaParagraphNode = document.createElement("P");
    creaParagraphNode.setAttribute("class", "planeta-disc" + indice);
    creaParagraphNode.setAttribute("id", "planetaDisc" + indice);
    document.getElementById("cardParagraph" + indice).appendChild(creaParagraphNode);
    document.getElementById("planetaDisc" + indice).innerText = "Se descubrió en el año: " + planeta.pl_disc;
    var creaParagraphNode = document.createElement("P");
    creaParagraphNode.setAttribute("class", "planeta-radio" + indice);
    creaParagraphNode.setAttribute("id", "planetaRadio" + indice);
    document.getElementById("cardParagraph" + indice).appendChild(creaParagraphNode);
    document.getElementById("planetaRadio" + indice).innerText = "Tiene un radio de: " + planeta.ra + " km";
    indice += 1;
}

function getJSON(url) {
    return new Promise(function (resolve, reject) {
        var ajax = new XMLHttpRequest();
        ajax.open("GET", url);
        ajax.send();
        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(JSON.parse(ajax.responseText));
            }
        };
    });
};


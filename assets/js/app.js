getJSON("data/earth-like-results.json")
.then(function(mensaje){
    return getJSON(mensaje.results.forEach(function(planeta){
        getJSON(planeta).then(function(planeta){
            creaTarjeta(planeta);
            })
        })
)});

function creaTarjeta(planeta){
    console.log(planeta);
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


var url = "http://api.waqi.info/feed/geo::lat;:lng/?token=:token";
var error = document.getElementById("error");
var city = document.getElementById("current-loc");
var aqi = document.getElementById("current-aqi");
var welcome = document.getElementById("welcome");
var content = document.getElementById("main");

function obtenerLocalizacion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(procesarPosicion);
    } else {
        error.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function procesarPosicion(position) {

    welcome.className = "hidden-element";
    content.className = "";

    var lat = position.coords.latitude;
    var long = position.coords.longitude; 
    var url = "https://api.waqi.info/feed/geo:" + lat + ";" + long + "/?token=" + "4e74e4e29ca5b7b534c509c493f5cf41c938aafb";
    var jsonRaw = hacerGetHTTP(url);
    var jsonObjeto = JSON.parse(jsonRaw);

    aqi.innerHTML = jsonObjeto.data.aqi;
    city.innerHTML =jsonObjeto.data.city.name;
    
}

function ipLocalizacion() {

    welcome.className = "hidden-element";
    content.className = "";

    var url = "https://api.waqi.info/feed/here/?token=" + "4e74e4e29ca5b7b534c509c493f5cf41c938aafb";
    var jsonRaw = hacerGetHTTP(url);
    var jsonObjeto = JSON.parse(jsonRaw);

    aqi.innerHTML = jsonObjeto.data.aqi;
    city.innerHTML =jsonObjeto.data.city.name;
}

function hacerGetHTTP(laURL)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", laURL, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

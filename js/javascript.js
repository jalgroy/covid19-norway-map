Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
}

const dateZero = new Date("2020-02-26");

function fnToName(fn) {
    let num = parseInt(fn);
    switch (num) {
        case 11: return "Rogaland";
        case 38: return "Vestfold og Telemark";
        case 18: return "Nordland";
        case 42: return "Agder";
        case 34: return "Innlandet";
        case 15: return "Møre og Romsdal";
        case 46: return "Vestland";
        case 3: return "Oslo";
        case 30: return "Viken";
        case 50: return "Trøndelag";
        case 54: return "Troms og Finnmark";
        default: return "";
    }

}

function fnToInd(fn){
    let num = parseInt(fn);
    switch (num) {
        case 11: return 0;
        case 38: return 1;
        case 18: return 2;
        case 42: return 3;
        case 34: return 4;
        case 15: return 5;
        case 46: return 6;
        case 3: return 7;
        case 30: return 8;
        case 50: return 9;
        case 54: return 10;
        default: return -1;
    }
}

function dateToString(date){
    let months = ["Jan.","Feb.","Mars","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Des."];
    return date.getDate() + ". " + months[date.getMonth()] + " " + date.getFullYear();
}

function style(fylke) {
    return { fillColor: getColor(fylke.properties.infected),
        weight: 1,
        opacity: 1,
        color: 'black',
        fillOpacity: 0.7
    };
}

function getColor(inf) {
    return  inf > 25000 ? "#220000" :
            inf > 10000 ? "#440000" :
            inf > 5000  ? "#660000" :
            inf > 2000  ? "#880000" :
            inf > 1000  ? "#AA0000" :
            inf > 500   ? "#CC0000" :
            inf > 200   ? "#EE0000" :
            inf > 100   ? "#FF1111" :
            inf > 50    ? "#FF3333" :
            inf > 25    ? "#FF5555" :
            inf > 10    ? "#FF7777" :
            inf > 5     ? "#FF9999" :
            inf > 0     ? "#FFBBBB" :
                          "#CCCCCC" ;
}

var geojson;

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 2,
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
    });
}

var c = 0;

function setDay(d){
    let tableHtml = "<table class='infotable'><tr><th>Fylke</th><th>Antall smittede</th></tr>";
    let sum = 0;
    for (let fn in data[d]) {
        fylker["features"][fnToInd(fn)]["properties"]["infected"] = data[d][fn];
        tableHtml += "<tr><td>";
        tableHtml += fylker["features"][fnToInd(fn)]["properties"]["navn"];
        tableHtml += "</td><td class='numinf'>" + data[d][fn] + "</td></tr>";
        sum += data[d][fn];
    }
    tableHtml += "<tr><td><b>Totalt</b></td><td class='numinf'><b>" + sum + "</b></td></tr></table>"
    if(map){
        map.remove();
    }
    // Build map
    map = L.map('map', {zoomSnap: 0.1, zoomControl: false, scrollWheelZoom: false, doubleClickZoom: false, dragging: false, touchZoom: false});
    geojson = L.geoJson(fylker, {
        style: style,
        onEachFeature: onEachFeature
    }).addTo(map);
    map.fitBounds([[72,2],[55,30]])

    // Add date
    let date = dateToString(dateZero.addDays(d));
    let dateMarker = new L.marker([66,1], { opacity: 0 });
    dateMarker.bindTooltip(date, {permanent: true, className: "date-label", offset: [0, 0] });
    dateMarker.addTo(map);

    // Add data:
    let infoMarker = new L.marker([62,15.5], { opacity: 0 }); 
    infoMarker.bindTooltip(tableHtml, {permanent: true, className: "table-label", offset: [0, 0] });
    infoMarker.addTo(map);

    // Add reastart icon
    let restartMarker = new L.marker([65.2,4], { opacity: 0 });
    let restartTooltip = L.tooltip( {permanent: true, className: "restart", offset: [0, 0] });
    restartTooltip.setContent("<img src='img/restart.png' onclick='restart()'/>");
    restartMarker.bindTooltip(restartTooltip);
    restartMarker.addTo(map);
    let tEl = restartTooltip.getElement();
    tEl.style.pointerEvents = "auto";
    tEl.addEventListener('click', restart);
}


var map;

setDay(0);

var day = 0;
var animation = setInterval(updateDay, 1000);

function updateDay(){
    day++;
    if(day >= data.length){
        clearInterval(animation);
        return
    }
    setDay(day);
    console.log(Date.now()/1000);
}

function restart(){
    clearInterval(animation);
    day = 0;
    setDay(0);
    animation = setInterval(updateDay, 1000);
}

function showHelp() {
    document.getElementById("help").style.display = "block";
    setTimeout(function(){
    document.getElementById("help").className = "visible";
    },10);
}
function hideHelp() {
    document.getElementById("help").className = "hidden";
    setTimeout(function(){
        document.getElementById("help").style.display = "none";
    },1000);
}

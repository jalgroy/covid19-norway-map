for (let fn in data[0]) {
    for(let i = 0; i < fylker["features"].length; i++){
        if(fylker["features"][i]["properties"]["fylkesnummer"] == fn){
            fylker["features"][i]["properties"]["infected"] = data[0][fn];
            console.log(fylker["features"][i]["properties"]);
        }
    }
}

console.log(fylker)

var map = L.map('map');

var positron = 
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(map);

L.geoJson(fylker).addTo(map);

map.setView([62,5],4)

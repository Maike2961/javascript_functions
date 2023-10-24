
function mostrar(dados){
    //passando JSON para objeto javascript
    var dados_obj = JSON.parse(dados)
    console.log("A temperatura em Londres é de: "+dados_obj.main.temp+ " graus Celsius")
}


function tempo(callback){
var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

xhttp.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        callback(this.responseText)
        
    }
}

xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=8c8b26f1d62554013a32490deef39884");
xhttp.send();
}
tempo(mostrar);
var respJson = []
function pegar_paises(callback){
    $.ajax({
        url: "https://restcountries.com/v3.1/all",
        type: "GET",
        dataType: "json"
        //os dados da url estara no parametro data, que estara na funcao principal passando o parametro callback 
    }).done(function(data){
        callback(data)
    }).fail(function(){
        console.log("Error")
    });
}

function popular_paises(dados){
    const pai = document.getElementById("list")
    respJson = dados
    for(let a = 0; a < respJson.length; a++){
        console.log(respJson[a])
        pai.innerHTML += "<li id="+a+" onclick='clickMe("+a+")'>" + respJson[a].name.common + "</li>"
    } 
}

function clickMe(index){
    var name = respJson[index].name.common
    alert("A capital de "+ name + " é "+respJson[index].capital)
    alert("O continente onde está "+name+" fica na "+respJson[index].continents)
}

//ao declarar a função pegar_paises é necessario colocar a função popular_paises para printar no console
pegar_paises(popular_paises)
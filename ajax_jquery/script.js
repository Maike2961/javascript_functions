$.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=8c8b26f1d62554013a32490deef39884",
    type: "GET",
    dataType: "json",
    success: function(data){
        console.log(data.main.temp_max);
        console.log(data.main.temp_min);
        console.log(data.main.temp);
        console.log(data);
    },
    error: function(){
        console.log("Erro na requisição");
    }
});
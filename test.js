$(document).ready(function(){
    $(".hungry").hide();
    $(".sad").hide();
    $("#btnSad").click(function(event ) {
        $(".sad").empty()
        $(".hungry").hide();
        $.get("https://api.chucknorris.io/jokes/random",function(response){
        console.log(response);
        $(".sad").append("<img src='" + response.icon_url + "'>");
        $(".sad").append("<p id = 'pSad'>"+ response.value + "</p>");
        $(".sad").show();
        
     });
    });
    

    
    $("#btnHun").click(function() {
        $(".hungry").empty()
        $(".sad").hide();
        const settings2 = {
        "async": true,
        "crossDomain": true,
        "url": "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=meat",
        "method": "GET",
        "headers": {
        "x-rapidapi-key": "9a0abae874msh2da2d3068725f2ep1a9982jsn114baac1ccb5",
        "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com"
}
};

$.ajax(settings2).done(function (response) {

    console.log(response);
    var rand = Math.floor(Math.random() * (10 - 1 + 1) + 1); // random number between 1 - 10
    var src = response.hints[rand].food.image;
    if(src != null)
        $(".hungry").append("<img src='" + response.hints[rand].food.image + "'>")
    else
        $(".hungry").append("<img src='Hungry1.png'>")

    $(".hungry").append("<p id = 'pHun'> You can eat " + response.hints[rand].food.label+"  <br> Food Category: "
    + response.hints[rand].food.category + " <br> <span> Calories: </span> "
     + response.hints[rand].food.nutrients.ENERC_KCAL +  " <br> <span> Fat: </span> " +
     response.hints[rand].food.nutrients.FAT + " <br> <span> Fiber: </span>"+ 
     response.hints[rand].food.nutrients.FIBTG + " <br> <span> Protien: </span>"+ response.hints[rand].food.nutrients.PROCNT +"</p>");
    $(".hungry").show();


});
    });


});
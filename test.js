$(document).ready(function(){
    $(".hungry").hide();
    $(".sad").hide();
    var countSad = 0 ;
    var countHu = 0;
    $("#btnSad").click(function(event ) {
       if(countSad > 0)
       {
        $(".sad").empty()
       }
       // $(".sad").off(event);
        $(".hungry").hide();
        $.get("https://api.chucknorris.io/jokes/random",function(response){
        console.log(response);
        $(".sad").append("<img src='" + response.icon_url + "'>");
        $(".sad").append("<p id = 'pSad'>"+ response.value + "</p>");
        $(".sad").show();
        countSad++;
     });
    });
    

    
    $("#btnHun").click(function() {
        if(countHu > 0)
       {
        $(".hungry").empty()
       }
    $(".sad").hide();
    const settings2 = {
    "async": true,
    "crossDomain": true,
    "url": "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple",
    "method": "GET",
    "headers": {
    "x-rapidapi-key": "9a0abae874msh2da2d3068725f2ep1a9982jsn114baac1ccb5",
    "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com"
}
};

$.ajax(settings2).done(function (response) {

    $(".hungry").append("<img src='" + response.hints[0].food.image + "'>")
   
    $(".hungry").append("<p id = 'pHun'> You can eat " + response.hints[0].food.label+" it's good for your health and low of calorie <br>  calories: "+ response.hints[0].food.nutrients.CHOCDF+ "<p>");
    
    // $(".hungry").append("<p> " +  "<p>");
    $(".hungry").show();
    countHu++;

});
    });


});

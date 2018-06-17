$(document).ready(function(){
    var quote = $("#quote").text();
    var author = $("#author").text();
    $("#tweet").attr('href', function() {
          return this.href + "'" + quote + "'" + " " + author;
    });
    $("#btn").click(function(){
        $.getJSON("https://talaikis.com/api/quotes/random/", function(data){
        $("#author").html(data.author);
        $("#quote").html(data.quote);
        $("#tweet").attr('href', function() {
          return "https://twitter.com/intent/tweet?&text=" + "'" + data.quote + "'" + data.author;
       });
        console.log(data);
      });//end getJSON
      generateBgColor();
      console.log($("#tweet").attr("href"));
  });//end click
  
});//end ready

function generateBgColor(){
  var colors = ["#FF1744", "#1E88E5", "#FF3D00", "#00C853", "#BDBDBD", "#FFEA00", "#B71C1C", "#0D47A1", "#64FFDA"];
  var random = Math.floor(Math.random() * colors.length) + 1;
   $("body").css({"background-color": colors[random], "transition":"background-color 0.5s ease"});
}



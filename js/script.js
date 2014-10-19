$(document).ready(function(){

  $("button").click(function(){
//////////Get element of text box
            var city = $('#text').val();
            alert( "You choose"+" "+city );
////////////GET 
        $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q="+city,
                type: 'GET',
                dataType : 'json',
                success: function(tomer){
               $('#result3').append(tomer["coord"]["lat"]);
              $('#result2').append(tomer["coord"]["lon"]);
             $('#result4').append(tomer["main"]["humidity"]);
            $('#result1').append(tomer["sys"]["country"]);
          $('#result5').append(tomer["wind"]["speed"]);

                }
              });
            
    }); 
/////catagory Menu select event//////
              $("#catagoryMenu").change(function(){
              $("#textSubCategory").text("Choose your sub catagory" + " on-" + $("#catagoryMenu").val());
              $("#subCatagoryMenu").hide();
              $("#subCatagoryMenu").show(1000);
              $('#subCatagoryMenu').val('');
              });

/////Sub catagory Menu select event//////

            $("#subCatagoryMenu").change(function(){
              $("#youtube").hide();
              $("#youtube").show(1000);
              });

/////youtube //////////






});
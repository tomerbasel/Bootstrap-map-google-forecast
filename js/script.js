$(document).ready(function(){
  ////Click

 // $("#subCatagoryMenu").hide();


  $("buttonSend").click(function(){
          ///Get element of text box
            var city = $('#text').val();
            alert( "You choose"+" "+city );
          ////GET
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

  $("#catagoryMenu").change(function(){

     $("#subCatagoryMenu").show(1000);
  });




});
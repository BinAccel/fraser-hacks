function func()
{
  var city = ucwords(document.getElementById('start').value,true);
  $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address="+city+"&key=AIzaSyBKZNpUw0X6MhSkHqrbWQSLi2OGpmR5-ms").then(function(data){
    console.log(data[0]);
  });
}

//http://stackoverflow.com/questions/2017456/with-jquery-how-do-i-capitalize-the-first-letter-of-a-text-field-while-the-user
function ucwords(str,force){
  str=force ? str.toLowerCase() : str;  
  return str.replace(/(\b)([a-zA-Z])/g,
           function(firstLetter){
              return   firstLetter.toUpperCase();
           });
}

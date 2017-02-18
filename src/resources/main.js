function loc()
{
  var city = ucwords(document.getElementById('start').value,true);
  $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address="+city+"&key=AIzaSyBKZNpUw0X6MhSkHqrbWQSLi2OGpmR5-ms").then(function(data){
    console.log(data.results[0].geometry.location);
  });
}

function func()
{
  $.getJSON("https://api.typeform.com/v1/form/X1GyQx?key=a9c94ac5b726fcf6e52ac7f60849b223bc82dbb3").then(function(data){
    console.log(data);
  });
  if ("geolocation" in navigator){ //check geolocation available 
          //try to get user current location using getCurrentPosition() method
          navigator.geolocation.getCurrentPosition(function(position){ 
                  $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?latlng="+position.coords.latitude+","+ position.coords.longitude+"&key=AIzaSyBKZNpUw0X6MhSkHqrbWQSLi2OGpmR5-ms").then(function(data){
                    console.log(data.results[0].formatted_address);
                   if($('input[name="work"]:checked').val()=="male"){
                      window.location.href = '../src/work.html';
                     var user = new Student {document.getElementById('fName').value,   document.getElementById('lName').value, document.getElementById('uName').value, document.getElementById('Pass').value,  document.getElementById('Email').value};
                    
                   
                  
                   }
                    else{
                      window.location.href = '../src/hire.html';
                       var user = new Employer {document.getElementById('fName').value,   document.getElementById('lName').value, document.getElementById('uName').value, document.getElementById('Pass').value,  document.getElementById('Email').value};
                    
                    }
                    
                  });
              });
      }else{
          console.log("Browser doesn't support geolocation!");
      }
}
function Student(fName, lName, uName, Pass, Email){
}

function Employer(fName, lName, uName, Pass, Email){
}

//http://stackoverflow.com/questions/2017456/with-jquery-how-do-i-capitalize-the-first-letter-of-a-text-field-while-the-user
function ucwords(str,force){
  str=force ? str.toLowerCase() : str;  
  return str.replace(/(\b)([a-zA-Z])/g,
           function(firstLetter){
              return   firstLetter.toUpperCase();
           });
}

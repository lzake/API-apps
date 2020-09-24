//jshint esversion:6

$(document).ready(function() {
  // IP/location API
function getIP(zip){
    $.ajax({
      url: 'https://ipapi.co/json/',
      data: JSON,
      success: function(response) {
        const zip = response.postal;
      }
    });

  }

  // Weather API
  let getWeather = (zip) => {
    let APIKey = 'ede7670e8ec9da1d4576253840298116';
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip + '&APPID=' + APIKey,
      data: JSON,
      success: function(response) {
        var resultTemp = Math.floor(response.main.temp - 273.15);
        console.log(resultTemp);
      }
    });
  };


  // Default popup for unsued icons
  let popup = () => {
    if ($('img').hasClass('onclick')) {
      setTimeout(function() {
        alert('You have no permission to do this!');
      }, 200);
    }
  };

  // Effect on icon click
  $('img').on('click', function() {
    let iconClass = this.id;
    let icons = ['my-computer', 'bin'];
    let matchCheck = icons.find(x => x == iconClass);
    // console.log(matchCheck);
    if (iconClass == matchCheck) {
      // Default behaivor (popup) for unused buttons
      $(this).addClass('onclick');
      popup();
      setTimeout(function() {
        $('img').removeClass('onclick');
      }, 600);




    }
    // Get ONLY location
    if (iconClass == 'napster') {
      $(this).addClass('onclick');
      setTimeout(function() {
        $('img').removeClass('onclick');
      }, 200);
      getIP();


      // Get weather based on location
    }
    if (iconClass == 'internet-explorer') {
      $(this).addClass('onclick');
      setTimeout(function() {
        $('img').removeClass('onclick');
      }, 200);

      // Get weather based on result of IP function?
getWeather(getIP(zip));



    } else {
      console.log('error');
    }
  });



});

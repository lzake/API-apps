//jshint esversion:6

$(document).ready(function () {
  // IP/location API !- you arent going to get this. This is classified as intrusive and will be
  // declared as malware 95% of the time, and will be blocked by client. Use another method for getting zip code, such as asking. Also
  // Its probably illegal in europe lol

  // function getIP() {
  //   // you dont need zip here, its not something you pass in, but instead something you are expecting
  //   $.ajax({
  //     url: "http://ipapi.co/json/",
  //     data: JSON,
  //     success: function (response) {
  //       console.log("api response is ", response);
  //       const zip = response.postal;
  //     },
  //   });
  // }

  // Weather API
  let getWeather = (zip) => {
    console.log("Getting weather from zip code: ", zip);
    let APIKey = "ede7670e8ec9da1d4576253840298116";
    $.ajax({
      url:
        "http://api.openweathermap.org/data/2.5/weather?zip=" +
        zip +
        "&APPID=" +
        APIKey,
      data: JSON,
      success: function (response) {
        var resultTemp = Math.floor(response.main.temp - 273.15);
        console.log(resultTemp);
      },
    });
  };

  // Default popup for unsued icons
  let popup = () => {
    if ($("img").hasClass("onclick")) {
      setTimeout(function () {
        alert("You have no permission to do this!");
      }, 200);
    }
  };

  // Effect on icon click
  $("img").on("click", function () {
    let iconClass = this.id;
    let icons = ["my-computer", "bin"];
    let matchCheck = icons.find((x) => x == iconClass);
    if (iconClass == matchCheck) {
      // Default behavior (popup) for unused buttons
      $(this).addClass("onclick");
      popup();
      setTimeout(function () {
        $("img").removeClass("onclick");
      }, 600);
    }
    // Get ONLY location
    // if (iconClass == "napster") {
    //   $(this).addClass("onclick");
    //   setTimeout(function () {
    //     $("img").removeClass("onclick");
    //   }, 200);
    //   // getIP();  // again, you need another method of getting zip code. Also this doesnt return anything, or get assigned to anything.
    //   // Get weather based on location
    // }

    if (iconClass == "internet-explorer") {
      $(this).addClass("onclick");
      setTimeout(function () {
        $("img").removeClass("onclick");
      }, 200);

      // Get weather based on result of IP function?
      getWeather(80909); // again, you need another method of getting zip code.
    } // you dont want an else here, otherwise it will always error with any icon except internet explorer being clicked.
    // else {
    //   console.log("error");
    // }
  });
});

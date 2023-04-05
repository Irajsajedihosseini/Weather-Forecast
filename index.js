var apiKey = "13c6e723770c96805c909af8c7ff617b";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
   
const searchBox = $(".search input");
const searchBtn = $(".search button");

// console.log(searchBox);


async function checkWeather(city) { 
    const response = await fetch(
      apiUrl + city + `&appid=${apiKey}`
    );
    var data = await response.json();
    // console.log(data);
    if (response.status === 404) {
        $(".error").css("display", "block");
        $(".weather").css("display", "none");

    }
    else { 
       $(".city").html(data.name);
       $(".temp").html(Math.round(data.main.temp) + "°c");
       $(".humidity").html(data.main.humidity + "%");
       $(".wind").html(data.wind.speed + "km/h");
       console.log(data.weather[0].main);
       var picSrc = "images/" + data.weather[0].main + ".png";
        $(".weather .weather-img").attr("src", picSrc);
        $(".error").css("display", "none");
        $(".weather").css("display", "block");
    }

    
}

searchBtn.click(() => { 
    // console.log(searchBox.val());
    if (searchBox.val() == "") {
        alert("Please enter city name!");
    } else { 
      checkWeather(searchBox.val());
    }
});

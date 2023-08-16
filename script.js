const apiKey="d9c37424e9648babfde1f3855b0329e1";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchName=document.querySelector('.search input');
const SearchBtn=document.querySelector('.search button');
const weatherIcon=document.querySelector('.weather-icon');
async function checkWeather(city){
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`)
    var data=await response.json();
    console.log(data);
    if(response.status=='404'){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        document.querySelector(".weather-icon").src=
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
        if(data.weather[0].main=='Clouds'){
            weatherIcon.src="images/clouds.png"
        }
        if(data.weather[0].main=='Clear'){
            weatherIcon.src="images/clear.png"
        }
        if(data.weather[0].main=='Drizzle'){
            weatherIcon.src="images/drizzle.png"
        }
        if(data.weather[0].main=='Mist' || data.weather[0].main=='Haze'){
            weatherIcon.src="images/mist.png"
        }
        if(data.weather[0].main=='Rain'){
            weatherIcon.src="images/rain.png"
        }
        if(data.weather[0].main=='Snow' ){
            weatherIcon.src="images/snow.png"
        }

        document.querySelector(".error").style.display="none";
        document.querySelector(".weather").style.display="block";
    }
}

SearchBtn.addEventListener("click",()=>{
    checkWeather(searchName.value);
});

searchName.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchName.value);
    }
  });

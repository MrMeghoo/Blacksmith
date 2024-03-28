fetch("http://api.weatherapi.com/v1/forecast.json?key=da7122f54717424287b151533241803&q=Toronto&days=7&aqi=no&alerts=no")
.then((response => response.json))

    .then((data) => {

        let weatherInfoAll=[]
        weatherInfoAll.push(data)
        let weatherInfo= []
        for(i=0; i < 7; i++ ) {
        }
            let locationName= data.location.name

    })
    
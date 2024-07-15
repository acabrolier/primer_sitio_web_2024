$('#buscar').click(function () {

    let ciudad_buscada = $('#ciudad').val().trim();

    if (ciudad_buscada.length > 0) {
        console.log(ciudad_buscada);

        let units = 'metric';
        let lang = 'es';
        let apiid = 'a9174d6f43836c54a75ca67c3cec2117';
        let urlOpenWeatherMap = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad_buscada}&lang=${lang}&units=${units}&appid=${apiid}`;

        $.getJSON(urlOpenWeatherMap, function (dataClima) {
            console.log(dataClima);
            let paisCode = dataClima.sys.country
            let urlRestCountries = `https://restcountries.com/v3.1/alpha/${paisCode}`;

            $.getJSON(urlRestCountries, function (dataPais) {

                let html =
                    `
                 <h5 class="card-tittle">${dataClima.name} (${dataPais[0].translations.spa.common}): ${dataClima.weather[0].description}</h5>
                 <h5 class="card-tittle">Temperatura: ${dataClima.main.temp}°C</h5>
                 <h5 class="card-tittle">Sensación térmica: ${dataClima.main.feels_like}°C</h5>
                 <h5 class="card-tittle">Humedad: ${dataClima.main.humidity}%</h5>
                 <h5 class="card-tittle">Viento: ${dataClima.wind.speed * 3.6} km/hr</h5>
                 <h5 class="card-tittle">Coordenadas:${dataClima.coord.lat},${dataClima.coord.lon} </h5>
                
                `;
                $('#info-clima').html(html);

                let img =
                 `
                 <img src="https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@4x.png" alt="imagen clima">
                `
                $('#img-clima').html(img);
            })

        }).fail(function(){
            Swal.fire({
                title: "Algo salio mal!",
                text: "La ciudad buscada no se encuentra registrada",
                icon: "error",
                confirmButtonText:"Ok!"
              });
        });

    }
    else {
        Swal.fire({
            title: "Oops!",
            text: "Debes ingresar una ciudad",
            icon: "question",
            confirmButtonText:"Ok!"
          });
    }

});
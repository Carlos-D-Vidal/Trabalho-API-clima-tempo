const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://apiadvisor.climatempo.com.br/api/v1/weather/locale/6713/current?token=06f096658185153cd088a058caf30ca9", requestOptions)
    .then(response => response.json())
    .then(tempoJson => { 
        console.log(tempoJson);
        render(tempoJson);
        })
    .catch(error => console.log('error', error));

    function render(tempoJson)
    {
        const ul = document.getElementById("weather-list");
        ul.innerHTML = "";

        ul.insertAdjacentHTML("beforeend",`
        <div>
        <li id="${tempoJson.id}">
            <div id="titulo">
            <h2>Tempo agora em <br> ${tempoJson.name}, ${tempoJson.state}</h2>
            </div>
            <div id="center">
                <p><img id="tempo" src="https://www.climatempo.com.br/dist/images/v2/svg/${tempoJson.data.icon}.svg">
                    ${tempoJson.data.temperature} °
                </p>
            </div>
            <div id="info">
                <div id="condition">
                    <p><img src="https://www.climatempo.com.br/dist/images/v2/svg/ic-cloud.svg"> ${tempoJson.data.condition}</p>
                </div>
                <div id="sensation">    
                    <p><img src="https://www.climatempo.com.br/dist/images/v2/svg/ic-sensation.svg"> Sensação
                        ${tempoJson.data.sensation} °
                    </p>
                </div>    
            </div>
            <div id="vento">
                <h3> Vento </h3>
                <p>${tempoJson.data.wind_velocity} km/H </p>
            </div>
            <div id="umidade">
                <h3> Umidade </h3>
                <p><img src="https://www.climatempo.com.br/dist/images/v2/svg/ic-humidity-max.svg">
                    ${tempoJson.data.humidity} % </p>
            </div>
        </li>
    </div>
        `);
    }
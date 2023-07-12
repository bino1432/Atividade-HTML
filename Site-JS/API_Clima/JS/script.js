async function buscaClima(cidade) {

    const temperatura = document.getElementById('temperatura');
    temperatura.innerHTML = "";

    const SensacaoTermica = document.getElementById('SensacaoTermica');
    SensacaoTermica.innerHTML = "";

    const umidade = document.getElementById('umidade');
    umidade.innerHTML = "";

    const VelocidadeVento = document.getElementById('VelocidadeVento');
    VelocidadeVento.innerHTML = "";

    try {
        const consultaCidade = await fetch(`http://api.weatherapi.com/v1/current.json?key=307d26ce8a984742bf7222504231107&q=${cidade}&aqi=no`)
        const consultaCidadeConvertida = await consultaCidade.json();
        console.log(consultaCidadeConvertida);
        if (consultaCidadeConvertida.erro) {
            throw Error('Cidade não existe');
        }
    
        temperatura.innerHTML = "<i class='fa-solid fa-temperature-three-quarters'></i>  A temperatura é de: " + consultaCidadeConvertida.current.temp_c + " C°"
        SensacaoTermica.innerHTML = "<i class='fa-solid fa-temperature-high'></i>  A Sensação Termica é de: " + consultaCidadeConvertida.current.feelslike_c + " C°"
        umidade.innerHTML = "<i class='fa-solid fa-droplet'></i>  A Umidade é de: " + consultaCidadeConvertida.current.humidity + " %"
        VelocidadeVento.innerHTML = "<i class='fa-solid fa-wind'></i>  A Velocidade do Vento é de: " + consultaCidadeConvertida.current.wind_kph + " Km/h"
    }

    catch(erro) {
    }
}

const cidade = document.getElementById('cidade');
cidade.addEventListener("focusout", () => buscaClima(cidade.value));
const url =
	'https://api.openweathermap.org/data/2.5/weather';
const apiKey =
	'f00c38e0279b7bc85480c3fe775d518c';

$(document).ready(function () {
	weatherFn('Pune');
});

async function weatherFn(cName) {
	const temp =
		`${url}?q=${cName}&appid=${apiKey}&units=metric`;
	try {
		const res = await fetch(temp);
		const data = await res.json();
		if (res.ok) {
			weatherShowFn(data);
		} else {
			alert('City not found. Please try again.');
		}
	} catch (error) {
		console.error('Error fetching weather data:', error);
	}
}

function weatherShowFn(data) {
	$('#city-name').text(data.name);
	$('#date').text(moment().
		format('MMMM Do YYYY, h:mm:ss a'));
	$('#temperature').
		html(`${data.main.temp}°C`);
	$('#description').
		text(data.weather[0].description);
	$('#wind-speed').
		html(`Wind Speed: ${data.wind.speed} m/s`);
	$('#weather-info').fadeIn();
}

$(document).ready(function () {
  weatherFn('Pune');
});

async function weatherFn(cName) {
    const tempUrl = `${url}?q=${cName}&appid=${apiKey}&units=metric`;
    try {
      const res = await fetch(tempUrl);
      const data = await res.json();
      if (res.ok) {
        weatherShowFn(data);
        setBackground(data.main.temp);
      } else {
        alert('City not found. Please try again.');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }


function setBackground(temperature) {
  const body = document.body;
  if (temperature < 4) {
    body.style.backgroundImage = "url('cold temperature.webp')";
  } else if (temperature >= 4 && temperature < 10) {
    body.style.backgroundImage = "url('herbst.webp')";
  } else if (temperature >= 10 && temperature < 20) {
    body.style.backgroundImage = "url('warm temperature.webp')";
  } else {
    body.style.backgroundImage = "url('sun.webp')";
  }
}
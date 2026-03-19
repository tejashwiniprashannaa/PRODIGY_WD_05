async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const apiKey = "833a8de241f8f798d482a6470424b34b";
    if (!city) {
        document.getElementById("result").innerHTML="Please enter the city!";
        return;
    }
    document.getElementById("result").innerHTML = "Loading...";
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        const data = await res.json();

        if (data.cod !== 200) {
            document.getElementById("result").innerHTML = "City not found ❌";
            return;
        }

        document.getElementById("result").innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡 Temp: ${data.main.temp}°C</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌬 Wind: ${data.wind.speed} m/s</p>
            <p>🌥 Condition: ${data.weather[0].main}</p>
        `;
    } catch (error) {
        console.log(error);
        alert("Error fetching data");
    }
}
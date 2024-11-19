// Recommended: All functions declared here
function getCityName () {
    return prompt("Enter the name of a city")
}

const cityName = getCityName ();
document.querySelector("h2").textContent = cityName;

function isCityInDatabase(cityName) {
    for (let i = 0; i < cities.length; i++) {
        if (cities[i].name.toLowerCase() === cityName.toLowerCase()) {
            return cities[i];
        }
    }
    document.querySelector("h2").textContent = cityName +  "finns inte i databasen.";
}
const cityExists = isCityInDatabase(cityName);

document.querySelector("h2").textContent = `${cityExists.name} (${cityExists.country})`;

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code

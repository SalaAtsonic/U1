// Recommended: All functions declared here
function getCityName() {
    return prompt("Vilken stad?");
}

const cityName = getCityName();
document.querySelector("h2").textContent = cityName;

function isCityInDatabase(cityName) {
    for (let i = 0; i < cities.length; i++) {
        if (cities[i].name == cityName) {
            return cities[i];
        }
    }
    return null;
}

const cityExists = isCityInDatabase(cityName);

if (cityExists) {
    document.querySelector("h2").textContent = `${cityExists.name} (${cityExists.country})`;
    document.querySelector("title").textContent = `${cityExists.name}`;
    let closestCity = null; 
    let furthestCity = null;
    let closestDistance = distances.length;
    let furthestDistance = 0;

    for (let path of distances) {
        if (path.city1 == cityExists.id) {
            if (path.distance < closestDistance) {
                closestDistance = path.distance;
                closestCity = path.city2;
            }
            if (path.distance > furthestDistance) {
                furthestDistance = path.distance;
                furthestCity = path.city2;
            }
        } else if (path.city2 == cityExists.id) {
            if (path.distance < closestDistance) {
                closestDistance = path.distance;
                closestCity = path.city1;
            }
            if (path.distance > furthestDistance) {
                furthestDistance = path.distance;
                furthestCity = path.city1;
            }
        }
    }

    let closestCityObject = null;
    let furthestCityObject = null;
    for (let city of cities) {
        if (city.id == closestCity) {
            closestCityObject = city;
        }
        if (city.id == furthestCity) {
            furthestCityObject = city;
        }
    }

    document.querySelector("h3").textContent = `Närmast: ${closestCityObject.name}, Längst: ${furthestCityObject.name}`;
} else {
    document.querySelector("h2").textContent = `${cityName} finns inte i databasen.`;
}

function createBox(cityname) {
    const domDiv = document.createElement("div");
    domDiv.classList.add("cityBox");
    domDiv.textContent = cityname;
    document.getElementById("cities").append(domDiv);
}
for (let i = 0; i < cities.length; i++) {
    createBox(cities[i].name);
}

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code

// Recommended: All functions declared here
function getCityName() {
    return prompt("Vilken stad?");
}

const cityName = getCityName();
document.querySelector("h2").textContent = cityName;

function createBox(cityname) {
    const domDiv = document.createElement("div");
    domDiv.classList.add("cityBox");
    domDiv.textContent = cityname;
    document.getElementById("cities").append(domDiv);
}

for (let i = 0; i < cities.length; i++) {
    createBox(cities[i].name);
}

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
    const cityBoxes = document.querySelectorAll(".cityBox");
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


const cityDivs = document.querySelectorAll(".cityBox");

for (let i = 0; i < cityDivs.length; i++) {
    const cityDiv = cityDivs[i];
    if (cityDiv.textContent === closestCityObject.name) {
        cityDiv.classList.add("closest");
        cityDiv.innerHTML += ` ligger ${closestDistance / 10} mil bort `;
    }
    if (cityDiv.textContent === furthestCityObject.name) {
        cityDiv.classList.add("furthest");
        cityDiv.innerHTML += ` ligger ${furthestDistance / 10} mil bort `;
    }
}
}

function createTable() {
    const tabell = document.querySelector("#table");
    tabell.style.width = "100%"; 
    const rows = cities.length;
    const columns = cities.length;

    for (let a = 0; a <= columns; a++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("cell", "head_column");
        tabell.appendChild(emptyCell);

        if (a === 0) {
            emptyCell.textContent = ""; 
        } else {
            emptyCell.textContent = cities[a - 1].id; 
        }
    }

    for (let i = 0; i < rows; i++) {
        let namesRow = document.createElement("div");
        namesRow.textContent = cities[i].id + " - " + cities[i].name;
        namesRow.classList.add("head_row", "cell");
        tabell.appendChild(namesRow);

        if ((i + 2) % 2 === 0) { 
            namesRow.classList.add("even_row"); 
        }

        for (let j = 0; j < columns; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            if ((j + 2) % 2 === 0) {
                cell.classList.add("even_col");
            }

            let distanceValue = null;
            for (let distance of distances) {
                if (distance.city1 === cities[i].id) {
                    if (distance.city2 === cities[j].id) {
                        distanceValue = distance.distance;
                        break;
                    }
                }
                if (distance.city2 === cities[i].id) {
                    if (distance.city1 === cities[j].id) {
                        distanceValue = distance.distance;
                    }
                }
            }

            if (distanceValue == null) {
            } else {
                cell.textContent = distanceValue / 10;
            }
            
            if ((i + 2) % 2 === 0) { 
                cell.classList.add("even_row");
            }

            tabell.appendChild(cell);
        }
    }
}

createTable();
// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code

// Varibles

var celestialName = "Moon";  //Name of the celestial body
let type = "Natural Satellite";  //Type of celestial body
const discoveryYear = "Prehistoric Times";  //Year of discovery

// Functions
function populateHeader() {
    document.getElementById("celestial-name").textContent = celestialName;
}
populateHeader();

// Event Listener 
const spaceFact = "The Moon is slowly drifting away from Earth at a rate of about 3.8 cm per year!";

document.getElementById("reveal-fact").addEventListener("click", function () {
    const factDiv = document.getElementById("space-fact");
    factDiv.textContent = spaceFact;
    factDiv.style.display = "block";
});

// DOM Manipulation
const description = document.createElement("p");
description.textContent = "The Moon is Earth's only natural satellite. It influences tides, lights up the night sky, and was first visited by humans during the Apollo 11 mission in 1969.";
document.getElementById("celestial-info").appendChild(description);

// Arrow Function
const kmToMiles = (km) => km * 0.621371;
console.log("Distance to Moon in miles:", kmToMiles(384400)); // 384,400 km average distance

// Error Handling
try {
    // Example function that might throw an error
    calculateMoonPhase();
} catch (error) {
    console.error("An error occurred while calculating the Moon phase:", error.message);
} finally {
    console.log("Moon phase calculation attempt completed.");
}

// Loop: Moon Facts
const moonFacts = [
    "The Moon has no atmosphere, which means there is no weather.",
    "The same side of the Moon always faces Earth.",
    "The Moon's gravity causes ocean tides on Earth.",
    "The first humans landed on the Moon in 1969.",
    "There are moonquakes caused by tidal forces."
];

// Output each fact to the console
for (let i = 0; i < moonFacts.length; i++) {
    console.log(moonFacts[i]);
}

// Challenge
const ul = document.createElement("ul");
moonFacts.forEach(fact => {
    const li = document.createElement("li");
    li.textContent = fact;
    ul.appendChild(li);
});
document.getElementById("celestial-info").appendChild(ul);


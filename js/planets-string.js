(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsString = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
    planetsArray = planetsString;
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    // source used to solve this problem: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
    planetsString = ("Mercury, <br> Venus, <br> Earth, <br> Mars, <br> Jupiter, <br> Saturn, <br> Uranus, <br> Neptune");
    console.log(planetsString);

    const outerspace = document.getElementById("planetsString");

    outerspace.innerHTML = planetsString;
    // The <br> tag is useful for creating a list of items from a string that will be on their own line in an html document.


    //source used to solve this problem: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
    const orderedPlanets = ["Neptune", "Uranus", "Saturn", "Jupiter", "Mars", "Earth", "Venus", "Mercury"];
    let listOfPlanets = "<ul>";
    for(let i = 0; i < orderedPlanets.length; i++) {
        listOfPlanets += "<li>" + orderedPlanets[i] + "</li>";
    }
    listOfPlanets += "</ul>";

    console.log(listOfPlanets);

    const planets = document.getElementById("listOfPlanets");

    planets.innerHTML = listOfPlanets;







})();
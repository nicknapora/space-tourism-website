// adapted from https://www.w3schools.com/howto/howto_js_active_element.asp

document.getElementById("button-1").addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    document.getElementById("button-1").className += " active";

    document.getElementById("contentParagraph").innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    document.getElementById("contentHeading").innerHTML = "Moon";
    document.getElementById("travelDistance").innerHTML = "384,400 km";
    document.getElementById("travelTime").innerHTML = "3 days";

    document.getElementById("image2").style.display = "none";
    document.getElementById("image3").style.display = "none";
    document.getElementById("image4").style.display = "none";
    document.getElementById("image1").style.display = "block";
})

document.getElementById("button-2").addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    document.getElementById("button-2").className += " active";

    document.getElementById("contentParagraph").innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    document.getElementById("contentHeading").innerHTML = "Mars";
    document.getElementById("travelDistance").innerHTML = "225 mil. km";
    document.getElementById("travelTime").innerHTML = "9 months";

    document.getElementById("image1").style.display = "none";
    document.getElementById("image3").style.display = "none";
    document.getElementById("image4").style.display = "none";
    document.getElementById("image2").style.display = "block";
})

document.getElementById("button-3").addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    document.getElementById("button-3").className += " active";

    document.getElementById("contentParagraph").innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    document.getElementById("contentHeading").innerHTML = "Europa";
    document.getElementById("travelDistance").innerHTML = "628 mil. km";
    document.getElementById("travelTime").innerHTML = "3 years";

    document.getElementById("image1").style.display = "none";
    document.getElementById("image2").style.display = "none";
    document.getElementById("image4").style.display = "none";
    document.getElementById("image3").style.display = "block";
})

document.getElementById("button-4").addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    document.getElementById("button-4").className += " active";

    document.getElementById("contentParagraph").innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    document.getElementById("contentHeading").innerHTML = "Titan";
    document.getElementById("travelDistance").innerHTML = "1.6 bil. km";
    document.getElementById("travelTime").innerHTML = "7 years";

    document.getElementById("image1").style.display = "none";
    document.getElementById("image2").style.display = "none";
    document.getElementById("image3").style.display = "none";
    document.getElementById("image4").style.display = "block";
})




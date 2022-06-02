// adapted from https://www.w3schools.com/howto/howto_js_active_element.asp

document.getElementById("button-1").addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    document.getElementById("button-1").className += " active";

    document.getElementById("contentParagraph").innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
    document.getElementById("contentHeading").innerHTML = "Douglas Hurley";
    document.getElementById("contentRank").innerHTML = "Commander";

    document.getElementById("image2").style.display = "none";
    document.getElementById("image3").style.display = "none";
    document.getElementById("image4").style.display = "none";
    document.getElementById("image1").style.display = "block";
})

document.getElementById("button-2").addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    document.getElementById("button-2").className += " active";

    document.getElementById("contentParagraph").innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
    document.getElementById("contentHeading").innerHTML = "Mark Shuttleworth";
    document.getElementById("contentRank").innerHTML = "Mission Specialist";

    document.getElementById("image1").style.display = "none";
    document.getElementById("image3").style.display = "none";
    document.getElementById("image4").style.display = "none";
    document.getElementById("image2").style.display = "block";
})

document.getElementById("button-3").addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    document.getElementById("button-3").className += " active";

    document.getElementById("contentParagraph").innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
    document.getElementById("contentHeading").innerHTML = "Victor Glover";
    document.getElementById("contentRank").innerHTML = "Pilot";

    document.getElementById("image1").style.display = "none";
    document.getElementById("image2").style.display = "none";
    document.getElementById("image4").style.display = "none";
    document.getElementById("image3").style.display = "block";
})

document.getElementById("button-4").addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    document.getElementById("button-4").className += " active";

    document.getElementById("contentParagraph").innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
    document.getElementById("contentHeading").innerHTML = "Anousheh Ansari";
    document.getElementById("contentRank").innerHTML = "Flight Engineer";

    document.getElementById("image1").style.display = "none";
    document.getElementById("image2").style.display = "none";
    document.getElementById("image3").style.display = "none";
    document.getElementById("image4").style.display = "block";
})




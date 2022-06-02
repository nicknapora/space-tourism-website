// adapted from https://www.w3schools.com/howto/howto_js_active_element.asp

document.getElementById("button-1").addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    document.getElementById("button-1").className += " active";

    document.getElementById("contentParagraph").innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    document.getElementById("contentHeading").innerHTML = "Launch vehicle";

    document.getElementById("image2").style.display = "none";
    document.getElementById("image3").style.display = "none";
    document.getElementById("image1").style.display = "block";
})

document.getElementById("button-2").addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    document.getElementById("button-2").className += " active";

    document.getElementById("contentParagraph").innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
    document.getElementById("contentHeading").innerHTML = "Spaceport";

    document.getElementById("image1").style.display = "none";
    document.getElementById("image3").style.display = "none";
    document.getElementById("image2").style.display = "block";
})

document.getElementById("button-3").addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    document.getElementById("button-3").className += " active";

    document.getElementById("contentParagraph").innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    document.getElementById("contentHeading").innerHTML = "Space capsule";

    document.getElementById("image1").style.display = "none";
    document.getElementById("image2").style.display = "none";
    document.getElementById("image3").style.display = "block";
})



document.getElementById("openButton").addEventListener("click", function() {
    document.getElementsByClassName("item-nav")[0].style.display = "block";
    document.getElementById("openButton").style.display = "none";
    document.getElementById("closeButton").style.display = "block";
});

document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementsByClassName("item-nav")[0].style.display = "";
    document.getElementById("closeButton").style.display = "none";
    document.getElementById("openButton").style.display = "block";
});


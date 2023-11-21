window.addEventListener("load", addListeners);

var pictures = new Array("hw9Resources/runningMan1.png", "hw9Resources/runningMan2.png", "hw9Resources/runningMan3.png", "hw9Resources/runningMan4.png",
                        "hw9Resources/runningMan5.png", "hw9Resources/runningMan6.png", "hw9Resources/runningMan7.png", "hw9Resources/runningMan8.png",);
var index = 0;
var captions = new Array("He's starting to run", "He is still starting to run", "He's starting to get his stride", "He is still just running",
"He's almost made it all the way around", "Almost there!", "Just one more", "He's done!");
var timer;

function addListeners() {
    document.getElementById("next").addEventListener("click", moveImageForward);
    document.getElementById("previous").addEventListener("click", moveImageBackward);
    document.getElementById("play").addEventListener("click", startSlideshow);
    document.getElementById("pause").addEventListener("click", stopSlideshow);
}

function moveImageForward() {
    index++;

    if (index >= captions.length) {
        index = 0;
    }

    document.getElementById("runningManPic").src = pictures[index];
    document.getElementById("caption").innerHTML = captions[index];
}

function moveImageBackward() {
    index--;

    if (index < 0) {
        index = captions.length - 1;
    }

    document.getElementById("runningManPic").src = pictures[index];
    document.getElementById("caption").innerHTML = captions[index];
}

function startSlideshow() {
    clearInterval(timer);

    timer = setInterval("moveImageForward()", 150);
}

function stopSlideshow() {
    clearInterval(timer);

}
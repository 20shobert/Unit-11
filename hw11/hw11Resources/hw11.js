window.addEventListener("load", addListeners)

function addListeners() {
    document.getElementById("hairColor").addEventListener("change", function() {
        if (isNaN(document.getElementById("hairColor").value)) {

            switch (document.getElementById("hairColor").value.toLowerCase()) { // changing hairColorHex Background Color
                case "red":
                    document.getElementById("hairColorHex").style.backgroundColor = "#E3421F"; // red
                break;
                case "pink":
                    document.getElementById("hairColorHex").style.backgroundColor = "#FF85EC"; // pink
                break;
                case "orange":
                    document.getElementById("hairColorHex").style.backgroundColor = "#F4952A"; // orange
                break;
                case "yellow":
                    document.getElementById("hairColorHex").style.backgroundColor = "#FAEE39"; // yellow
                break;
                case "green":
                    document.getElementById("hairColorHex").style.backgroundColor = "#46F124"; // green
                break;
                case "blue":
                    document.getElementById("hairColorHex").style.backgroundColor = "#2A24F1"; // blue
                break;
                case "cyan":
                    document.getElementById("hairColorHex").style.backgroundColor = "#39F5EC"; // cyan
                break;
                case "purple":
                    document.getElementById("hairColorHex").style.backgroundColor = "#CC24F1"; // purple
                break;
                case "black":
                    document.getElementById("hairColorHex").style.backgroundColor = "#000000"; // black
                break;
                case "white":
                    document.getElementById("hairColorHex").style.backgroundColor = "#FFFFFF"; // white
                break;
                case "brown":
                    document.getElementById("hairColorHex").style.backgroundColor = "#753F02"; // brown
                break;
                case "blonde":
                    document.getElementById("hairColorHex").style.backgroundColor = "#F8E67F"; // blonde
                break;
                default:
                    document.getElementById("hairColorHex").style.backgroundColor = "#fcf765"; // default
                    document.getElementById("hairColor").value = "";
                break;
            }

        } else {
            document.getElementById("hairColorHex").style.backgroundColor = "#fcf765";
            document.getElementById("hairColor").value = "";

        }

    });

    document.getElementById("eyeColor").addEventListener("change", function() {
        if (isNaN(document.getElementById("eyeColor").value)) {

            switch (document.getElementById("eyeColor").value.toLowerCase()) { // changing hairColorHex Background Color
                case "red":
                    document.getElementById("eyeColorHex").style.backgroundColor = "#E3421F"; // red
                break;
                case "pink":
                    document.getElementById("eyeColorHex").style.backgroundColor = "#FF85EC"; // pink
                break;
                case "orange":
                    document.getElementById("eyeColorHex").style.backgroundColor = "#F4952A"; // orange
                break;
                case "yellow":
                    document.getElementById("eyeColorHex").style.backgroundColor = "#FAEE39"; // yellow
                break;
                case "green":
                    document.getElementById("eyeColorHex").style.backgroundColor = "#46F124"; // green
                break;
                case "blue":
                    document.getElementById("eyeColorHex").style.backgroundColor = "#2A24F1"; // blue
                break;
                case "cyan":
                    document.getElementById("eyeColorHex").style.backgroundColor = "#39F5EC"; // cyan
                break;
                case "purple":
                    document.getElementById("eyeColorHex").style.backgroundColor = "#CC24F1"; // purple
                break;
                case "black":
                    document.getElementById("eyeColorHex").style.backgroundColor = "#000000"; // black
                break;
                case "white":
                    document.getElementById("eyeColorHex").style.backgroundColor = "#FFFFFF"; // white
                break;
                default:
                    document.getElementById("eyeColorHex").style.backgroundColor = "#fcf765"; // default
                    document.getElementById("eyeColor").value = "";
                break;
            }

        } else {
            document.getElementById("eyeColorHex").style.backgroundColor = "#fcf765";
            document.getElementById("eyeColor").value = "";

        }

    });

    document.getElementById("abilityColor").addEventListener("change", function() {
        if (isNaN(document.getElementById("abilityColor").value)) {

            switch (document.getElementById("abilityColor").value.toLowerCase()) { // changing hairColorHex Background Color
                case "red":
                    document.getElementById("abilityColorHex").style.backgroundColor = "#E3421F"; // red
                break;
                case "pink":
                    document.getElementById("abilityColorHex").style.backgroundColor = "#FF85EC"; // pink
                break;
                case "orange":
                    document.getElementById("abilityColorHex").style.backgroundColor = "#F4952A"; // orange
                break;
                case "yellow":
                    document.getElementById("abilityColorHex").style.backgroundColor = "#FAEE39"; // yellow
                break;
                case "green":
                    document.getElementById("abilityColorHex").style.backgroundColor = "#46F124"; // green
                break;
                case "blue":
                    document.getElementById("abilityColorHex").style.backgroundColor = "#2A24F1"; // blue
                break;
                case "cyan":
                    document.getElementById("abilityColorHex").style.backgroundColor = "#39F5EC"; // cyan
                break;
                case "purple":
                    document.getElementById("abilityColorHex").style.backgroundColor = "#CC24F1"; // purple
                break;
                case "black":
                    document.getElementById("abilityColorHex").style.backgroundColor = "#000000"; // black
                break;
                case "white":
                    document.getElementById("abilityColorHex").style.backgroundColor = "#FFFFFF"; // white
                break;
                default:
                    document.getElementById("abilityColorHex").style.backgroundColor = "#fcf765"; // default
                    document.getElementById("abilityColor").value = "";
                break;
            }

        } else {
            document.getElementById("abilityColorHex").style.backgroundColor = "#fcf765";
            document.getElementById("abilityColor").value = "";

        }
    });

    document.getElementById("abilityColor").addEventListener("change", function() {
        if (isNaN(document.getElementById("abilityColor").value)) {

            switch (document.getElementById("abilityColor").value.toLowerCase()) { // changing hairColorHex Background Color
                case "red":
                    document.getElementById("abilityColorHex").style.backgroundColor = "#E3421F"; // red
                break;
                case "pink":
                    document.getElementById("abilityColorHex").style.backgroundColor = "#FF85EC"; // pink
                break;
                case "orange":
                    document.getElementById("abilityColorHex").style.backgroundColor = "#F4952A"; // orange
                break;
                case "yellow":
                    document.getElementById("abilityColorHex").style.backgroundColor = "#FAEE39"; // yellow
                break;
                case "green":
                    document.getElementById("abilityColorHex").style.backgroundColor = "#46F124"; // green
                break;
                case "blue":
                    document.getElementById("abilityColorHex").style.backgroundColor = "#2A24F1"; // blue
                break;
                case "cyan":
                    document.getElementById("abilityColorHex").style.backgroundColor = "#39F5EC"; // cyan
                break;
                case "purple":
                    document.getElementById("abilityColorHex").style.backgroundColor = "#CC24F1"; // purple
                break;
                case "black":
                    document.getElementById("abilityColorHex").style.backgroundColor = "#000000"; // black
                break;
                case "white":
                    document.getElementById("abilityColorHex").style.backgroundColor = "#FFFFFF"; // white
                break;
                default:
                    document.getElementById("abilityColorHex").style.backgroundColor = "#fcf765"; // default
                    document.getElementById("abilityColor").value = "";
                break;
            }

        } else {
            document.getElementById("abilityColorHex").style.backgroundColor = "#fcf765";
            document.getElementById("abilityColor").value = "";

        }
    });

    document.getElementById("class1").addEventListener("change", function() { // duelist
        document.getElementById("duelistCollapsable").style.display = "block"; 
        document.getElementById("initiatorCollapsable").style.display = "none";
        document.getElementById("sentinelCollapsable").style.display = "none";
        document.getElementById("controllerCollapsable").style.display = "none";

        uncheckAll(1);
    });
    document.getElementById("class2").addEventListener("change", function() { // initiator
        document.getElementById("duelistCollapsable").style.display = "none";
        document.getElementById("initiatorCollapsable").style.display = "block";
        document.getElementById("sentinelCollapsable").style.display = "none";
        document.getElementById("controllerCollapsable").style.display = "none";

        uncheckAll(2);
    });
    document.getElementById("class3").addEventListener("change", function() { // sentinel
        document.getElementById("duelistCollapsable").style.display = "none";
        document.getElementById("initiatorCollapsable").style.display = "none";
        document.getElementById("sentinelCollapsable").style.display = "block";
        document.getElementById("controllerCollapsable").style.display = "none";

        uncheckAll(3);
    });
    document.getElementById("class4").addEventListener("change", function() { // controller
        document.getElementById("duelistCollapsable").style.display = "none";
        document.getElementById("initiatorCollapsable").style.display = "none";
        document.getElementById("sentinelCollapsable").style.display = "none";
        document.getElementById("controllerCollapsable").style.display = "block";

        uncheckAll(4);
    }); // for some reason I couldn't use the name "classType" to access these, so I put them separately
    
}

function uncheckAll(idNum) {
    var dBool = true;
    var iBool = true;
    var sBool = true;
    var cBool = true;

    var dRegNum = 12; // Number of abilities
    var iRegNum = 10;
    var sRegNum = 9;
    var cRegNum = 10;

    switch (idNum) {
        case 1:
            dBool = false;
        break;
        case 2:
            iBool = false;
        break;
        case 3:
            sBool = false;
        break;
        case 4:
            cBool = false;
        break;
    }

    if (dBool) {
        for (let i=0; i < dRegNum; i++){
            document.getElementById("d" + (i + 1)).checked = false;
        }
    }
    if (iBool) {
        for (let i=0; i < iRegNum; i++){
            document.getElementById("i" + (i + 1)).checked = false;
        }
    }
    if (sBool) {
        for (let i=0; i < sRegNum; i++){
            document.getElementById("s" + (i + 1)).checked = false;
        }
    }
    if (cBool) {
        for (let i=0; i < cRegNum; i++){
            document.getElementById("c" + (i + 1)).checked = false;
        }
    }
    
}
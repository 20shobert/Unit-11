window.addEventListener("load", addListeners)

function addListeners() {
    document.getElementById("weight").addEventListener("change", function() {
        var weight = parseFloat(document.getElementById("weight").value);
        var size;

        if (isNaN(weight)) {
            size = "";
        } else if (weight <= 4) {
            size = "mini";
        } else if (weight > 4 && weight <= 12) {
            size = "small";
        } else if (weight > 12 && weight <= 50) {
            size = "medium";
        } else if (weight > 50) {
            size = "large";
        } else {
            console.log("ERROR in size");
        }

        document.getElementById("size").value = size;
    });

    document.getElementById("days").addEventListener("change", function() {
        var days = parseInt(document.getElementById("days").value);

        if (isNaN(days)) {
            document.getElementById("days").value = 0;
            document.getElementById("boardingFee").value = "0.00";
        } else {
            document.getElementById("days").value = days;
            document.getElementById("boardingFee").value = (19.99 * days).toFixed(2);
        }

        updateTotal();

    });

    document.getElementById("sing").addEventListener("change", function() {
        if (document.getElementById("sing").checked) {
            document.getElementById("singAdd").style.display = "block";
        } else {
            document.getElementById("singAdd").style.display = "none";
        }

        updateTotal();
    });

    document.getElementById("cute").addEventListener("change", function() {
        if (document.getElementById("cute").checked) {
            document.getElementById("cuteAdd").style.display = "block";
        } else {
            document.getElementById("cuteAdd").style.display = "none";
        }

        updateTotal();
    });

    document.getElementById("trick").addEventListener("change", function() {
        if (document.getElementById("trick").checked) {
            document.getElementById("trickAdd").style.display = "block";
        } else {
            document.getElementById("trickAdd").style.display = "none";
        }

        updateTotal();
    });
}

function updateTotal() {
    var registrationCost = 0;
    var numEvents = 0;
    var total = 0;

    var boardingCost = document.getElementById("boardingFee").value;
    if (boardingCost == "") {
        boardingCost = 0;
    } else {
        boardingCost = parseFloat(boardingCost);
    }

    if(document.getElementById("sing").checked) { numEvents++; };
    if(document.getElementById("cute").checked) { numEvents++; };
    if(document.getElementById("trick").checked) { numEvents++; };

    registrationCost = 120 * numEvents;
    total = boardingCost + registrationCost;

    document.getElementById("boardingCost").value = boardingCost.toFixed(2);
    document.getElementById("registrationCost").value = registrationCost.toFixed(2);
    document.getElementById("totalCost").value = total.toFixed(2);

}
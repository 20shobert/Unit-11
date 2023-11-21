window.addEventListener("load", addListeners)


function addListeners() {
  //set correct banner image on load
  if(window.innerWidth > 768)
  document.getElementById("banner").src = "resources/movie_banner.jpg"

  //event handler - window resize
  window.addEventListener("resize", function(){
    if(window.innerWidth > 768)
      document.getElementById("banner").src = "resources/movie_banner.jpg"
    else
      document.getElementById("banner").src = "resources/movie_banner2.jpg"
  })

  document.getElementById("movie_adult_qty").addEventListener("change", function() {
    var qty = document.getElementById("movie_adult_qty").value;
    qty = parseInt(qty);

    if(isNaN(qty)) {
      document.getElementById("movie_adult_qty").value = 0;
      document.getElementById("movie_adult_total").value = "0.00";

    } else {
      document.getElementById("movie_adult_qty").value = qty;

      var price = document.getElementById("movie_adult_price").value;
      var cost = qty * price;

      document.getElementById("movie_adult_total").value = cost;
    }

    computeTotal();
    
  });

  document.getElementById("movie_child_qty").addEventListener("change", function() {
    var qty = document.getElementById("movie_child_qty").value;
    qty = parseInt(qty);

    if(isNaN(qty)) {
      document.getElementById("movie_child_qty").value = 0;
      document.getElementById("movie_child_total").value = "0.00";

    } else {
      document.getElementById("movie_child_qty").value = qty;

      var price = document.getElementById("movie_child_price").value;
      var cost = qty * price;

      document.getElementById("movie_child_total").value = cost;
    }

    computeTotal();
    
  });

  document.getElementById("movie_plus").addEventListener("change", function(event) {
    updateCost(event.target.id);
  });

  document.getElementById("ticket").addEventListener("click", function() {
    document.getElementById("movie_only").style.display = "block";
    document.getElementById("movie_plus").style.display = "none";

    document.getElementById("adult_qty").value = 0;
    document.getElementById("adult_total").value = "0.00";
    document.getElementById("child_qty").value = 0;
    document.getElementById("child_total").value = "0.00";
    document.getElementById("individual_qty").value = 0;
    document.getElementById("individual_total").value = "0.00";
    document.getElementById("share_qty").value = 0;
    document.getElementById("share_total").value = "0.00";
    document.getElementById("drink_qty").value = 0;
    document.getElementById("drink_total").value = "0.00";

    computeTotal();
  });

  document.getElementById("complete").addEventListener("click", function() {
    document.getElementById("movie_plus").style.display = "block";
    document.getElementById("movie_only").style.display = "none";

    document.getElementById("movie_adult_qty").value = 0;
    document.getElementById("movie_adult_total").value = "0.00";
    document.getElementById("movie_child_qty").value = 0;
    document.getElementById("movie_child_total").value = "0.00";

    computeTotal();
  });

}

function updateCost(qtyId) {
  var priceId = qtyId.replace("qty", "price");
  var totalId = qtyId.replace("qty", "total");

  var qty = document.getElementById(qtyId).value;
  qty = parseInt(qty);

  if(isNaN(qty)) {
    document.getElementById(qtyId).value = 0;
    document.getElementById(totalId).value = "0.00";

  } else {
    document.getElementById(qtyId).value = qty;

    var price = document.getElementById(priceId).value;
    var cost = qty * price;

    document.getElementById(totalId).value = cost;
  }

  computeTotal();

}

function computeTotal() {
  var subtotal = parseFloat(document.getElementById("movie_adult_total").value)
                  + parseFloat(document.getElementById("movie_child_total").value)
                  + parseFloat(document.getElementById("adult_total").value)
                  + parseFloat(document.getElementById("child_total").value)
                  + parseFloat(document.getElementById("individual_total").value)
                  + parseFloat(document.getElementById("share_total").value)
                  + parseFloat(document.getElementById("drink_total").value);

  var tax = subtotal * 0.07;
  var total = tax + subtotal;

  document.getElementById("sales_tax").value = tax.toFixed(2);
  document.getElementById("total").value = total.toFixed(2);
}
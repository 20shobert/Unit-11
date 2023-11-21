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

}
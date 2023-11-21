document.getElementById("head").innerHTML += `
<!doctype html>
<html lang="en-US">

<meta charset="UTF-8">

<meta name="author" content= "Spencer Hobert">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" type="images/icon" href="images/nerdEmoji.png">
<link rel="stylesheet" type="text/css" href="hw7Resources/commonStyle.css">


`;

document.getElementById("nav").innerHTML = `
<header>
<p>Spencer Hobert's CS2350</p>
<img class="explosionImgLeft" src="hw7Resources/explosion.png" alt="Explosion" height="150px">
<img class="explosionImgRight" src="hw7Resources/explosion.png" alt="Explosion" height="150px">

</header>

<nav>
<ul>
    <li><a href="index.html"
        title="Main Portfolio">Main Portfolio</a></li>
    <li><a href="hw1.html"
        title="Rubik's Cubes">Rubik's Cubes</a></li>
    <li><a href="howToPublish.html"
        title="How to Publish">How to Publish</a></li>
    <li>
        <div class="dropdown">
            <button>See More &#8595;</button>
            <div class="dropdown-content">
                <a href="hw3.html" title="Using CSS">Using CSS</a>
                <a href="hw8.html" title="Going to a Park">Going to a Park</a>
                <a href="hw9.html" title="A Slideshow">A Slideshow</a>
                <a href="hw10.html" title="Create a Val Agent">Create a Val Agent</a>
            </div>
        </div>
    </li>
    
</ul>
</nav>

`;
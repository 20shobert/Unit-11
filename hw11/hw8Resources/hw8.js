function viewStory() {
    var name1, name2, objectInPark1, adjective1, noun1, funnyPhrase, noun2, verb1, verb2;

    name1 = document.getElementById("name1").value;
    name2 = document.getElementById("name2").value;
    objectInPark1 = document.getElementById("objectInPark1").value;
    adjective1 = document.getElementById("adjective1").value;
    noun1 = document.getElementById("noun1").value;
    funnyPhrase = document.getElementById("funnyPhrase").value;
    noun2 = document.getElementById("noun2").value;
    verb1 = document.getElementById("verb1").value;
    verb2 = document.getElementById("verb2").value;

    document.getElementById("para1").innerHTML = "One day, <span>" + name1 + "</span> and <span>" + name2 + "</span> walked into a park.<br>As they were walking past the <span>" + objectInPark1 + "</span>, <span>" + name1 + "</span> and <span>" + name2 + "</span> found a <span>" + adjective1 + "</span> <span>" + noun1 + "</span>!<br><span>" + name1 + "</span> picked it up and said, \"This <span>" + noun1 + "</span> is way cooler than the park.\"<br><span>" + name2 + "</span> took it from <span>" + name1 + "</span>, said, \"<span>" + funnyPhrase + "</span>,\" and threw it at a <span>" + noun2 + "</span>.";

    document.getElementById("para2").innerHTML = "This caused the <span>" + noun2 + "</span> to get <span>" + verb1 + "</span>.<br>After <span>" + noun2 + "</span> finished getting <span>" + verb1 + "</span>, it returned the <span>" + noun1 + "</span> back to <span>" + name2 + "</span> by <span>" + verb2 + "</span> it.<br><span>" + name2 + "</span> looked around, astounded by what they have just seen.<br>After careful consideration, <span>" + name2 + "</span> ran back home, leaving <span>" + name1 + "</span> behind.<br>The End.";
    
    document.getElementById("hideMe").style.display = "inline-block";
}
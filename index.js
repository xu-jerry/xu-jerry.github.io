var i = 0;
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    var title = document.getElementById("title");
    var txt = title.attributes["text"].value;
    if (i < txt.length) {
        title.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

console.log("Interesting choice to peek into the console of my website >:)");
window.onload = typeWriter;
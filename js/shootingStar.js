
function starMaker(n, setColor = "yellow") {
    const star = document.getElementById('shootingStar');
    star.style.color = setColor;
    for(let i = 0; i < n; i++) {
        starSet(star);
    }
}

function starSet(clone) {
    const starClone = clone.cloneNode(true);
    const starStyle = starClone.style;
    starStyle.left = 100 * Math.random() + "%";
    starStyle.animationDelay = 6 * Math.random() + "s";
    document.body.appendChild(starClone);

    starClone.addEventListener("animationend", function() {
        this.parentNode.removeChild(this);
        star = document.getElementById('shootingStar');
        starSet(star);
    }, false)
}

// Floating Hearts Animation
document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector(".heart-container")) { // Only run if .heart-container exists
        const heartContainer = document.querySelector(".heart-container");

        function createHeart() {
            let heart = document.createElement("span");
            heart.classList.add("heart");
            heart.innerHTML = "❤️";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = "4s";
            heartContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 4000);
        }

        setInterval(createHeart, 500);
    }
});

// Auto Scrolling Timeline
let scrollContainer = document.querySelector(".timeline-container");

function autoScroll() {
    if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        setTimeout(() => {
            window.location.href = "nextpage.html";
        }, 1000);
    } else {
        scrollContainer.scrollLeft += 2;
    }
}

setInterval(autoScroll, 10);
document.addEventListener("DOMContentLoaded", function () {
    if (!window.audioPopup || window.audioPopup.closed) {
        window.audioPopup = window.open("audio.html", "AudioPlayer", "width=200,height=100");
    }
});
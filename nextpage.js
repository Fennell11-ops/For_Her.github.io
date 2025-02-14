let clicks = 0;
const envelope = document.getElementById("envelope");
const flap = document.querySelector(".flap");
const letter = document.getElementById("letter");

envelope.addEventListener("click", () => {
    clicks++;

    if (clicks <= 6) {
        flap.style.transform = `rotateX(${clicks * 15}deg)`;
    }

    if (clicks >= 6) {
        flap.style.transform = "rotateX(180deg)";
        letter.style.transform = "translate(-50%, -50%)";
    }
});
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

document.addEventListener("DOMContentLoaded", function () {
    const reasons = document.querySelectorAll(".reason");
    const nextButton = document.getElementById("next-btn");

    let index = 0;

    function showNextReason() {
        if (index < reasons.length) {
            reasons[index].style.opacity = "1";
            reasons[index].style.transform = "translateY(0)";
            setTimeout(showNextReason, 2500); // 1 second delay for each
            index++;
        } else {
            setTimeout(() => {
                nextButton.style.display = "inline-block";
                nextButton.style.opacity = "1";
            }, 1000);
        }
    }

    setTimeout(showNextReason, 1500);
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



document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const container = document.getElementById("main-container");
    const gallery = document.getElementById("image-gallery");
    const imageContainer = document.getElementById("image-container");

    let isMovable = true;
    let startTime = Date.now();

    function moveButton() {
        let elapsed = Date.now() - startTime;
        if (elapsed < 15000) {
            let maxX = window.innerWidth - yesBtn.offsetWidth;
            let maxY = window.innerHeight - yesBtn.offsetHeight;
            yesBtn.style.position = "absolute";
            yesBtn.style.top = Math.random() * maxY + "px";
            yesBtn.style.left = Math.random() * maxX + "px";
            setTimeout(moveButton, 500);
        } else {
            isMovable = false;
            yesBtn.style.position = "static";
        }
    }

    moveButton();

    yesBtn.addEventListener("mouseover", function () {
        if (isMovable) {
            let maxX = window.innerWidth - yesBtn.offsetWidth;
            let maxY = window.innerHeight - yesBtn.offsetHeight;
            yesBtn.style.top = Math.random() * maxY + "px";
            yesBtn.style.left = Math.random() * maxX + "px";
        }
    });

    yesBtn.addEventListener("click", function () {
        if (!isMovable) {
            container.style.display = "none";
            gallery.style.display = "flex";
            displayImages();
        }
    });

    noBtn.addEventListener("click", function () {
        alert("That's not an option hehe");
    });

    function displayImages() {
        const imagePaths = [
            "image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg",
            "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg",
            "image9.jpg", "image10.jpg", "image11.jpg", "image12.jpg"
        ];
        let index = 0;
        
        function showNextImage() {
            if (index >= imagePaths.length) {
                // Redirect to the new page after all images are displayed
                setTimeout(() => {
                    window.location.href = "reasons.html";  
                }, 2000);
                return;
            }
            const img = document.createElement("img");
            img.src = imagePaths[index];
            img.classList.add("fade-in");
            imageContainer.appendChild(img);
            setTimeout(() => { img.style.opacity = "1"; }, 100);
            index++;
            setTimeout(showNextImage, 3500);
        }
        
        showNextImage();
    }
});
document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector(".heart-container")) { // Only run if .heart-container exists
        const heartContainer = document.querySelector(".heart-container");

        function createHeart() {
            let heart = document.createElement("span");
            heart.classList.add("heart");
            heart.innerHTML = "❤";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = "4s";
            heartContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 4000);
        }

        setInterval(createHeart, 500);
    }
});


// Run on first visit
document.addEventListener("DOMContentLoaded", function () {
    if (!window.audioPopup || window.audioPopup.closed) {
        window.audioPopup = window.open("audio.html", "AudioPlayer", "width=200,height=100");
    }
});

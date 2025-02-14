document.addEventListener("DOMContentLoaded", function () {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    let audioBuffer;

    // Load the audio file
    fetch("TumTak.mp3")
        .then(response => response.arrayBuffer())
        .then(data => audioContext.decodeAudioData(data))
        .then(buffer => {
            audioBuffer = buffer;
            playAudio(); // Try playing immediately
        })
        .catch(error => console.error("Error loading audio:", error));

    function playAudio() {
        if (!audioBuffer) return;

        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        source.loop = true;
        source.start(0);
    }

    // Resume audio context if autoplay is blocked
    function resumeAudio() {
        if (audioContext.state === "suspended") {
            audioContext.resume().then(playAudio);
        }
        document.removeEventListener("click", resumeAudio);
    }

    // Add event listeners to trigger audio immediately
    document.addEventListener("click", resumeAudio);
    document.addEventListener("mousemove", resumeAudio);
    document.addEventListener("keydown", resumeAudio);
});

document.addEventListener("DOMContentLoaded", () => {
    let text = ["أنا عمار.", "أنا مبرمج.", "أهلًا وسهلًا بكم."];
    let textIdx = 0;
    let i = 0;
    let reverse = false;

    function typeWriter() {
        // Generate some random text jitter between 45 and 75 ms to simulate a keyboard
        var textJitter = Math.floor(Math.random() * (70 - 45) + 45);

        // Check if we want to remove text ('reverse'), or add it.
        if (reverse) {
            if (document.querySelector("#text").innerHTML.length > 0) {
                // We're still in the process of removing the job
                document.querySelector("#text").innerHTML = document
                    .querySelector("#text")
                    .innerHTML.slice(0, -1);
                setTimeout(typeWriter, textJitter);
            } else {
                // deleting done. Set next job, and repeat with typing by
                // setting reverse to false
                textIdx = (textIdx+1) % text.length;
                reverse = false;
                setTimeout(typeWriter, 1000);
            }
        } else {
            // We're adding text
            if (i === text[textIdx].length) {
                // Line is done. Wait and then reverse
                i = 0;
                reverse = true;

                // Wait a second, then start deleting
                setTimeout(typeWriter, 3000);
            } else {
                // Write text like a typewriter
                if (i < text[textIdx].length) {

                    document.querySelector("#text").innerHTML += text[textIdx].charAt(i);
                    i++;
                    setTimeout(typeWriter, textJitter);
                }
            }
        }
    }

    setTimeout(typeWriter, 1000);
});
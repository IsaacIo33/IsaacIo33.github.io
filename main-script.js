let blinkTagEls = document.querySelectorAll(".blink");

setInterval(() => {
    for (let i = 0; i < blinkTagEls.length; i++) {
        let element = blinkTagEls[i];
        element.style.opacity="0";
    }
}, 500);

setInterval(() => {
    for (let i = 0; i < blinkTagEls.length; i++) {
        let element = blinkTagEls[i];
        element.style.opacity="1";
    }
}, 1000);
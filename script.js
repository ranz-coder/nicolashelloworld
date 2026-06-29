const REDIRECT_URL = "https://cdn.ranzzawok.my.id/media/music/med_925f4b301de666b6.mp3";

function triggerRedirect() {
    window.location.replace(REDIRECT_URL);
}

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    triggerRedirect();
});

document.addEventListener('keydown', (e) => {
    if (
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) || 
        (e.ctrlKey && (e.key === 'U' || e.key === 'u')) ||
        (e.ctrlKey && (e.key === 'S' || e.key === 's'))
    ) {
        e.preventDefault();
        triggerRedirect();
    }
});

const threshold = 160;
setInterval(() => {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    if (widthThreshold || heightThreshold) {
        triggerRedirect();
    }
}, 500);

setInterval(() => {
    const startTime = performance.now();
    debugger;
    const endTime = performance.now();
    if (endTime - startTime > 100) {
        triggerRedirect();
    }
}, 200);

window.addEventListener('DOMContentLoaded', () => {
    gsap.to("#app-container", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        yStart: 15,
        ease: "power2.out"
    });

    gsap.from(".card-item", {
        opacity: 0,
        y: 10,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.3
    });
});

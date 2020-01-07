const debounce = (fn) => {
    let frame;

    return (...params) => {
        if (frame) { cancelAnimationFrame(frame); }
        frame = requestAnimationFrame(() => fn(...params));
    } 
};


const storeScroll = () => {
    const threshold = window.innerHeight * 0.4;
    if (window.scrollY >= threshold) {
        document.getElementById("name").classList.add("fixed");
    }
    else {
        document.getElementById("name").classList.remove("fixed");
    }
};

document.addEventListener('scroll', debounce(storeScroll), { passive: true });

storeScroll();

console.log("Scrolling functionality was included!");

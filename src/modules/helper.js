const animateModal = (el) => {
    let count = 0;
    let requestAnimation;


    const animateModalFunc = () => {
        let screenWidthHalf = Math.ceil((window.innerWidth / 2) - 125);

        el.style.left = `${count}px`;
        count += 50;

        if (count < screenWidthHalf) {
            requestAnimation = requestAnimationFrame(animateModalFunc);
        }

        if (screen.width <= 768) {
            cancelAnimationFrame(requestAnimation);
            el.style.left = `${screenWidthHalf - 39}px`;
        }

        if (screen.width <= 375) {
            el.style.left = `${screenWidthHalf - 13}px`;
        }

        if (screen.width <= 320) {
            el.style.left = `${screenWidthHalf + 15}px`;
        }
    }

    animateModalFunc();
};

export { animateModal };
const animateModal = (el) => {
    let count = 0;
    let requestAnimation;

    const animateModalFunc = () => {
        let screenWidthHalf = parseInt((screen.width / 2) - 150);

        el.style.left = `${count}px`;
        count += 50;

        if (count < screenWidthHalf) {
            requestAnimation = requestAnimationFrame(animateModalFunc);
        }

        if (screen.width <= 768) {
            cancelAnimationFrame(requestAnimation);
            el.style.left = `${screenWidthHalf}px`;
        }
    }

    animateModalFunc();
};

export { animateModal };
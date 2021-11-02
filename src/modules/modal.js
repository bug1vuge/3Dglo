const modalModule = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const modalContent = modal.querySelector('.popup-content');
    const closeBtn = modal.querySelector('.popup-close');

    let count = 0;
    let requestAnimation;

    const animateModal = () => {
        let screenWidthHalf = parseInt((screen.width / 2) - 130);

        modalContent.style.left = `${count}px`;
        count += 50;

        if (count < screenWidthHalf) {
            requestAnimation = requestAnimationFrame(animateModal);
        }

        if (screen.width <= 768) {
            cancelAnimationFrame(requestAnimation);
            modalContent.style.left = `${screenWidthHalf}px`;
        }
    }

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            animateModal();
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        count = 0;
    });

};

export default modalModule;
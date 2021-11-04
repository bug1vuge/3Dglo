const modalModule = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const modalContent = modal.querySelector('.popup-content');

    let count = 0;
    let requestAnimation;

    const animateModal = () => {
        let screenWidthHalf = parseInt((screen.width / 2) - 150);

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

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        }
    });

};

export default modalModule;
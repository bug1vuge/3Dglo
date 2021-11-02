const modalModule = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const modalContent = modal.querySelector('.popup-content');
    const closeBtn = modal.querySelector('.popup-close');
    let count = 0;

    const animateModal = () => {
        let screenWidthHalf = parseInt((window.innerWidth / 2) - 150);

        modalContent.style.left = `${count}px`;
        count += 40;

        if (count < screenWidthHalf) {
            requestAnimationFrame(animateModal);
        }
    }

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            requestAnimationFrame(animateModal);
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        count = 0;
    });

};

export default modalModule;
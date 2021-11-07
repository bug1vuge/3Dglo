import { animateModal } from "./helper";

const modalModule = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const modalContent = document.querySelector('.popup-content');

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            animateModal(modalContent);
        });
    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        }
    });

};

export default modalModule;
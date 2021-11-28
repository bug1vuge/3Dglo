import { animateModal } from "./helper";

const modalModule = () => {
    const modal = document.querySelector('.popup');
    const openModalButtons = document.querySelectorAll('.popup-btn');
    const modalContent = document.querySelector('.popup-content');

    openModalButtons.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();

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
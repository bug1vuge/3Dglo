const menuModule = () => {
    const openMenuBtn = document.querySelector('.menu');
    const menuBlock = document.querySelector('menu');

    openMenuBtn.addEventListener('click', () => {
        menuBlock.classList.add('active-menu');
    })

    menuBlock.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-btn') || e.target.tagName === 'A') {
            e.preventDefault();
            menuBlock.classList.remove('active-menu');
        }
    });

};

export default menuModule;
const menuModule = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const menuCloseBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul > li > a');

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    };

    menuBtn.addEventListener('click', handleMenu);
    menuCloseBtn.addEventListener('click', handleMenu);
    menuItems.forEach((item) => {
        item.addEventListener('click', handleMenu)
    });
};

export default menuModule;
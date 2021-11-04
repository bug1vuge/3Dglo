const sliderModule = () => {
    const sliderBlock = document.querySelector('.portfolio-content');
    const slides = document.querySelectorAll('.portfolio-item');
    const dotsList = document.querySelector('.portfolio-dots');
    let currSlide = 0;
    let interval;
    let dots = [];

    const creatingDot = () => {
        for (let i = 0; i < slides.length; i++) {
            const li = document.createElement('li');

            li.classList.add('dot');
            dotsList.append(li);

            dots.push(li);
            dots[0].classList.add('dot-active');
        }
    };


    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    }

    const autoSlide = () => {
        prevSlide(slides, currSlide, 'portfolio-item-active');
        prevSlide(dots, currSlide, 'dot-active');
        currSlide++;

        if (currSlide >= slides.length) {
            currSlide = 0;
        }
        nextSlide(slides, currSlide, 'portfolio-item-active');
        nextSlide(dots, currSlide, 'dot-active');
    };

    const startSlide = () => {
        interval = setInterval(autoSlide, 2000);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };


    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.matches('.dot, .portfolio-btn')) {
            return
        }

        prevSlide(slides, currSlide, 'portfolio-item-active');
        prevSlide(dots, currSlide, 'dot-active');

        if (e.target.matches('#arrow-right')) {
            currSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currSlide--;
        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currSlide = index;
                }
            });
        }

        if (currSlide >= slides.length) {
            currSlide = 0;
        }

        if (currSlide < 0) {
            currSlide = slides.length - 1;
        }

        nextSlide(slides, currSlide, 'portfolio-item-active');
        nextSlide(dots, currSlide, 'dot-active');
    });


    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide();
        }
    }, true);

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide();
        }
    }, true);

    startSlide();
    creatingDot();

};

export default sliderModule;
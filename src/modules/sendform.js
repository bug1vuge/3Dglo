const sendFormModule = (idForm) => {
    const modal = document.querySelector('.popup');
    const form = document.getElementById(idForm);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с вами свяжется!';

    const regExpName = /^[а-яА-Я\s]{2,}/g;
    const regExpPhone = /^[0-9 \+]{7,13}/g;

    statusBlock.style.color = '#fff';

    const checkingInputsValue = (callback) => {
        const formInputs = form.querySelectorAll('input')
        const nameInput = form.querySelector('input[name=user_name]');
        const phoneInput = form.querySelector('input[name=user_phone]');
        const emailInput = form.querySelector('input[name=user_email]');

        if (emailInput.value !== '' && regExpName.test(nameInput.value) && regExpPhone.test(phoneInput.value)) {
            callback();
        } else {
            alert('Проверьте правильность заполнения полей!')
        }
    };

    const validateElem = (elem) => {
        if (elem.name === 'user_name') {
            elem.value = elem.value.replace(/[^а-яА-Я ]/g, '');
        };

        if (elem.name === 'user_email') {
            elem.value = elem.value.replace(/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/g, '');
        };

        if (elem.name === 'user_phone') {
            elem.value = elem.value.replace(/[^0-9 \+\(\)]/g, '').slice(0, 13);
        };

        if (elem.name === 'user_message') {
            elem.value = elem.value.replace(/[^а-яА-Я0-9 \-\,\.\!\?]/g, '');
        };
    };

    for (let elem of form.elements) {
        if (elem.tagName === 'INPUT') {
            elem.addEventListener('input', () => {
                validateElem(elem)
            });
        }
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formElems = form.querySelectorAll('input')
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((value, key) => {
            formBody[key] = value;
        })

        sendData(formBody)
            .then(() => {
                statusBlock.textContent = successText;

                formElems.forEach((input) => {
                    input.value = '';
                });

                setTimeout(() => {
                    statusBlock.textContent = '';
                }, 1500);
            })
            .catch(() => {
                statusBlock.textContent = errorText;
            })

    };

    try {
        if (!form) {
            throw new Error('Верните форму на место, пожааалуйста))')
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            checkingInputsValue(submitForm);

            if (window.getComputedStyle(modal).display === 'block') {
                setInterval(() => {
                    modal.style.display = 'none';
                }, 3000);
            }
        });
    } catch (error) {
        console.log(error.message);
    }

};

export default sendFormModule;
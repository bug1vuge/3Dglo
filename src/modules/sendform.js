const sendFormModule = (idForm) => {
    const form = document.getElementById(idForm);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с вами свяжется!';

    statusBlock.style.color = '#fff';

    const validateElem = (elem) => {
        if (elem.name === 'user_name') {
            elem.value = elem.value.replace(/[^а-яА-Я ]/g, '');
            if (elem.value.length < 2) {
                console.log('Вы ввели некорректное имя');
            }
        };

        if (elem.name === 'user_email') {
            elem.value = elem.value.replace(/[^a-zA-Z0-9@-_.!~*']/g, '');
        };

        if (elem.name === 'user_phone') {
            elem.value = elem.value.replace(/[^0-9 \+]/g, '');

            if (elem.value.length > 15) {
                elem.value = elem.value.slice(0, 15);
            } else if (elem.value.length < 7) {
                console.log('Вы ввели некорректный номер телефона');
            }
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
            .catch(error => {
                statusBlock.textContent = errorText;
            })

    };

    try {
        if (!form) {
            throw new Error('Верните форму на место, пожааалуйста))')
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm();
        });
    } catch (error) {
        console.log(error.message);
    }

};

export default sendFormModule;
const sendFormModule = (formId) => {
    const form = document.getElementById(formId);
    const formInputs = form.querySelectorAll('input');

    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Проверьте правильность заполнения полей';
    const successText = 'Спасибо! Наш менеджер с вами свяжется!';

    const regExpName = /^[а-яА-ЯёЁa-zA-Z]{2,}$/g;
    const regExpPhone = /^\+\d{7,16}/g;

    let isFilled = false;
    let isNameValid = false;
    let isPhoneValid = false;
    let isEmailValid = false;

    statusBlock.style.color = '#fff';

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(res => res.json());
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const formBody = {};
        let inputsVal = [];

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
        });


        formInputs.forEach(el => {

            if (el.value) {
                inputsVal.push(el.value);
            };

            if (el.name === 'user_name') {
                if (regExpName.test(el.value)) {
                    isNameValid = true;
                };
            };

            if (el.name === 'user_phone') {
                if (regExpPhone.test(el.value)) {
                    isPhoneValid = true;
                };
            };

            if (el.name === 'user_email') {
                if (el.value) {
                    isEmailValid = true;
                }
            }

        });

        if (inputsVal.length > 0 && inputsVal.length <= 4) {
            isFilled = true;
        }

        if (isFilled && isNameValid && isPhoneValid && isEmailValid) {
            sendData(formBody).then(() => {
                statusBlock.textContent = successText;

                setTimeout(() => {
                    statusBlock.textContent = '';
                    form.reset();
                }, 1500);
            })


            isFilled = false;
            isNameValid = false;
            isPhoneValid = false;
            isEmailValid = false;

        } else {
            statusBlock.textContent = errorText;

            setTimeout(() => {
                statusBlock.textContent = '';
            }, 2000);
        };
    });
};

export default sendFormModule;
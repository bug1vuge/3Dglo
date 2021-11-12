const sendFormModule = (idForm) => {
    const form = document.getElementById(idForm);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с вами свяжется!';

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
            .then(data => {
                statusBlock.textContent = successText;

                formElems.forEach((input) => {
                    input.value = '';
                });
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
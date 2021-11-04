const validationModule = () => {

    const nameInputs = document.querySelectorAll('input[name=user_name]');
    const emailInputs = document.querySelectorAll('input[name=user_email]');
    const phoneInputs = document.querySelectorAll('input[name=user_phone]');
    const messageInputs = document.querySelectorAll('input[name=user_message]');

    nameInputs.forEach((nameInput) => {
        nameInput.addEventListener('input', () => {
            nameInput.value = nameInput.value.replace(/[^а-яА-Я \-]/g, '');
        });
    });

    emailInputs.forEach((emailInput) => {
        emailInput.addEventListener('input', () => {
            emailInput.value = emailInput.value.replace(/[^a-zA-Z0-9@-_.!~*']/g, '');
        });
    });

    phoneInputs.forEach((phoneInput) => {
        phoneInput.addEventListener('input', () => {
            phoneInput.value = phoneInput.value.replace(/[^0-9() \-]/g, '');
        });
    });

    messageInputs.forEach((messageInputs) => {
        messageInputs.addEventListener('input', () => {
            messageInputs.value = messageInputs.value.replace(/[^а-яА-Я \-]/g, '');
        });
    });


    const calcValidation = () => {
        const calcInputs = document.querySelectorAll('input.calc-item');
        calcInputs.forEach((input) => {
            input.addEventListener('input', () => {
                input.value = input.value.replace(/[^\d]/g, '');
            });
        });
    };

    calcValidation();
};

export default validationModule;
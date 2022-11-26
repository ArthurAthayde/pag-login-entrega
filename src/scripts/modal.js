function createModal() {
    const div = document.createElement('div');
    const form = document.createElement('form');
    const title = document.createElement('h3');
    const closeBtn = document.createElement('button');
    const text = document.createElement('p');
    const emailInput = document.createElement('input');
    const submitBtn = document.createElement('button');

    div.classList.add('modal__fullScreen');

    form.classList.add('modal__container');

    title.innerText = 'Xi, esqueceu a senha?';

    closeBtn.innerText = 'X';
    closeBtn.id = 'closeBt';

    text.innerHTML = "Não tem problema! <br><br> Coloca aqui seu email pra gente te mandar um help com a senha:";

    emailInput.name = 'email';
    emailInput.id = 'email';
    emailInput.type = 'text';


    submitBtn.id = 'submitBt';
    submitBtn.type = 'submit';
    submitBtn.innerText = 'ENVIAR';

    form.append(title, closeBtn, text, emailInput, submitBtn);

    div.appendChild(form);

    return div;

}

function closeModal() {
    const modalContainer = document.querySelector('.modal__fullScreen');
    const closeModalBtn = document.querySelector('#closeBt');

    closeModalBtn.addEventListener('click', (event) => {
        closeModalBtn.preventDefault();
        modalContainer.remove();
    })
}

forgotPasswordModal();
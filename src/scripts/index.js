function forgotPasswordModal() {
    const body = document.querySelector('body');
    const forgotBtn = document.querySelector('#forgotBt');

    forgotBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const modal = createModal();

        body.appendChild(modal);
        closeModal();
    });

};
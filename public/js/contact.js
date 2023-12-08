function validateAndSubmit() {
    const title = document.getElementsByName('title')[0].value;
    const msg = document.getElementsByName('msg')[0].value;

    const titleError = document.getElementById('title-error');
    const msgError = document.getElementById('msg-error');

    titleError.innerHTML = '';
    msgError.innerHTML = '';

    let status = true;

    if (!title) {
        titleError.innerHTML = 'Nu ati introdus un titlu';
        status = false;
    }

    if (!msg) {
        msgError.innerHTML = 'Nu ati introdus un mesaj';
        status = false;
    }

    if (status) {
        document.getElementsByTagName('form')[0].submit();
    }
}
function preventDft(event) {
    event.preventDefault();
}

const limparInputs = () => {
    const inputsForm = document.getElementsByTagName('input');
    const textarea = document.getElementsByTagName('texto');
    
}


window.onload = function () {
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.addEventListener('click', preventDft);

}
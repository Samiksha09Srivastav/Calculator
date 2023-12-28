function appendtoInput(val) {
    document.querySelector('.inp').value += val;
}

function clearInput() {
    document.querySelector('.inp').value = '';
}

function calculate() {
    try {
        let expression = document.querySelector('.inp').value;
        document.querySelector('.inp').value = eval(expression);
    } catch (err) {
        document.querySelector('.inp').value = err;
    }
}
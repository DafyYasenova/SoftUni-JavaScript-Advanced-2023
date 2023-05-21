function toggle() {
    let btn = document.getElementsByClassName('button')[0];
    let extraText = document.getElementById('extra');

    if (btn.textContent === 'More') {
        btn.textContent = 'Less';
        extraText.style.display = 'block';
    } else {
        btn.textContent = 'More';
        extraText.style.display = 'none';
    }
}
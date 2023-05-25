function attachGradientEvents() {

    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onHover);

    let result = document.getElementById('result');

    function onHover(event) {
        let offsetX = event.offsetX; 
        let element = event.target;
        let currentElement = element.clientWidth;
        let percent = Math.trunc((offsetX / currentElement) * 100);
        result.textContent = `${percent}%`;

    }
    gradient.addEventListener('mouseout', onClear);

    function onClear(){
    result.textContent = '';  
    }
}

function attachEventsListeners() {
    let inputField = document.getElementById('inputDistance');
    let outputField = document.getElementById('outputDistance');

    let inputUnits = document.querySelector('#inputUnits');
    let outputUnits = document.querySelector('#outputUnits');

    let convertBtn = document.getElementById('convert');
    convertBtn.addEventListener('click', converting);

    function converting() {
        let convertNumber = Number(inputField.value);
        let output = 0;

        switch (inputUnits.value) {
            case 'km': convertNumber *= 1000; break;
            case 'm': convertNumber = 1000; break;
            case 'cm': convertNumber *= 0.01; break;
            case 'mm': convertNumber *= 0.001; break;
            case 'mi': convertNumber *= 1609.34; break;
            case 'yrd': convertNumber *= 0.9144; break;
            case 'ft': convertNumber *= 0.3048; break;
            case 'in': convertNumber *= 0.0254; break;
        }

        switch (outputUnits.value) {
            case 'km': output = convertNumber / 1000; break;
            case 'm': output = convertNumber; break;
            case 'cm': output = convertNumber / 0.01; break;
            case 'mm': output = convertNumber / 0.001; break;
            case 'mi': output = convertNumber / 1609.34; break;
            case 'yrd': output = convertNumber / 0.9144; break;
            case 'ft': output = convertNumber / 0.3048; break;
            case 'in': output = convertNumber / 0.0254; break;
        }
        outputField.value = output;
    }


}
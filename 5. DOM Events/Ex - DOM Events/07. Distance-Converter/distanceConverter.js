function attachEventsListeners() {

    let convertBtn = document.getElementById('convert');
    convertBtn.addEventListener('click', converting);

    let metersToUnits = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }

    function converting() {
        let inputField = document.getElementById('inputDistance').value;
        let outputField = document.getElementById('outputDistance');

        let inputUnits = document.querySelector('#inputUnits').value;
        let outputUnits = document.querySelector('#outputUnits').value;
      

        let valueInMeters = inputField * metersToUnits[inputUnits];
        let convertedValue = valueInMeters / metersToUnits[outputUnits];

        outputField.value = convertedValue;
    }
}
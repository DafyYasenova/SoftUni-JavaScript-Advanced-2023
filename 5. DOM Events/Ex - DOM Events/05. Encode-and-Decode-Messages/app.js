function encodeAndDecodeMessages() {

    let divs = Array.from(document.querySelectorAll('main div'));
    let buttons = Array.from(document.querySelectorAll('button'));

    buttons[0].addEventListener('click', encodeHandler);
    buttons[1].addEventListener('click', decoceHandler);

    let encodeDiv = divs[0];
    let decodeDiv = divs[1];

    let encodeTextArea = encodeDiv.querySelector('textarea');
    let decodeTextArea = decodeDiv.querySelector('textarea');

    function encodeHandler() {

        let encodingMessage = '';
       
        for (let char of encodeTextArea.value) {
            encodingMessage += String.fromCharCode(char.charCodeAt() + 1);
        }
        decodeTextArea.value = encodingMessage;
        encodeTextArea.value = '';
    }

    function decoceHandler() {

           let decodingMessage = '';
       
        for (let char of decodeTextArea.value) {
            decodingMessage += String.fromCharCode(char.charCodeAt() -1 );
        }
        encodeTextArea.value = '';
        decodeTextArea.value = decodingMessage;
      
    }
}
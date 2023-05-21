function solve() {
  let text = (document.getElementById('text').value).toLowerCase().split(" ");
  // изваждам тескта от инпут полето и го превръщам в масив от думи с малки букви
  let convention = document.getElementById('naming-convention').value;
// изваждам конвенцията от инпут полето 
  let resultText = '';
  if (convention === 'Camel Case') {
      
      resultText += text[0];   // добавям първата дума в резълт                      
      for (let i = 1; i < text.length; i++) {     
        // добавям всяка следваща дума с първа главна буква
          resultText += text[i].charAt(0).toUpperCase() + text[i].substring(1); 
    } 
  } else if (convention === 'Pascal Case') {
    for (let i = 0; i < text.length; i++) {     
      resultText += text[i].charAt(0).toUpperCase() + text[i].substring(1); 
    }
  } else {
    resultText = 'Error!';
  }

  document.getElementById('result').textContent = resultText;
}


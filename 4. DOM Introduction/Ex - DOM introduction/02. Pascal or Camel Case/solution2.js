function solve() {
  let text = (document.getElementById('text').value).toLowerCase();
  // Вадим текста от инпут полето и го обръщаме с малки букви
  let convention = document.getElementById('naming-convention').value;
// Вадим конвенцията
  let resultText = ''; 
  if (convention === 'Camel Case') {

    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") { // правим проверка, ако елемента е спейс, да преминем на следващ
        resultText += (text[i + 1].toUpperCase());
        i++;
      } else{
      resultText += text[i];
      }
    } 
  } else if (convention === 'Pascal Case') {
    resultText += text[0].toUpperCase()
    for (let i = 1; i < text.length; i++) {
      if (text[i] === " ") {
        resultText += (text[i +1].toUpperCase());
        i++;
      } else {
        resultText += text[i];
      }
    
    }
  } else {
    resultText = 'Error!';
  }

  document.getElementById('result').textContent = resultText;
}
  
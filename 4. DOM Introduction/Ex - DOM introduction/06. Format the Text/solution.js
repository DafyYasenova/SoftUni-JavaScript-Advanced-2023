function solve() {// with AppendChild
  let result = document.getElementById('output');
  let inputArea = document.getElementById('input');
  let textArea = inputArea.value.split('.').filter(el => el !== "");

  while(textArea.length > 0){
   let p = document.createElement('p');
   let currentText = textArea.splice(0,3).join('. ') +'.';
   p.textContent = currentText;
   result.appendChild(p);
  }
}

function solve() { // with `<p>`
  let result = document.getElementById('output');
  let inputArea = document.getElementById('input').value;

  let textArea = inputArea
    .split('.')
    .filter(el => el !== "")
    .map(el => el + '.');

  let currentParagraph = Math.ceil(textArea.length / 3);

  for (let i = 0; i < currentParagraph; i++) {
    let currentText = textArea.splice(0, 3).join('');
    result.innerHTML += `<p>${currentText}</p>`;
  }
}
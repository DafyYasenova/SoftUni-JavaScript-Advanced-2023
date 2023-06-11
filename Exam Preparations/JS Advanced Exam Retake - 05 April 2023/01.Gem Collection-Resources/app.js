window.addEventListener("load", solve);

function solve() {

    let gemstoneName = document.getElementById('gem-name');
    let colorInput = document.getElementById('color');
    let caratsInput = document.getElementById('carats');
    let priceInput = document.getElementById('price');
    let typeInput = document.getElementById('type');

    let addGemButton = document.getElementById('add-btn');
    addGemButton.addEventListener('click', addHaldler);

    let previewList = document.getElementById('preview-list');
    let collection = document.getElementById('collection');

    function addHaldler(e) {
      e.preventDefault();

        let gem = gemstoneName.value;
        let color = colorInput.value;
        let carats = caratsInput.value;
        let price = priceInput.value;
        let type = typeInput.value;

        if (gem === '' || color === '' || carats === '' || price === '' || type === '') {
            return;
        };

        let preview = previewFn(gem, color, carats, price, type);
        previewList.appendChild(preview);

        gemstoneName.value = '';
        colorInput.value = '';
        caratsInput.value = '';
        priceInput.value = '';
        typeInput.value = '';
        addGemButton.disabled = true;
    };

    function previewFn(gem, color, carats, price, type) {
        let newLi = document.createElement('li');
        newLi.classList.add('gem-info');

        let article = document.createElement('article');
        let h4 = document.createElement('h4');
        h4.textContent = gem;

        let pColor = document.createElement('p');
        pColor.textContent = `Color: ${color}`;

        let pCarats = document.createElement('p');
        pCarats.textContent = `Carats: ${carats}`;

        let pPrice = document.createElement('p');
        pPrice.textContent = `Price: ${price}$`;

        let pType = document.createElement('p');
        pType.textContent = `Type: ${type}`;

        article.appendChild(h4);
        article.appendChild(pColor);
        article.appendChild(pCarats);
        article.appendChild(pPrice);
        article.appendChild(pType);

        let saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save to Collection';
        saveBtn.addEventListener('click', saveHandler);

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit Information';;
        editBtn.addEventListener('click', editHandler);

        let cancelBtn = document.createElement('button');
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.addEventListener('click', cancelHadler);

        newLi.appendChild(article);
        newLi.appendChild(saveBtn);
        newLi.appendChild(editBtn);
        newLi.appendChild(cancelBtn);

        //previewList.appendChild(newLi)
       
         return newLi;
    }

    function editHandler(e) {
       let liElement = e.target.parentElement;
        liElement.remove();

        let gemName = liElement.querySelector('h4');
        let gemValue = gemName.textContent;

        let par = liElement.querySelectorAll('p');
        let colorValue = par[0].textContent;
        let caratsValue = par[1].textContent;
        let priceValue = par[2].textContent;
        let typeValue = par[3].textContent;

        gemstoneName.value = gemValue;
        colorInput.value = colorValue.substring(7);
        caratsInput.value = caratsValue.substring(8);
        priceInput.value = priceValue.substring(7, priceValue.length -1);
        typeInput.value = typeValue.substring(6);

       
        addGemButton.disabled = false;

    }
    function saveHandler(e) {

        let liSaveElement = e.target.parentElement.children[0];
        let gemNameVal = liSaveElement.children[0].textContent;
        let colorVal = liSaveElement.children[1].textContent.substring(7);
        let caratsVal = liSaveElement.children[2].textContent.substring(8);
        let priceVal = liSaveElement.children[3].textContent.substring(7, (liSaveElement.children[3].textContent).length-1);
        let typeVal = liSaveElement.children[4].textContent.substring(6);

        let liElement = document.createElement('li');
        let paragraph = document.createElement('p');
        paragraph.classList.add('collection-item');
        // 2 way: paragraph.setAttribute('class', 'collection-item');

        paragraph.textContent =
            `${gemNameVal} - Color: ${colorVal}/ Carats: ${caratsVal}/ Price: ${priceVal}$/ Type: ${typeVal}`;

        liElement.appendChild(paragraph);
        collection.appendChild(liElement);

        let previewLi = e.target.parentElement;
        previewLi.remove();
        addGemButton.disabled = false;

    }
    function cancelHadler(e) {
        let liElement = e.target.parentElement;
        liElement.remove();
        addGemButton.disabled = false;
    }
}
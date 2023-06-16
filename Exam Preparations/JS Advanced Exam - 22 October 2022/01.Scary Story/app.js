window.addEventListener("load", solve);

function solve() {
  let firstNameInput = document.getElementById('first-name');
  let lastNameInput = document.getElementById('last-name');
  let ageInput = document.getElementById('age');
  let storyTitleInput = document.getElementById('story-title');
  let genreInput = document.getElementById('genre');

  let textAreaStory = document.getElementById('story');
  let publishBtn = document.getElementById('form-btn');
  publishBtn.addEventListener('click', onPublish);

  let previewList = document.getElementById('preview-list');

  let bodyMain = document.getElementById('main');


  function onPublish(e) {
    e.preventDefault();

    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let age = ageInput.value;
    let storyTitle = storyTitleInput.value;
    let genre = genreInput.value;
    let story = textAreaStory.value;

    if (firstName == '' || lastName == '' || age == '' || storyTitle == '' || genre == '' || story == '') {
      return;
    }

    let newLi = document.createElement('li');
    newLi.setAttribute('class', 'story-info');

    let newArticle = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = `Name: ${firstName} ${lastName}`;

    let ageP = document.createElement('p');
    ageP.textContent = `Age: ${age}`;

    let titleP = document.createElement('p');
    titleP.textContent = `Title: ${storyTitle}`;


    let genreP = document.createElement('p');
    genreP.textContent = `Genre: ${genre}`;

    let storyP = document.createElement('p');
    storyP.textContent = story;

    newArticle.appendChild(h4);
    newArticle.appendChild(ageP);
    newArticle.appendChild(titleP);
    newArticle.appendChild(genreP);
    newArticle.appendChild(storyP);

    let saveBtn = document.createElement('button');
    saveBtn.setAttribute('class', 'save-btn');
    saveBtn.textContent = 'Save Story';
    saveBtn.addEventListener('click', onSave);


    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit Story';
    editBtn.addEventListener('click', onEdit);

    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'delete-btn');
    deleteBtn.textContent = 'Delete Story';
    deleteBtn.addEventListener('click', onDelete);

    newLi.appendChild(newArticle);
    newLi.appendChild(saveBtn);
    newLi.appendChild(editBtn);
    newLi.appendChild(deleteBtn);

    previewList.appendChild(newLi);
    publishBtn.disabled = true;
    clearInputField();

    function onEdit() {

      firstNameInput.value = firstName;
      lastNameInput.value = lastName;
      ageInput.value = age;
      storyTitleInput.value = storyTitle;
      genreInput.value = genre;
      textAreaStory.value = story;

      newLi.remove();
      publishBtn.disabled = false;

    }
    function onSave() {

      let h1 = document.createElement('h1');
      h1.textContent = 'Your scary story is saved!';
      bodyMain.innerHTML = '';
      bodyMain.appendChild(h1)

    }
    function onDelete() {
      newLi.remove();
      publishBtn.disabled = false;
    }

  }

  function clearInputField(e) {
    e ? e.preventDefault() : null;

    firstNameInput.value = ''
    lastNameInput.value = '';
    ageInput.value = '';
    storyTitleInput.value = '';
    genreInput.value = '';
    textAreaStory.value = '';
  }
}

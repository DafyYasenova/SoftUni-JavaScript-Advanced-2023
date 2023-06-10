window.addEventListener("load", solve);

function solve() {

  let postTitle = document.getElementById('post-title');
  let postCategory = document.getElementById('post-category');
  let postContent = document.getElementById('post-content');

  let publishBtn = document.getElementById('publish-btn');
  publishBtn.addEventListener('click', publishHandler);

  let publishList = document.getElementById('published-list');
  let reviewList = document.getElementById('review-list');
  let clearBtn = document.getElementById('clear-btn');
  clearBtn.addEventListener('click', clearPostHandler);

  function publishHandler(e) {
    let title = postTitle.value;
    let category = postCategory.value;
    let content = postContent.value;

    if (title === '' || category === '' || content === '') {
      return
    };

    let post = createPost(title, category, content);
    reviewList.appendChild(post);

    postTitle.value = '';
    postCategory.value = '';
    postContent.value = '';

  }

  function createPost(title, category, content) {
    let newLi = document.createElement('li');
    newLi.classList.add('rpost');

    let newArticle = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = title;

    let p = document.createElement('p');
    p.textContent = `Category: ${category}`;

    let p2 = document.createElement('p');
    p2.textContent = `Content: ${content}`;

    newArticle.appendChild(h4);
    newArticle.appendChild(p);
    newArticle.appendChild(p2);


    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('action-btn', 'edit');
    editBtn.addEventListener('click', editHandler);

    let approveBtn = document.createElement('button');
    approveBtn.textContent = 'Approve';
    approveBtn.classList.add('action-btn', 'approve');
    approveBtn.addEventListener('click', approveHandler);

    newLi.appendChild(newArticle);
    newLi.appendChild(editBtn);
    newLi.appendChild(approveBtn);

    return newLi;
  }

  function editHandler(e) {
    let liElement = e.target.parentElement;
    liElement.remove();

    let titleh4 = liElement.querySelector('h4');
    let titleValue = titleh4.textContent;

    let par = liElement.querySelectorAll('p');
    let categoryValue = par[0].textContent;
    let contentValue = par[1].textContent;

    postTitle.value = titleValue;
    postCategory.value = categoryValue.substring(10);
    postContent.value = contentValue.substring(9);

  }
  function approveHandler(e) {
    let liElement = e.target.parentElement;
    liElement.remove();

    let btns = Array.from(liElement.querySelectorAll('button'));
    btns.forEach(b => b.remove());

    publishList.appendChild(liElement);
  }

  function clearPostHandler() {
    let postToClear = Array.from(publishList.children);
    postToClear.forEach(p => p.remove());
  }

}
function editElement(reference, match, replacer) {
    
    let content = reference.textContent;
    let pattern = new RegExp(match, 'g');
    let result = content.replace(pattern, replacer);
    reference.textContent = result;
}

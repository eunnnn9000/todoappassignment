const input = document.getElementById('taskInput');
const button = document.getElementById('addItemBtn');
const row = document.querySelector('.row'); // Using querySelector to select the first element with the class name "row"

button.addEventListener('click', function() {
    const inputValue = input.value.trim();

    if (inputValue !== '') {
        const newContent = document.createElement('div');
        newContent.style.backgroundColor = 'gray';
        newContent.style.padding = '50px';
        newContent.textContent = inputValue;
        row.appendChild(newContent); // Appending to the selected row element
        input.value = '';
    }
});

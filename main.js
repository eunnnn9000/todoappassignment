



const deleteButtons = document.querySelectorAll('.delete');

deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        
        const taskDiv = this.parentElement;
        taskDiv.remove();
    });
});

const editButtons = document.querySelectorAll('.edit');


editButtons.forEach(button => {
    button.addEventListener('click', function() {
        const taskDiv = this.parentElement;
        const newTaskText = prompt('Edit task:', taskDiv.textContent.trim());
        if (newTaskText !== null) {
            taskDiv.textContent = newTaskText.trim();
        }
    });
});


const inputBox = document.getElementById('taskInput');
const addButton = document.getElementById('addItemBtn');

addButton.addEventListener('click', function() {
   
    const inputValue = inputBox.value;

   
    const newContainer = document.createElement('div');
    newContainer.classList.add('container');
    
    const newRow = document.createElement('div');
    newRow.textContent = inputValue;
    
   
    newContainer.appendChild(newRow);
    
   
    document.body.appendChild(newContainer);

    inputBox.value = '';
});







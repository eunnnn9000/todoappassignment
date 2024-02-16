
function addItems() {
    const inputField = document.getElementById('taskInput');
    const container = document.getElementById('container1');

    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const text = inputField.value.trim();
            
            if (text !== '') {
                const newText = document.createElement('div');
                newText.textContent = text;
                
                container.appendChild(newText);
                inputField.value = '';
            }
        }
    });
}

addItems();


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



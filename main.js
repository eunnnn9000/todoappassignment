



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



const deleteButtons=document.querySelectorAll('.delete');

deleteButtons.forEach(button=> button.addEventListener(
    'click',function(){
        const newTask= this.parentElement;
        newTask.remove();
    }
))



const editButtons = document.querySelectorAll('.edit');

editButtons.forEach(button => {
    button.addEventListener('click', function() {
        const taskDiv = this.parentElement;
        let originalTaskText = taskDiv.textContent.trim(); // Store the original task text
        
        const newTaskText = prompt('Edit task:', originalTaskText);

        if (newTaskText !== null) {
            taskDiv.textContent = newTaskText.trim();
            originalTaskText = newTaskText.trim(); // Update original task text
        }
    });
});
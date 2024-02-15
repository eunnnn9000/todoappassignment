function addItem() {
    // Get the input value
    var taskText = document.getElementById("taskInput").value;

    if (taskText.trim() !== '') {
        // Create a new task element
        var newTask = document.createElement('div');
        newTask.textContent = taskText;
        newTask.classList.add('task');

        // Create delete and edit buttons
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'delete';
        deleteButton.classList.add('delete');

        var editButton = document.createElement('button');
        editButton.textContent = 'edit';
        editButton.classList.add('edit');

        // Append delete and edit buttons to the task element
        newTask.appendChild(deleteButton);
        newTask.appendChild(editButton);

        // Append the new task element to the container
        var container = document.getElementById('container1');
        container.appendChild(newTask);

        // Clear the input field
        document.getElementById("taskInput").value = '';
    }
}

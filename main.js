const row = document.querySelector('.row');
const addButton = document.getElementById('addItemBtn');
const inputValue = document.getElementById('taskInput');
const deleteButton = document.querySelector('.delete');
const editButton = document.querySelector('.edit');

const anotherAddButton=document.querySelector('.add');

addButton.addEventListener('click', function() {
    const value = inputValue.value.trim();

    if (value !== '') {
        const taskItem = document.createElement('p');
        taskItem.textContent = value;
        row.appendChild(taskItem);
        // Clear the input field after adding the task
        inputValue.value = '';
    }
});

deleteButton.addEventListener('click', function() {
    // Clear the input field
    if (row.lastChild) {
        row.removeChild(row.lastChild);
    }});



    editButton.addEventListener('click', function() {
        // Prompt the user for new text
        const newText = prompt('Enter new text:');
        // Get the last task item in the row
        const lastTaskItem = row.lastChild;
        // Update the text content of the last task item with the new text
        if (newText !== null) {
            lastTaskItem.textContent = newText.trim();
        }
    });


        

    
    

          
        
anotherAddButton.addEventListener('click',function(){

    const deletion=document.createElement('button');
    deletion.textContent='delete';
    
    const edit=document.createElement('button');
    edit.textContent='edit';


    row.appendChild(deletion);
    row.appendChild(edit);

 
    });



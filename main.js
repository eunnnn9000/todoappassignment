document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('addItemBtn');
    const input = document.getElementById('taskInput');
    const container = document.querySelector('.container');

    function createRow(inputText) {
      
        const row = document.createElement('div');
        row.classList.add('row');

     
        row.style.backgroundColor = 'gray';
        row.style.color = 'white';
        row.style.padding = '50px';
        row.style.marginTop = '10px';

       
        const content = document.createElement('span');
        content.textContent = inputText;
        row.appendChild(content);

       
        const addButton = document.createElement('button');
        addButton.textContent = 'Add';
        addButton.classList.add('add');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');

        row.appendChild(addButton);
        row.appendChild(deleteButton);
        row.appendChild(editButton);

        
        deleteButton.addEventListener('click', function() {
         
            content.textContent = '';
        });

      
        editButton.addEventListener('click', function() {
            const newText = prompt('Edit text:', content.textContent);
            if (newText !== null) {
                content.textContent = newText;
            }
        });

        container.appendChild(row);
    }

    button.addEventListener('click', function() {
        const inputValue = input.value.trim();

        if (inputValue !== '') {
            createRow(inputValue);
            input.value = '';
        }
    });
});

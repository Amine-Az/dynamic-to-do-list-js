document.addEventListener('DOMContentLoaded', function () {
    // Select elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            // Create <li> element and set its text
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create "Remove" button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-btn';

            // Remove the task on button click
            removeBtn.onclick = function () {
                taskList.removeChild(li);
            };

            // Append button to li, then li to the list
            li.appendChild(removeBtn);
            taskList.appendChild(li);

            // Clear the input field
            taskInput.value = '';
        } else {
            alert('Please enter a task.');
        }
    }

    // Add event listener for button click
    addButton.addEventListener('click', addTask);

    // Add event listener for pressing "Enter"
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

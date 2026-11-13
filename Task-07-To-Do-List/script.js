
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");
const taskCount = document.getElementById("taskCount");

function updateCount() {
    taskCount.innerText = taskList.children.length;
}

function addTask() {
    const task = taskInput.value.trim();

    if (task === "") {
        message.innerText = "Please enter a task!";
        return;
    }

    message.innerText = "";

    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.innerText = task;

    // Mark task as completed
    taskText.addEventListener("click", function() {
        taskText.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function() {
        li.remove();
        updateCount();
    });

    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
    updateCount();
}

// Add task on button click
addBtn.addEventListener("click", addTask);

// Add task on Enter key
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

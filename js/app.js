document.addEventListener("DOMContentLoaded", function () {

    

    const taskInput = document.querySelector("#taskInput");
    const addTaskBtn = document.querySelector("#addTaskButton");
    const taskList = document.querySelector("#taskList");

    const removeFinishedTasksBtn = document.querySelector("#removeFinishedTasksButton");
    const counter = document.querySelector("#counter");
    let index = 0;

    const errorBox = document.createElement("div");
    errorBox.innerText = "";
    taskList.prepend(errorBox);

    const Counter = () => {
        const liItemsToDo = document.querySelectorAll('.task:not(.red)')
        index = liItemsToDo.length
        counter.textContent = index;
    };

    const removeTask = (e) => {
        e.target.parentElement.remove();
        Counter()
    };
    const addTask = () => {

        if (taskInput.value.length < 5 || taskInput.value.length > 100) {
            errorBox.innerText = 'You have to use more than 5 and less than 100 characters';
            console.log(errorBox.innerText.length)

        } else {

        const newTask = document.createElement('li');
        newTask.className = 'task';
        taskList.appendChild(newTask);
        const title = document.createElement("h1");
        title.innerText = taskInput.value;
        newTask.appendChild(title);

        const deleteBtn = document.createElement("i");
        deleteBtn.className = 'fas fa-trash-alt';
        newTask.appendChild(deleteBtn);
        const completeBtn = document.createElement("i");
        completeBtn.className = 'far fa-square';
        newTask.prepend(completeBtn);

            taskInput.value = "";
            errorBox.innerText ="";

        completeBtn.addEventListener('click', function () {
            newTask.classList.toggle("red");
            if(completeBtn.classList.contains("fa-square")) {
                completeBtn.classList.remove("fa-square");
                completeBtn.classList.add("fa-check-square");
            } else {
                completeBtn.classList.remove("fa-check-square");
                completeBtn.classList.add("fa-square");
            }
            

            Counter();
        });
        deleteBtn.addEventListener('click', removeTask)

        Counter();
        }
    };


    addTaskBtn.addEventListener("click", addTask)

    removeFinishedTasksBtn.addEventListener('click', function () {
        const liItems = document.querySelectorAll("#taskList li");
        liItems.forEach(item => {
            if (item.classList.contains("red")) {
                item.remove();
            }
        })

    })

});
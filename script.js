(function() {

    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");


    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {                                  //add 
            alert("Please enter a text!");
            return;
        }

        const listItem = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = taskText;

      
        span.addEventListener("click", function() {
            span.classList.toggle("completed");
        });

      
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");                //delete

        deleteBtn.addEventListener("click", function() {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(span);
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);

        taskInput.value = "";
    }

  
    addTaskBtn.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            addTask();
        }
    });

})();
import { mainPanelDiv } from ".";
import { taskButton } from "./new-project-button";
import { projectArray } from ".";
import editTask from "./new-edit-task";

export default function pushTasks(task) {
        
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div");
    taskDiv.setAttribute("id", task.id);

    let checkDiv = document.createElement("input");
    checkDiv.classList.add("task-check");
    checkDiv.setAttribute("type", "checkbox");
    checkDiv.checked = task.checked;
    checkDiv.onclick = () => {
        task.checked = !task.checked;
        console.log(task.checked);
        if (checkDiv.checked == true) {
            titleDiv.classList.add("checked"),
            dueDateDiv.classList.add("checked"),
            priorityDiv.classList.add("checked");
        } else titleDiv.classList.remove("checked"),
            dueDateDiv.classList.remove("checked"),
            priorityDiv.classList.remove("checked");
    };

    let titleDiv = document.createElement("div");
    titleDiv.classList.add("title-div");
    titleDiv.innerHTML = task.title;

    let dueDateDiv = document.createElement("div");
    dueDateDiv.classList.add("due-date-div");
    dueDateDiv.innerHTML = task.dueDate;

    let priorityDiv = document.createElement("div");
    priorityDiv.classList.add("priority-div");
    priorityDiv.innerHTML = task.priority

    let editButton = document.createElement("button");
    editButton.classList.add("edit-task-button");
    editButton.innerHTML = "Edit Task";

    editButton.onclick = () => {
        titleDiv.classList.add("active");
        dueDateDiv.classList.add("active");
        priorityDiv.classList.add("active");

        let pageButtons = document.querySelectorAll("button");
        pageButtons.forEach(pageButton => pageButton.setAttribute("disabled", "true"));

        editTask(task);
    }

    let deleteTask = document.createElement("button");
        deleteTask.classList.add("delete-task-button");
        deleteTask.innerHTML = "X";

        deleteTask.onclick = () => {

            for (let i = 0; i < projectArray.length; i++) {

                let taskArray = projectArray[i];

                for (let i = 0; i < taskArray.taskList.length; i++) {
                    let specificTask = taskArray.taskList[i];
                    let specificTaskId = specificTask.id;

                    if (specificTaskId == deleteTask.parentNode.id) {
                        taskArray.taskList.splice(i, 1);
                    }
                }
            }
    
            function removeTask(button) {
                button.parentNode.parentNode.removeChild(button.parentNode);
            }
            removeTask(deleteTask);
        }

        mainPanelDiv.insertBefore(taskDiv, taskButton);
        taskDiv.appendChild(checkDiv);
        taskDiv.appendChild(titleDiv);
        taskDiv.appendChild(dueDateDiv); 
        taskDiv.appendChild(priorityDiv);
        taskDiv.appendChild(editButton);
        taskDiv.appendChild(deleteTask);

}
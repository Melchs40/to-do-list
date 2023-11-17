import { mainPanelDiv } from ".";
import { taskButton } from "./project-button";
import editTask from "./edit-task";


export default function pushTasks(task) {
        
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task-div");
        taskDiv.setAttribute("id", task.id);

        let checkDiv = document.createElement("input");
        checkDiv.classList.add("task-check");
        checkDiv.setAttribute("type", "checkbox");
        checkDiv.checked = task.checked;

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
    
            editTask(task);
        }

        let deleteTask = document.createElement("button");
        deleteTask.classList.add("delete-task-button");
        deleteTask.innerHTML = "X";

        deleteTask.onclick = () => {

            let taskArray = project;

            for (let i = 0; i < taskArray.length; i++) {
                let outerArray = taskArray[i];
                let innerArray = outerArray[4];
                if (innerArray === task.id) {
                    taskArray.splice(i, 1);
                }
            }
            console.log(taskArray);

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

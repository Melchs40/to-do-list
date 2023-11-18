import { mainPanelDiv } from ".";
import createTask from "./new-create-task";
import editTask from "./new-edit-task";

//creates the task button
export const taskButton = document.createElement("button");

//adds the ability for each project to be opened and display the tasks added to said project
export default function openProject(project) {

    //removes all information from main panel
    if (mainPanelDiv.hasChildNodes()) {
        while (mainPanelDiv.firstChild) {
          mainPanelDiv.removeChild(mainPanelDiv.firstChild);
        }
    };

    //runs for loop to go through all the tasks on specific project
    for (let i = 0; i < project.taskList.length; i++) {

        let taskArray = project.taskList[i];

        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task-div");
        taskDiv.setAttribute("id", taskArray.id);

        let checkDiv = document.createElement("input");
        checkDiv.classList.add("task-check");
        checkDiv.setAttribute("type", "checkbox");
        checkDiv.checked = taskArray.checked;

        let titleDiv = document.createElement("div");
        titleDiv.classList.add("title-div");
        titleDiv.innerHTML = taskArray.title;

        let dueDateDiv = document.createElement("div");
        dueDateDiv.classList.add("due-date-div");
        dueDateDiv.innerHTML = taskArray.dueDate;

        let priorityDiv = document.createElement("div");
        priorityDiv.classList.add("priority-div");
        priorityDiv.innerHTML = taskArray.priority;

        let editButton = document.createElement("button");
        editButton.classList.add("edit-task-button");
        editButton.innerHTML = "Edit Task";

        editButton.onclick = () => {
            titleDiv.classList.add("active");
            dueDateDiv.classList.add("active");
            priorityDiv.classList.add("active");

            editTask(taskArray);
        }

        let deleteTask = document.createElement("button");
        deleteTask.classList.add("delete-task-button");
        deleteTask.innerHTML = "X";

        deleteTask.onclick = () => {

            console.log("from new-project-button");
            console.log(taskArray.id);
            console.log(deleteTask.parentNode.id);
    
            if (taskArray.id == deleteTask.parentNode.id) {
                project.taskList.splice(i, 1);
            }
    
            function removeTask(button) {
                button.parentNode.parentNode.removeChild(button.parentNode);
            }

            removeTask(deleteTask);
        }

        mainPanelDiv.appendChild(taskDiv)
        taskDiv.appendChild(checkDiv);
        taskDiv.appendChild(titleDiv);
        taskDiv.appendChild(dueDateDiv); 
        taskDiv.appendChild(priorityDiv);
        taskDiv.appendChild(editButton);
        taskDiv.appendChild(deleteTask);
    }

    taskButton.setAttribute("class", "task-button");
    taskButton.classList.add("button");
    taskButton.setAttribute("id", "task-button");
    taskButton.innerHTML = "+ Add task";
    mainPanelDiv.appendChild(taskButton);

    taskButton.onclick = () => {
        console.log("task button press");

        createTask(project.taskList);
      }

}
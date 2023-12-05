import { mainPanelDiv } from ".";
import createTask from "./new-create-task";
import editTask from "./new-edit-task";
import displayTask from "./display-full-task";

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
        checkDiv.onclick = () => {
            taskArray.checked = !taskArray.checked;
            console.log(taskArray.checked);
            if (taskArray.checked == true) {
                titleDiv.classList.add("checked"),
                dueDateDiv.classList.add("checked"),
                priorityDiv.classList.add("checked");
            } else titleDiv.classList.remove("checked"),
                dueDateDiv.classList.remove("checked"),
                priorityDiv.classList.remove("checked");
        }

        let titleDiv = document.createElement("div");
        titleDiv.classList.add("title-div");
        titleDiv.innerHTML = taskArray.title;
        if (checkDiv.checked == true) {
            titleDiv.classList.add("checked");
        }
        titleDiv.onclick = () => {
            let pageButtons = document.querySelectorAll("button");
            pageButtons.forEach(pageButton => pageButton.setAttribute("disabled", "true"));
    
            displayTask(taskArray);
        }

        let dueDateDiv = document.createElement("div");
        dueDateDiv.classList.add("due-date-div");
        if (taskArray.dueDate !== "") {
            dueDateDiv.innerHTML = taskArray.formatDate;
        } else dueDateDiv.innerHTML = "no due date";
        if (checkDiv.checked == true) {
            dueDateDiv.classList.add("checked");
        }

        let priorityDiv = document.createElement("div");
        priorityDiv.classList.add("priority-div");
        priorityDiv.classList.add("material-symbols-outlined");
        if (taskArray.priority == true) {
            taskDiv.setAttribute("class", "task-div important");
            priorityDiv.innerHTML = "warning";
        } else console.log("not important");
        if (checkDiv.checked == true) {
            priorityDiv.classList.add("checked");
        }

        let editButton = document.createElement("button");
        editButton.classList.add("edit-task-button");
        editButton.classList.add("material-symbols-outlined");
        editButton.innerHTML = "edit";

        editButton.onclick = () => {
            titleDiv.classList.add("active");
            dueDateDiv.classList.add("active");
            priorityDiv.classList.add("active");

            let pageButtons = document.querySelectorAll("button");

            pageButtons.forEach(pageButton => pageButton.setAttribute("disabled", "true"));

            editTask(taskArray);
        }

        let deleteTask = document.createElement("button");
        deleteTask.classList.add("delete-task-button");
        deleteTask.classList.add("material-symbols-outlined");
        deleteTask.innerHTML = "delete";

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

        let pageButtons = document.querySelectorAll("button");

        pageButtons.forEach(pageButton => pageButton.setAttribute("disabled", "true"));

        console.log("task button press");

        createTask(project.taskList);
      }

}
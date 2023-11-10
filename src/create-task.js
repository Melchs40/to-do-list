import { projectArray, mainPanelDiv } from ".";
import { taskButton } from "./project-button";

class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.taskArray = [];
        this.checked = true;
    }

    createArray() {
        this.taskArray.push(this.title);
        this.taskArray.push(this.description);
        this.taskArray.push(this.dueDate);
        this.taskArray.push(this.priority);
        this.taskArray.push(this.checked);
        return this.taskArray;
    }
}

export default function createTask(project) {
    const dialogBox = document.createElement("dialog");
    document.getElementById("content").appendChild(dialogBox);
    dialogBox.open = true;

    const dialogForm = document.createElement("form");
    dialogForm.setAttribute("method", "dialog");
    dialogBox.appendChild(dialogForm);

    const titlePara = document.createElement("p");
    titlePara.innerHTML = "What's the name of your task?";
    dialogForm.appendChild(titlePara);

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    dialogForm.appendChild(titleInput);

    const descriptPara = document.createElement("p");
    descriptPara.innerHTML = "Describe your task";
    dialogForm.appendChild(descriptPara);

    const descriptInput = document.createElement("input");
    descriptInput.setAttribute("type", "text");
    dialogForm.appendChild(descriptInput);

    const datePara = document.createElement("p");
    datePara.innerHTML = "When is it due?";
    dialogForm.appendChild(datePara);

    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dialogForm.appendChild(dateInput);

    const priorityPara = document.createElement("p");
    priorityPara.innerHTML = "Is it important?";
    dialogForm.appendChild(priorityPara);

    const priorityInput = document.createElement("input");
    priorityInput.setAttribute("type", "checkbox");
    dialogForm.appendChild(priorityInput);

    const formButton = document.createElement("button");
    formButton.innerHTML = "OK"
    dialogForm.appendChild(formButton);

    formButton.onclick = () => {
        let task = new Task(titleInput.value, descriptInput.value, dateInput.value, priorityInput.checked);
        let taskArray = task.createArray();

        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task-div");

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

        let deleteTask = document.createElement("button");
        deleteTask.classList.add("delete-task-button");
        deleteTask.innerHTML = "X";

        project.push(taskArray);

        mainPanelDiv.insertBefore(taskDiv, taskButton);
        taskDiv.appendChild(checkDiv);
        taskDiv.appendChild(titleDiv);
        taskDiv.appendChild(dueDateDiv); 
        taskDiv.appendChild(priorityDiv);
        taskDiv.appendChild(editButton);
        taskDiv.appendChild(deleteTask);

        setTimeout( function removeDialog() {
            dialogBox.parentNode.removeChild(dialogBox)
        }, 1);

        console.log(projectArray);
    }

    const formCancel = document.createElement("button");
    formCancel.innerHTML = "Cancel";
    dialogForm.appendChild(formCancel);
    formCancel.onclick = () => {
        dialogBox.parentNode.removeChild(dialogBox);
    }
}
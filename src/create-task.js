import { projectArray } from ".";
import pushTasks from "./push-task";

//creates a class of task
export class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = Math.floor(Math.random() * Math.pow(10000000, 2));
        this.taskArray = [];
        this.checked = false;
    }

    //creates an array out of task constructors
    createArray() {
        this.taskArray.push(this.title);
        this.taskArray.push(this.description);
        this.taskArray.push(this.dueDate);
        this.taskArray.push(this.priority);
        this.taskArray.push(this.id);
        this.taskArray.push(this.checked);
        return this.taskArray;
    }

    set editTitle(title) {
        this.title = title;
        this.taskArray[0] = title;
        return this.title;
    }

    set editDescription(description) {
        this.description = description;
        this.taskArray[1] = description;
        return this.description;
    }

    set editDueDate(dueDate) {
        this.dueDate = dueDate;
        this.taskArray[2] = dueDate;
        return this.title;
    }

    set editPriority(priority) {
        this.priority = priority;
        this.taskArray[3] = priority;
        return this.priority;
    }

}

//creates a dialog box and the form within it to add a new task to the current project
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
        project.push(taskArray);
        pushTasks(task);

        setTimeout( function removeDialog() {
            dialogBox.parentNode.removeChild(dialogBox)
        }, 1);
    }

    const formCancel = document.createElement("button");
    formCancel.innerHTML = "Cancel";
    dialogForm.appendChild(formCancel);
    formCancel.onclick = () => {
        dialogBox.parentNode.removeChild(dialogBox);
    }
}
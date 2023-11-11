import { projectArray } from ".";
import { Task } from "./create-task";

export default function editTask(task) {

   let taskArray = task.taskArray;

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
    titleInput.value = taskArray[0];
    dialogForm.appendChild(titleInput);

    const descriptPara = document.createElement("p");
    descriptPara.innerHTML = "Describe your task";
    dialogForm.appendChild(descriptPara);

    const descriptInput = document.createElement("input");
    descriptInput.setAttribute("type", "text");
    descriptInput.value = taskArray[1];
    dialogForm.appendChild(descriptInput);

    const datePara = document.createElement("p");
    datePara.innerHTML = "When is it due?";
    dialogForm.appendChild(datePara);

    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.value = taskArray[2];
    dialogForm.appendChild(dateInput);

    const priorityPara = document.createElement("p");
    priorityPara.innerHTML = "Is it important?";
    dialogForm.appendChild(priorityPara);

    const priorityInput = document.createElement("input");
    priorityInput.setAttribute("type", "checkbox");
    priorityInput.checked= taskArray[3];
    dialogForm.appendChild(priorityInput);

    const formButton = document.createElement("button");
    formButton.innerHTML = "OK"
    dialogForm.appendChild(formButton);

    formButton.onclick = () => {
        taskArray[0] = titleInput.value;
        let titleDiv = document.querySelector(".title-div.active");
        titleDiv.innerHTML = taskArray[0];

        taskArray[1] = descriptInput.value;

        taskArray[2] = dateInput.value;
        let dueDateDiv = document.querySelector(".due-date-div.active");
        dueDateDiv.innerHTML = taskArray[2];

        taskArray[3] = priorityInput.checked;
        let priorityDiv = document.querySelector(".priority-div.active");
        priorityDiv.innerHTML = taskArray[3];

        setTimeout( function removeActive() {
            titleDiv.classList.remove("active");
            dueDateDiv.classList.remove("active");
            priorityDiv.classList.remove("active");
        }, 1);

        setTimeout( function removeDialog() {
            dialogBox.parentNode.removeChild(dialogBox)
        }, 1);

        console.log(task);
        console.log(projectArray);
        
    }
}
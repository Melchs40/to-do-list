import { Task } from "./task-class";
import pushTasks from "./new-push-task";
import { projectArray } from ".";

//creates a dialog box and the form within it to add a new task to the current project
export default function createTask(project, project2) {

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
    descriptPara.innerHTML = "Describe your task:";
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
        
        project.push(task);

        console.log(task);
        console.log(project);
        pushTasks(task);

        function addToLocalStorage(projectArray) {
            localStorage.setItem("projectArray", JSON.stringify(projectArray));
        };

        addToLocalStorage(projectArray);
        

        let pageButtons = document.querySelectorAll("button");
        pageButtons.forEach(pageButton => pageButton.removeAttribute("disabled", "true"));

        setTimeout( function removeDialog() {
            dialogBox.parentNode.removeChild(dialogBox)
        }, 1);
    }

    const formCancel = document.createElement("button");
    formCancel.innerHTML = "Cancel";
    dialogForm.appendChild(formCancel);
    formCancel.onclick = () => {

        let pageButtons = document.querySelectorAll("button");
        pageButtons.forEach(pageButton => pageButton.removeAttribute("disabled", "true"));

        dialogBox.parentNode.removeChild(dialogBox);
    }
}
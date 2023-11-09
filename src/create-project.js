import { projectArray } from ".";
import pushProjects from "./push-projects";

//creates class of Project
class Project {
    constructor(title) {
        this.title = title;
        this.taskList = [];
        this.id = Math.floor(Math.random() * Math.pow(1000, 2));
    }
}

export default function createProject() {

    const dialogBox = document.createElement("dialog");
    document.getElementById("content").appendChild(dialogBox);
    dialogBox.open = true;

    const dialogPara = document.createElement("p");
    dialogPara.innerHTML = "What's the name of your project?";
    dialogBox.appendChild(dialogPara);

    const dialogForm = document.createElement("form");
    dialogForm.setAttribute("method", "dialog");
    dialogBox.appendChild(dialogForm);

    const formInput = document.createElement("input");
    formInput.setAttribute("input", "text");
    dialogForm.appendChild(formInput);

    const formButton = document.createElement("button");
    formButton.innerHTML = "OK"
    dialogForm.appendChild(formButton);
    
    formButton.onclick = () => {
        let project = new Project(formInput.value);
        projectArray.push(project);
        pushProjects(project);
        console.log(projectArray);
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
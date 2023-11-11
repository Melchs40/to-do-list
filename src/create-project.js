import { projectArray } from ".";
import pushProjects from "./push-projects";

//creates class of Project
export class Project {
    constructor(title) {
        this.title = title;
        this.taskList = [];
        this.id = Math.floor(Math.random() * Math.pow(1000, 2));
        this.projectArr = [];
    }
    //creates an array out of project constructors
    createArray() {
        this.projectArr.push(this.title);
        this.projectArr.push(this.taskList);
        this.projectArr.push(this.id);
        return this.projectArr;
    }
}

export default function createProject() {

    //creates the dialog box and the form within it to create a new project
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

    //submits the project into the project array and closes the dialog box
    formButton.onclick = () => {
        let project = new Project(formInput.value);
        let projectArr = project.createArray();
        projectArray.push(projectArr);
        pushProjects(project);
        // console.log(projectArray);
        setTimeout( function removeDialog() {
            dialogBox.parentNode.removeChild(dialogBox)
        }, 1);
    }

    //removes the dialog box without sending any information
    const formCancel = document.createElement("button");
    formCancel.innerHTML = "Cancel";
    dialogForm.appendChild(formCancel);
    formCancel.onclick = () => {
        dialogBox.parentNode.removeChild(dialogBox);
    }

}
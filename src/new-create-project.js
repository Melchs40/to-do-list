import { Project } from "./project-class";
import { projectArray } from ".";
import pushProjects from "./new-push-projects";
import openProject from "./new-project-button";

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
        projectArray.push(project);

        console.log(project);
        console.log(projectArray);
        openProject(project);

        let pageButtons = document.querySelectorAll("button");
        pageButtons.forEach(pageButton => pageButton.removeAttribute("disabled", "true"));
       

        //look into push projects to add the newly created project to the DOM

        pushProjects(project);
        setTimeout( function removeDialog() {
            dialogBox.parentNode.removeChild(dialogBox)
        }, 1);
    }

    //removes the dialog box without sending any information
    const formCancel = document.createElement("button");
    formCancel.innerHTML = "Cancel";
    dialogForm.appendChild(formCancel);
    formCancel.onclick = () => {
        let pageButtons = document.querySelectorAll("button");
        pageButtons.forEach(pageButton => pageButton.removeAttribute("disabled", "true"));
        
        dialogBox.parentNode.removeChild(dialogBox);
    }

}
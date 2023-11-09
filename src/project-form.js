import openProject from "./project-button";

//creates class of Project
class Project {
    constructor(title) {
        this.title = title;
        this.taskList = [];
        this.id = Math.floor(Math.random() * Math.pow(1000, 2));
    }
}


//creates a form that create a new project div from prompt
export default function createProject() {

    const newProjectName = prompt("What is your project called?");
    

    let project = new Project(newProjectName);

    console.log(project);

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project")
    projectDiv.innerHTML = newProjectName;
    projectDiv.id = project.id;
    document.getElementById("projects-section").appendChild(projectDiv);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("project-delete-button")
    deleteButton.innerHTML = "X";

    deleteButton.onclick = () => {
        function deleteProject(button) {
            button.parentNode.parentNode.removeChild(button.parentNode);
        }
        deleteProject(deleteButton);
    }

    projectDiv.appendChild(deleteButton);

    projectDiv.onclick = () => {
        openProject(project);
    }

}
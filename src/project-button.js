import { projectButton, projects, projectArray } from ".";

export default function createProject() {


function addProject() {

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-div");

    const projectName = document.createElement("button");
    projectName.classList.add("project")
    projectName.innerHTML = (projectArray.length);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("project-delete-button")
    deleteButton.innerHTML = "X";

    projectArray.push("projectName");
    
    for (let i = 0; i < projectArray.length; i++) {
        projectDiv.setAttribute("id", i);
    }
    
    projects.appendChild(projectDiv);
    projectDiv.appendChild(projectName);
    projectDiv.appendChild(deleteButton);

    deleteButton.onclick = () => {
        deleteProject(projectDiv);
    } 
}

projectButton.addEventListener("click", addProject());

}

export function deleteProject(button) {
    projectArray.splice(button.id, 1);
    button.parentNode.removeChild(button);
    for (let i = 0; i < projectArray.length; i++) {
        document.getElementsByClassName("project-div")[i].setAttribute("id", i);
    }
}
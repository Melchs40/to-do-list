import { projectButton, projects, projectArray } from ".";

//function to create projects and delete individual ones
export default function createProject() {

function addProject() {

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-div");

    const projectName = document.createElement("div");
    projectName.classList.add("project-name")
    projectName.innerHTML = (projectArray.length);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("project-delete-button")
    deleteButton.innerHTML = "X";

    //adds the new project into the projectArray from index.js
    projectArray.push("projectName");
    
    for (let i = 0; i < projectArray.length; i++) {
        projectDiv.setAttribute("id", ("project-" + i));
    }
    
    //appends the projectDiv to projects section from index.js
    projects.appendChild(projectDiv);
    projectDiv.appendChild(projectName);
    projectDiv.appendChild(deleteButton);

    deleteButton.onclick = () => {
        deleteProject(projectDiv);
    } 
}

//adds the functionality to the projectButton from index.js
projectButton.addEventListener("click", addProject());

}

//create delete functionality for the project div with the "x" button
function deleteProject(button) {
    projectArray.splice(button.id, 1);
    button.parentNode.removeChild(button);
    for (let i = 0; i < projectArray.length; i++) {
        document.getElementsByClassName("project-div")[i].setAttribute("id", ("project-" + i));
    }
}
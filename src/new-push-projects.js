import { projectArray, projectDiv } from ".";
import editProject from "./new-edit-project";
import openProject from "./new-project-button";

//adds the created project into the HTML
export default function pushProjects(project) {
    const createdProject = document.createElement("div");
    createdProject.classList.add("project");
    const projectName = document.createElement("div");
    projectName.setAttribute("id", project.id);
    projectName.innerHTML = project.title;
    projectName.onclick = () => {

        openProject(project);
    }

    //adds edit button to the project div
    const editButton = document.createElement("button");
    editButton.classList.add("project-edit-button");
    editButton.innerHTML = "Edit this";
    editButton.onclick = () => {
        
        editProject(project);
    }

    //adds delete button to the project div
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("project-delete-button")
    deleteButton.innerHTML = "X";
    deleteButton.onclick = () => {

        for (let i = 0; i < projectArray.length; i++) {
            let selectedProject = projectArray[i];
            if (selectedProject.id === project.id) {
                projectArray.splice(i, 1);
            }
        }

        function deleteProject(button) {
            button.parentNode.parentNode.removeChild(button.parentNode);
        }
        deleteProject(deleteButton);
    }

    projectDiv.appendChild(createdProject);
    createdProject.appendChild(projectName);
    createdProject.appendChild(editButton);
    createdProject.appendChild(deleteButton);
}
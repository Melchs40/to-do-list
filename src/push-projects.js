import { projectArray, projectDiv } from ".";

export default function pushProjects(project) {
    const createdProject = document.createElement("div");
    createdProject.classList.add("project");
    const projectName = document.createElement("div");
    projectName.setAttribute("id", project.id);
    projectName.innerHTML = project.title;
    projectName.onclick = () => {
        console.log(project.id);
    }

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("project-delete-button")
    deleteButton.innerHTML = "X";

    deleteButton.onclick = () => {
        for (let i = 0; i < projectArray.length; i++) {
            if (projectArray[i].id === project.id) {
                projectArray.splice(i, 1);
            }
        }
        console.log(projectArray);

        function deleteProject(button) {
            button.parentNode.parentNode.removeChild(button.parentNode);
        }
        deleteProject(deleteButton);
    }

    projectDiv.appendChild(createdProject);
    createdProject.appendChild(projectName);
    createdProject.appendChild(deleteButton);
}
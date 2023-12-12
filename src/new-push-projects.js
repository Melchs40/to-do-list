import { projectArray, projectDiv } from ".";
import editProject from "./new-edit-project";
import openProject from "./new-project-button";
import { mainPanelDiv } from ".";

//adds the created project into the HTML
export default function pushProjects(project) {
    const createdProject = document.createElement("div");
    createdProject.classList.add("project");
    const projectName = document.createElement("div");
    projectName.setAttribute("id", project.id);
    if (project.title == "") {
        projectName.innerHTML = "Mystery Project!"
    } else {
        projectName.innerHTML = project.title;
    }
    // function addOpenClass() {
    //     let projects = document.querySelectorAll(".open-project");
    //     projects.forEach(project => {
    //         project.classList.remove("open-project");
    //     });
    //     createdProject.classList.add("open-project");

    //     let edits = document.querySelectorAll(".project-edit-button");
    //     edits.forEach(edit => {
    //         edit.classList.remove("open-project");
    //     });
    //     editButton.classList.add("open-project");

    //     let deletes = document.querySelectorAll(".project-delete-button");
    //     deletes.forEach(deleteBtn => {
    //         deleteBtn.classList.remove("open-project");
    //     });
    //     deleteButton.classList.add("open-project");
    // }

    // addOpenClass();

    // projectName.onclick = () => {

    //     addOpenClass();

    //     openProject(project);

    // }

    //adds edit button to the project div
    const editButton = document.createElement("button");
    editButton.classList.add("project-edit-button");
    editButton.classList.add("material-symbols-outlined");
    editButton.innerHTML = "edit";
    editButton.onclick = () => {
        let pageButtons = document.querySelectorAll("button");
        pageButtons.forEach(pageButton => pageButton.setAttribute("disabled", "true"));
        
        editProject(project);
    }

    //adds delete button to the project div
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("project-delete-button")
    deleteButton.classList.add("material-symbols-outlined");
    deleteButton.innerHTML = "delete";
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

        if (mainPanelDiv.hasChildNodes()) {
            while (mainPanelDiv.firstChild) {
              mainPanelDiv.removeChild(mainPanelDiv.firstChild);
            }
        };

        localStorage.setItem("projectArray", JSON.stringify(projectArray));
    }

    function addOpenClass() {
        let projects = document.querySelectorAll(".open-project");
        projects.forEach(project => {
            project.classList.remove("open-project");
        });
        createdProject.classList.add("open-project");

        let edits = document.querySelectorAll(".project-edit-button");
        edits.forEach(edit => {
            edit.classList.remove("open-project");
        });
        editButton.classList.add("open-project");

        let deletes = document.querySelectorAll(".project-delete-button");
        deletes.forEach(deleteBtn => {
            deleteBtn.classList.remove("open-project");
        });
        deleteButton.classList.add("open-project");
    }

    addOpenClass();

    projectName.onclick = () => {

        addOpenClass();

        openProject(project);

    }

    projectDiv.appendChild(createdProject);
    createdProject.appendChild(projectName);
    createdProject.appendChild(editButton);
    createdProject.appendChild(deleteButton);
}
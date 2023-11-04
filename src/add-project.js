import { projectButton, projects, projectArray, mainPanelDiv, tasksArray} from ".";
import openProject from "./project-button";

//function to create projects and delete individual ones
export default function createProject() {

function addProject() {

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-div");

    const projectName = document.createElement("div");
    projectName.classList.add("project-name")
    projectName.innerHTML = (projectArray.length);

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("hidden");
    taskDiv.classList.add("task-list");


    projectName.onclick = () => {
        openProject(this);
    }

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("project-delete-button")
    deleteButton.innerHTML = "X";

    //adds the new project into the projectArray from index.js
    projectArray.push(projectDiv);
    tasksArray.push(taskDiv);

    console.log(projectDiv);
    console.log(tasksArray);
    
    for (let i = 0; i < projectArray.length; i++) {
        projectDiv.setAttribute("id", ("project-" + i));
        taskDiv.setAttribute("id", ("task-list-" + i));
    }
    
    //appends the projectDiv to projects section from index.js
    projects.appendChild(projectDiv);
    projectDiv.appendChild(projectName);
    projectDiv.appendChild(deleteButton);
    mainPanelDiv.appendChild(taskDiv);

    projectName.onclick = () => {
        openProject(projectDiv);
    }

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
    tasksArray.splice(button.id, 1);
    console.log(projectArray);
    console.log(tasksArray);
    let testThing = button.id.slice(8);
    button.parentNode.removeChild(button);
    const div = document.querySelector('#main-panel-div');
    const child = document.getElementById(("task-list-" + testThing));
    div.removeChild(child);
    for (let i = 0; i < projectArray.length; i++) {
        document.getElementsByClassName("project-div")[i].setAttribute("id", ("project-" + i));
        document.getElementsByClassName("task-list")[i].setAttribute("id", ("task-list-" + i));
        document.querySelector(".task-button").setAttribute("id", "");
        document.querySelector(".task-button").innerHTML = "+ Add Task";
    }
}
import { tasksArray } from "."

export default function openProject(project) {

    //makes sure all tasks are hidden from the main panel
    for (let i = 0; i < tasksArray.length; i++) {
        if (tasksArray[i].classList.contains("hidden")) {
            console.log("it's hidden");
        } else {tasksArray[i].classList.add("hidden");
        }
    };

    let projectId = project.id.slice(8);

    let activeProject = tasksArray[projectId];

    activeProject.classList.remove("hidden");

    // let activeTaskList = document.getElementById(("task-list-" + projectId));

    let taskButton = document.querySelector(".task-button");

    taskButton.setAttribute("id", ("task-button-" + projectId));

    taskButton.innerHTML = ("+ Add task to project " + projectId);
    

    document.getElementById("main-panel-div").appendChild(taskButton);

}

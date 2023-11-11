import { mainPanelDiv, projectArray } from ".";
import createTask from "./create-task";

//creates the task button
export const taskButton = document.createElement("button");

//adds the ability for each project to be opened and display the tasks added to said project
export default function openProject(project) {

    //removes all information from main panel
    if (mainPanelDiv.hasChildNodes()) {
        while (mainPanelDiv.firstChild) {
          mainPanelDiv.removeChild(mainPanelDiv.firstChild);
        }
    };

    for (let i = 0; i < project.projectArr[1].length; i++) {

      let taskDiv = document.createElement("div");
      taskDiv.classList.add("task-div");

      const outerArray = project.projectArr[1];
      const innerArray = outerArray[i];

      let checkDiv = document.createElement("input");
      checkDiv.classList.add("task-check");
      checkDiv.setAttribute("type", "checkbox");
      checkDiv.checked = innerArray[4];

      let titleDiv = document.createElement("div");
      titleDiv.classList.add("title-div");
      titleDiv.innerHTML = innerArray[0];

      let dueDateDiv = document.createElement("div");
      dueDateDiv.classList.add("due-date-div");
      dueDateDiv.innerHTML = innerArray[2];

      let priorityDiv = document.createElement("div");
      priorityDiv.classList.add("priority-div");
      priorityDiv.innerHTML = innerArray[3];

      let editButton = document.createElement("button");
      editButton.classList.add("edit-task-button");
      editButton.innerHTML = "Edit Task";

      let deleteTask = document.createElement("button");
      deleteTask.classList.add("delete-task-button");
      deleteTask.innerHTML = "X";

      mainPanelDiv.appendChild(taskDiv)
      taskDiv.appendChild(checkDiv);
      taskDiv.appendChild(titleDiv);
      taskDiv.appendChild(dueDateDiv); 
      taskDiv.appendChild(priorityDiv);
      taskDiv.appendChild(editButton);
      taskDiv.appendChild(deleteTask);
    }

    taskButton.setAttribute("class", "task-button");
    taskButton.classList.add("button");
    taskButton.setAttribute("id", "task-button");
    taskButton.innerHTML = "+ Add task";
    mainPanelDiv.appendChild(taskButton);

    taskButton.onclick = () => {
      createTask(project.taskList);
      // console.log(project.tasklist);
    }

}

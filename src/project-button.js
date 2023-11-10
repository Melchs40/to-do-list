import { mainPanelDiv, projectArray } from ".";
import createTask from "./create-task";

export const taskButton = document.createElement("button");

export default function openProject(project) {

    if (mainPanelDiv.hasChildNodes()) {
        while (mainPanelDiv.firstChild) {
          mainPanelDiv.removeChild(mainPanelDiv.firstChild);
        }
    };

    for (let i = 0; i < project.projectArr[1].length; i++) {
      const task = document.createElement("div");
      const outerArray = project.projectArr[1];
      const innerArray = outerArray[i];
      task.innerHTML = innerArray[0];
      mainPanelDiv.appendChild(task)
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

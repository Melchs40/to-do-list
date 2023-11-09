import { mainPanelDiv } from ".";
import createTask from "./create-task";

export default function openProject(project) {

    if (mainPanelDiv.hasChildNodes()) {
        while (mainPanelDiv.firstChild) {
          mainPanelDiv.removeChild(mainPanelDiv.firstChild);
        }
    };

    const taskButton = document.createElement("button");
    taskButton.setAttribute("class", "task-button");
    taskButton.classList.add("button");
    taskButton.innerHTML = "+ Add task";
    mainPanelDiv.appendChild(taskButton);

    taskButton.onclick = () => {
      createTask(project.taskList);
    }

    console.log(project.taskList);

}

import { mainPanelDiv, projectArray } from ".";
import createTask from "./create-task";
import editTask from "./edit-task";

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
      const outerArray = project.projectArr[1];
      const innerArray = outerArray[i];

      let taskDiv = document.createElement("div");
      taskDiv.classList.add("task-div");
      taskDiv.setAttribute("id", innerArray[4]);


      let checkDiv = document.createElement("input");
      checkDiv.classList.add("task-check");
      checkDiv.setAttribute("type", "checkbox");
      checkDiv.checked = innerArray[5];

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
      editButton.onclick = () => {
        titleDiv.classList.add("active");
        dueDateDiv.classList.add("active");
        priorityDiv.classList.add("active");

        
        let taskArray = project.taskList;

        let test1 = taskArray[0]

        console.log(test1);

        editTask(test1);
    }

      let deleteTask = document.createElement("button");
      deleteTask.classList.add("delete-task-button");
      deleteTask.innerHTML = "X";
      deleteTask.onclick = () => {

        let taskArray = project.taskList;

        for (let i = 0; i < taskArray.length; i++) {
            let outerArray = taskArray[i];
            let innerArray = outerArray[4];
            console.log(innerArray);
            
            if (innerArray == deleteTask.parentNode.id) {
                taskArray.splice(i, 1);
            }
        }
        console.log(taskArray);

        function removeTask(button) {
            button.parentNode.parentNode.removeChild(button.parentNode);
        }
        removeTask(deleteTask);
    }

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

  //   let editButton = document.querySelector(".edit-task-button");

  //   editButton.onclick = () => {
  //     editButton.parentNode.querySelector(".title-div").classList.add("active");
  //     // dueDateDiv.classList.add("active");
  //     // priorityDiv.classList.add("active");
  //     console.log(projectArray);
  // }

}

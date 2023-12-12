import editTask from "./new-edit-task";
import { mainPanelDiv } from ".";
import displayTask from "./display-full-task";

export default function importantButton(projectArray) {

    if (mainPanelDiv.hasChildNodes()) {
        while (mainPanelDiv.firstChild) {
          mainPanelDiv.removeChild(mainPanelDiv.firstChild);
        }
    };

    let projects = document.querySelectorAll(".open-project");
    projects.forEach(project => {
        project.classList.remove("open-project");
    });

    for(let i = 0; i < projectArray.length; i++) {
        let project = projectArray[i];
        let taskList = project.taskList;

        for(let i = 0; i < taskList.length; i++) {
            let important = taskList[i].priority
            
            if (important == true) {
                
                console.log("this is true");

                let taskDiv = document.createElement("div");
                taskDiv.classList.add("task-div");
                taskDiv.setAttribute("id", taskList[i].id);

                let checkDiv = document.createElement("input");
                checkDiv.classList.add("task-check");
                checkDiv.setAttribute("type", "checkbox");
                checkDiv.checked = taskList[i].checked;
                checkDiv.onclick = () => {
                    taskList[i].checked = !taskList[i].checked;
                    console.log(taskList[i].checked);
                    if (taskList[i].checked == true) {
                        titleDiv.classList.add("checked"),
                        dueDateDiv.classList.add("checked"),
                        priorityDiv.classList.add("checked");
                        localStorage.setItem("projectArray", JSON.stringify(projectArray));
                    } else titleDiv.classList.remove("checked"),
                        dueDateDiv.classList.remove("checked"),
                        priorityDiv.classList.remove("checked");
                        localStorage.setItem("projectArray", JSON.stringify(projectArray));
                }

                let titleDiv = document.createElement("div");
                titleDiv.classList.add("title-div");
                titleDiv.innerHTML = taskList[i].title;
                if (checkDiv.checked == true) {
                    titleDiv.classList.add("checked");
                }
                titleDiv.onclick = () => {
                    let pageButtons = document.querySelectorAll("button");
                    pageButtons.forEach(pageButton => pageButton.setAttribute("disabled", "true"));
            
                    displayTask(taskList[i]);
                }

                let dueDateDiv = document.createElement("div");
                dueDateDiv.classList.add("due-date-div");
                if (taskList[i].dueDate !== "") {
                    dueDateDiv.innerHTML = taskList[i].formatDate;
                } else dueDateDiv.innerHTML = "no due date";
                if (checkDiv.checked == true) {
                    dueDateDiv.classList.add("checked");
                }

                let priorityDiv = document.createElement("div");
                priorityDiv.classList.add("priority-div");
                if (checkDiv.checked == true) {
                    priorityDiv.classList.add("checked");
                }

                let editButton = document.createElement("button");
                editButton.classList.add("edit-task-button");
                editButton.classList.add("material-symbols-outlined");
                editButton.innerHTML = "edit";

                editButton.onclick = () => {
                    titleDiv.classList.add("active");
                    dueDateDiv.classList.add("active");
                    priorityDiv.classList.add("active");

                    let pageButtons = document.querySelectorAll("button");

                    pageButtons.forEach(pageButton => pageButton.setAttribute("disabled", "true"));

                    editTask(taskList[i], () => {importantButton(projectArray)});
                }

                let deleteTask = document.createElement("button");
                deleteTask.classList.add("delete-task-button");
                deleteTask.classList.add("material-symbols-outlined");
                deleteTask.innerHTML = "delete";

                deleteTask.onclick = () => {

                    console.log("from new-project-button");
                    console.log(taskList[i].id);
                    console.log(deleteTask.parentNode.id);
            
                    if (taskList[i].id == deleteTask.parentNode.id) {
                        project.taskList.splice(i, 1);
                    }
            
                    function removeTask(button) {
                        button.parentNode.parentNode.removeChild(button.parentNode);
                    }

                    removeTask(deleteTask);

                    localStorage.setItem("projectArray", JSON.stringify(projectArray));
                }

                mainPanelDiv.appendChild(taskDiv)
                taskDiv.appendChild(checkDiv);
                taskDiv.appendChild(titleDiv);
                taskDiv.appendChild(dueDateDiv); 
                taskDiv.appendChild(priorityDiv);
                taskDiv.appendChild(editButton);
                taskDiv.appendChild(deleteTask);

            } else console.log("this is false");
        }
    }
}
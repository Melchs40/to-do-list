export default function editTask(task, callback) {

    const dialogBox = document.createElement("dialog");
    document.getElementById("content").appendChild(dialogBox);
    dialogBox.open = true;

    const dialogForm = document.createElement("form");
    dialogForm.setAttribute("method", "dialog");
    dialogBox.appendChild(dialogForm);

    const titlePara = document.createElement("p");
    titlePara.innerHTML = "What's the name of your task?";
    dialogForm.appendChild(titlePara);

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.value = task.title;
    dialogForm.appendChild(titleInput);

    const descriptPara = document.createElement("p");
    descriptPara.innerHTML = "Describe your task";
    dialogForm.appendChild(descriptPara);

    const descriptInput = document.createElement("input");
    descriptInput.setAttribute("type", "text");
    descriptInput.value = task.description;
    dialogForm.appendChild(descriptInput);

    const datePara = document.createElement("p");
    datePara.innerHTML = "When is it due?";
    dialogForm.appendChild(datePara);

    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.value = task.dueDate;
    dialogForm.appendChild(dateInput);

    const priorityPara = document.createElement("p");
    priorityPara.innerHTML = "Is it important?";
    dialogForm.appendChild(priorityPara);

    const priorityInput = document.createElement("input");
    priorityInput.setAttribute("type", "checkbox");
    priorityInput.checked= task.priority;
    dialogForm.appendChild(priorityInput);

    const formButton = document.createElement("button");
    formButton.innerHTML = "OK"
    dialogForm.appendChild(formButton);

    formButton.onclick = () => {
        task.editTitle = titleInput.value;
        let titleDiv = document.querySelector(".title-div.active");
        titleDiv.innerHTML = task.title;

        task.editDescription = descriptInput.value;

        task.editDueDate = dateInput.value;
        let dueDateDiv = document.querySelector(".due-date-div.active");
        if (task.dueDate !== "") {
            dueDateDiv.innerHTML = task.formatDate;
        } else dueDateDiv.innerHTML = "no due date";

        task.editPriority = priorityInput.checked;
        let priorityDiv = document.querySelector(".priority-div.active");
        priorityDiv.classList.add("material-symbols-outlined");
        if (task.priority == true) {
            priorityDiv.parentNode.setAttribute("class", "task-div important");
            priorityDiv.innerHTML = "warning";
        } else {
            priorityDiv.innerHTML = "";
            priorityDiv.parentNode.setAttribute("class", "task-div");
        }

        let pageButtons = document.querySelectorAll("button");
        pageButtons.forEach(pageButton => pageButton.removeAttribute("disabled", "true"));

        setTimeout( function removeActive() {
            titleDiv.classList.remove("active");
            dueDateDiv.classList.remove("active");
            priorityDiv.classList.remove("active");
        }, 1);

        setTimeout( function removeDialog() {
            dialogBox.parentNode.removeChild(dialogBox)
        }, 1);

        setTimeout(function() {
            console.log("callback function");
            callback();
          }, 1);
        
    }

    const formCancel = document.createElement("button");
    formCancel.innerHTML = "Cancel";
    dialogForm.appendChild(formCancel);
    formCancel.onclick = () => {

        let pageButtons = document.querySelectorAll("button");
        pageButtons.forEach(pageButton => pageButton.removeAttribute("disabled", "true"));

        dialogBox.parentNode.removeChild(dialogBox);
    }
}
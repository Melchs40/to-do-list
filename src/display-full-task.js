export default function displayTask(task) {

    const dialogBox = document.createElement("dialog");
    dialogBox.classList.add("full-task-dialog");
    document.getElementById("content").appendChild(dialogBox);
    dialogBox.open = true;

    const dialogForm = document.createElement("form");
    dialogForm.setAttribute("method", "dialog");
    dialogBox.appendChild(dialogForm);

    const titlePara = document.createElement("p");
    titlePara.innerHTML = "Name:";
    dialogForm.appendChild(titlePara);

    const titleInput = document.createElement("p");
    titleInput.innerHTML = task.title;
    dialogForm.appendChild(titleInput);

    const descriptPara = document.createElement("p");
    descriptPara.innerHTML = "Description:";
    dialogForm.appendChild(descriptPara);

    const descriptInput = document.createElement("p");
    descriptInput.innerHTML = task.description;
    dialogForm.appendChild(descriptInput);

    const datePara = document.createElement("p");
    datePara.innerHTML = "Due date:";
    dialogForm.appendChild(datePara);

    const dateInput = document.createElement("p");
    if (task.dueDate == "") {
        dateInput.innerHTML = "No due date"
    } else dateInput.innerHTML = task.formatDate;
    dialogForm.appendChild(dateInput);

    const priorityPara = document.createElement("p");
    priorityPara.innerHTML = "Priority:";
    dialogForm.appendChild(priorityPara);

    const priorityInput = document.createElement("p");
    if (task.priority == true) {
        priorityInput.innerHTML= "Important";
    } else priorityInput.innerHTML = "Not Important";
    dialogForm.appendChild(priorityInput);

    const formCancel = document.createElement("button");
    formCancel.classList.add("full-task-button");
    formCancel.innerHTML = "X";
    dialogForm.appendChild(formCancel);
    formCancel.onclick = () => {

        let pageButtons = document.querySelectorAll("button");
        pageButtons.forEach(pageButton => pageButton.removeAttribute("disabled", "true"));

        dialogBox.parentNode.removeChild(dialogBox);
    }

}
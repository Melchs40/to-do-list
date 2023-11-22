export default function editProject(project) {

    const dialogBox = document.createElement("dialog");
    document.getElementById("content").appendChild(dialogBox);
    dialogBox.open = true;

    const dialogForm = document.createElement("form");
    dialogForm.setAttribute("method", "dialog");
    dialogBox.appendChild(dialogForm);

    const titlePara = document.createElement("p");
    titlePara.innerHTML = "Please rename your project:";
    dialogForm.appendChild(titlePara);

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.value = project.title;
    dialogForm.appendChild(titleInput);

    const formButton = document.createElement("button");
    formButton.innerHTML = "OK"
    dialogForm.appendChild(formButton);

    formButton.onclick = () => {
        document.getElementById(project.id).innerHTML = titleInput.value;
        project.editTitle = titleInput.value;

        let pageButtons = document.querySelectorAll("button");
        pageButtons.forEach(pageButton => pageButton.removeAttribute("disabled", "true"));

        setTimeout( function removeDialog() {
            dialogBox.parentNode.removeChild(dialogBox)
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
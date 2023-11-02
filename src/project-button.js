import { projectButton, mainPanel, testArray } from ".";

export default function createProject() {


function addProject() {
    let newDiv = document.createElement("button");
    testArray.push("newDiv");
    console.log(testArray);
    newDiv.classList.add("test-button");
    newDiv.innerHTML = (testArray.length);
    for (let i = 0; i < testArray.length; i++) {
        newDiv.setAttribute("id", i);
    }
    mainPanel.appendChild(newDiv);
    newDiv.onclick = () => {
        deleteProject(newDiv);
    }
    
    
}

projectButton.addEventListener("click", addProject());

}

export function deleteProject(button) {
    testArray.splice(button.id, 1);
    button.parentNode.removeChild(button);
    for (let i = 0; i < testArray.length; i++) {
        document.getElementsByClassName("test-button")[i].setAttribute("id", i);
    }
    console.log(testArray);
}
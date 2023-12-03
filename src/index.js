import createProject from "./new-create-project";
import todayButton from "./today-button";
import thisWeekButton from "./this-week-button";
import allTasksButton from "./all-tasks-button";
import importantButton from "./important-button";
import "./style.css";

document.title = "To-Do List";

export const projectArray = [];

const content = document.getElementById("content");

//creates the header for the to-do list
const header = document.createElement("div");
header.setAttribute("id", "header");
content.appendChild(header);

    const headerTitle = document.createElement("h1");
    headerTitle.setAttribute("id", "header-title");
    headerTitle.innerHTML = "To-Do List"
    header.appendChild(headerTitle);

//creates the side panel that stores the home and projects section of the to-do list
const sidePanel = document.createElement("div");
sidePanel.setAttribute("id", "side-panel");
content.appendChild(sidePanel);

    const home = document.createElement("div");
    home.setAttribute("id", "home-section");
    home.classList.add("side-panel-section");
    sidePanel.appendChild(home);

        const homeTitle = document.createElement("div");
        homeTitle.setAttribute("id", "home-title");
        homeTitle.innerHTML = "Home";
        home.appendChild(homeTitle);

        const allTasks = document.createElement("button");
        allTasks.setAttribute("id", "all-tasks");
        allTasks.innerHTML = "All Tasks";
        home.appendChild(allTasks);

        const today = document.createElement("button");
        today.setAttribute("id", "today");
        today.innerHTML = "Today";
        home.appendChild(today);

        const thisWeek = document.createElement("button");
        thisWeek.setAttribute("id", "this-week");
        thisWeek.innerHTML = "This Week";
        home.appendChild(thisWeek);

        export const important = document.createElement("button");
        important.setAttribute("id", "important");
        important.innerHTML = "Important";
        home.appendChild(important);
    
    //needed in add-project.js to append divs/buttons to project section
    export const projects = document.createElement("div");
    projects.setAttribute("id", "projects-section");
    projects.classList.add("side-panel-section");
    sidePanel.appendChild(projects);

        const projectsTitle = document.createElement("div");
        projectsTitle.setAttribute("id", "projects-title");
        projectsTitle.innerHTML = "Projects";
        projects.appendChild(projectsTitle);

        //needed in add-project.js for event listener to add project
        export const projectButton = document.createElement("button");
        projectButton.setAttribute("id", "project-button");
        projectButton.classList.add("button");
        projectButton.classList.add("material-symbols-outlined");
        projectButton.innerHTML = "add_circle";
        projects.appendChild(projectButton);

        export const projectDiv = document.createElement("div");
        projectDiv.setAttribute("id", "project-container");
        projects.appendChild(projectDiv);

//creates the main panel that will show the tasks of a specific project
const mainPanel = document.createElement("div");
mainPanel.setAttribute("id", "main-panel")
content.appendChild(mainPanel);

    const mainPanelTitle = document.createElement("h1");
    mainPanelTitle.setAttribute("id", "main-panel-title");
    mainPanel.appendChild(mainPanelTitle);

    export const mainPanelDiv = document.createElement("h1");
    mainPanelDiv.setAttribute("id", "main-panel-div");
    mainPanel.appendChild(mainPanelDiv);

    

//creates the footer for the to-do list
const footer = document.createElement("footer");
footer.innerHTML = "Copyright © Melchs40's Computer Whiz Coding 2023";
content.appendChild(footer);

//gives the project buttons their functionality from project-button.js
projectButton.onclick = () => {
    let pageButtons = document.querySelectorAll("button");
    pageButtons.forEach(pageButton => pageButton.setAttribute('disabled', 'true'));

    createProject();
};

today.onclick = () => {
    todayButton(projectArray);
}

thisWeek.onclick = () => {
    thisWeekButton(projectArray);
}

allTasks.onclick = () => {
    allTasksButton(projectArray);
}

important.onclick = () => {
    importantButton(projectArray);
}
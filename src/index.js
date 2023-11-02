import createProject from "./project-button";

document.title = "To-Do List";

export let testArray = [];

const content = document.getElementById("content");

const header = document.createElement("div");
header.setAttribute("id", "header");
content.appendChild(header);

    const headerTitle = document.createElement("h1");
    headerTitle.setAttribute("id", "header-title");
    headerTitle.innerHTML = "To-Do List"
    header.appendChild(headerTitle);

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

        const important = document.createElement("button");
        important.setAttribute("id", "important");
        important.innerHTML = "Important";
        home.appendChild(important);

    const projects = document.createElement("div");
    projects.setAttribute("id", "projects-section");
    projects.classList.add("side-panel-section");
    sidePanel.appendChild(projects);

        const projectsTitle = document.createElement("div");
        projectsTitle.setAttribute("id", "projects-title");
        projectsTitle.innerHTML = "Projects";
        projects.appendChild(projectsTitle);

        export const projectButton = document.createElement("button");
        projectButton.setAttribute("id", "project-button");
        projectButton.classList.add("button");
        projectButton.innerHTML = "+ Add Project";
        projects.appendChild(projectButton);

export const mainPanel = document.createElement("div");
mainPanel.setAttribute("id", "main-panel")
content.appendChild(mainPanel);

    const mainPanelTitle = document.createElement("h1");
    mainPanelTitle.setAttribute("id", "main-panel-title");
    mainPanel.appendChild(mainPanelTitle);

    const taskButton = document.createElement("button");
    taskButton.setAttribute("id", "task-button");
    taskButton.classList.add("button");
    taskButton.innerHTML = "+ Add task";
    projects.appendChild(taskButton);

const footer = document.createElement("footer");
footer.innerHTML = "Copyright © Melchs40's Computer Whiz Coding 2023";
content.appendChild(footer);

projectButton.onclick = () => {
    createProject()
};
import createProject from "./new-create-project";
import todayButton from "./today-button";

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

        const important = document.createElement("button");
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
        projectButton.innerHTML = "+ Add Project";
        projects.appendChild(projectButton);

        export const projectDiv = document.createElement("div");
        projectDiv.setAttribute("id", "project-container");
        projects.appendChild(projectDiv);

        // const testButton1 = document.createElement("button");
        // testButton1.classList.add("test-button");
        // testButton1.innerHTML = "Test 1";
        // projects.appendChild(testButton1);
        // testButton1.onclick = () => {
        //     makeActive(testButton1);
        //     checkActive();
        // }


        // const testButton2 = document.createElement("button");
        // testButton2.classList.add("test-button");
        // testButton2.innerHTML = "Test 2";
        // projects.appendChild(testButton2);
        // testButton2.onclick = () => {
        //     makeActive(testButton2);
        //     checkActive();
        // }

        // function checkActive() {
        //     if (testButton1.classList.contains("active")) {
        //     console.log("Test button 1 is active and two is off");
        //     } else if (testButton2.classList.contains("active")) {
        //         console.log("Test button 2 is active and one is off");
        //     } else {
        //         console.log("They're both off");
        //     }
        // }

        // checkActive();



        // function makeActive(thing) {
        //     let buttons = document.getElementsByClassName("test-button");

        //     for (let i = 0; i < buttons.length; i++) {
        //         if (buttons[i].classList.contains("active")) {
        //             buttons[i].classList.remove("active");
        //         } else { }
        //     }

        //     thing.classList.add("active");
        // }

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
//creates class of Project
export class Project {
    constructor(title) {
        this.title = title;
        this.taskList = [];
        this.id = Math.floor(Math.random() * Math.pow(10000000, 2));
    }

    set editTitle(title) {
        this.title = title;
    }

    set addTask(newTask) {
        this.taskList.push(newTask);
    }

    set removeTask(taskToRemove) {
        for (let i = 0; i < this.taskList.length; i++) {
            let taskArray = this.taskList[i];
            let taskId = taskArray[4]
            if (taskToRemove == taskId) {
                this.taskList.splice(i, 1);
            }
        }
    }

    get viewTasks() {
        return this.taskList;
    }

}
//creates a class of task
export class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = Math.floor(Math.random() * Math.pow(10000000, 2));
        this.checked = false;
    }

    set editTitle(title) {
        this.title = title;
        return this.title;
    }

    set editDescription(description) {
        this.description = description;
        return this.description;
    }

    set editDueDate(dueDate) {
        this.dueDate = dueDate;
        return this.title;
    }

    set editPriority(priority) {
        this.priority = priority;
        return this.priority;
    }

    editChecked() {
        return this.checked = !this.checked;
    }

}
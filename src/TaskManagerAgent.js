class TaskManagerAgent {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

    listTasks() {
        return this.tasks;
    }
}
export default TaskManagerAgent;
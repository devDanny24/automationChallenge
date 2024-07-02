class TodoPage {
    constructor(page) {
      this.page = page;
      this.addButton = 'button[class="plus_add_button"]';
      this.taskInputName = 'div[class="tiptap ProseMirror ProseMirror-focused"]';
      this.taskInputDescription = 'div[class="tiptap ProseMirror"]';
      this.dueDate = 'div[class="vq8EYsI fb8d74bb _14423c92 _5f8879d9 b76144ce"]';
      this.scheduleTomorrow = 'button[data-track="scheduler|date_shortcut_tomorrow"]';
      this.assigne = 'div[data-testid="person_picker__toggle"]';
      this.userName = 'li[id="dropdown-select-1-option-49743256"]';
      this.priority = 'div[data-action-hint="task-actions-priority-picker"]';
      this.setPriority = 'li[data-action-hint="task-actions-priority-4"]';
      this.submitButton = 'button[data-testid="task-editor-submit-button"]';

      this.inbox = 'div[class="pMTLzg8"]';
    }
  
    async addTask(taskName, taskDescription) {
      await this.page.click(this.addButton);
      await this.page.fill(this.taskInputName, taskName);
      await this.page.fill(this.taskInputDescription, taskDescription);
      await this.page.click(this.dueDate);
      await this.page.click(this.scheduleTomorrow);
      await this.page.click(this.assigne);
      await this.page.click(this.userName);
      await this.page.click(this.priority);
      await this.page.click(this.setPriority);
      await this.page.click(this.submitButton);
    }
  
    async validateNewTask(task) {
      await this.page.goto('https://app.todoist.com/app/inbox');
      await this.page.waitForSelector(`text=${task}`);
    }
  }
  
  module.exports = TodoPage;
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pageObjects/loginPage');
const TodoPage = require('../pageObjects/todoPage');
const user = require('../fixtures/user.json');

test.describe('Todoist Automation Challenge', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.visit();
    await loginPage.fillEmail(user.email);
    await loginPage.fillPassword(user.password);
    await loginPage.submit();
    await page.waitForURL('https://app.todoist.com/app/today');
  });

  test('should add a task successfully', async ({ page }) => {
    const todoPage = new TodoPage(page);
    const taskName = 'Test Name';
    const taskDescription = 'Test Description';

    await todoPage.addTask(taskName,taskDescription);
    await todoPage.validateNewTask(taskName);
  });
});
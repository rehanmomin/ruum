import { Selector, t } from "testcafe";

class RuumPage {
  constructor() {
    this.newBtn = Selector('button[data-help-id="new_project_button"]');
    this.ruumOption = Selector("span").withExactText("Ruum");
    this.canvas = Selector("#canvas");
    this.taskList = Selector("span").withExactText("Task List");
    this.newTaskbtn = Selector("span").withExactText("New Task");
    this.taskName = Selector('textarea[placeholder="Type the task name..."]');
    this.addToSection = Selector(
      'input[placeholder="Select or search for a Section"]'
    );
    this.createTask = Selector('button[title="Select a Ruum and a Section"]');
    this.myNewtask = Selector("span").withExactText("my new task");
    this.statusIcon = Selector(".icon.icon-task-open");
    this.doneStatus = Selector("span").withExactText("Done");
  }

  /**
   * [for Creating a new ruum inside after login ruum.app]
   */
  async createNewRum() {
    await t
      .click(this.newBtn)
      .click(this.ruumOption)
      .wait(5000)
      .expect(this.canvas.exists)
      .ok("Room not created.");
    console.log("Room Created");
  }

  /**
   * [Create new Task function after login in inside ruum.app]
   * @param  {[String]} taskname [name of the task user want to create]
   * @param  {[String]} sectionname [fSection where user want to create new task]
   */
  async createNewTask(taskname, sectionname) {
    await t
      .click(this.taskList)
      .click(this.newTaskbtn)
      .typeText(this.taskName, taskname)
      .click(this.addToSection)
      .pressKey("tab")
      .click(this.createTask)
      .expect(this.myNewtask.exists)
      .ok("Task is not created");
  }

  /**
   * [To change the status of the task]
   */
  async changeStatusToDone() {
    await t.click(this.statusIcon).click(this.doneStatus);
  }
}
export default new RuumPage();

'use strict';
//Получает данные с router и отправляет с command

class  TaskController {
  constructor({
    getTask,
    createTask,
    deleteTask,
    updateTask,
  }) {
    this.getTask = getTask;
    this.createTask = createTask;
    this.deleteTask = deleteTask;
    this.updateTask = updateTask;
  }

  async getList() {
    return await this.getTask.get();
  }

  async create(params) {
    //console.log(params , 'Этот обьект отправляеться в command createTask')
    const test = await this.createTask.execute(params);
    //console.log(test , 'Этот обьект получен из command createTask')
    return test;
  }

  async update(filter, update) {
    console.log('UpdateTask', filter, update);
    return await this.updateTask.execute(filter, update);
  }

}

module.exports = TaskController;
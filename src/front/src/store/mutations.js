export default {
  STATUS_LOADED(state, payload) {
    state.appStatus = payload;
  },

  TOTAL_HISTORY_LOADED(state, payload) {
    state.history.total = payload.data;
  },
  CONTAINER_HISTORY_LOADED(state, payload) {
    state.history.containers[payload[0].info.name] = payload;
  },
  HISTORY_STATS_LOADED(state, payload) {
    state.historyStats = payload.data;
  },

  CLEAR_NOTIFICATIONS: state => {
    state.socket.notifications = [];
  },
  CLEAR_TEST_RESPONSE: state => {
    state.socket.testResponse = null;
  },

  SET_ERROR(state, error) {
    state.error = error;
  },

  LOADED_PROJECTS(state, data) { 
    console.log('LOADED_PROJECTS', data);
    state.projects = data.map(elem => { 
      //console.log('Переменная elem',elem)
      return elem;
    });
  },

  JOINING_USERS_TO_PROJECTS(state, data) { 
    console.log('JOINING_USERS_TO_PROJECTS', data);
    state.joinUserToProjects = data.map(elem => { 
      return elem;
    });
  },

  /* Обьеденен с JOINING_USERS_TO_PROJECTS
  JOINING_USER_TASK_TO_PROJECTS(state, data) { 
    console.log('JOINING_USER_TASK_TO_PROJECTS', data);
    state.joinUserTaskToProjects = data.map(elem => { 
      return elem;
    });
  },
  */

  OPENED_PROJECT(state, data) {
    state.currentProject = data;
  },

  ADDED_PROJECT(_, data) {
    console.log('ADDED PROJECT - ', data);
  },

  DELETED_PROJECT(_, data) {
    console.log('DELETED PROJECT - ', data);
  },

  ADD_USER_TO_PROJECT(_, data) {
    console.log('ADD USER TO PROJECT - ', data);
  },

  DELETE_USER_ON_PROJECT(_, data) {
    console.log('DELETE USER ON PROJECT - ', data);
  },


  SAVED_PROJECT(_, data) {
    console.log('SAVED PROJECT - ', data);
  },

  LOADED_USERS(state, data) { 
    console.log('LOADED_USERS', data);
    state.users = data.map(elem => {
      //elem.status.lastUpdate = dayjs(elem.status.lastUpdate).fromNow(); 
      return elem;
    });//.sort((a, b) => ((a.name > b.name) ? 1 : -1)); Сортировка по символам 
  },

  OPENED_USERS(state, data) {
    // console.log('OPENED_PROJECT', data);
    state.currentUsers = data;
  },

  ADDED_USER(_, data) {
    console.log('ADDED USER - ', data);
  },

  DELETED_USER(_, data) {
    console.log('DELETED USER - ', data);
  },

  SAVED_USER(_, data) {
    console.log('SAVED USER - ', data);
  },




  LOADED_TASKS(state, data) { 
    console.log('LOADED_TASKS', data);
    state.tasks = data.map(elem => {
      return elem;
    });
  },

  ADDED_TASK(_, data) {
    console.log('ADDED TASK - ', data);
  },

  DELETED_TASK(_, data) {
    console.log('DELETED TASK - ', data);
  },

  SAVED_TASK(_, data) {
    console.log('SAVED TASK - ', data);
  },
  
  SERVERS_STATUS_LOADED(_, data) {
    console.log('SERVERS STATUSE LOADED - ', data);
  },
};

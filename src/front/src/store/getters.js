export default {
  projects(state) {
    return state.projects;
  },
  users(state) {
    return state.users;
  },
  tasks(state) {
    return state.tasks;
  },

  
  joinUserToProjects(state) {
    return state.joinUserToProjects;
  },
  /* Обьеденен с joinUserToProjects
  joinUserTaskToProjects(state) {
    return state.joinUserTaskToProjects;
  },
  */
};

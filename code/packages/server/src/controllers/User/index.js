// import createNewUser function from createNewUser file
import { createNewUser } from './createNewUser';

// import listUser function from listUser file
import { listUser } from './listUser';

// import loginUser function from loginUser file
import { loginUser } from './loginUser';

// import logoutUser function from logoutUser file
import { logoutUser } from './logoutUser';

// import meUser function from meUser file
import { meUser } from './meUser';

// import removeUser function from removeUser file
import { removeUser } from './removeUser';

// import showUser function from showUser file
import { showUser } from './showUser';

// import updateUser function from updateUser file
import { updateUser } from './updateUser';

/**
 * usersController.js
 *
 * @description :: Server-side logic for managing userss.
 */
export default {
  /**
   * usersController.me()
   */
  me(req, res) {
    meUser(req, res);
  },

  /**
   * usersController.login()
   */
  login(req, res) {
    loginUser(req, res);
  },

  /**
   * usersController.logout()
   */
  logout(req, res) {
    logoutUser(req, res);
  },

  /**
   * usersController.list()
   */
  list(req, res) {
    listUser(req, res);
  },

  /**
   * usersController.show()
   */
  show(req, res) {
    showUser(req, res);
  },

  /**
   * usersController.create()\
   */
  create(req, res) {
    createNewUser(req, res);
  },

  /**
   * usersController.update()
   */
  update(req, res) {
    updateUser(req, res);
  },

  /**
   * usersController.remove()
   */
  remove(req, res) {
    removeUser(req, res);
  },
};

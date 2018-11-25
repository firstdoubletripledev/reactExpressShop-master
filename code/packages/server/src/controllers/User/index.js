import { createNewUser } from './createNewUser';
import { listUser } from './listUser';
import { loginUser } from './loginUser';
import { logoutUser } from './logoutUser';
import { meUser } from './meUser';
import { removeUser } from './removeUser';
import { showUser } from './showUser';
import { updateUser } from './updateUser';

/**
 * usersController.js
 *
 * @description :: Server-side logic for managing userss.
 */
module.exports = {
  me(req, res) {
    meUser(req, res);
  },

  login(req, res) {
    loginUser(req, res);
  },

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

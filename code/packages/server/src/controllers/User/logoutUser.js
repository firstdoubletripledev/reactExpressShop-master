/**
 *
 * logoutUser() logout ( delete ) User session
 * @param {*} req
 * @param {*} res
 * @returns
 */
async function logoutUser(req, res) {
  await new Promise(resPromise => req.session.destroy(() => resPromise()));
  res.clearCookie('connect.sid');
  res.clearCookie('authorization');

  return res.json({ code: 1, msg: 'success' });
}

export { logoutUser };

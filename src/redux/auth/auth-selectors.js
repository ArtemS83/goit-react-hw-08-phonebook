const getIsAuthenticated = state => Boolean(state.auth.token);

const getUsername = state => state.auth.user.name;
// const getToken = state => state.auth.token; //TODO delete

/*eslint-disable*/
export default {
  getIsAuthenticated,
  getUsername,
  //   getToken,
};

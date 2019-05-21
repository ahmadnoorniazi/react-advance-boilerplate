export default function login(state = false, action) {
  switch (action.type) {
    case "CHANGE_LOGIN_STATUS":
      return action.payload;
    default:
      return state;
  }
}

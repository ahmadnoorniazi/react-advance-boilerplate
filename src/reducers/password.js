export default function changePassword(state = "", action) {
  switch (action.type) {
    case "CHANGE_USER_PASSWORD":
      return action.payload;
    default:
      return state;
  }
}

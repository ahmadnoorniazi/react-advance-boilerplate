export default function name(state = "", action) {
  switch (action.type) {
    case "CHANGE_USER_NAME":
      return action.payload;
    default:
      return state;
  }
}

export default function login(state = "", action) {
  switch (action.type) {
    case "CHANGE_MESSEGE":
      return action.payload;
    case "RESET_MESSEGE":
      return action.payload;
    default:
      return state;
  }
}

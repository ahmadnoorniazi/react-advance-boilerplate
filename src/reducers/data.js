export default function login(state = [], action) {
  switch (action.type) {
    case "CHANGE_DATA":
      return [...state, { name: "admin", message: action.payload }];
    case "UPDATE_DATA":
      return [...state, action.payload];
    case "STORAGE_DATA":
      return action.payload;
    default:
      return state;
  }
}

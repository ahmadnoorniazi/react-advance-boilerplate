const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  users: [
    {
      firstName: "admin",
      lastName: "admin",
      email: "admin",
      password: "admin"
    }
  ]
};
export default function changePassword(state = initialState, action) {
  switch (action.type) {
    case "ADD_FIRST_NAME":
      return {
        ...state,
        firstName: action.payload
      };
    case "ADD_LAST_NAME":
      return {
        ...state,
        lastName: action.payload
      };
    case "ADD_PASSWORD":
      return {
        ...state,
        password: action.payload
      };
    case "ADD_EMAIL":
      return {
        ...state,
        email: action.payload
      };
    case "ADD_FORM_DATA":
      return {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        users: [...state.users, action.payload]
      };
    default:
      return state;
  }
}

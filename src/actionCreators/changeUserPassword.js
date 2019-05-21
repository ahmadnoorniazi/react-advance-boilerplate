export default function changeUserPassword(password) {
  return { type: "CHANGE_USER_PASSWORD", payload: password };
}

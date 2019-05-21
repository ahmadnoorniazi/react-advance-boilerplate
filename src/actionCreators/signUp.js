export function firstName(name) {
  return { type: "ADD_FIRST_NAME", payload: name };
}
export function lastName(name) {
  return { type: "ADD_LAST_NAME", payload: name };
}
export function email(email) {
  return { type: "ADD_EMAIL", payload: email };
}
export function password(password) {
  return { type: "ADD_PASSWORD", payload: password };
}
export function onSubmit(formData) {
  return { type: "ADD_FORM_DATA", payload: formData };
}

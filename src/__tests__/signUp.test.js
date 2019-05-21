// these should normally be in your jest setupTestFrameworkScriptFile
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { fireEvent, cleanup, render } from "react-testing-library";
import reducer from "../reducers";
import React from "react";
import SignUp from "../SignUp";

afterEach(cleanup);
test("should test for sign up ", () => {
  const store = createStore(reducer);
  window.alert = function() {};
  const fakeHistory = { push: jest.fn() };
  const { container, getByText, getByLabelText } = render(
    <Provider store={store}>
      <SignUp history={fakeHistory} />
    </Provider>
  );
  const userFirstName = getByLabelText("First Name");
  const userLastName = getByLabelText("Last Name");
  const userEmail = getByLabelText("Email");
  const userPassword = getByLabelText("Password");
  const SubmitNode = getByText("Submit");

  fireEvent.change(userFirstName, { target: { value: "ahmad" } });
  fireEvent.change(userLastName, { target: { value: "noor" } });
  fireEvent.change(userEmail, { target: { value: "ahmad@gmail.com" } });
  fireEvent.change(userPassword, { target: { value: "noor" } });
  fireEvent.submit(SubmitNode);
  expect(SubmitNode.type).toBe("submit");
  expect(fakeHistory.push).toHaveBeenCalledTimes(1);
  expect(fakeHistory.push).toHaveBeenCalledWith("/login");
  expect(container.firstChild).toMatchSnapshot();
});

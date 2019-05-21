// these should normally be in your jest setupTestFrameworkScriptFile
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { fireEvent, cleanup, render } from "react-testing-library";

import reducer from "../reducers";
import React from "react";
import LoginForm from "../Login";

afterEach(cleanup);
test("should test for login ", () => {
  const store = createStore(reducer);
  window.HTMLElement.prototype.scrollIntoView = function() {};
  window.alert = function() {};
  const fakeHistory = { push: jest.fn() };
  const { container, getByText, getByLabelText } = render(
    <Provider store={store}>
      <LoginForm history={fakeHistory} />
    </Provider>
  );
  const userEmail = getByLabelText("Email");
  const userPassword = getByLabelText("Password");
  const SubmitNode = getByText("Submit");

  fireEvent.change(userEmail, { target: { value: "admin" } });
  fireEvent.change(userPassword, { target: { value: "admin" } });
  fireEvent.submit(SubmitNode);
  expect(SubmitNode.type).toBe("submit");
  expect(fakeHistory.push).toHaveBeenCalledTimes(1);
  expect(fakeHistory.push).toHaveBeenCalledWith("./chat");
  expect(container.firstChild).toMatchSnapshot();
});

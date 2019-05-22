// these should normally be in your jest setupTestFrameworkScriptFile
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { fireEvent, cleanup, render } from "react-testing-library";
import reducer from "../reducers";
import React from "react";
import Chat from "../Chat";

const key = "state";
const fakeData = {
  name: "ahmad",
  email: "ahmad@gmail.com"
};
beforeEach(() => {
  window.localStorage.setItem(key, JSON.stringify([fakeData]));
});

test("should test for logout ", () => {
  const store = createStore(reducer);
  window.HTMLElement.prototype.scrollIntoView = function() {};
  window.alert = function() {};
  const fakeHistory = { push: jest.fn() };
  const { container, getByDisplayValue } = render(
    <Provider store={store}>
      <Chat history={fakeHistory} />
    </Provider>
  );
  const logoutButton = getByDisplayValue("logout");
  expect(JSON.parse(window.localStorage.getItem("state"))).toEqual([fakeData]);
  fireEvent.click(logoutButton);
  expect(logoutButton.type).toBe("button");
  expect(fakeHistory.push).toHaveBeenCalledTimes(1);
  expect(window.localStorage.getItem("state")).toBe(null);
  expect(fakeHistory.push).toHaveBeenCalledWith("./login");
  expect(container.firstChild).toMatchSnapshot();
});
afterEach(cleanup);

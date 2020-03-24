import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import Root from "Root";
import CommentBox from "Components/CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and two buttons", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

describe("Textarea", () => {
  beforeEach(() => {
    wrapped
      .find("textarea")
      .simulate("change", {
        target: { value: "new comment" }
      })
      .update();
  });

  it("it has a textarea that users can type in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("when form is submitted, text area gets emptied", () => {
    wrapped
      .find("form")
      .simulate("submit")
      .update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});

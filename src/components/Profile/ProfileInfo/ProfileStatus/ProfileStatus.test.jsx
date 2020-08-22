import React from "react";
import { create } from "react-test-renderer";
import ProfileStatusClass from "../ProfileStatusClass";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatusClass profileStatus="test-react-component" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("test-react-component");
  });
  
  test("after creation span should be displayed", () => {
    const component = create(<ProfileStatusClass profileStatus="test-react-component" />);
    const instance = component.root;    
    expect(() => {
      instance.findByType("span");
    }).not.toThrow();
  });

  test("after creation input should not be displayed", () => {
    const component = create(<ProfileStatusClass profileStatus="test-react-component" />);
    const instance = component.root;
    expect(() => {
      instance.findByType("input");
    }).toThrow();
  });

  test("span should contains status", () => {
    const component = create(<ProfileStatusClass profileStatus="test-react-component" />);
    const instance = component.root;
    const span = instance.findByType("span");
    expect(span.children[0]).toBe("test-react-component");  
  });

  test("input should be displayed in edit mode", () => {
    const component = create(<ProfileStatusClass profileStatus="test-react-component" />);
    const instance = component.root;
    const span = instance.findByType("span");
    span.props.onDoubleClick();
    expect(() => {
      instance.findByType("input");
    }).not.toThrow();
  });

  test("input should be displayed in edit mode", () => {
    const component = create(<ProfileStatusClass profileStatus="test-react-component" />);
    const instance = component.root;
    const span = instance.findByType("span");
    span.props.onDoubleClick();
    const input = instance.findByType("input");
    expect(input.props.value).toBe("test-react-component");
  });

  test("putProfileStatus should be called in setStatus", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatusClass profileStatus="test-react-component"  putProfileStatus={mockCallback} />);
    const instance = component.getInstance();
    instance.setStatus();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
// Test away!
import React from "react";
import * as rt from "react-testing-library";
import Display from "./Display";

afterEach(rt.cleanup);

describe("Display", () => {
  it("Closed if closed prop is true", () => {
    const wrap = rt.render(<Display closed={true} />);
    expect(wrap.getByText(/closed/i));
    expect(wrap.asFragment()).toMatchSnapshot();
  });
  it("Closed with red-led if closed prop is true", () => {
    const wrap = rt.render(<Display closed={true} />);
    expect(wrap.queryByText(/closed/i).classList.contains("red-led")).toBe(
      true
    );
  });
  it("Open if closed prop is false", () => {
    const wrap = rt.render(<Display closed={false} />);
    expect(wrap.getByText(/open/i));
    expect(wrap.asFragment()).toMatchSnapshot();
  });
  it("Open with red-led if closed prop is false", () => {
    const wrap = rt.render(<Display closed={false} />);
    expect(wrap.queryByText(/open/i).classList.contains("green-led")).toBe(
      true
    );
  });
  it("locked if locked prop is true", () => {
    const wrap = rt.render(<Display locked={true} />);
    expect(wrap.getByText(/locked/i));
    expect(wrap.asFragment()).toMatchSnapshot();
  });
  it("locked with red-led if locked prop is true", () => {
    const wrap = rt.render(<Display locked={true} />);
    expect(wrap.queryByText(/locked/i).classList.contains("red-led")).toBe(
      true
    );
  });
  it("unlocked if locked prop is false", () => {
    const wrap = rt.render(<Display locked={false} />);
    expect(wrap.getByText(/unlocked/i));
    expect(wrap.asFragment()).toMatchSnapshot();
  });
  it("unlocked with green-led if locked prop is false", () => {
    const wrap = rt.render(<Display locked={false} />);
    expect(wrap.queryByText(/unlocked/i).classList.contains("green-led")).toBe(
      true
    );
  });
});

// Test away!
import React from "react";
import * as rt from "react-testing-library";
import Controls from "./Controls";

afterEach(rt.cleanup);

describe("Controls", () => {
  it("renders unlock gate button when locked", () => {
    const wrap = rt.render(<Controls closed={true} locked={true} />);
    expect(wrap.getByText(/unlock gate/i));
  });
  it("disables open when the gate is locked", () => {
    const wrap = rt.render(<Controls closed={true} locked={true} />);
    const button = wrap.queryByText(/open gate/i);
    expect(button.disabled).toBe(true);
  });
  it("disables lock when the gate is open", () => {
    const wrap = rt.render(<Controls closed={false} locked={false} />);
    const button = wrap.queryByText(/lock gate/i);
    expect(button.disabled).toBe(true);
  });
  it("renders lock gate button when unlocked", () => {
    const wrap = rt.render(<Controls closed={true} locked={false} />);
    expect(wrap.getByText(/lock gate/i));
  });
  it("renders open gate when closed", () => {
    const wrap = rt.render(<Controls closed={true} locked={false} />);
    expect(wrap.getByText(/open gate/i));
  });
  it("renders open gate when closed", () => {
    const wrap = rt.render(<Controls closed={false} locked={false} />);
    expect(wrap.getByText(/close gate/i));
  });
});

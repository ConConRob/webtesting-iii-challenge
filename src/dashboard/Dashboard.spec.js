// Test away
import React from "react";
import * as rt from "react-testing-library";
import Dashboard from "./Dashboard";

afterEach(rt.cleanup);

describe("Dashboard", () => {
  it("click close closes the door", () => {
    const wrap = rt.render(<Dashboard />);
    const button = wrap.queryByText(/close gate/i);
    expect(wrap.getByText(/open/i));
    rt.fireEvent.click(button);
    expect(wrap.getByText(/closed/i));
  });
  it("click close closes the door then click open opens door", () => {
    const wrap = rt.render(<Dashboard />);
    const button = wrap.queryByText(/close gate/i);
    expect(wrap.getByText(/open/i));
    rt.fireEvent.click(button);
    expect(wrap.getByText(/closed/i));
    rt.fireEvent.click(button);
    expect(wrap.getByText(/open/i));
  });
  it("close door and lock", () => {
    const wrap = rt.render(<Dashboard />);
    const openCloseButton = wrap.queryByText(/close gate/i);
    const lockUnlockButton = wrap.queryByText(/lock gate/i);

    expect(wrap.getByText(/open/i));
    rt.fireEvent.click(openCloseButton);
    expect(wrap.getByText(/closed/i));
    expect(wrap.getByText(/unlocked/i));
    rt.fireEvent.click(lockUnlockButton);
    expect(wrap.queryByText(/unlocked/i)).toBeFalsy();
    expect(wrap.getByText(/locked/i));
  });
  it("Can't lock gate when opened", () => {
    const wrap = rt.render(<Dashboard />);
    const lockUnlockButton = wrap.queryByText(/lock gate/i);

    expect(wrap.getByText(/unlocked/i));
    expect(wrap.getByText(/open/i));
    rt.fireEvent.click(lockUnlockButton);
    expect(wrap.getByText(/unlocked/i));
  });
  it("Can't open gate when locked", () => {
    const wrap = rt.render(<Dashboard />);
    const openCloseButton = wrap.queryByText(/close gate/i);
    const lockUnlockButton = wrap.queryByText(/lock gate/i);

    rt.fireEvent.click(openCloseButton);
    rt.fireEvent.click(lockUnlockButton);
    expect(wrap.getByText(/locked/i));
    expect(wrap.getByText(/closed/i));
    rt.fireEvent.click(openCloseButton);
    expect(wrap.getByText(/closed/i));
  });
});

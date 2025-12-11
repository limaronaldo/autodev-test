import { helloWorld } from "./index";

describe("helloWorld", () => {
  it("returns Hello, World!", () => {
    expect(helloWorld()).toBe("Hello, World!");
  });
});
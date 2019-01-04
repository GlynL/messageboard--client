import isObjectEmpty from "../isObjectEmpty";

it("should return true if object is empty", () => {
  expect(isObjectEmpty({})).toBeTruthy();
});

it("should return false if object isn't empty", () => {
  expect(isObjectEmpty({ test: "hi" })).not.toBeTruthy();
});

const glowr = require("../src/index");

describe("glowr function", () => {
  test("applies text style correctly", () => {
    const result = glowr("Test Text", "bright");
    expect(result).toBe("\x1b[1mTest Text\x1b[0m");
  });

  test("applies foreground color correctly", () => {
    const result = glowr("Test Text", "fg.green");
    expect(result).toBe("\x1b[32mTest Text\x1b[0m");
  });

  test("applies background color correctly", () => {
    const result = glowr("Test Text", "bg.blue");
    expect(result).toBe("\x1b[44mTest Text\x1b[0m");
  });
});

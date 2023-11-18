const glow = require("../index");

describe("glow function", () => {
  test("applies text style correctly", () => {
    const result = glow("Test Text", "bright");
    expect(result).toBe("\x1b[1mTest Text\x1b[0m");
  });

  test("applies foreground color correctly", () => {
    const result = glow("Test Text", "fgGreen");
    expect(result).toBe("\x1b[32mTest Text\x1b[0m");
  });

  test("applies background color correctly", () => {
    const result = glow("Test Text", "bgBlue");
    expect(result).toBe("\x1b[44mTest Text\x1b[0m");
  });

});

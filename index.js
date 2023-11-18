const styles = {
  // Text Styles
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underline: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",

  // Foreground Colors
  fg: {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
  },

  // Background Colors
  bg: {
    black: "\x1b[40m",
    red: "\x1b[41m",
    green: "\x1b[42m",
    yellow: "\x1b[43m",
    blue: "\x1b[44m",
    magenta: "\x1b[45m",
    cyan: "\x1b[46m",
    white: "\x1b[47m",
  },
};

function glowr(text, style) {
  const styleParts = style.split(".");
  const mainStyle = styleParts[0];
  const subStyle = styleParts[1];

  if (!styles[mainStyle] || (subStyle && !styles[mainStyle][subStyle])) {
    console.error(`Invalid style: ${style}`);
    return text;
  }

  return subStyle
    ? styles[mainStyle][subStyle] + text + styles.reset
    : styles[mainStyle] + text + styles.reset;
}

module.exports = glowr;

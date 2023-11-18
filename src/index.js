const styles = {

};

function glow(text, style) {
  return styles[style] + text + styles.reset;
}

module.exports = { glow };

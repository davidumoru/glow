const glow = require("../src/index");

// Text Style
console.log(glow("This text has a 'bright' text styling", "bright"))
console.log(glow("This text has a 'reverse' text styling", "reverse"))

// Foreground Colors
console.log(glow("This text has a Cyan Foregroung", "fgCyan"))
console.log(glow("This text has a Green Foregroung", "fgGreen"))

// Background Colors
console.log(glow("This text has a Blue Background", "bgBlue"))
console.log(glow("This text has a Red Background", "bgRed"))
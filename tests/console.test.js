const glowr = require("../index");

// Text Style
console.log(glowr("This text has a 'bright' text styling", "bright"))
console.log(glowr("This text has a 'reverse' text styling", "reverse"))

// Foreground Colors
console.log(glowr("This text has a Cyan Foregroung", "fgCyan"))
console.log(glowr("This text has a Green Foregroung", "fgGreen"))

// Background Colors
console.log(glowr("This text has a Blue Background", "bgBlue"))
console.log(glowr("This text has a Red Background", "bgRed"))
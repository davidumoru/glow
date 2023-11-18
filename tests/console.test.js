const glowr = require("../index");

// Text Style
console.log(glowr("This text has a 'bright' text styling", "bright"))
console.log(glowr("This text has a 'reverse' text styling", "reverse"))

// Foreground Colors
console.log(glowr("This text has a Cyan Foregroung", "fg.cyan"))
console.log(glowr("This text has a Green Foregroung", "fg.green"))

// Background Colors
console.log(glowr("This text has a Blue Background", "bg.blue"))
console.log(glowr("This text has a Red Background", "bg.red"))
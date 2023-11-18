const glowr = require("../index");

// Text Style
console.log(glowr("This text has a 'reset' text styling", "reset"));
console.log(glowr("This text has a 'bright' text styling", "bright"));
console.log(glowr("This text has a 'dim' text styling", "dim"));
console.log(glowr("This text has a 'underline' text styling", "underline"));
console.log(glowr("This text has a 'blink' text styling", "blink"));
console.log(glowr("This text has a 'reverse' text styling", "reverse"));
console.log(glowr("This text has a 'hidden' text styling", "hidden"));

// Foreground Colors
console.log(glowr("This text has a Black Foreground", "fg.black"));
console.log(glowr("This text has a Red Foreground", "fg.red"));
console.log(glowr("This text has a Green Foreground", "fg.green"));
console.log(glowr("This text has a Yellow Foreground", "fg.yellow"));
console.log(glowr("This text has a Blue Foreground", "fg.blue"));
console.log(glowr("This text has a Magenta Foreground", "fg.magenta"));
console.log(glowr("This text has a Cyan Foreground", "fg.cyan"));
console.log(glowr("This text has a White Foreground", "fg.white"));

// Background Colors
console.log(glowr("This text has a Black Background", "bg.black"));
console.log(glowr("This text has a Red Background", "bg.red"));
console.log(glowr("This text has a Green Background", "bg.green"));
console.log(glowr("This text has a Yellow Background", "bg.yellow"));
console.log(glowr("This text has a Blue Background", "bg.blue"));
console.log(glowr("This text has a Magenta Background", "bg.magenta"));
console.log(glowr("This text has a Cyan Background", "bg.cyan"));
console.log(glowr("This text has a White Background", "bg.white"));

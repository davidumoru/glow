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
console.log(glowr("This text has a Black Foregroung", "fg.black"));
console.log(glowr("This text has a Red Foregroung", "fg.red"));
console.log(glowr("This text has a Green Foregroung", "fg.green"));
console.log(glowr("This text has a Yellow Foregroung", "fg.yellow"));
console.log(glowr("This text has a Blue Foregroung", "fg.blue"));
console.log(glowr("This text has a Magenta Foregroung", "fg.magenta"));
console.log(glowr("This text has a Cyan Foregroung", "fg.cyan"));
console.log(glowr("This text has a White Foregroung", "fg.white"));

// Background Colors
console.log(glowr("This text has a Black Backgroung", "bg.black"));
console.log(glowr("This text has a Red Backgroung", "bg.red"));
console.log(glowr("This text has a Green Backgroung", "bg.green"));
console.log(glowr("This text has a Yellow Backgroung", "bg.yellow"));
console.log(glowr("This text has a Blue Backgroung", "bg.blue"));
console.log(glowr("This text has a Magenta Backgroung", "bg.magenta"));
console.log(glowr("This text has a Cyan Backgroung", "bg.cyan"));
console.log(glowr("This text has a White Backgroung", "bg.white"));

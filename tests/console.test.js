const glowr = require("../src/index");

// Text Style
console.log(glowr("This text is not styled", "reset"));
console.log(glowr("This text is bright", "bright"));
console.log(glowr("This text is dim", "dim"));
console.log(glowr("This text is underlined", "underline"));
console.log(glowr("This text keeps blinking", "blink"));
console.log(glowr("This text has a reverse colour styling", "reverse"));
console.log(glowr("This text is hidden", "hidden"));
console.log(" ");

// Foreground Colors
console.log(glowr("This text is Black", "fg.black"));
console.log(glowr("This text is Red", "fg.red"));
console.log(glowr("This text is Green", "fg.green"));
console.log(glowr("This text is Yellow", "fg.yellow"));
console.log(glowr("This text is Blue", "fg.blue"));
console.log(glowr("This text is Magenta", "fg.magenta"));
console.log(glowr("This text is Cyan", "fg.cyan"));
console.log(glowr("This text is White", "fg.white"));
console.log(" ");

// Background Colors
console.log(glowr("This text has a Black Background", "bg.black"));
console.log(glowr("This text has a Red Background", "bg.red"));
console.log(glowr("This text has a Green Background", "bg.green"));
console.log(glowr("This text has a Yellow Background", "bg.yellow"));
console.log(glowr("This text has a Blue Background", "bg.blue"));
console.log(glowr("This text has a Magenta Background", "bg.magenta"));
console.log(glowr("This text has a Cyan Background", "bg.cyan"));
console.log(glowr("This text has a White Background", "bg.white"));
console.log(" ");

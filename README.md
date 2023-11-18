<div align = "center">

# glowr

**Party in your Terminal!**

</div>

## Install

This is a npm package available through the npm [registry](https://www.npmjs.com/).

Before installing, download and install Node.js.

Installation is done using the npm install command:

```
npm i glowr
```

## Usage

```
const glowr = require('glowr');


console.log(glowr("This text has a Blue Background", "bgBlue"));
```

## Styles

**Text Styles**

- `reset:` Resets text formatting to the default settings.
- `bright:` Increases the brightness or intensity of the text.
- `dim:` Decreases the brightness or intensity of the text.
- `underline:` Adds an underline to the text.
- `blink:` Makes the text blink (i.e., alternate between visible and invisible).
- `reverse:` Swaps the foreground and background colors of the text.
- `hidden:` Makes the text hidden or invisible.

**Foreground Colors**

- `fgBlack`
- `fgRed`
- `fgGreen`
- `fgYellow`
- `fgBlue`
- `fgMagenta`
- `fgCyan`
- `fgWhite`

**Background Colors**

- `bgBlack`
- `bgRed`
- `bgGreen`
- `bgYellow`
- `bgBlue`
- `bgMagenta`
- `bgCyan`
- `bgWhite`

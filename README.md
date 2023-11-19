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


console.log(glowr("This text has a Blue Background", "bg.blue"));
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

- `fg.black`
- `fg.red`
- `fg.green`
- `fg.yellow`
- `fg.blue`
- `fg.magenta`
- `fg.cyan`
- `fg.white`

**Background Colors**

- `bg.black`
- `bg.red`
- `bg.green`
- `bg.yellow`
- `bg.blue`
- `bg.magenta`
- `bg.cyan`
- `bg.white`

## Contributing
Contributions are welcome! If you would like to contribute to this project, please check out [Contribution Guide](CONTRIBUTING.md).

## People
The inception and ongoing upkeep of this project are attributed to [David Umoru](https://github.com/davidumoru)

## Browser Compatibility
Starting from Chrome version 69, ANSI escape codes are inherently supported in the developer console.

## Windows Users
For an enhanced experience, it is recommended to switch to [Windows Terminal](https://github.com/microsoft/terminal) rather than using cmd.exe.

## Licence
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
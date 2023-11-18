declare module "glowr" {
  interface Styles {
    // Text Styles
    reset: string;
    bright: string;
    dim: string;
    underline: string;
    blink: string;
    reverse: string;
    hidden: string;

    // Foreground Colors
    fg: {
      black: string;
      red: string;
      green: string;
      yellow: string;
      blue: string;
      magenta: string;
      cyan: string;
      white: string;
    };

    // Background Colors
    bg: {
      black: string;
      red: string;
      green: string;
      yellow: string;
      blue: string;
      magenta: string;
      cyan: string;
      white: string;
    };
  }

  const styles: Styles;

  function glowr(text: string, style: string): string;

  export = glowr;
}

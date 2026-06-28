#! /usr/bin/env node

function colorBoxes(str) {
  const green = "\x1b[32m";
  const reset = "\x1b[0m";
  return str.replace(/[╔═╝║╚╦╩╗╔╚╔╝╚]/g, (content) => green + content + reset);
}

console.log(
  colorBoxes(`
  ╔═══════════════════════════╗
╔═╝        H E L L O !        ╚═╗
║                               ║
║  I'm Pouya Saadeghi           ║
║  Product designer & developer ║
║  Living in Istanbul           ║
║                               ║
║  I'm building daisyUI         ║
║  https://daisyui.com          ║
║                               ║
╚═╗                           ╔═╝
  ╚══════╦═════════════╦══════╝
  ╔══════╩═════════════╩══════╗
╔═╝     F O L L O W   M E     ╚═╗
║                               ║
║     https://x.com/saadeghi    ║
║                               ║
║  https://github.com/saadeghi  ║
║                               ║
╚═╗                           ╔═╝
  ╚══════╦═════════════╦══════╝
  ╔══════╩═════════════╩══════╗
╔═╝         E M A I L         ╚═╗
║                               ║
║    pouya.saadeghi@gmail.com   ║
║                               ║
╚╗                             ╔╝
 ╚═════════════════════════════╝
`)
);

# [DEPRECATED] electron-hot-updater

Update your electron app without downloading the whole installer.

## Steps for Usage

1. Upload your program files to your server, including [package.json](package.json).

2. Make a file list like [this](files.json).

3. Refer to the code in this project, especially [js/update.js](js/update.js).

## Precautions

- The updater cannot work with *asar*.

- If the program is installed in *C:\Program Files*, the updater will not be able to work unless the user runs it as administrator.

## License

[MIT](LICENSE).

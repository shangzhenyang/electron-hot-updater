/**
 * electron-hot-updater
 * https://github.com/shangzhenyang/electron-hot-updater
 *
 * @author Shangzhen Yang
 */

const electron = require("electron");

document.getElementById("minimize-btn").addEventListener("click", () => {
	electron.remote.getCurrentWindow().minimize();
});

document.getElementById("maximize-btn").addEventListener("click", () => {
	const win = require("electron").remote.getCurrentWindow();
	if (win.isMaximized()) {
		win.unmaximize();
	} else {
		win.maximize();
	}
});

document.getElementById("close-btn").addEventListener("click", () => {
	window.close();
});

if (process.platform == "darwin") {
	// Center the title bar text and hide the window control buttons on macOS.
	document.getElementById("title-bar").style.textAlign = "center";
	document.getElementById("win-control").style.display = "block";
}

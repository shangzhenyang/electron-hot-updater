/**
 * electron-hot-updater
 * https://github.com/shangzhenyang/electron-hot-updater
 *
 * @author Shangzhen Yang
 */

// TODO: You need to replace the URL here with your own URL.
const REMOTE_ROOT = process.env.REMOTE_ROOT ||
	"https://raw.githubusercontent.com/shangzhenyang/electron-hot-updater/master/";

const package = require("./package.json");
const timestamp = "?time=" + Date.now();

function isNewerVersion(current, latest) {
	const currentSplit = current.split(".");
	const latestSplit = latest.split(".");
	const currentMajor = parseInt(currentSplit[0]);
	const currentMinor = parseInt(currentSplit[1]);
	const currentPatch = parseInt(currentSplit[2]);
	const latestMajor = parseInt(latestSplit[0]);
	const latestMinor = parseInt(latestSplit[1]);
	const latestPatch = parseInt(latestSplit[2]);
	if (latestMajor > currentMajor) {
		return true;
	} else if (latestMajor === currentMajor) {
		if (latestMinor > currentMinor) {
			return true;
		} else if (latestMinor === currentMinor) {
			return latestPatch > currentPatch;
		}
	}
	return false;
}

fetch(REMOTE_ROOT + "package.json" + timestamp)
	.then((response) => {
		if (response.ok) {
			return response.json();
		}
	})
	.then((data) => {
		if (data && isNewerVersion(package.version, data.version)) {
			location.href = "update.html";
		}
	});

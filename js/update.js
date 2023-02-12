/**
 * electron-hot-updater
 * https://github.com/shangzhenyang/electron-hot-updater
 *
 * @author Shangzhen Yang
 */

// TODO: You need to replace the URL here with your own URL.
const REMOTE_ROOT = process.env.REMOTE_ROOT ||
	"https://raw.githubusercontent.com/shangzhenyang/electron-hot-updater/master/";

try {
	const fs = require("fs");
	const path = require("path");

	const content = document.getElementById("content");
	const timestamp = "?time=" + new Date().getTime();

	let files;
	let progress = 0;

	window.addEventListener("load", () => {
		// Get the file list.
		fetch(REMOTE_ROOT + "files.json" + timestamp)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					content.innerText += " Error (" + response.status +
						")\nFailed to update.";
				}
			})
			.then((data) => {
				if (data) {
					files = data;
					content.innerText += " Done";

					// Start updating.
					next();
				}
			});
	})
	function next() {
		if (progress < files.length) {
			// If there is a file that is not downloaded, continue to download.
			update(files[progress]);
		} else {
			content.innerText += "\nUpdated successfully.";
			location.href = "index.html";
		}
	}
	function update(file) {
		content.innerText += "\nDownloading " + file + " . . .";

		fetch(REMOTE_ROOT + file + timestamp)
			.then((response) => {
				if (response.ok) {
					return response.text();
				} else {
					throw new Error(response.status);
				}
			})
			.then((data) => {
				if (data) {
					// Overwrite the local file.
					fs.writeFileSync(path.join(__dirname, file), data);

					content.innerText += " Done";
					progress += 1;

					// Continue.
					next();
				}
			})
			.catch((err) => {
				content.innerText += " Error (" + err.message +
					")\nFailed to update.";
			});
	}
} catch (err) {
	document.getElementById("content").innerText += " Error\n" + err.message +
		"\nFailed to update.";
}

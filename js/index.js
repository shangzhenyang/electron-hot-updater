/* element-hot-updater by Shangzhen Yang https://github.com/shangzhenyang/electron-hot-updater */
const package=require("./package.json")
fetch("https://raw.githubusercontent.com/shangzhenyang/electron-hot-updater/master/package.json").then(response=>{
	/* You need to replace the URL here with your own URL.
	你需要将这里的网址换成你自己的网址。 */
	if(response.ok){
		return response.json()
	}
}).then(data=>{
	if(data&&package.version!=data.version){
		const update=confirm("There are updates available. Do you want to update this app?")
		if(update){
			location.href="update.html"
		}
	}
	/* If the version number on the server does not match the local version number, open the update page.
	如果服务器上的版本号与本地的不匹配，打开更新页面。 */
})

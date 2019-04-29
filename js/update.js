/* element-hot-updater by Shangzhen Yang https://github.com/shangzhenyang/electron-hot-updater */
try{
	const root="https://raw.githubusercontent.com/shangzhenyang/electron-hot-updater/master/"
	/* You need to replace the URL here with your own URL.
	你需要将这里的网址换成你自己的网址。 */
	const timestamp="?time="+new Date().getTime()
	let files,progress=0
	window.addEventListener("load",()=>{
		/* Get the file list.
		获取文件列表。 */
		fetch(root+"files.json"+timestamp).then(response=>{
			if(response.ok){
				return response.json()
			}else{
				document.getElementsByClassName("content")[0].innerText+=" Error ("+response.status+")\nFailed to update."
				/* Show "Failed to update" on the screen.
				在屏幕上显示“更新失败”。 */
			}
		}).then(data=>{
			if(data){
				files=data
				document.getElementsByClassName("content")[0].innerText+=" Done"
				/* Show "Done" on the screen.
				在屏幕上显示“完成”。 */
				next()
				/* Start updating.
				开始更新。 */
			}
		})
	})
	function next(){
		if(progress<files.length){
			update(files[progress])
			/* If there is a file that is not downloaded, continue to download.
			如果有未下载的文件，继续下载。 */
		}else{
			document.getElementsByClassName("content")[0].innerText+="\nUpdated successfully."
			/* Show "Updated successfully" on the screen.
			在屏幕上显示“更新成功”。 */
			location.href="index.html"
			/* Go to the home page.
			前往主界面。 */
		}
	}
	function update(file){
		document.getElementsByClassName("content")[0].innerText+="\nDownloading "+file+" . . ."
		/* Show "Downloading" on the screen.
		在屏幕上显示“正在下载”。 */
		fetch(root+file+timestamp).then(response=>{
			if(response.ok){
				return response.text()
			}else{
				document.getElementsByClassName("content")[0].innerText+=" Error ("+response.status + ")\nFailed to update."
				/* Show "Failed to update" on the screen.
				在屏幕上显示“更新失败”。 */
			}
		}).then(data=>{
			if(data){
				require("fs").writeFileSync(require("path").join(__dirname,file),data)
				/* Overwrite the local file.
				覆盖本地文件。 */
				document.getElementsByClassName("content")[0].innerText+=" Done"
				/* Show "Done" on the screen.
				在屏幕上显示“完成”。 */
				progress+=1
				next()
				/* Continue.
				继续。 */
			}
		})
	}
}catch(e){
	document.getElementsByClassName("content")[0].innerText+=" Error\n"+e.message+"\nFailed to update."
	/* Show "Failed to update" on the screen.
	在屏幕上显示“更新失败”。 */
}

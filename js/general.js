/* element-hot-updater by Shangzhen Yang https://github.com/shangzhenyang/electron-hot-updater */
const electron=require("electron")
document.getElementById("minimize-btn").onclick=()=>{
	/* Minimize the window.
	最小化窗口。 */
	electron.remote.getCurrentWindow().minimize()
}
document.getElementById("maximize-btn").onclick=()=>{
	/* Maximize the window.
	最大化窗口。 */
	const win=require("electron").remote.getCurrentWindow()
	if(win.isMaximized()){
		win.unmaximize()
	}else{
		win.maximize()
	}
}
document.getElementById("close-btn").onclick=()=>{
	/* Close the window.
	关闭窗口。 */
	close()
}
if(process.platform=="darwin"){
	document.getElementsByClassName("drag")[0].style.textAlign="center"
	/* Center the title bar text on macOS.
	在 macOS 上使标题栏居中 */
}else{
	document.getElementsByClassName("win")[0].style.display="block"
	/* Show the control box of the window.
	显示窗口的控制按钮。 */
}
require("electron").webFrame.setZoomLevelLimits(1,1)
/* The pages of a native application should not be zoomable.
一个原生应用的页面不应该能被缩放。 */

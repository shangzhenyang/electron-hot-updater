/* Code written by Shangzhen Yang */

if ( process.platform == "darwin" ) { document.getElementsByClassName("drag")[0].style.textAlign = "center" }
/* Center the title bar text on macOS.
在 macOS 上使标题栏居中 */

else { document.getElementsByClassName("win")[0].style.display = "" }
/* Show the control box of the window.
显示窗口的控制按钮。 */

require("electron").webFrame.setZoomLevelLimits(1, 1)
/* The pages of a native application should not be zooming.
一个原生应用的页面不应该能被缩放。 */

function maximize(){
    /* Maximize the window.
    最大化窗口。 */
    const win = require("electron").remote.getCurrentWindow()
    if ( win.isMaximized() ) { win.unmaximize() }
    else { win.maximize() }
}

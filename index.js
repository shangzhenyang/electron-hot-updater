/* Code written by Shangzhen Yang */

if (process.platform !== "darwin") {document.getElementsByClassName("win")[0].style.display = ""}
/* Show the control box of the window.
显示窗口的控制按钮。 */

const electron = require("electron")

electron.webFrame.setZoomLevelLimits(1, 1)
/* The pages of a native application should not be zooming.
一个原生应用的页面不应该能被缩放。 */

const package = require("./package.json")

let num = 10000 + Math.round(Math.random() * 89999)
/* Generate a random number in order to get the latest version number without interference from the cache.
生成一个随机数以便获得最新的版本号而不受缓存的干扰。 */

let xhr = new XMLHttpRequest()
xhr.onreadystatechange=function() {
    switch (xhr.readyState) {
        case 4:
            if (xhr.status == 200) {
                const json = JSON.parse(xhr.responseText)
                /* Convert the obtained string to JSON.
                将得到的字符串转换为 JSON。 */

                if(package.version != json.version) {window.location.href = "update.html"}
                /* If the version number on the server does not match the local version number, open the update page.
                如果服务器上的版本号与本地的不匹配，打开更新页面。 */
            }
            break
        default:break
    }
}
xhr.open("GET", "http://t.rths.tk/package.json?" + num)
/* You need to replace the URL here with your own URL.
你需要将这里的网址换成你自己的网址。 */

xhr.send()

function maximize(){
    const win = require("electron").remote.getCurrentWindow()
    if (win.isMaximized()) {win.unmaximize()}
    else {win.maximize()}
    /* Maximize the window.
    最大化窗口。 */
}

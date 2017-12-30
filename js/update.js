/* Code written by Shangzhen Yang */
try{
    let files, progress = 0
    window.onload = function () {
        /* Get the file list.
        获取文件列表。 */

        const num = 10000 + Math.round ( Math.random() * 89999 )
        /* Generate a random number in order to get the latest file without interference from the cache.
        生成一个随机数以便获得最新的文件而不受缓存的干扰。 */

        const xhr = new XMLHttpRequest ()
        xhr.onreadystatechange = function () {
            switch ( xhr.readyState ) {
                case 4:
                    if ( xhr.status == 200 ) {
                        const json = JSON.parse ( xhr.responseText )
                        /* Convert the obtained string to JSON.
                        将得到的字符串转换为 JSON。 */

                        files = json.files
                        document.getElementsByClassName("content")[0].innerText += " Done"
                        /* Show "Done" on the screen.
                        在屏幕上显示“完成”。 */

                        next()
                        /* Start updating.
                        开始更新。 */

                    } else { document.getElementsByClassName("content")[0].innerText += " Error (" + xhr.status + ")\nFailed to update." }
                    /* Show "Failed to update" on the screen.
                    在屏幕上显示“更新失败”。 */

                    break
                default: break
            }
        }
        xhr.open ( "GET", "http://t.rths.tk/web/toolbox/files.json?" + num )
        /* You need to replace the URL here with your own URL. You can go to http://t.rths.tk/web/toolbox/files.json to see the example of this file.
        你需要将这里的网址换成你自己的网址。你可以前往 http://t.rths.tk/web/toolbox/files.json 查看这个文件的例子。 */

        xhr.send ()
    }
    function next () {
        if ( progress < files.length ) { update ( files[progress] ) }
        /* If there is a file that is not downloaded, continue to download.
        如果有未下载的文件，继续下载。 */

        else {
            document.getElementsByClassName("content")[0].innerText += "\nUpdated successfully."
            /* Show "Updated successfully" on the screen.
            在屏幕上显示“更新成功”。 */

            window.location.href = "index.html"
            /* Go to the home page.
            前往主界面。 */
        }
    }
    function update (file) {
        document.getElementsByClassName("content")[0].innerText += "\nDownloading "+file+" . . ."
        /* Show "Downloading" on the screen.
        在屏幕上显示“正在下载”。 */

        const num = 10000 + Math.round ( Math.random() * 89999 )
        /* Generate a random number in order to get the latest file without interference from the cache.
        生成一个随机数以便获得最新的文件而不受缓存的干扰。 */

        const xhr = new XMLHttpRequest ()
        xhr.onreadystatechange = function () {
            switch ( xhr.readyState ) {
                case 4:
                    if ( xhr.status == 200 ) {
                        require("fs").writeFileSync ( require("path").join( __dirname, file.replace("web/toolbox/", "") ), xhr.responseText )
                        /* Overwrite the local file.
                        覆盖本地文件。 */

                        document.getElementsByClassName("content")[0].innerText += " Done"
                        /* Show "Done" on the screen.
                        在屏幕上显示“完成”。 */

                        progress += 1
                        next()
                        /* Continue.
                        继续。 */

                    } else { document.getElementsByClassName("content")[0].innerText += " Error (" + xhr.status + ")\nFailed to update." }
                    /* Show "Failed to update" on the screen.
                    在屏幕上显示“更新失败”。 */

                    break
                default: break
            }
        }
        xhr.open ( "GET", "http://t.rths.tk/" + file + "?" + num )
        xhr.send ()
    }
} catch (e) { document.getElementsByClassName("content")[0].innerText += " Error\n" + e.message + "\nFailed to update." }
/* Show "Failed to update" on the screen.
在屏幕上显示“更新失败”。 */

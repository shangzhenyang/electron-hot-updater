/* Code written by Shangzhen Yang */
const electron = require ("electron")
const package = require ("./package.json")

const num = 10000 + Math.round ( Math.random() * 89999 )
/* Generate a random number in order to get the latest version number without interference from the cache.
生成一个随机数以便获得最新的版本号而不受缓存的干扰。 */

let xhr = new XMLHttpRequest ()
xhr.onreadystatechange = function () {
    switch ( xhr.readyState ) {
        case 4:
            if ( xhr.status == 200 ) {
                const json = JSON.parse ( xhr.responseText )
                /* Convert the obtained string to JSON.
                将得到的字符串转换为 JSON。 */

                if ( package.version != json.version ) {
                    const update = confirm ("There are updates available. Do you want to update this app?")
                    if ( update ) { window.location.href = "update.html" }
                }
                /* If the version number on the server does not match the local version number, open the update page.
                如果服务器上的版本号与本地的不匹配，打开更新页面。 */
            }
            break
        default: break
    }
}
xhr.open ( "GET", "http://t.rths.tk/package.json?" + num )
/* You need to replace the URL here with your own URL.
你需要将这里的网址换成你自己的网址。 */

xhr.send ()

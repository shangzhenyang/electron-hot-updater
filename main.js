/*Code written by Shangzhen Yang*/
const{app,BrowserWindow}=require("electron")
const path=require("path")
const url=require("url")
let options,win
if(process.platform!=="darwin"){
    options={
        frame:false,
        height:700,
        width:1000,
        show:false
    }
}else{
    options={
        height:700,
        titleBarStyle:"hiddenInset",
        width:1000,
        show:false
    }
}
function createWindow(){
    win=new BrowserWindow(options)
    win.loadURL(url.format({
        pathname:path.join(__dirname,"index.html"),
        protocol:"file:",
        slashes:true
    }))
    win.on("closed",()=>{win=null})
    win.once("ready-to-show",()=>{win.show()})
}
app.on("ready",createWindow)
app.on("window-all-closed",()=>{if(process.platform!=="darwin"){app.quit()}})
app.on("activate",()=>{if(win===null){createWindow()}})

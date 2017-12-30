# electron-hot-updater

Update your electron app without downloading the whole installer.

更新你的 Electron 应用而无需下载整个安装程序。

---

**Steps for usage:**

1. Upload your program files to your server, including *package.json*.

2. Make a file list like [this](http://t.rths.tk/web/toolbox/files.json).

3. Refer to the code in this project, especially *js/update.js*.

**使用步骤：**

1. 上传你的程序文件到你的服务器，包括 *package.json*。

2. 制作一个像[这样](http://t.rths.tk/web/toolbox/files.json)的文件列表。

3. 参考这个项目中的代码，特别是 *js/update.js*。

---

**Precautions:**

- The updater cannot work with *asar*.

- If the program is installed in *C:\Program Files*, the updater will not be able to work unless the user runs it as administrator.

**注意事项：**

- 更新器不能和 *asar* 一起工作。

- 如果程序被安装在 *C:\Program Files*，更新器将无法运行，除非用户以管理员身份运行它。

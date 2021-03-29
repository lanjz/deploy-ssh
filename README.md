# deploy-ssh

前端一键部署

## 安装

`npm install deploy-ssh`

## 使用方式

在项目根目录添加文件 `deploy.config.js`

以 `key` 的形式创建多种模式

```js
module.exports = {
 dev: {
   host:  "", // 服务器地址
   port: "", // 服务器端口
   username: "", // 服务器登录用户名
   password: "", // 服务器登录密码
   distPath: "build", // 要上传的文件
   uploadDirName: undefined, // 压缩、上传、及上传后的文件名，默认与 distPath 一致
   publishPath: "", // 服务器放置项目的路径
   isRemoveRemoteZip: true, // 发布成功后是否删除上传的压缩文件
   isRemoveLocalZip: true, // 发布成功后是否删除本地的压缩文件
   afterDoneExec: '', // 最后要在服务器执行shell
   onlyExec: '', // 当存在 onlyExec 时，连接ssh后只执行这个命令，那么将不执行其它任务操作
   insteadCommand:{ // 指指令替换
     'rm': '/bin/rm', // 我这的服务器不允许使用 `rm` 命令，指定使用 `/bin/rm'`
   }
 }
}
```

### 配置详细说明

- host：SSH连接地址

- port: SSH连接端口

- username：登录SSH用户名

- password: 登录SSH密码

- distPath: 要上传的文件

- uploadDirName: 压缩、上传、及上传后的文件名，默认与 distPath 一致

- publishPath: 服务器放置项目的路径

- isRemoveRemoteZip: 发布成功后是否删除上传的压缩文件，默认 `true`

- isRemoveLocalZip: 发布成功后是否删除本地的压缩文件，默认 `true`

- afterDoneExec: 最后要在服务器执行 shell 命令，有则执行
   
- onlyExec: 当存在 `onlyExec` 时，连接 ssh 后只执行这个命令，那么将不执行其它任务操作

- insteadCommand: 指令替换，目前只支持替换 `rm`

### 执行

以上面的配置例子为例，在项目根目录下执行命令：`deploy-ssh dev`

### 集成npm

希望在执行项目打包命令后，直接执行 `deploy-ssh` 命令

```js
"build": "vue-cli-service build && deploy-ssh dev"
```
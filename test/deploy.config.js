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
   onlyExec: '', // 当存在 onlyExec 时，连接ssh后只执行这个命令，不行其它任务操作
   insteadCommand:{ // 指指令替换
     'rm': '/bin/rm', // 我这的服务器不允许使用 `rm` 命令，指定使用 `/bin/rm'`
   }
 }
}
const { NodeSSH } = require('node-ssh')
const ssh = new NodeSSH();
const log = console.log
// 上传文件
let config = {

}
function connectSSH(){
	console.log('aaa')
	log('开始ssh连接...');
	return ssh.connect({
		host: config.host,
		port: config.port,
		username: config.username,
		password: config.password,
	}).then(function () {
		log('ssh连接成功...');
	}).catch(err=>{
		err('ssh连接失败:',err);
		throw err
	});
}
function closeSSH(){
	if(ssh){
		console.log('ssh.dispose()', ssh.dispose())
	}
}

async function doJob(){
	try {
		await connectSSH() // 连接 ssh
		console.log('11')
	}catch (err){
		err(err)
	}finally {
		setTimeout(() => {
			closeSSH()
			console.log('已判断')
			process.exit(0);
		}, 1000)
	}
}
doJob()
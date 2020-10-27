const NodeMediaServer = require('node-media-server');
const appConfig = require('./module/config') //获取配置
const md5 =require('md5')
const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  },
  auth: { //鉴权验证
    play: true,//
    publish: true, //
    secret: appConfig.secret //
  }
};

var nms = new NodeMediaServer(config)
nms.run();


//演示权限验证

//(1) 流名称
var streamName = "wuxinkai";
//(2) 时间戳 过期时间
var expireDate = parseInt((Date.now() + 1000000) / 1000); //过期日期大于当前日期
//（3）md5加密  需要下载 cnpm i md5 --save
var HashValue = md5(`/live/${streamName}-${expireDate}-${appConfig.secret}`);

// (4)拼接路径
var sign = `${expireDate}-${HashValue}`;

var rtmpUrl = `rtmp://192.168.1.5/live/${streamName}?sign=${sign}`;
console.log(rtmpUrl) //在控制台打印地址
//完整路径 rtmp://192.168.0.10/live/stream?sign=1503458721-80c1d1ad2e0c2ab63eebb50eed64201a
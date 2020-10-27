### 直播主要通过两步实现： 1、推流 2、拉流

推流：指的是把采集阶段封包好的内容传输到服务器的过程。推流的设备可以是计算机也可 以是摄像机、或者手机。  
 拉流：指服务器已有直播内容，用指定地址进行拉取播放的过程

### 流媒体服务器的几种协议

推流协议：RTMP  
 拉流协议:RTMP、Http-Flv、hls、dash  
 （1）hls、dash 延迟比较严重 需要 flash 基本不用
（2）Http-Flv 是给予 RTMP 进行封装的，B 站提供 Flv.js 可以直接拉流 不需要 flash
（3）RTMP 常用但需要 flash

### 推流工具：OBS（可以用于 win、linux、Mac）、RTMP 推流摄像机

### 拉流工具：VlC（mac、linux、win 、手机

# node.js 流媒体服务器

#### 生成 json

```
npm  init --yes
```

### 下载

(1)创建 js server.js  
(2)npm install node-media-server --save  
(3) 拷贝代码

```
const NodeMediaServer = require('node-media-server');

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
  }
};

var nms = new NodeMediaServer(config)
nms.run();
```

(4)node 运行文件

```
  node server.js
```

# OBS 推流

路径 URL:rtmp://localhost/live/  
秘钥:STREAM_NAME

### obs窗口捕获




# 拉流 (格式不同)

```
RTMP
rtmp://localhost/live/STREAM_NAME

http-flv
http://localhost:8000/live/STREAM_NAME.flv


websocket-flv
ws://localhost:8000/live/STREAM_NAME.flv

HLS
http://localhost:8000/live/STREAM_NAME/index.m3u8

DASH
http://localhost:8000/live/STREAM_NAME/index.mpd

```

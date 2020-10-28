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
    mediaroot: './media', //保存目录
    allow_origin: '*'
  },
  trans: {
    ffmpeg: 'D:\\1XiangMuZiLiao\\live-video\\保存视频(转MP4)\\ffmpeg-latest-win64\\bin\\ffmpeg.exe',//转换软件  Linux 配置/usr/local/bin/ffmpeg
    tasks: [
      {
        app: 'live', // 推流名字要和我们设置得一致   根据流名称找到视频
        mp4: true,
        mp4Flags: '[movflags=frag_keyframe+empty_moov]',
      }
    ]
  }
};

var nms = new NodeMediaServer(config)
nms.run();
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

};

var nms = new NodeMediaServer(config)
nms.run();
//链接了流
nms.on('preConnect', (id, args) => {
  console.log('[链接流1]', `id=${id} args=${JSON.stringify(args)}`);
  // let session = nms.getSession(id);
  // session.reject();
});

//链接了流
nms.on('postConnect', (id, args) => {
  console.log('[链接流2]', `id=${id} args=${JSON.stringify(args)}`);
});

// 断开了流
nms.on('doneConnect', (id, args) => {
  console.log('[断开了流]', `id=${id} args=${JSON.stringify(args)}`);
});

//开始推流 流链接
nms.on('prePublish', (id, StreamPath, args) => {
  console.log('[预发布 开始推流]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
  // let session = nms.getSession(id);
  // session.reject();
});
//流链接
nms.on('postPublish', (id, StreamPath, args) => {
  console.log('[发布后 链接成功]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
});
//流未链接
nms.on('donePublish', (id, StreamPath, args) => {
  console.log('[断开前执行得方法]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
});

nms.on('prePlay', (id, StreamPath, args) => {
  console.log('[NodeEvent on prePlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
  // let session = nms.getSession(id);
  // session.reject();
});

//index.html链接成功
nms.on('postPlay', (id, StreamPath, args) => {
  console.log('[index.html链接成功]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
});


nms.on('donePlay', (id, StreamPath, args) => {
  console.log('[NodeEvent on donePlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
});
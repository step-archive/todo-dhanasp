const DefaultHandler = require('./defaultHandler.js');
const toString = (data)=>{
  return JSON.stringify(data,null,2);
}

class LoggerHandler extends DefaultHandler{
  constructor(fs,filePath){
    super();
    this.fs=fs;
    this.filePath=filePath;
  }
  execute(req,res,next){
    let logs = [`-------------------------`,`method=>${req.method} url=>${req.url}`,
    `headers=>${toString(req.headers)}`,`cookie=>${toString(req.cookies)}`,
    `body=>${toString(req.body)}`].join('\n');
    this.fs.appendFile(this.filePath,logs,next);
  }
}

module.exports = LoggerHandler;
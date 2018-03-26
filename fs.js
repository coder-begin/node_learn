const fs =require('fs');

//追加文件
// fs.appendFile('./pass.txt','你大爷的',function(err){
//     if(err){
//         console.log('写入失败:'+err);
//     }
//     fs.close()
// })

//拷贝文件
// fs.copyFile('./pass.txt','pass01.txt',function(err){
//     if(err) throw err;
//     console.log('拷贝成功')
// })

// fs.readFile('http://pic.58pic.com/58pic/13/68/03/86S58PIC26b_1024.jpg',function(err,data){
//         if(err) throw err;

//         fs.appendFile('1.jpg',data,(err)=>{
//             if(err) throw err;
//             console.log('下载成功')
//         })


// })
// let b1 = new Buffer(100);//创建一个初始化为0的buffer对象
// // console.log(b1)
// let b2 = new Buffer('去你大爷的');
// let b3 =new Buffer([1,2,'s','是']);
// console.log(b3.toString())


//1.buffer.from()
let b1=Buffer.from('你大爷的','utf8');
let b2 = Buffer.from([1,2,3,4,2555,6]);
let b3=Buffer.alloc(100)//新建一个buffer(大小,初始化的值,编码)
let b4=Buffer.allocUnsafe(100)//创建大小为100的缓冲空间，但是没有初始化，有安全问题(速度比上面的快)
//(对于小于buffer.poolSize的allocUnsafe()创建的空间会优先使用缓存池,这样性能就会提高alloc是永远不会使用缓存池的)  
// Buffer.compare(bf1,bf2)//标胶两个buffer的大小第一个大于第二个返回1，反之返回-1,相同返回0
//Buffer.concat([bf1,bf2...],长度)//合并多个buffer第二个参数表示合并完长度,没有就表示所有长度值和
//Buffer.isBuffer()//不解释
//Buffer.isEncoding(字符编码)//返回是否支持这个字符编码
//buf.entries()返回迭代器格式是[key,value]
//buf.includes(值)//搜索buffer中是否有这个值
    console.log(b2.includes(5))





1 创建目录结构

2 添加 .gitignore 文件
    git版本控制忽略文件

3 配置webpack
    1 注意点： output.path = path.resolve(__dirname,"dist");   //注意path的语法
    2 path:path.resolve(__dir, "./dist")                      //公共输出路径
    3 CommonsChunkPlugin filename =  '/static/vendor-[hash].js';   提取到static/目录下



4


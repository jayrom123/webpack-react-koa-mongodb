/**
 * Created by Roger on 2017/10/17.
 */
let koa = require("koa");
let app = new koa();
let route = require("./router/index.js");

app.use(route.routes()).use(route.allowedMethods());

app.listen(3000,()=>{
  console.log('this server is starting at port 3000')
});


/**
 * Created by Roger on 2017/10/17.
 */

let Router = require("koa-router");
let home = require('./home.js');

let route = new Router();

route.get('/',async (ctx,next)=>{
  ctx.body = "idnex_page";
});
route.use("/home",home.routes(),home.allowedMethods());

module.exports = route;


/**
 * Created by Roger on 2017/10/17.
 */

let Router = require("koa-router");
route = new Router();

route.get('/', async function (ctx, next) {
  ctx.body = "home_route"
});

route.get('/user', async (ctx, next) => {
  ctx.body = {name: "roger"}
});

module.exports = route;
 
 
 
 

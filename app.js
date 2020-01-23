const Koa = require('koa');

const app = new Koa();

app.use(ctx => {
  ctx.body = 'hello koa22';
});

app.listen(8888, () => {
  console.log("the server is started!");
})


const Koa = require('koa');
const cors = require('@koa/cors');
const router = require('./routes');

const app = new Koa();
const PORT = process.env.PORT || 3010;

app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());

/* app.listen(PORT, () => {
    console.log(`Server is running in port : ${PORT}`);
}); */

module.exports = app;
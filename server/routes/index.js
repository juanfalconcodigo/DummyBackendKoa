const Router = require('koa-router');
const router = new Router({ prefix: '/apitest' });
const { getOwnerConditionsFacade, getOwnerOrderConditionFacade } = require('./facade');

router.get('/', getOwnerConditionsFacade);
router.get('/order/:id', getOwnerOrderConditionFacade);

module.exports = router;
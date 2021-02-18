const Router = require('koa-router');
const router = new Router({ prefix: '/apitest' });
const { getOwnerConditionsFacade, getOwnerOrderConditionFacade, dummyApi } = require('./facade');

router.get('/', getOwnerConditionsFacade);
router.get('/order/:id', getOwnerOrderConditionFacade);
router.get('/dummy', dummyApi);

module.exports = router;
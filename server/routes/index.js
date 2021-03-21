const Router = require('koa-router');
const router = new Router({ prefix: '/apitest' });
const { getOwnerConditionsFacade, getOwnerOrderConditionFacade, dummyApi, getOwnerUserOrderConditionFacade, getTwoservices } = require('./facade');

//este apunta a todas los notificaciones
router.get('/order', getOwnerConditionsFacade);
//este apunta a una order es especifico por id
router.get('/order/id/:id', getOwnerOrderConditionFacade);
//api fake para ver uso de promise
router.get('/dummy', dummyApi);
//este apunta a las orders por usuario
router.get('/order/rule', getOwnerUserOrderConditionFacade);
//validate is up service
router.get('/twoservice', getTwoservices);

module.exports = router;
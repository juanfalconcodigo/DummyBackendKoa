const { createOwnerConditionService } = require('../controller/index');
const rp = require('request-promise');

let orders = [{
        rule_id: "1",
        rule_name: "rule one",
        rule_description: "rule description",
        /* last_update:, */
        notification_type: 'orders',
        enabled: true,
        order_status: "level_1",
        email_address: 'test@gmail.com'
    },
    {
        rule_id: "2",
        rule_name: "rule two",
        rule_description: "rule description two",
        /* last_update:,*/
        notification_type: 'orders',
        enabled: true,
        order_status: "level_3",
        email_address: 'test2@gmail.com'
    },
    {
        rule_id: "3",
        rule_name: "rule three",
        rule_description: "rule description 3",
        /* last_update:,*/
        notification_type: 'orders',
        enabled: false,
        order_status: "level_1",
        email_address: 'test3@gmail.com'
    },
];

const order = {
    rule_id: "1",
    rule_name: "rule one",
    rule_description: "rule description",
    /* last_update:, */
    notification_type: 'orders',
    enabled: true,
    order_status: "level_1",
    email_address: 'test@gmail.com'
}

exports.getOwnerConditionsFacade = async ctx => {
    ctx.body = {
        success: true,
        data: orders
    }
}

exports.getOwnerOrderConditionFacade = async(ctx) => {
    const path = ctx.originalUrl.split('/');
    console.log(path[path.length - 2]);
    const { id } = ctx.params;
    const result = orders.find((e) => e.rule_id == id);
    if (result) {
        const { rule_name, rule_description, order_status, email_address, notification_type } = result;
        ctx.body = {
            success: true,
            rule_name,
            rule_description,
            order_status,
            email_address,
            notification_type
        }
    } else {
        ctx.body = {
            success: false,
            message: 'User not found',
            message_detail: 'Error user nor found'
        }
    }

}


exports.dummyApi = async(ctx) => {
    const data = await rp({
        uri: 'https://randomuser.me/api?results=5',
        method: 'GET',
        json: true
    });
    ctx.status = 202;
    ctx.body = {
        ok: true,
        data: data.results
    }
}


exports.getOwnerUserOrderConditionFacade = async(ctx) => {
    console.log(ctx.get('login_id'));
    ctx.status = 202;
    ctx.body = {
        success: true,
        rules: [
            {...order }
        ]
    };
}


exports.getTwoservices = async(ctx) => {
    const responseOne = await rp({
        uri: 'https://randomuser.me/api?results=2',
        method: 'GET',
        json: true
    })

    try {
        const responseTwo = await rp({
            uri: 'https://fakefakefake.com',
            method: 'GET',
            json: true
        }) || null;

        ctx.body = {
            dataOne: responseOne.results,
            dataTwo: responseTwo,
            available: true
        }

    } catch (error) {
        console.log(error.message);
        ctx.body = {
            available: false
        }

    }

}

exports.postTestOne = async(ctx) => {
    const { name, email } = ctx.request.body;
    if (name && email) {
        ctx.status = 201;
        ctx.body = {
            status: 201,
            data: name + ' ' + email
        }
    } else {
        ctx.status = 400;
        ctx.body = {
            status: 400,
            data: null
        }
    }


}
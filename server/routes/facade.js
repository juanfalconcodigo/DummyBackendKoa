const { createOwnerConditionService } = require('../controller/index');

let orders = [{
        rule_id: "1",
        rule_name: "rule one",
        rule_description: "rule description",
        /* last_update:, */
        notification_type: 'orders',
        enabled: true,
        order_status: [1, 2, 3],
        email_address: 'test@gmail.com'
    },
    {
        rule_id: "2",
        rule_name: "rule two",
        rule_description: "rule description two",
        /* last_update:,*/
        notification_type: 'orders',
        enabled: true,
        order_status: [3],
        email_address: 'test2@gmail.com'
    },
    {
        rule_id: "3",
        rule_name: "rule three",
        rule_description: "rule description 3",
        /* last_update:,*/
        notification_type: 'orders',
        enabled: false,
        order_status: [2],
        email_address: 'test3@gmail.com'
    },
    {
        rule_id: "4",
        rule_name: "rule four",
        rule_description: "rule description four",
        /* last_update:, */
        notification_type: 'orders',
        enabled: true,
        order_status: [1],
        email_address: 'test4@gmail.com'
    }
]

exports.getOwnerConditionsFacade = async ctx => {
    ctx.body = orders
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
const {Telegraf, Markup} = require('telegraf');
// const getLumiaMenu = require("./keyboards");
// const covidApi = require('covid19-api');
// const COUNTRIES_LIST = require('./const')
const bot = new Telegraf('2027589323:AAHCcr3XFvWwHwKXVWCsRvYZv2K7ahyFA4E')

//  function yesNoKeyboard() {
//     return Markup.inlineKeyboard([
//         Markup.callbackButton('Да', 'yes'),
//         Markup.callbackButton('Нет', 'no')
//     ], {columns: 2}).extra()
// }

function qwe () {
    return Markup.keyboard([
        ['Удалить товар', 'Корзина'],
        // ['Смотивируй меня']
    ]).resize()
}

let db = [];
let history = [];

function order() {
    // let worker = ['Петров', 'Иванов', 'Васильев', 'Яковлева', 'Степанова'];
    let str = ' ';
    let newarr = [];
    for (let i = 0; i< db.length+1; i++  ) {
        if (db[i]!==undefined) {
            newarr.push(str +=i+1 +' - '+db[i] + '\n');
            console.log(newarr)
        } else {
            newarr.push("Корзина пуста")

        }
    }
    // console.log(newarr.pop())
    return newarr.pop()
}

// function history() {
//     // let worker = ['Петров', 'Иванов', 'Васильев', 'Яковлева', 'Степанова'];
//     let str = ' ';
//     let newarr = [];
//
//     for (let i = 0; i< history.length+1; i++  ) {
//         if (history[i]!==undefined) {
//             newarr.push(str +=i+1 +' - '+history[i] + '\n');
//             console.log(newarr)
//         } else {
//             newarr.push("Корзина пуста")
//
//         }
//     }
//     // console.log(newarr.pop())
//     return newarr.pop()
// }


bot.hears('Корзина', ctx => {
    ctx.replyWithPhoto(
        'https://img2.goodfon.ru/wallpaper/nbig/7/ec/justdoit-dzhastduit-motivaciya.jpg',
        {
            caption: `${order()}`,
            reply_markup: {
                inline_keyboard: [
                    [{text: "Оформить заказ", callback_data: "checkout"}]
                    // [{text:"кнопка 3", callback_data: "LL"}]
                ]

            }
        }
    )
})

bot.start(ctx => ctx.reply(`
   Привет ${ctx.from.first_name}! \nЭто официальный магазин товаров HiFive! \nТут вы можете купить и оформить доставку \nСписок команд: \n/shop - Ознакомиться с продуктами hi5, оплатить и оформить доставку в пункт выдачи \n/history - история покупок \n/bonus - партнерская программа \n/social - наши соц.сети \n/help - если что-то пошло не так...`,
    qwe()
))
// bot.pinChatMessage('@investmentsAndSignalsBot', 11)
bot.command('shop', (ctx) => {
    ctx.telegram.sendMessage(ctx.chat.id, 'Выберите продукт:',
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: "Lumia-Zen", callback_data: "Lumia-Zen"}, {
                        text: "Max",
                        callback_data: "Max"
                    }, {text: '2 in 1', callback_data: "2 in 1"}],
                    // [{text:"кнопка 3", callback_data: "LL"}]
                ]

            }
        });
});



bot.command('social', ctx => ctx.reply(`
   Наши соцсети: \nvk: https://vk.com/hi5russia\ntiktok: https://www.tiktok.com/@hi5russia?lang=en\nfacebook: www.FB.com/hi5russia\nсайт: www.hi5russia.com\nwww.hi5russia.ru\nhttps://www.instagram.com/hi5russia/`)
);

    // bot.action("Lumia-Zen", ctx => {
    //     ctx.replyWithPhoto(
    //         'https://drive.google.com/file/d/1Nr9f5cnqs3KNsyHbwOt0DRyY7-WnoenT/view?usp=sharing\n',
    //         {
    //             caption: 'Lite \n\nОписание: \n10 вкусов \n1500 затяжек \nОбъем жидкости 6 мл \nАккумулятор 900 мАч \nДизайн с подсветкой \n\nСайт с более подробной информации о товаре: https:/hi5russia/lumia-zen',
    //
    //
    //             reply_markup: {
    //                 // caption: "qwe",
    //                 inline_keyboard: [
    //                     [
    //                         {text: "Виноград", callback_data: "lumia-grape"},
    //                         {text: "Банан", callback_data: "lumia-banana"}
    //                     ],
    //                     [
    //                         {text: 'Манго', callback_data: "lumia-mango"},
    //                         {text: "Охлаждающая мята", callback_data: "lumia-mint"}
    //                     ],
    //                     [
    //                         {text: "Ледяная дыня", callback_data: "lumia-melon"},
    //                         {text: "Мамба", callback_data: "lumia-mamba"}
    //                     ],
    //                     [
    //                         {text: "Клубника-арбуз", callback_data: "lumia-strawberry"},
    //                         {text: "Ледяной банан", callback_data: "lumia-icebanana"}
    //                     ],
    //                     [
    //                         {text: "Ягодный микс", callback_data: "lumia-mix"},
    //                         {text: "Арбуз", callback_data: "lumia-watermelon"},
    //                     ]
    //                     // [{text:"кнопка 3", callback_data: "LL"}]
    //                 ]
    //             }
    //
    //         },
    //         // yesNoKeyboard()
    //         // "qwe",
    //         // getLumiaMenu()
    //     );
    // });


bot.action("Lumia-Zen", ctx => {
    ctx.replyWithPhoto(
        'https://drive.google.com/file/d/1UdCV-znEJnh0QBTOhCeLn2HeyBgrCVXj/view?usp=sharing',
        {
            caption: 'Lumia-Zen \n\nОписание: \n10 вкусов \n1500 затяжек \nОбъем жидкости 6 мл \nАккумулятор 900 мАч \nДизайн с подсветкой \n\nСайт с более подробной информации о товаре: https:/hi5russia/lumia-zen',


            reply_markup: {
                // caption: "qwe",
                inline_keyboard: [
                        [
                        {text: "Виноград", callback_data: "lumia-grape"},
                        {text: "Банан", callback_data: "lumia-banana"}
                        ],
                        [
                            {text: 'Манго', callback_data: "lumia-mango"},
                            {text: "Охлаждающая мята", callback_data: "lumia-mint"}
                        ],
                        [
                            {text: "Ледяная дыня", callback_data: "lumia-melon"},
                            {text: "Мамба", callback_data: "lumia-mamba"}
                        ],
                        [
                            {text: "Клубника-арбуз", callback_data: "lumia-strawberry"},
                            {text: "Ледяной банан", callback_data: "lumia-icebanana"}
                        ],
                        [
                            {text: "Ягодный микс", callback_data: "lumia-mix"},
                            {text: "Арбуз", callback_data: "lumia-watermelon"},
                        ]
                    // [{text:"кнопка 3", callback_data: "LL"}]
                    ]
            }

        },
        // yesNoKeyboard()
        // "qwe",
        // getLumiaMenu()
    );
});


bot.action('checkout', ctx => {
    ctx.reply('Напишите ваш номер телефона для подтверждения заказа (в формате 89998887766)', {
        // reply_markup: {
        //     // caption: "qwe",
        //     inline_keyboard: [
        //         [
        //             {text: "Ocтавить", callback_data: "lumia-grape"},
        //             {text: "Изменить", callback_data: "lumia-banana"}
        //         ],
        //         // [{text:"кнопка 3", callback_data: "LL"}]
        //     ]
        // }
    })
})



bot.on('text', (ctx) => {
    if(ctx.message.text.length == 11) {
        ctx.reply('Вам позвонят в ближайшее время');
        history = db;
        db = "";
    } else {
        console.log("Нихуя")
    }
});

bot.command('history', ctx => ctx.reply(``)
);
// bot.on('text', ctx => {
//     // ctx.session.taskText = ctx.message.text
//
//     ctx.reply(
//         `Проверьте корректность номера: \n`+
//         `${ctx.message.text}`,
//         // yesNoKeyboard()
//         {
//             reply_markup: {
//                 // caption: "qwe",
//                 inline_keyboard: [
//                     [
//                         {text: "Правильно", callback_data: "right-number"},
//                         {text: "Изменить", callback_data: "edit-number"}
//                     ],
//                     // [{text:"кнопка 3", callback_data: "LL"}]
//                 ]
//             }
//         }
//     )
// })

bot.action('right-number', ctx => {
    ctx.reply("Мы вам перезвоним для подтверждения заказа в ближайшее время")
})

bot.action('edit-number', ctx => {
    ctx.reply("Введите правильный номер")
})

bot.on('', (ctx) => {
    if(ctx.message.text == 'list') {

        // i want to run my inline menu here
    }
});

bot.action('lumia-grape', (ctx) => {
    // console.log(ctx)
    ctx.reply(`"Lumia-Zen со вкусом винограда" добавлена в корзину`)
    // console.log(JSON.stringify(ctx))
    db.push("Lumia-Zen со вкусом винограда")
    console.log(db)

})

bot.action('lumia-banana', (ctx) => {
    // console.log(ctx)
    ctx.reply(`"Lumia-Zen со вкусом банана" добавлена в корзину`)
    db.push("Lumia-Zen со вкусом банана")
})

bot.action('lumia-mango', (ctx) => {
    // console.log(ctx)
    ctx.reply(`"Lumia-Zen со вкусом манго" добавлена в корзину`)
    db.push("Lumia-Zen со вкусом манго")
})

bot.action('lumia-mint', (ctx) => {
    // console.log(ctx)
    ctx.reply(`"Lumia-Zen со вкусом мяты" добавлена в корзину`)
    db.push("Lumia-Zen со вкусом мяты")
})

bot.action('lumia-melon', (ctx) => {
    // console.log(ctx)
    ctx.reply(`"Lumia-Zen со вкусом дыни" добавлена в корзину`)
    db.push("Lumia-Zen со вкусом дыни")
})
bot.action('lumia-mamba', (ctx) => {
    // console.log(ctx)
    ctx.reply(`"Lumia-Zen со вкусом мамбы" добавлена в корзину`)
    db.push("Lumia-Zen со вкусом мамбы")
})
bot.action('lumia-strawberry', (ctx) => {
    // console.log(ctx)
    ctx.reply(`"Lumia-Zen со вкусом клубники-арбуза" добавлена в корзину`)
    db.push("Lumia-Zen со вкусом клубники-арбуза")
})
bot.action('lumia-icebanana', (ctx) => {
    // console.log(ctx)
    ctx.reply(`"Lumia-Zen со вкусом ледяного банана" добавлена в корзину`)
    db.push("Lumia-Zen со вкусом ледяного банана")
})
bot.action('lumia-mix', (ctx) => {
    // console.log(ctx)
    ctx.reply(`"Lumia-Zen со вкусом ягодного микса" добавлена в корзину`)
    db.push("Lumia-Zen со вкусом ягодного микса")
})
bot.action('lumia-watermelon', (ctx) => {
    // console.log(ctx)
    ctx.reply(`"Lumia-Zen со вкусом арбуза" добавлена в корзину`)
    db.push("Lumia-Zen со вкусом арбуза")
})




// bot.action("Max", (ctx) => {
//     ctx.reply('Max \nОписание \n5 вкусов \n3000 затяжек \nСменный испаритель \nОбъем жидкости 10 мл \nАккумулятор \nСайт: ');
// });

bot.action("Max", ctx => {
    ctx.replyWithPhoto(
        'https://drive.google.com/file/d/1VwDwEPp70qmmP2N_ItP-8zXMevb_O0pK/view?usp=sharing',
        {
            caption: 'Max \nОписание \n5 вкусов \n3000 затяжек \nСменный испаритель \nОбъем жидкости 10 мл \nАккумулятор \n\nСайт с более подробной информации о товаре: https:/hi5russia/lumia-zen',


            reply_markup: {
                // caption: "qwe",
                inline_keyboard: [
                    [
                        {text: "Виноград", callback_data: "max-grape"},
                        {text: "Розовый лимон", callback_data: "max-pinklemon"}
                    ],
                    [
                        {text: "Клубника-арбуз", callback_data: "max-strawberry"},
                        {text: "Охлаждающая мята", callback_data: "max-mint"}
                    ],
                    [
                        {text: "Ягодный микс", callback_data: "max-mix"},
                        {text: " ", callback_data: " "}
                    ],
                    // [{text:"кнопка 3", callback_data: "LL"}]
                ]
            }

        },
        // yesNoKeyboard()
        // "qwe",
        // getLumiaMenu()
    );
});

bot.action('max-grape', (ctx) => {
    // console.log(ctx)
    ctx.reply(`"Max со вкусом винограда" добавлена в корзину`)
    // console.log(JSON.stringify(ctx))
    db.push("Max со вкусом винограда")
    console.log(db)

})

bot.action('max-pinklemon', (ctx) => {
    ctx.reply(`"Max со вкусом розового лимона" добавлена в корзину`)
    db.push("Max со вкусом розового лимона")
    console.log(db)
})

bot.action('max-mint', (ctx) => {
    // console.log(ctx)
    ctx.reply(`"Max со вкусом мяты" добавлена в корзину`)
    db.push("Max со вкусом мяты")
})

bot.action('max-strawberry', (ctx) => {
    // console.log(ctx)
    ctx.reply(`"Max со вкусом клубники-арбуза" добавлена в корзину`)
    db.push("Max со вкусом клубники-арбуза")
})

bot.action('max-mix', (ctx) => {
    // console.log(ctx)
    ctx.reply(`"Max со вкусом ягодного микса" добавлена в корзину`)
    db.push("Max со вкусом ягодного микса")
})



bot.action("2 in 1", (ctx) => {
    ctx.reply('2 in 1 \n5x2 вкусовов \n1000x2 затяжек \n2 вкуса в одном устройстве \nОбъем жидкости 3x2 мл \nСайт: ');
});

// bot.help( ctx => ctx.reply(COUNTRIES_LIST)) // список всех стран на английском языке можно взять в документации covid19-api
// bot.on('text', async (ctx) => {
//     try {
//         const userText = ctx.message.text
//         const covidData = await covidApi.getReportsByCountries(userText)
//         const countryData = covidData[0][0]
//         const formatData = `
//            Страна: ${countryData.country},
//            Случаи: ${countryData.cases},
//            Смерти: ${countryData.deaths},
//            Выздоровело: ${countryData.recovered}`
//         ctx.reply(formatData)
//     } catch(e) {
//         ctx.reply('Такой страны не существует, для получения списка стран используй команду /help')
//     }
// })
bot.launch()
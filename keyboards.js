// import Markup from 'telegraf/markup.js'
const {Markup} = require("telegraf");

function getLumiaMenu() {
    return Markup.keyboard([
        ['Мои задачи', 'Добавить задачу'],
        ['Смотивируй меня']
    ]).resize().extra()
}

module.exports = getLumiaMenu
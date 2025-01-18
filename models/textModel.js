const db = require('../database/db');

module.exports = {
    getAllTexts: () => db.getAll(),
    getTextById: (id) => db.getById(id),
    addText: (text) => db.add(text),
};
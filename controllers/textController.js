const db = require('../database/db');

exports.getAllTexts = (req, res) => {
    db.all("SELECT * FROM texts", (err, rows) => {
        if (err) {
            return res.status(500).send("Error retrieving texts.");
        }
        res.render('index', { texts: rows });
    });
};

exports.getTextById = (req, res) => {
    const textId = req.params.id;
    db.get("SELECT * FROM texts WHERE id = ?", [textId], (err, row) => {
        if (err || !row) {
            return res.status(404).send("Text not found.");
        }
        res.render('text', { text: row });
    });
};

exports.addText = (req, res) => {
    const content = req.body.content;

    db.run("INSERT INTO texts (content) VALUES (?)", [content], function(err) {
        if (err) {
            return res.status(500).send("Error saving text.");
        }
        res.redirect('/');
    });
};
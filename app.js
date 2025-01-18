const express = require('express');
const bodyParser = require('body-parser');
const textController = require('./controllers/textController');

const app = express();
const PORT = 3000;

app.use('/style', express.static(__dirname + '/views/style'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', textController.getAllTexts);
app.get('/text/:id', textController.getTextById);
app.post('/add', textController.addText);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

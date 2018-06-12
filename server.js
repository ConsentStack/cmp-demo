const app = require('express')();

const PORT = 80;

app.use(express.static('dist'));
app.use(express.static('public'));

app.listen(PORT, () => console.log(`CMP-Demo: Live on PORT : ${PORT}`));
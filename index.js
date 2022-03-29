const express = require('express');
const app = express();
const port = Number.parseInt(process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('OK');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

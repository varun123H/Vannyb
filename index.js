const express = require('express');
 var port = process.env.PORT || 8080;
8080;
const log = console.log;
const app = express();
const path = require('path');


app.get('/' , (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(port, () => log('Server started on ',8080));
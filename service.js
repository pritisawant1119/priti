const express = require('express')
var serviceRouter=require("/index")
const app= express();

app.get('/', (request, response) => {
    response.send('welcome to my application')
})
app.post('/', (request, response) => {
    response.send('welcome to my application')
})


app.listen(4000, () => {
    console.log(`Server started on port 4000`);
});
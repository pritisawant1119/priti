const express = require('express')
serviceRouter=express();


serviceRouter.get('/', (request, response) => {
    response.send('welcome to my application')
})
serviceRouter.post('/', (request, response) => {
    response.send('welcome to my application')
})


module.exports=serviceRouter;
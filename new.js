const express = require('express')
newRouter=express();


newRouter.get('/', (request, response) => {
    response.send('welcome to my application')
})
newRouter.post('/', (request, response) => {
    response.send('welcome to my application')
})
newRouter.put('/', (request, response) => {
    response.send('welcome to my application')
})
newRouter.delete('/', (request, response) => {
    response.send('welcome to my application')
})



module.exports=newRouter;
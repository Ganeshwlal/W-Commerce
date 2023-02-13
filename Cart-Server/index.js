//import express
const express = require('express')


//import cors
const cors = require('cors')


//import dataService
const dataService = require('./services/dataServices')



//create an application using express 
const app = express();


//use json parser for server resposes
app.use(express.json())


//using cors speify the origin to the server
app.use(cors({
    origin: 'http://localhost:4200'
}))


//setup a port number
app.listen(3000, () => {
    console.log('listening on port: 3000');
})

//API call to get all products
app.get('/all-products', (req, res) => {


    dataService.getProducts().then(

        result => {
            res.status(result.statusCode).json(result)
        }
    )
})



//API CALL TO ADD TO WISHLIST

app.post('/addtowishlist', (req, res) => {
    // console.log(req.body);

    dataService.addtowishlist(req.body.id, req.body.title, req.body.price, req.body.image, req.body.description).then(

        result => {
            res.status(result.statusCode).json(result)
        }
    )
})
// dataService.addtowishlist()

//API call to get wishlist product
app.get('/getwishlist',(req, res) => {
    // console.log(req.body);

    dataService.getwishlist(req.params.id).then(

        result => {
            res.status(result.statusCode).json(result)
        }
    )
})



//API call to Delete wishlist product
app.delete('/deletewish/:id',(req, res) => {
    // console.log(req.body);

    dataService.deletewish(req.params.id).then(

        result => {
            res.status(result.statusCode).json(result)
        }
    )
})






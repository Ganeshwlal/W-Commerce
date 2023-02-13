//import db.js
const db = require('./db');


//get all products details from db
const getProducts = () => {
    return db.Product.find().then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    products: result
                }
            }
            else {
                return {
                    status: false,
                    statusCode: 402,
                    message: 'Product not found'
                }
            }
        }
    )
}

//addtowishlist details store to db

const addtowishlist = (id, title, price, image, description) => {

    return db.Wishlist.findOne({ id }).then(
        (result) => {
            if (result) {
                return {


                    status: false,
                    statusCode: 401,
                    message: 'Product already added'
                }
            }
            else {
                const newProduct = new db.Wishlist({
                    id, title, price, image, description
                })

                newProduct.save()
                return {
                    status: true,
                    statusCode: 200,
                    message: 'Product added successfully'

                }
            }
        }
    )


}

//get wishlist produt details from db
const getwishlist = () => {

    return db.Wishlist.find().then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    products: result

                }
            }
            else {

                return {
                    status: false,
                    statusCode: 402,
                    message: 'wish list is empty'

                }
            }
        }
    )
}

//delete the wishlist product from db

const deletewish = (id) => {
    return db.Wishlist.deleteOne({ id }).then(
        // (result)=>{
        //     if(result){
        //         return{
        //             status:true,
        //             statusCode:200,
        //             message:'Product removed successfully',

        //         }
        //     }
        //     else{
        //         return{
        //             status:false,
        //             statusCode:402,
        //             message:'Product not found'
        //         }



        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    products: result,
                    message:'Product Removed Successfully'

                }
            }
            else {

                return {
                    status: false,
                    statusCode: 402,
                    message: 'wish list is empty'

                }
            }
        }
    )
}




module.exports = {
    getProducts,
    addtowishlist,
    getwishlist,
    deletewish
}

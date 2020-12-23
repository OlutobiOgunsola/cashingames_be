const express = require('express')

const UserRouter = require('./user')
const Router = express.Router()

/** @kind Router
 *  @type Class
 *  @return Index Router
 */

class AppRouter {
    // console.log('Hi');
    constructor() {
        Router.use('/user', UserRouter)
        return Router
    }
}

module.exports = AppRouter

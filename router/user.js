'use strict'

const express = require('express')
const Router = express.Router()

const {
    getUserController,
    getLeaderboardController,
} = require('../controller/user')

class UserRouter {
    constructor() {
        Router.get('/leaderboard', getLeaderboardController)
        Router.get('/:u_id', getUserController)
        return Router
    }
}

new UserRouter()

module.exports = Router

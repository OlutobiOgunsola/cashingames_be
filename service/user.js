const userObject = require('../model/user')
const leaderboardObject = require('../model/leaderboard')

const getUserService = () => {
    return userObject
}

const getLeaderboardService = () => {
    return leaderboardObject
}

module.exports = { getUserService, getLeaderboardService }

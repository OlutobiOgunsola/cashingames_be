const { getUserService, getLeaderboardService } = require('../service/user')

const getUserController = (req, res, next) => {
    const user = getUserService()

    res.status(200).json({
        message: 'success',
        data: user,
    })
}

const getLeaderboardController = (req, res, next) => {
    const leaderboard = getLeaderboardService()

    res.status(200).json({
        message: 'success',
        data: leaderboard,
    })
}

module.exports = { getUserController, getLeaderboardController }

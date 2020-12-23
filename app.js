const express = require('express')
const cors = require('cors')

const AppRouter = require('./router')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())

app.use('/', new AppRouter())

app.get('*', (req, res, next) => {
    res.status(404).json({
        message: 'failure',
        err: 'no resource',
    })
})

// Error handler middleware
app.use((error, req, res, next) => {
    if (!error.status) {
        const errorObj = new Error(
            'Unknown error has been handled by general error handler',
            error
        )
        errorObj.status = 400
        res.status(errorObj.status).json({
            message: 'failure',
            errorObj,
        })
        next(error)
    }
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

// index.js
const userRouter = require("./user.js");
const authRouter = require("./auth.js");

function route(app) {
    // User routers
    app.use('/api/users', userRouter)
    // Auth routers
    app.use('/auth', authRouter)
}

module.exports = route;
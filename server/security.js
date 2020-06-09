const config = require("./config");

module.exports = {
    checkValidUser(req) {
        const userCookie = req.cookies.user || null;
        return config.VALIDS_USER.find(user => user.apiKey === userCookie);
    }
}
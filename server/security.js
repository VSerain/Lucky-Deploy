const config = require("./config");

module.exports = {
    checkValidUser(req) {
        const userCookie = req.cookies.user || null;
        return config.VALIDS_USER.find(user => user.apiKey === userCookie);
    },

    verifyPostData(req, res, next) {
        const payload = JSON.stringify(req.body)
        if (!payload) {
            return next('Request body empty')
        }
        // GitHub: X-Hub-Signature
        // Gogs:   X-Gogs-Signature
        const sigHeaderName = 'X-Hub-Signature'

        const sig = req.get(sigHeaderName) || ''
        const hmac = crypto.createHmac('sha1', config.GITHUB_SECRET)
        const digest = Buffer.from('sha1=' + hmac.update(payload).digest('hex'), 'utf8')
        const checksum = Buffer.from(sig, 'utf8')
        if (checksum.length !== digest.length || !crypto.timingSafeEqual(digest, checksum)) {
            return next(`Request body digest (${digest}) did not match ${sigHeaderName} (${checksum})`)
        }
        return next()
    }
}
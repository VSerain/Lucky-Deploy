const fs = require("fs");
const path = require("path");
const { execSync } = require('child_process');

const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')

const config = require("./config");
const security = require("./security");

const app = express();
const defaultPathRepo = path.join(__dirname, config.CLONE_FOLDER);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/branch/:BRANCH_NAME/*', (req, res) => {
    if (!security.checkValidUser(req)) {
        return res.sendStatus(403);
    }

    if (!fs.existsSync(path.join(defaultPathRepo, req.params.BRANCH_NAME))){
        return res.sendStatus(404);
    }

    res.sendFile(path.join(defaultPathRepo, req.params.BRANCH_NAME, config.PUBLIC_FOLDER_IN_REPO, req.params['0']));
})

app.get('/branch/:BRANCH_NAME', (req, res) => {
    if (!security.checkValidUser(req)) {
        return res.sendStatus(403);
    }

    if (!fs.existsSync(path.join(defaultPathRepo, req.params.BRANCH_NAME))){
        return res.sendStatus(404);
    }

    res.redirect(`/${req.params.BRANCH_NAME}/${config.ENTRY_POINT_IN_REPO}`);
});

app.get("/list", (req, res) => {
    res.sendFile(path.join(__dirname, "db.json"));
});

app.get("/user-connected", (req, res) => {
    if (!security.checkValidUser(req)) {
        res.sendStatus(403)
        return;
    }
    res.sendStatus(200);
});

app.post("/user-connect", (req, res) => {
    const body = req.body;

    if (!body.username || !body.password) {
        return res.sendStatus(403);
    }
    const user = config.VALIDS_USER.find(user => user.name === body.username && user.password === body.password);
    if(!user) {
        return res.sendStatus(403);
    }
    res.send({ apikey: user.apiKey});
});

app.post("/githook", security.verifyPostData, (req, res) => {
    const body = req.body;
    const branch = body.ref.replace("refs/heads/", "");

    const dirPath = path.join(defaultPathRepo , branch)
    res.send("DONE");
    const db = JSON.parse(fs.readFileSync(path.join(__dirname, "db.json")));
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
        execSync("git clone " + config.GIT_REPO + " " + dirPath);
        execSync(`cd ${dirPath} && git checkout ${branch}`);
        if (config.AFTER_CLONE_CMD) {
            execSync(`cd ${dirPath} && ${config.AFTER_CLONE_CMD}`);
        }

        db.push({
            title: branch,
            lastUpdate: new Date(),
            pusherAvatar: body.sender.avatar_url
        });
    }

    const item = db.find(item => item.title === branch);

    if (item) {
        item.lastUpdate = new Date();
        item.pusherAvatar = body.sender.avatar_url;
    }
    console.log(db);
    fs.writeFileSync(path.join(__dirname, "db.json"), JSON.stringify(db));

    execSync(`cd ${dirPath} && git pull && ${config.AFTER_PULL_CMD}`);
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, "../", req.params['0'] || "index.html"));
});

app.listen(config.SERVER_PORT, function () {
    console.log(`Lucky Deploy listen as ${config.SERVER_PORT}`);
});
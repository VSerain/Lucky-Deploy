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

app.get('/:BRANCH_NAME/*', function (req, res) {
    if (!security.checkValidUser(req)) {
        return res.sendStatus(403);
    }

    if (!fs.existsSync(path.join(defaultPathRepo, req.params.BRANCH_NAME))){
        return res.sendStatus(404);
    }

    res.sendFile(path.join(defaultPathRepo, req.params.BRANCH_NAME, config.PUBLIC_FOLDER_IN_REPO, req.params['0']));
})

app.get('/:BRANCH_NAME', function (req, res) {
    if (!security.checkValidUser(req)) {
        return res.sendStatus(403);
    }

    if (!fs.existsSync(path.join(defaultPathRepo, req.params.BRANCH_NAME))){
        return res.sendStatus(404);
    }

    res.redirect(`/${req.params.BRANCH_NAME}/${config.ENTRY_POINT_IN_REPO}`);
});

app.post("/githook", (req, res) => {
    console.log(req);
    const body = req.body;
    const branch = body.ref.replace("refs/heads/", "");

    const dirPath = path.join(defaultPathRepo , branch)
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
        execSync("git clone " + config.GIT_REPO + " " + dirPath);
        execSync(`cd ${dirPath} && git checkout ${branch}`);
        if (config.AFTER_CLONE_CMD) {
            execSync(`cd ${dirPath} && ${config.AFTER_CLONE_CMD}`);
        }
    }
    execSync(`cd ${dirPath} && git pull && ${config.AFTER_PULL_CMD}`);
});

app.get('/', function (req, res) {
    if (security.checkValidUser(req)) {
        res.send('Hello User!');
        return;
    }
    res.send('Hello world!')
});

app.listen(config.SERVER_PORT, function () {
    console.log(`Lucky Deploy listen as ${config.SERVER_PORT}`);
});
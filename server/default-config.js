module.exports = {
    GIT_REPO: "git@github.com:VSerain/Lucky-Deploy.git",
    AFTER_PULL_CMD: "npm i && webpack",
    AFTER_CLONE_CMD: false,
    CLONE_FOLDER: "repo",
    GITHUB_SECRET: "SECRET",
    SERVER_PORT: 9900,
    PUBLIC_FOLDER_IN_REPO: "public",
    ENTRY_POINT_IN_REPO: "index.html",
    VALIDS_USER: [
        { 
            name: "Victor",
            password: "sha256 of the password",
            apiKey: "sha256 of name+hashPassword"
        }
    ]
}
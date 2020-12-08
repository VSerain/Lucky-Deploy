# Lucky-Deploy

## How to install

Lucky deploy have two code part, front and back, but there are in same repository

Clone the repository :   
`git clone https://github.com/VSerain/Lucky-Deploy.git` or `git clone git@github.com:VSerain/Lucky-Deploy.git`

Install dependencies :   
`cd Lucky-Deploy && npm i && cd server && npm i`

Now you can copy the default-config:   
`cp default-config.js ./config.js`

Open the config file:   
`vi config.js`

```javascript
module.exports = {   
    GIT_REPO: "git@github.com:VSerain/Lucky-Deploy.git", // add the repo git link here
    AFTER_PULL_CMD: "npm i && webpack", // This command is executed after receive a new commit
    AFTER_CLONE_CMD: false, // This command is executed clone the repo
    CLONE_FOLDER: "repo", // Folder name where the repository will be cloned
    GITHUB_SECRET: "SECRET", // In GitHub repository parameters, when you add a new web hook, GitHub requires a secret key. There is necessary the same here
    SERVER_PORT: 9900, // lucky port listener
    PUBLIC_FOLDER_IN_REPO: "public", // The access of file, for example: image, file, ...
    ENTRY_POINT_IN_REPO: "index.html", // Your app entry point
    VALIDS_USER: [ // List of users authorized to connect to lucky 
        { 
            name: "Victor",
            password: "sha256 of the password",
            apiKey: "sha256 of name+hashPassword"
        }
    ]
}
```

For connect lucky to GitHub, go to setting on GitHub project, on section web hooks click on `add webhook` !   
And write :
```
    . Payload URL : "url-to-lucky-interface/githook#" 
    . Content type select JSON
    . Secret key: write the same with config file
    . SSL if `url-to-lucky-interface`is in https check enable, if not check disable
    . Event: check just `push event`
```

And save web hook !

Now on you server you can run the lucky server :   
`cd Lucky-Deploy/server && node index.js` or ``cd Lucky-Deploy/server && pm2 index.js --name lucky``

You just have to push new commit and go to :     
`url-to-lucky-interface`

Have a good day ! 
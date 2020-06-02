db.createUser(
        {
            user: "lojaDoceComDeAdmin",
            pwd: "dElvfhwqeHMHZTFtZBeFPxOQstQxT24Qss8G",
            roles: [
                {
                    role: "readWrite",
                    db: "lojaDoceComDe"
                }
            ]
        }
);

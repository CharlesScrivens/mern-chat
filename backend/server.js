const express = require("express");

const app = express();

app.get("/", (req,res) => {
    // root route http://localhost.com/11337
    res.send("hello world!");ç
});

app.listen(11337, () => console.log("Server Listening on port 11337"));
require("dotenv").config();
const port = process.env.PORT || 3000;
const express = require("express");
var cors = require('cors')
const asyncHandler = require("express-async-handler");
const app = express();
const { signMessage } = require("./utils/signUtils.js");

var corsOptions = {
  origin: '*'
}

app.use(express.json());
app.use(cors(corsOptions))

app.post("/checkSig", asyncHandler(async (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const obj = req.body;
    let result;
    try {
        result = await signMessage(obj);
    } catch (error) {
        console.log(error);
    } if (result) {
        return res.status(200).json(result);
    } else {
        return res.status(400).send();
    }
}));

var server = app.listen(3001, function () {
    var port = server.address().port;
    console.log("Example app listening at port %s", port);
});

module.exports = server;

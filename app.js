const express = require("express");
const cookieParser = require("cookie-parser")
const hasuraRoutes = require("./routes/hasura")

const app = express();
console.log("Starting server at port 4000")
app.listen(4000);

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());

const rout = express.Router();
app.use(rout)
router.get('/welcome', (req, res) => {
    console.log("Check #1");
    res.json({ message: "Welcome to this new page" });
})

app.use(hasuraRoutes);
// const { Router } = require("express")
const router = express.Router();
app.use(router)
router.get('/hello', (req, res) => {
    console.log("someone came to this page");
    res.json({hello: "world"})
})

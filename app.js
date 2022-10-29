const express = require("express");
const cookieParser = require("cookie-parser")
const hasuraRoutes = require("./routes/hasura")

const app = express();
console.log("Starting server at port 4000")
app.listen(4000);

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());

app.use(express.static('public'));
app.get('/', function (req, res) {
    res.sendFile('C:/Users/Vanshika Sharma/hasuraApp/public/index.html');
  })


// const { Router } = require("express")
const router = express.Router();
app.use(router)
router.get('/hello', (req, res) => {
    console.log("Check world");
    res.json({hello: "world"})
})

app.use(hasuraRoutes);

const express = require("express")
const cookieParser = require("cookie-parser")
const routes = require("./routes/")

const app = express();
console.log("Starting server at port 3000")
app.listen(3000);
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());

app.use(routes);

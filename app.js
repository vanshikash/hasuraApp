const express = require("express")
const cookieParser = require("cookie-parser")
const hasuraRoutes = require("./routes/hasura")

const app = express();
console.log("Starting server at port 3000")
app.listen(4000);
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());

app.use(hasuraRoutes);

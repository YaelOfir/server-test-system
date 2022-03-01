const express = require("express");
const app = express();
const questionRouter = require("./routes/questionRoutes");
const testRouter = require("./routes/testsRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/test", testRouter);
app.use("/question", questionRouter);
app.listen(port, () => console.log(`server is running at :${port}`));

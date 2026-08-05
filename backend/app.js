require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const helmet = require("helmet");
const errorMiddleware = require("./middleware/error-handler");
const routes = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 80;

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ service: "backend", status: true, timestamp: new Date() });
});

app.use(routes);

app.use(errorMiddleware);

app.listen(PORT, async () => {
  await db.connect();
  console.log("database connected");
  console.log(`server started on port ${PORT}`);
});

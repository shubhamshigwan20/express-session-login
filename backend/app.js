require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const helmet = require("helmet");
const errorMiddleware = require("./middleware/error-handler");
const authRoutes = require("./routes/auth-routes");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 80;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "temporary-secret",
    resave: false,
    saveUninitialized: false, //dont create session until something is stored
    cookie: {
      secure: false, //for http , true when we use https
      httpOnly: true, //prevent client side js reading cookie
      maxAge: 1000 * 60 * 60 * 24, // 1day
    },
  }),
);
app.use(authRoutes);

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ service: "backend", status: true, timestamp: new Date() });
});

app.use(errorMiddleware);

app.listen(PORT, async () => {
  await db.connect();
  console.log("database connected");
  console.log(`server started on port ${PORT}`);
});

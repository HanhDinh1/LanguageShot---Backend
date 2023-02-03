require("dotenv/config");
require("./db");
const express = require("express");

const { isAuthenticated } = require("./middleware/jwt.middleware");


const app = express();
require("./config")(app);

// app.use( cors({ origin: ["http://localhost:3000", process.env.ORIGIN] }) );


// 👇 Start handling routes here
const allRoutes = require("./routes");
app.use("/api", allRoutes);

const phraseRouter = require("./routes/phrase.routes");
app.use("/api", phraseRouter);

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

const userRouter = require("./routes/user.routes");
app.use("/user", userRouter);

const noteRouter = require("./routes/note.routes");
app.use("/note", noteRouter);

require("./error-handling")(app);

module.exports = app;

import express from "express";
import session from "express-session";
import passport from "passport";
import superheroRouter from "./routes/superhero.js";
import userRouter from "./routes/auth.js";
const app = express();
const PORT = process.env.PORT;
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.authenticate("session"));

app.use(express.json());
app.use("*", (req, res, next) => {
  console.log("path is", req.originalUrl);
  next();
});
app.use("/api/superhero", superheroRouter);
app.use("/api/user", userRouter);
app.get("/test", (req, res) => {
  res.send("test endpoint working");
});
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});

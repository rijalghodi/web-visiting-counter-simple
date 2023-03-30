const session = require("express-session");
const PORT = 3000;

const express = require("express");
const app = express();

app.use(express.json());
app.use(
  session({
    secret: process.env.SECRET_CODE ?? "secretcode",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  if (!req.session.viewCount) {
    req.session.viewCount = 1;
  } else {
    req.session.viewCount += 1;
  }
  res.send(`You visited this page ${req.session.viewCount} times`);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on process.env.PORT: ${PORT}`);
});

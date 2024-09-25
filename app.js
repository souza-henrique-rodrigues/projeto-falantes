const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("views", "views");
app.set("view engine", "ejs");

const homeRouter = require("./routes/home");
const adminRouter = require("./routes/admin");

app.use(homeRouter);
app.use(adminRouter);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const app = express();
dotenv.config();
const appRoutes = require("./routes/route");
const { openTime } = require("./Middlewares/openTimeMidd");

app.use(openTime);
app.use(appRoutes);

app.get("/views/styles.css", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "styles.css"));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

const express = require("express");
const app = express();
const routes = require("./routes");
const startTime = new Date();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.get("/", (req, res, next) => {
  const uptime = (new Date().getTime() - startTime.getTime()) / 1000;
  return res.status(200).json({ uptime });
});

app.listen(3001, () => {
  console.clear();
  console.log("Server is running on port 3001");
});

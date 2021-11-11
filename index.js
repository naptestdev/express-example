const express = require("express");
const app = express();
require("dotenv/config");

app.get("/", (req, res) => {
  res.send("Hello from express example");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

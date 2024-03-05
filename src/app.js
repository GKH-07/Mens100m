const express = require("express");
const MensRanking = require("../src/models/mens");
const router = require("../src/routers/men");
require("../src/db/conn");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json()); // data postman se json format me aa rha ha and usko express me use krne keliye
app.use("/mens", router);

app.listen(port, () => {
  console.log(`connection is live at port no ${port}`);
});

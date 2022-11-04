const express = require("express");
const webpageRouter = require("./routes/webpage.js");
const mustache = require("mustache-express");
const app = express();
const PORT = 3001;

app.engine("html", mustache());
app.set("view engine", "html");
app.set("views", __dirname + "/views/");

/**
 * @TODO create a real route :-)
 */
//Separate router for browser / api ?
app.use("/", webpageRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

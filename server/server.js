const express = require("express");
const webpageRouter = require("./routes/webpage.js");
const mustache = require("mustache-express");
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.engine("html", mustache());
app.set("view engine", "html");
app.set("views", __dirname + "/views/components");

/**
 * @TODO create a real route :-)
 */
//Separate router for browser / api ?
app.use("/", webpageRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");
require("./mongoose");

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Your server up on running " + port);
});
